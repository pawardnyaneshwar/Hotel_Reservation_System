import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBookroomComponent } from './update-bookroom.component';

describe('UpdateBookroomComponent', () => {
  let component: UpdateBookroomComponent;
  let fixture: ComponentFixture<UpdateBookroomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateBookroomComponent]
    });
    fixture = TestBed.createComponent(UpdateBookroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
