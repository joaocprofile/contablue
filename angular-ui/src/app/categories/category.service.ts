import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = `${environment.API}categories`

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl)
      .pipe(
        first()
      )
  }
}
