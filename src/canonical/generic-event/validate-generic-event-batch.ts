import {
	isSupportedGenericEventActor,
	isValidGenericEventAccessKey,
	type DeliveryConfirmationPayload,
	type DeliveryFailurePayload,
	type EconfPayload,
	type GenericEventBatchRequest,
	type GenericEventInputItem,
	type GenericEventValidationFailure,
	type InterestedActorPayload,
} from './contracts.js';
import { createGenericEventBoundaryValidationFailure } from './coverage-boundary.js';
import {
	getSupportedGenericEventFamilyCodes,
	isSupportedGenericEventFamily,
} from './family-boundary.js';

const MAX_GENERIC_EVENT_BATCH_SIZE = 20;

/** Validates the public generic-event batch request before transport is attempted. */
export function validateGenericEventBatchRequest(
	input: GenericEventBatchRequest,
): readonly GenericEventValidationFailure[] {
	const failures: GenericEventValidationFailure[] = [];

	if (input.environment !== 'homologation') {
		failures.push(
			createGenericEventBoundaryValidationFailure({
				fieldPath: 'environment',
				message:
					'Generic-event submission supports only the homologation environment.',
				reason: 'unsupported-environment',
			}),
		);
	}

	if (input.batchId.trim().length === 0) {
		failures.push(
			createGenericEventBoundaryValidationFailure({
				fieldPath: 'batchId',
				message: 'Generic-event submission requires a non-empty batchId.',
				reason: 'missing-batch-id',
			}),
		);
	}

	if (input.items.length === 0) {
		failures.push(
			createGenericEventBoundaryValidationFailure({
				fieldPath: 'items',
				message: 'Generic-event submission requires at least one item.',
				reason: 'empty-batch',
			}),
		);
	}

	if (input.items.length > MAX_GENERIC_EVENT_BATCH_SIZE) {
		failures.push(
			createGenericEventBoundaryValidationFailure({
				fieldPath: 'items',
				message: `Generic-event submission accepts at most ${MAX_GENERIC_EVENT_BATCH_SIZE} items per batch.`,
				reason: 'batch-limit-exceeded',
			}),
		);
	}

	if (input.signingContext.supportedAlgorithms.length === 0) {
		failures.push(
			createGenericEventBoundaryValidationFailure({
				fieldPath: 'signingContext',
				message: 'Generic-event submission requires a valid signing context.',
				reason: 'invalid-signing-context',
			}),
		);
	}

	input.items.forEach((item, itemIndex) => {
		const itemFailures = validateGenericEventItem(item, itemIndex);
		failures.push(...itemFailures);
	});

	return failures;
}

function validateGenericEventItem(
	item: GenericEventInputItem,
	itemIndex: number,
): GenericEventValidationFailure[] {
	const failures: GenericEventValidationFailure[] = [];
	const supportedCodes = getSupportedGenericEventFamilyCodes();

	if (!isSupportedGenericEventFamily(item.family)) {
		failures.push(
			createGenericEventBoundaryValidationFailure({
				fieldPath: `items[${itemIndex}].family`,
				itemIndex,
				message: `Generic-event family "${item.family}" is outside the supported MVP scope.`,
				reason: 'unsupported-family',
			}),
		);
		return failures;
	}

	if (item.eventCode !== supportedCodes[item.family]) {
		failures.push({
			fieldPath: `items[${itemIndex}].eventCode`,
			itemIndex,
			message: `Generic-event family "${item.family}" requires code "${supportedCodes[item.family]}".`,
			reason: 'event-code-mismatch',
		});
	}

	if (!isSupportedGenericEventActor(item.author)) {
		failures.push({
			fieldPath: `items[${itemIndex}].author`,
			itemIndex,
			message: 'Generic-event items require a supported CPF or CNPJ author.',
			reason: 'invalid-author',
		});
	}

	if (!isValidGenericEventAccessKey(item.accessKey)) {
		failures.push({
			fieldPath: `items[${itemIndex}].accessKey`,
			itemIndex,
			message: 'Generic-event items require a valid 44-digit access key.',
			reason: 'invalid-access-key',
		});
	}

	if (item.sequenceNumber < 1) {
		failures.push({
			fieldPath: `items[${itemIndex}].sequenceNumber`,
			itemIndex,
			message: 'Generic-event sequenceNumber must be greater than zero.',
			reason: 'invalid-sequence-number',
		});
	}

	if (item.occurredAt.trim().length === 0) {
		failures.push({
			fieldPath: `items[${itemIndex}].occurredAt`,
			itemIndex,
			message: 'Generic-event items require a non-empty occurredAt timestamp.',
			reason: 'missing-occurred-at',
		});
	}

	const payloadFailures = validateFamilyPayload(item, itemIndex);
	failures.push(...payloadFailures);

	return failures;
}

