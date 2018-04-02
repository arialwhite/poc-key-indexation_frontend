import { BasicLinearGradient } from '../api/cassandra-api/models';
import { TestBed, inject, async } from '@angular/core/testing';

import { SearchService } from './search.service';
import { Gradient, Color, CassandraApiService } from '../api/cassandra-api';

import { TestScheduler } from 'rxjs/Rx';

describe('SearchService', () => {

  class CassandraApiServiceMock {
    getGradients(host: string, color: Color): Promise<BasicLinearGradient[]> {
      return Promise.resolve([]);
    }
  };

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      providers: [
        { provide: CassandraApiService, useClass: CassandraApiServiceMock },
        SearchService
        ]
    });

    spyOn(CassandraApiServiceMock.prototype, 'getGradients').and.callThrough();
  });

  it('should be created', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));

  it('color can be observed', async(inject([SearchService], (service) => {
    service.notifyColor('red');
    service.observeColor().take(1).toPromise().then((color: string) => {
      expect(color).toBe('red');
    });
  })));

  it('a new color trigger gradients fetch', async(inject([SearchService, CassandraApiService], (service, cassandraApi) => {
    const s = service.fetchGradients().take(1).toPromise().then((res: Gradient[]) => {
      expect(res).not.toBeFalsy();
      expect(res instanceof Array).toBe(true);
      expect(cassandraApi.getGradients).toHaveBeenCalled();
    });
    service.notifyColor('red');
  })));
});
