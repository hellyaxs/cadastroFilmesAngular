import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaDeFilmesComponent } from './galeria-de-filmes.component';

describe('GaleriaDeFilmesComponent', () => {
  let component: GaleriaDeFilmesComponent;
  let fixture: ComponentFixture<GaleriaDeFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaDeFilmesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaDeFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
