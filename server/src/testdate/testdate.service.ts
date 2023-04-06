import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TestdateServiceBase } from "./base/testdate.service.base";

@Injectable()
export class TestdateService extends TestdateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
