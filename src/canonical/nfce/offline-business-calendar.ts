import { NFCeOperationalUsageError } from './errors.js';
import type { NFCeSPOfflineBusinessCalendarEvidence } from './contracts.js';

function localDate(timestamp: number, timeZone: string): string | undefined {
  try {
    const parts = new Intl.DateTimeFormat('en-CA', {
      day: '2-digit',
      month: '2-digit',
      timeZone,
      year: 'numeric',
    }).formatToParts(timestamp);
    const values = new Map(parts.map((part) => [part.type, part.value]));
    const year = values.get('year');
    const month = values.get('month');
    const day = values.get('day');
    return year === undefined || month === undefined || day === undefined
      ? undefined
      : `${year}-${month}-${day}`;
  } catch {
    return undefined;
  }
}

function nextCalendarDate(date: string): string {
  const nextDate = new Date(`${date}T00:00:00.000Z`);
  nextDate.setUTCDate(nextDate.getUTCDate() + 1);
  return nextDate.toISOString().slice(0, 10);
}

function deadlineParts(
  timestamp: number,
  timeZone: string,
): Map<string, string> | undefined {
  try {
    return new Map(
      new Intl.DateTimeFormat('en-CA', {
        day: '2-digit',
        hour: '2-digit',
        hourCycle: 'h23',
        minute: '2-digit',
        month: '2-digit',
        second: '2-digit',
        timeZone,
        year: 'numeric',
      })
        .formatToParts(timestamp)
        .map((part) => [part.type, part.value]),
    );
  } catch {
    return undefined;
  }
}

function invalidEvidence(): never {
  throw new NFCeOperationalUsageError(
    'NFCeSPOffline requires complete business calendar evidence with consecutive evaluated dates.',
  );
}

/**
 * Validates caller-provided evidence and confirms the deadline ends the first following business day.
 *
 * @param evidence - Business calendar source identifier, time zone, and evaluated dates.
 * @param issuedAt - Fiscal issuance timestamp used as the calendar start.
 * @param submissionDeadline - Caller-provided deadline instant.
 * @throws {NFCeOperationalUsageError} When evidence is incomplete or the deadline does not match.
 */
export function validateNFCeSPOfflineBusinessCalendar(
  evidence: unknown,
  issuedAt: string,
  submissionDeadline: string,
): asserts evidence is NFCeSPOfflineBusinessCalendarEvidence {
  if (typeof evidence !== 'object' || evidence === null) invalidEvidence();
  const evidenceFields = evidence as Record<string, unknown>;
  if (
    typeof evidenceFields.calendarId !== 'string' ||
    evidenceFields.calendarId.trim().length === 0 ||
    typeof evidenceFields.timeZone !== 'string' ||
    evidenceFields.timeZone.trim().length === 0 ||
    !Array.isArray(evidenceFields.evaluatedDates) ||
    evidenceFields.evaluatedDates.length === 0
  ) {
    invalidEvidence();
  }
  const calendarEvidence = evidence as NFCeSPOfflineBusinessCalendarEvidence;

  const issuanceTimestamp = Date.parse(issuedAt);
  const deadlineTimestamp = Date.parse(submissionDeadline);
  const issueDate = localDate(issuanceTimestamp, calendarEvidence.timeZone);
  if (
    !Number.isFinite(issuanceTimestamp) ||
    !Number.isFinite(deadlineTimestamp) ||
    issueDate === undefined
  ) {
    invalidEvidence();
  }

  let expectedDate = nextCalendarDate(issueDate);
  let firstFollowingBusinessDay: string | undefined;
  for (const evaluatedDate of calendarEvidence.evaluatedDates) {
    if (
      typeof evaluatedDate !== 'object' ||
      evaluatedDate === null ||
      typeof evaluatedDate.date !== 'string' ||
      !/^\d{4}-\d{2}-\d{2}$/u.test(evaluatedDate.date) ||
      !Number.isFinite(Date.parse(`${evaluatedDate.date}T00:00:00.000Z`)) ||
      new Date(`${evaluatedDate.date}T00:00:00.000Z`)
        .toISOString()
        .slice(0, 10) !== evaluatedDate.date ||
      typeof evaluatedDate.isBusinessDay !== 'boolean' ||
      evaluatedDate.date !== expectedDate ||
      firstFollowingBusinessDay !== undefined
    ) {
      invalidEvidence();
    }
    if (evaluatedDate.isBusinessDay) {
      firstFollowingBusinessDay = evaluatedDate.date;
    }
    expectedDate = nextCalendarDate(expectedDate);
  }

  if (firstFollowingBusinessDay === undefined) invalidEvidence();

  const parts = deadlineParts(deadlineTimestamp, calendarEvidence.timeZone);
  if (
    deadlineTimestamp % 1000 !== 0 ||
    parts?.get('year') !== firstFollowingBusinessDay.slice(0, 4) ||
    parts?.get('month') !== firstFollowingBusinessDay.slice(5, 7) ||
    parts?.get('day') !== firstFollowingBusinessDay.slice(8, 10) ||
    parts?.get('hour') !== '23' ||
    parts?.get('minute') !== '59' ||
    parts?.get('second') !== '59'
  ) {
    throw new NFCeOperationalUsageError(
      'submissionDeadline must be 23:59:59 on the first following business day in the evidence time zone.',
    );
  }
}