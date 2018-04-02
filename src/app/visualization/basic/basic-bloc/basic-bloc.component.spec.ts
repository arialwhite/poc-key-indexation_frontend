import { BasicLinearGradient } from '../../../shared/api/cassandra-api/models';

import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { BasicBlocComponent } from './basic-bloc.component';

const INPUT_GRADIENT_STR = 'linear-gradient(white, black)';

function isWhite(htmlColor): boolean { 
  return ['white', 'rgb(255, 255, 255)', '#fff', '#ffffff'].includes(htmlColor);
}

describe('BasicBlocComponent', () => {
  let component: BasicBlocComponent;
  let fixture: ComponentFixture<BasicBlocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicBlocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicBlocComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  
  describe('given a gradient', () => {

    beforeEach(() => {
      component.gradient = new BasicLinearGradient(INPUT_GRADIENT_STR);
      fixture.detectChanges();
    });

    it('the gradient is applied', () => {
      expect(component.css).toBe(INPUT_GRADIENT_STR);
      const de = fixture.debugElement.query(By.css('.gradient'));
      const bg = de.nativeElement.style.background;
      expect(bg).toBe(INPUT_GRADIENT_STR);
    });
  });

  describe('given no gradient', () => {

    beforeEach(() => {
      component.gradient = null;
      fixture.detectChanges();
    });

    it('a default background is applied', () => {
      expect(isWhite(component.css)).toBe(true); // needed because it is rgb(255,255,255)
      const de = fixture.debugElement.query(By.css('.gradient'));
      const bg = de.nativeElement.style.background;
      expect(isWhite(bg)).toBe(true); 
    });

  });

  describe('when not maximized', () => {

    beforeEach(() => {
      component.maximized = false;
      component.gradient = new BasicLinearGradient(INPUT_GRADIENT_STR);
      fixture.detectChanges();
    });

    it('it can be maximized on click', fakeAsync(() => {
      const el = fixture.debugElement;
      el.triggerEventHandler('click', null);

      fixture.detectChanges();
      tick();                  
      fixture.detectChanges();

      expect(el.classes['state-maximized']).toBe(true);
    }));

  });

  describe('when maximized', () => {

    beforeEach(() => {
      component.maximize();
      component.gradient = new BasicLinearGradient(INPUT_GRADIENT_STR);
      fixture.detectChanges();
    });

    it('it can be closed', fakeAsync(() => {
      const de = fixture.debugElement.query(By.css('.icon-close'));
      de.triggerEventHandler('click', null);

      fixture.detectChanges();
      tick();                  
      fixture.detectChanges();

      const rootEl = fixture.debugElement;
      expect(rootEl.classes['state-maximized']).not.toBe(true);
    }));

    it('it is not minimized if click is not on button', fakeAsync(() => {
      const el = fixture.debugElement;
      el.triggerEventHandler('click', null);

      fixture.detectChanges();
      tick();                  
      fixture.detectChanges();

      expect(el.classes['state-maximized']).toBe(true);
    }));
    
  });
});
