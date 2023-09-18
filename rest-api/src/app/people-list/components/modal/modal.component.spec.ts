import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModalComponent } from './modal.component';

describe('EditModalComponent', () => {
  let component: EditModalComponent;
  let fixture: ComponentFixture<EditModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditModalComponent]
    });
    fixture = TestBed.createComponent(EditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
