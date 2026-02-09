import { Injectable } from '@nestjs/common';
import { ProjectClient } from '../../common/clients/project.client';
import { CreateProjectDto, GetProjectsQueryDto } from './types/project.dto';

@Injectable()
export class ProjectsService {
  constructor(private readonly projectClient: ProjectClient) {}

  getProjects(query: GetProjectsQueryDto) {
    return this.projectClient.getProjects(query);
  }

  createProject(dto: CreateProjectDto) {
    return this.projectClient.createProject(dto);
  }
}
