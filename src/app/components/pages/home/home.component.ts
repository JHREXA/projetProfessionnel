import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../../../services/projects.service';
import { Project } from '../../../shared/models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    featuredProject: Project = {} as Project;
    projectPicture: string = ''; // Para una sola imagen del proyecto

    constructor(private titleService: Title, private projectService: ProjectsService) {
        this.titleService.setTitle('Home');
    }

    ngOnInit(): void {
        this.loadFeaturedProject();
    }

    loadFeaturedProject(): void {
        
        const project = this.projectService.GetProjectById(0);
        if (project) {
            this.featuredProject.name = project.name;
            this.featuredProject.resume = project.resume;
            this.projectPicture = project.picture; 
        }
    }

    // Método para actualizar el proyecto; simula el cambio de imagen y otros datos
    updateProject(newProjectId: number): void {
        const project = this.projectService.GetProjectById(newProjectId);
        if (project) {
            this.featuredProject.name = project.name;
            this.featuredProject.resume = project.resume;
            this.projectPicture = project.picture; // Actualiza la imagen
        }
    }
}
