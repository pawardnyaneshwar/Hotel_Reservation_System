import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateroomComponent } from './create-room.component';

describe('CreateRoomComponent', () => {
  let component: CreateroomComponent;
  let fixture: ComponentFixture<CreateroomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateroomComponent]
    });
    fixture = TestBed.createComponent(CreateroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
