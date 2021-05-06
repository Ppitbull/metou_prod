import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedLeftSidenavComponent } from './authorized-left-sidenav.component';

describe('AuthorizedLeftSidenavComponent', () => {
  let component: AuthorizedLeftSidenavComponent;
  let fixture: ComponentFixture<AuthorizedLeftSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizedLeftSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedLeftSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
