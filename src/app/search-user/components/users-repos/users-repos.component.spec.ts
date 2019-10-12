import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersReposComponent } from './users-repos.component';

describe('UsersReposComponent', () => {
  let component: UsersReposComponent;
  let fixture: ComponentFixture<UsersReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
