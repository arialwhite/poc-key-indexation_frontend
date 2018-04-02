import { Injectable } from '@angular/core';
import { BasicLinearGradient, Color } from './models';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CassandraApiService {

  constructor (
    private http: HttpClient
  ) {}

  getGradients(host: string, color: Color): Promise<BasicLinearGradient[]> {

    return this.http.get<any[]>(`${environment.backendApi}/cassandra/gradients/by-key/${color}`)
                    .map(res => {
                      return res.map((o: any) => {
                        return new BasicLinearGradient(o.value);
                      });
                    }).take(1).toPromise();
  }

}
