import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAutoecoleComponent } from './create-autoecole.component';

describe('CreateAutoecoleComponent', () => {
  let component: CreateAutoecoleComponent;
  let fixture: ComponentFixture<CreateAutoecoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAutoecoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAutoecoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
