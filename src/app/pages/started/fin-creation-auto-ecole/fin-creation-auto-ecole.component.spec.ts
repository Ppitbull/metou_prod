import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinCreationAutoEcoleComponent } from './fin-creation-auto-ecole.component';

describe('FinCreationAutoEcoleComponent', () => {
  let component: FinCreationAutoEcoleComponent;
  let fixture: ComponentFixture<FinCreationAutoEcoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinCreationAutoEcoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinCreationAutoEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
