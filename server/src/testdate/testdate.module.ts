import { Module } from "@nestjs/common";
import { TestdateModuleBase } from "./base/testdate.module.base";
import { TestdateService } from "./testdate.service";
import { TestdateController } from "./testdate.controller";
import { TestdateResolver } from "./testdate.resolver";

@Module({
  imports: [TestdateModuleBase],
  controllers: [TestdateController],
  providers: [TestdateService, TestdateResolver],
  exports: [TestdateService],
})
export class TestdateModule {}
