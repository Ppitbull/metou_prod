import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingUserProfilComponent } from './setting-user-profil.component';

describe('SettingUserProfilComponent', () => {
  let component: SettingUserProfilComponent;
  let fixture: ComponentFixture<SettingUserProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingUserProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingUserProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
