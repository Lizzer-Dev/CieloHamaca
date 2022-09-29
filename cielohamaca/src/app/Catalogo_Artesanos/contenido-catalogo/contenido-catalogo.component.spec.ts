import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoCatalogoComponent } from './contenido-catalogo.component';

describe('ContenidoCatalogoComponent', () => {
  let component: ContenidoCatalogoComponent;
  let fixture: ComponentFixture<ContenidoCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoCatalogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
