import { Entity, JoinColumn, ManyToOne, PrimaryColumn, Unique } from 'typeorm';
import { Project } from '../../project/entities/project.entity';
import { Technology } from '../../technology/entities/technology.entity';

@Entity('project_technologies')
@Unique(['projectId', 'technologyId'])
export class ProjectTechnology {
  @PrimaryColumn('uuid')
  projectId: string;

  @PrimaryColumn('uuid')
  technologyId: string;

  @ManyToOne(() => Project, p => p.projectTechnologies, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @ManyToOne(() => Technology, t => t.projectTechnologies, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'technology_id' })
  technology: Technology;
}
