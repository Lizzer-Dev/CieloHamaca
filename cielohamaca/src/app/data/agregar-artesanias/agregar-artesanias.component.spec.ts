import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarArtesaniasComponent } from './agregar-artesanias.component';

describe('AgregarArtesaniasComponent', () => {
  let component: AgregarArtesaniasComponent;
  let fixture: ComponentFixture<AgregarArtesaniasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarArtesaniasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarArtesaniasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
