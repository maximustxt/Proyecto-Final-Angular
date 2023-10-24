import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCursosComponent } from './detail-cursos.component';

describe('DetailCursosComponent', () => {
  let component: DetailCursosComponent;
  let fixture: ComponentFixture<DetailCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailCursosComponent]
    });
    fixture = TestBed.createComponent(DetailCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
