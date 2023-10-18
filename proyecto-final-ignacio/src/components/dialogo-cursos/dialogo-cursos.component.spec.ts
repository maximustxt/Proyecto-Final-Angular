import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoCursosComponent } from './dialogo-cursos.component';

describe('DialogoCursosComponent', () => {
  let component: DialogoCursosComponent;
  let fixture: ComponentFixture<DialogoCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogoCursosComponent]
    });
    fixture = TestBed.createComponent(DialogoCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
