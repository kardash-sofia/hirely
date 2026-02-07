import { CreateTaskDto } from '../../task/dto/create-task.dto';

export class CreateProjectDto {
  title: string;
  description?: string;

  dueDate?: Date;

  budgetMin?: number;
  budgetMax?: number;

  categoryIds: string[];
  technologyIds: string[];

  tasks: CreateTaskDto[];
}
