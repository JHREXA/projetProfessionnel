import { Injectable } from '@angular/core';
import { Project } from '../shared/models/project'; 
import { Tag } from '../shared/models/tag'; 

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      id: 0,
      name: "International Eats",
      resume: "Application de livraison des plats d'un restaurant à domicile.",
      description: "Il s'agit d'une application avec une partie Front-End conçue avec Angular, qui interagit avec l'utilisateur, et un Back-End, chargée de la gestion des données.",
      projectLink: "https://github.com/JHREXA/repas",
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.MONGODB, Tag.EXPRESS, Tag.NODEJS, Tag.JAVASCRIPT],
      picture: '../../assets/internationaleats.jpeg'
    },
    {
      id: 1,
      name: "Gestionnaire des membres",
      resume: "Application qui gère les membres d'un salle de sport.",
      description: "Application CRUD crée avec Angular, qui gère les membres d'une salle de sport",
      projectLink: "https://github.com/JHREXA/salle-de-sport",
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
      picture: '../../assets/crud.jpeg'
    }
  ];


  constructor() { }

  GetProjects(): Project[] {
    return this.projects;
  }

  GetProjectById(id: number): Project {
    const project = this.projects.find(project => project.id === id);

    if (!project) {
      throw new TypeError(`No project found with id ${id}`);
    }

    return project;
  }

  openModal(){}
}
