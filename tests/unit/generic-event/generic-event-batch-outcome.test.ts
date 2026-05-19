import { createGenericEventBoundaryTransportOutcome } from '../../../src/canonical/generic-event/family-boundary';
import { mapGenericEventBatchOutcome } from '../../../src/canonical/generic-event/map-generic-event-batch-outcome';
import { buildHeterogeneousGenericEventBatchFixture } from '../../fixtures/generic-event/heterogeneous-batch';
import { parseRetEnvEventoXml } from '../../../src/canonical/generic-event/parse-ret-env-evento';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

describe('generic-event batch outcome mapping', () => {
  it('classifies mixed remote item results as partial-success while preserving transport acceptance', () => {
    const request = buildHeterogeneousGenericEventBatchFixture();
    const parsedResponse = parseRetEnvEventoXml(
      readFileSync(
        resolve(
          process.cwd(),
          'tests/fixtures/generic-event/ret-env-evento-mixed.xml',
        ),
        'utf8',
      ),
    );

    const outcome = mapGenericEventBatchOutcome({
      batchId: request.batchId,
      items: request.items,
      parsedResponse,
      transportOutcome: {
        ...createGenericEventBoundaryTransportOutcome('mixed batch fixture'),
        classification: 'success',
        service: 'nfe-generic-event',
      },
    });

    expect(outcome.acceptedForTransport).toBe(true);
    expect(outcome.classification).toBe('partial-success');
    expect(outcome.itemOutcomes).toEqual([
      expect.objectContaining({
        applicationStatusCode: '135',
        classification: 'success',
        itemIndex: 0,
      }),
      expect.objectContaining({
        applicationStatusCode: '573',
        classification: 'rejected',
        itemIndex: 1,
      }),
    ]);
  });
});
