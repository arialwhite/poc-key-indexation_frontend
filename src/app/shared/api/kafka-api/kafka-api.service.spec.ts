import { TestBed, inject } from '@angular/core/testing';

import { KafkaApiService } from './kafka-api.service';

describe('KafkaApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KafkaApiService]
    });
  });

  it('should be created', inject([KafkaApiService], (service: KafkaApiService) => {
    expect(service).toBeTruthy();
  }));
});
