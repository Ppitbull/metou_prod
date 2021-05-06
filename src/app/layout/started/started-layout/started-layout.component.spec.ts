import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartedLayoutComponent } from './started-layout.component';

describe('StartedLayoutComponent', () => {
  let component: StartedLayoutComponent;
  let fixture: ComponentFixture<StartedLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartedLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
