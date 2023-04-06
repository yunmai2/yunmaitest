import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ReplyWhereInput = {
  id?: StringFilter;
  replyName?: StringNullableFilter;
};
