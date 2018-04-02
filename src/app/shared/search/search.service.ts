import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs/Rx';
import { Gradient, Color, CassandraApiService } from '../api/cassandra-api';

const CASSANDRA_HOST = 'cassandra';

@Injectable()
export class SearchService {

  private color$: Subject<Color> = new BehaviorSubject<Color>('white');

  constructor(
    private cassandraApi: CassandraApiService
  ) {}

  notifyColor(value: Color): void {
    this.color$.next(value);
  }

  observeColor(): Observable<Color> {
    return this.color$.asObservable();
  }

  fetchGradients(): Observable<Gradient[]> {
    return this.color$
               .debounceTime(200)
               .switchMap((color: Color) => {
                 return this.cassandraApi.getGradients(CASSANDRA_HOST, color);
               }).catch((err, caught) => {
                  console.log('oups', err);
                  return caught;
               });
  }
  
}
