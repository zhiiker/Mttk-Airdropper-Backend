import { Controller, Get, Param } from '@nestjs/common';
import { ClaimService } from './claim.service';

@Controller('claim')
export class ClaimController {
  constructor(private readonly service: ClaimService) {}

  @Get('/:cashtag')
  async getClaimLogs(@Param('cashtag') cashtag: string) {
    const claimLogs = await this.service.getClaimLogs(cashtag);
    return { claimLogs };
  }
}
