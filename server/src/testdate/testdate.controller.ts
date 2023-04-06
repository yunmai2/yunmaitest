import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TestdateService } from "./testdate.service";
import { TestdateControllerBase } from "./base/testdate.controller.base";

@swagger.ApiTags("testdates")
@common.Controller("testdates")
export class TestdateController extends TestdateControllerBase {
  constructor(
    protected readonly service: TestdateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
