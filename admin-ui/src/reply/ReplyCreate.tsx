import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ReplyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="replyName" source="replyName" />
      </SimpleForm>
    </Create>
  );
};
