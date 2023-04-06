import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { TestdateList } from "./testdate/TestdateList";
import { TestdateCreate } from "./testdate/TestdateCreate";
import { TestdateEdit } from "./testdate/TestdateEdit";
import { TestdateShow } from "./testdate/TestdateShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { ReplyList } from "./reply/ReplyList";
import { ReplyCreate } from "./reply/ReplyCreate";
import { ReplyEdit } from "./reply/ReplyEdit";
import { ReplyShow } from "./reply/ReplyShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TestService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Testdate"
          list={TestdateList}
          edit={TestdateEdit}
          create={TestdateCreate}
          show={TestdateShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="Reply"
          list={ReplyList}
          edit={ReplyEdit}
          create={ReplyCreate}
          show={ReplyShow}
        />
      </Admin>
    </div>
  );
};

export default App;
