import { CreateTaskDto } from './task.dto';

export class GetProjectsQueryDto {
  limit?: number = 10;
  offset?: number = 0;
  status?: string;
  categories?: string[];
}

export type ProjectsListResponseDto = {
  items: ProjectListItemDto[];
  total: number;
};

export type ProjectListItemDto = {
  id: string;
  title: string;
  description: string;
  owner: {
    id: string;
    username: string;
    email: string;
  };
  budgetMin: number | null;
  budgetMax: number | null;
  categories: string[];
};

export class CreateProjectDto {
  title: string;
  description?: string;
  dueDate?: Date;
  budgetMin: number;
  budgetMax: number;
  categoryIds: string[];
  technologyIds: string[];
  tasks: CreateTaskDto[];
}
