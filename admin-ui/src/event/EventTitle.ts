import { Event as TEvent } from "../api/event/Event";

export const EVENT_TITLE_FIELD = "EventName";

export const EventTitle = (record: TEvent): string => {
  return record.EventName || String(record.id);
};
