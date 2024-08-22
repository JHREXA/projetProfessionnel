import { Input, Component } from '@angular/core';
import { Project } from '../../../shared/models/project'; 

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css'] // Corregido: styleUrls en lugar de styleUrl
})
export class ProjectModalComponent {
  @Input() project: Project = {} as Project;
  modalVisible = true; // Inicialización correcta para que el modal esté oculto al inicio

  constructor() {}

  closeModal() {
    this.modalVisible = false;
  }
}
