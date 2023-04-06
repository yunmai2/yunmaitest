import { TestdateWhereInput } from "./TestdateWhereInput";
import { TestdateOrderByInput } from "./TestdateOrderByInput";

export type TestdateFindManyArgs = {
  where?: TestdateWhereInput;
  orderBy?: Array<TestdateOrderByInput>;
  skip?: number;
  take?: number;
};
