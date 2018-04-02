
import { Color, Gradient } from '../cassandra-api';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class KafkaApiService {

  constructor (
    private httpClient: HttpClient
  ) {}

  sendAllGradients(gradientsByColor: [Color, Gradient[]][]): Observable<any> {
    return this.httpClient.post<any>(`${environment.backendApi}/kafka/gradients`, {
      gradients: gradientsByColor.map(tuple => {
        const color = tuple[0];
        const gradients = tuple[1];

        return {
          "color": color,
          "styles": gradients.map(g => g.toCss())
        }
      })
    });
  }
}
