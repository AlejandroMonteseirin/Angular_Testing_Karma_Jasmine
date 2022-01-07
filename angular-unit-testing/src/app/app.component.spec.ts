import {  TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
describe('//Test Automatizados Karma Jasmine//', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('El componente se crea correctamente (toBeTruthy)', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`El componente tiene de titulo 'Pagina de pruebas Alejandro Monteseirin, Karma Jasmine'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Pagina de pruebas Alejandro Monteseirin, Karma Jasmine');
  });

  it(`El Boton existe`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.debugElement.nativeElement.querySelector('#boton')==null || fixture.debugElement.nativeElement.querySelector('#boton')==undefined ).toBeFalse();
  });

  it(`El texto oculto no aparece porque aun no he pulsado el boton`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.debugElement.nativeElement.querySelector('#textoBoton')==null ||fixture.debugElement.nativeElement.querySelector('#textoBoton')==undefined ).toBeTrue();
  });

  it(`Pulso el boton y el typescript responde correctamente`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    let button = fixture.debugElement.nativeElement.querySelector('#boton');
    button.click();
    const app = fixture.componentInstance;

    expect(app.botonPulsado ).toBeTrue();
  });

  it(`Pulso el boton y aparece el texto`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    let button = fixture.debugElement.nativeElement.querySelector('#boton');
    button.click();
    fixture.detectChanges();
    let textobutton = fixture.debugElement.nativeElement.querySelector('#textoBoton');
    expect(textobutton!=null && textobutton!=undefined  ).toBeTrue();
  });

  it(`Pulso el boton de nuevo y desaparece el texto`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    let button = fixture.debugElement.nativeElement.querySelector('#boton');
    button.click();
    button.click();
    fixture.detectChanges();
    let textobutton = fixture.debugElement.nativeElement.querySelector('#textoBoton');
    expect(textobutton!=null || textobutton!=undefined  ).toBeFalse();
  });

  
});
