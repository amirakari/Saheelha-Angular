import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilutilisateurComponent } from './profilutilisateur.component';

describe('ProfilutilisateurComponent', () => {
  let component: ProfilutilisateurComponent;
  let fixture: ComponentFixture<ProfilutilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilutilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