function validateFamilyPayload(
	item: GenericEventInputItem,
	itemIndex: number,
): GenericEventValidationFailure[] {
	switch (item.family) {
		case 'delivery-confirmation':
			return validateDeliveryConfirmationPayload(
				item.payload as DeliveryConfirmationPayload,
				itemIndex,
			);
		case 'interested-actor-transporter':
			return validateInterestedActorPayload(
				item.payload as InterestedActorPayload,
				itemIndex,
			);
		case 'delivery-failure':
			return validateDeliveryFailurePayload(
				item.payload as DeliveryFailurePayload,
				itemIndex,
			);
		case 'econf':
			return validateEconfPayload(item.payload as EconfPayload, itemIndex);
		default:
			return [];
	}
}

function validateDeliveryConfirmationPayload(
	payload: DeliveryConfirmationPayload,
	itemIndex: number,
): GenericEventValidationFailure[] {
	const failures: GenericEventValidationFailure[] = [];

	if (payload.deliveredAt.trim().length === 0) {
		failures.push(createPayloadFailure(itemIndex, 'payload.deliveredAt', 'missing-delivered-at'));
	}

	if (payload.deliveryHash.trim().length === 0) {
		failures.push(createPayloadFailure(itemIndex, 'payload.deliveryHash', 'missing-delivery-hash'));
	}

	if (payload.recipientDocument.trim().length === 0) {
		failures.push(createPayloadFailure(itemIndex, 'payload.recipientDocument', 'missing-recipient-document'));
	}

	if (payload.recipientName.trim().length === 0) {
		failures.push(createPayloadFailure(itemIndex, 'payload.recipientName', 'missing-recipient-name'));
	}

	return failures;
}

function validateInterestedActorPayload(
	payload: InterestedActorPayload,
	itemIndex: number,
): GenericEventValidationFailure[] {
	const failures: GenericEventValidationFailure[] = [];

	if (payload.authorizationType.trim().length === 0) {
		failures.push(createPayloadFailure(itemIndex, 'payload.authorizationType', 'missing-authorization-type'));
	}

	if (payload.authorizedDocument.trim().length === 0) {
		failures.push(createPayloadFailure(itemIndex, 'payload.authorizedDocument', 'missing-authorized-document'));
	}

	return failures;
}

function validateDeliveryFailurePayload(
	payload: DeliveryFailurePayload,
	itemIndex: number,
): GenericEventValidationFailure[] {
	const failures: GenericEventValidationFailure[] = [];

	if (payload.attemptedAt.trim().length === 0) {
		failures.push(createPayloadFailure(itemIndex, 'payload.attemptedAt', 'missing-attempted-at'));
	}

	if (payload.attemptNumber < 1) {
		failures.push(createPayloadFailure(itemIndex, 'payload.attemptNumber', 'invalid-attempt-number'));
	}

	if (payload.reasonType.trim().length === 0) {
		failures.push(createPayloadFailure(itemIndex, 'payload.reasonType', 'missing-reason-type'));
	}

	if (payload.reasonDescription.trim().length === 0) {
		failures.push(createPayloadFailure(itemIndex, 'payload.reasonDescription', 'missing-reason-description'));
	}

	return failures;
}

function validateEconfPayload(
	payload: EconfPayload,
	itemIndex: number,
): GenericEventValidationFailure[] {
	const failures: GenericEventValidationFailure[] = [];

	if (payload.paymentDetails.length === 0) {
		failures.push(createPayloadFailure(itemIndex, 'payload.paymentDetails', 'missing-payment-details'));
		return failures;
	}

	payload.paymentDetails.forEach((detail, detailIndex) => {
		if (detail.indicator.trim().length === 0) {
			failures.push(createPayloadFailure(itemIndex, `payload.paymentDetails[${detailIndex}].indicator`, 'missing-payment-indicator'));
		}

		if (detail.method.trim().length === 0) {
			failures.push(createPayloadFailure(itemIndex, `payload.paymentDetails[${detailIndex}].method`, 'missing-payment-method'));
		}

		if (detail.value.trim().length === 0) {
			failures.push(createPayloadFailure(itemIndex, `payload.paymentDetails[${detailIndex}].value`, 'missing-payment-value'));
		}
	});

	return failures;
}

function createPayloadFailure(
	itemIndex: number,
	fieldPath: string,
	reason: string,
): GenericEventValidationFailure {
	return {
		fieldPath: `items[${itemIndex}].${fieldPath}`,
		itemIndex,
		message: `Generic-event validation requires ${fieldPath}.`,
		reason,
	};
}