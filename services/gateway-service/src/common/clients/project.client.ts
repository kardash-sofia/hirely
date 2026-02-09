import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  CreateProjectDto,
  GetProjectsQueryDto,
  ProjectsListResponseDto,
} from 'src/modules/projects/types/project.dto';

@Injectable()
export class ProjectClient {
  private readonly baseUrl: string;

  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
  ) {
    this.baseUrl = this.config.get<string>('PROJECT_SERVICE_URL') || '';
  }

  async getProjects(query: GetProjectsQueryDto) {
    const { data } = await this.http.axiosRef.get<ProjectsListResponseDto>(
      `${this.baseUrl}/projects`,
      {
        params: query,
      },
    );

    return data;
  }

  async createProject(dto: CreateProjectDto) {
    const { data } = await this.http.axiosRef.post<ProjectsListResponseDto>(
      `${this.baseUrl}/projects`,
      dto,
    );

    return data;
  }
}
