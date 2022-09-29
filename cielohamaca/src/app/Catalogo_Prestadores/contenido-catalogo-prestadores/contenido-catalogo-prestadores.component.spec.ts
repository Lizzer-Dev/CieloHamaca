import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoCatalogoPrestadoresComponent } from './contenido-catalogo-prestadores.component';

describe('ContenidoCatalogoPrestadoresComponent', () => {
  let component: ContenidoCatalogoPrestadoresComponent;
  let fixture: ComponentFixture<ContenidoCatalogoPrestadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoCatalogoPrestadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoCatalogoPrestadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
