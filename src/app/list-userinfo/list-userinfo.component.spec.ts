import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserinfoComponent } from './list-userinfo.component';

describe('ListUserinfoComponent', () => {
  let component: ListUserinfoComponent;
  let fixture: ComponentFixture<ListUserinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListUserinfoComponent]
    });
    fixture = TestBed.createComponent(ListUserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
