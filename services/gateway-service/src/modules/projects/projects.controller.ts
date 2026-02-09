import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto, GetProjectsQueryDto } from './types/project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly service: ProjectsService) {}

  @Get()
  getProjects(@Query() query: GetProjectsQueryDto) {
    return this.service.getProjects(query);
  }

  @Post()
  create(@Body() dto: CreateProjectDto) {
    return this.service.createProject(dto);
  }
}
