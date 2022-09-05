import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = `${environment.API}payments`

  constructor(private http: HttpClient) { }

  getAll(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.apiUrl + '/resume')
      .pipe(
        first(),
      )
  }

  // findMany(): Observable<City[]> {
  //   return this.http.get<City[]>(this.apiUrl)
  //     .pipe(
  //       first(), // finish observable
  //       delay(1000),
  //     );
  // }

  // save(city: City): Observable<City> {
  //   return this.http.post<City>(this.apiUrl, city)
  //     .pipe(
  //       first(), // finish observable
  //     )
  // }

  // delete(id: number): Observable<unknown> {
  //   return this.http.delete<City>(`${this.apiUrl}/${id}`)
  //     .pipe(
  //       first(), // finish observable
  //     )
  // }

  // update(city: City, id: number): Observable<unknown> {
  //   return this.http.put(`${this.apiUrl}/${id}`, city)
  //     .pipe(
  //       first(), // finish observable
  //     )
  // }
}
