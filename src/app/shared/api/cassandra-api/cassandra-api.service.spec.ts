import { log } from 'util';
import { BasicLinearGradient, Gradient } from './models';
import { TestBed, inject, async } from '@angular/core/testing';

import { CassandraApiService } from './cassandra-api.service';

describe('CassandraApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CassandraApiService]
    });
  });

  it('should be created', inject([CassandraApiService], (service: CassandraApiService) => {
    expect(service).toBeTruthy();
  }));

  it('getGradients resolve to array', async(inject([CassandraApiService], (service) => {
    service.getGradients('127.0.0.1', 'red').then((res: Gradient[]) => {
      expect(res).not.toBeFalsy();
      expect(res instanceof Array).toBe(true);
    });
  })));
});
