import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './entities/project.entity';
import { Task } from '../task/entities/task.entity';
import { ProjectCategory } from '../project-category/entities/project-category.entity';
import { ProjectTechnology } from '../project-technology/entities/project-technology.entity';
import { ProjectStatus } from './constants';
import { TaskStatus } from '../task/constants';

@Injectable()
export class ProjectService {
  constructor(private readonly dataSource: DataSource) {}

  async createProject(dto: CreateProjectDto, ownerId: string) {
    return this.dataSource.transaction(async manager => {
      const project = manager.create(Project, {
        title: dto.title,
        description: dto.description,
        dueDate: dto.dueDate,
        budgetMin: dto.budgetMin,
        budgetMax: dto.budgetMax,
        ownerId,
        status: ProjectStatus.OPEN,
      });

      await manager.save(project);

      if (dto.tasks?.length) {
        const tasks = dto.tasks.map(t =>
          manager.create(Task, {
            ...t,
            projectId: project.id,
            status: TaskStatus.DRAFT,
          }),
        );

        await manager.save(tasks);
      }

      if (dto.categoryIds?.length) {
        const pcs = dto.categoryIds.map(catId =>
          manager.create(ProjectCategory, {
            projectId: project.id,
            categoryId: catId,
          }),
        );

        await manager.save(pcs);
      }

      if (dto.technologyIds?.length) {
        const pts = dto.technologyIds.map(techId =>
          manager.create(ProjectTechnology, {
            projectId: project.id,
            technologyId: techId,
          }),
        );

        await manager.save(pts);
      }

      return project;
    });
  }
}
