import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAlumnoComponent } from './detail-alumno.component';

describe('DetailAlumnoComponent', () => {
  let component: DetailAlumnoComponent;
  let fixture: ComponentFixture<DetailAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailAlumnoComponent]
    });
    fixture = TestBed.createComponent(DetailAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
