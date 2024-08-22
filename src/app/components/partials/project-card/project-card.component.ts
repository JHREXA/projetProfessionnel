import { Component, Input } from '@angular/core';
import { Project } from '../../../shared/models/project'; 
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { ViewChild } from '@angular/core';
;


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

    @Input() project = {} as Project;
    @ViewChild(ProjectModalComponent) modal!: ProjectModalComponent;
    modalOpen: boolean = false;

    constructor(){}

    openModal(){
        this.modalOpen = true;
        
    }



}

