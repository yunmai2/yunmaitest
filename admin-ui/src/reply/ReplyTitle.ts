import { Reply as TReply } from "../api/reply/Reply";

export const REPLY_TITLE_FIELD = "replyName";

export const ReplyTitle = (record: TReply): string => {
  return record.replyName || String(record.id);
};
