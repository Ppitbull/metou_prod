import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedTopNavComponent } from './authorized-top-nav.component';

describe('AuthorizedTopNavComponent', () => {
  let component: AuthorizedTopNavComponent;
  let fixture: ComponentFixture<AuthorizedTopNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizedTopNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
