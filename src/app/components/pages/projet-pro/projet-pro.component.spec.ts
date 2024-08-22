import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetProComponent } from './projet-pro.component';

describe('ProjetProComponent', () => {
  let component: ProjetProComponent;
  let fixture: ComponentFixture<ProjetProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjetProComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
