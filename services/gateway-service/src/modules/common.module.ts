import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ProjectClient } from '../common/clients/project.client';

@Module({
  imports: [HttpModule],
  providers: [ProjectClient],
  exports: [ProjectClient],
})
export class CommonModule {}
