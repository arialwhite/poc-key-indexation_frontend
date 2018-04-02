import { fakeAsync, tick } from '@angular/core/testing/src/testing';
import { Subject, Observable } from 'rxjs/Rx';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { SharedModule } from '../../shared/shared.module';
import { SearchService } from '../../shared/search/search.service';
import { Color, Gradient, BasicLinearGradient } from '../../shared/api/cassandra-api';

import { BasicComponent } from './basic.component';

export class SearchServiceMock {
  fetchGradients(): Observable<Gradient[]> {
    const gradients = [
      'linear-gradient( 45deg, orange, red )',
      'linear-gradient( 12deg, red, orange )',
      'linear-gradient( to left, white, red )'
    ].map(str => new BasicLinearGradient(str));

    return Observable.of(gradients);
  }
}

describe('BasicComponent', () => {
  let component: BasicComponent;
  let fixture: ComponentFixture<BasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BasicComponent],
      imports: [
        FormsModule,
        SharedModule,
        MaterialModule
      ],
      providers: [
        { provide: SearchService, useClass: SearchServiceMock }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to gradients', async(() => {
    fixture.detectChanges();
  
    fixture.whenStable().then(() => { 
      fixture.detectChanges();
      expect(component.gradients$).toBeDefined();

      component.gradients$.take(1).toPromise().then((gradients: Gradient[]) => {
        expect(gradients).toBeDefined();
        expect(gradients.length).toBeGreaterThan(0);
      });
    });
  }));
});
