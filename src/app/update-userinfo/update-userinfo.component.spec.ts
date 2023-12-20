import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserinfoComponent } from './update-userinfo.component';

describe('UpdateUserinfoComponent', () => {
  let component: UpdateUserinfoComponent;
  let fixture: ComponentFixture<UpdateUserinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateUserinfoComponent]
    });
    fixture = TestBed.createComponent(UpdateUserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
