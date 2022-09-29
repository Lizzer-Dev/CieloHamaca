import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFloatCatalogoComponent } from './button-float-catalogo.component';

describe('ButtonFloatCatalogoComponent', () => {
  let component: ButtonFloatCatalogoComponent;
  let fixture: ComponentFixture<ButtonFloatCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonFloatCatalogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonFloatCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
