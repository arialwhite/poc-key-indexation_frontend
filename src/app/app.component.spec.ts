import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { SharedModule } from './shared/shared.module';

import { SearchService } from './shared/search/search.service';
import { AppComponent } from './app.component';

const SearchServiceMock = jasmine.createSpyObj('SearchServiceMock', ['notifyColor']);

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        MaterialModule,
        SharedModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: SearchService, useValue: SearchServiceMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('when user search colors the search service is notified', () => {
    const searchService = fixture.debugElement.injector.get(SearchService);

    component.onSearchColor('red');
    expect(searchService.notifyColor).toHaveBeenCalledWith('red');
  });
});
