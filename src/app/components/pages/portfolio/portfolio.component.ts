import { Component, OnInit } from '@angular/core';
import { Project } from '../../../shared/models/project'; 
import { Title } from '@angular/platform-browser';

import { ProjectsService } from '../../../services/projects.service'; 


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
    projects = {} as Project[];

    constructor(private titleService: Title, private projectService: ProjectsService){
        this.titleService.setTitle('Portfolio'); 
    }
    ngOnInit(): void {
        this.projects = this.projectService.GetProjects();
    }
 
}
