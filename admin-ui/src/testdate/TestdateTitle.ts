import { Testdate as TTestdate } from "../api/testdate/Testdate";

export const TESTDATE_TITLE_FIELD = "id";

export const TestdateTitle = (record: TTestdate): string => {
  return record.id || String(record.id);
};
