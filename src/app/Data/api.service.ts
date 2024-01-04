import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private BaseUrl = environment.BASE_API_URL;

  constructor(private readonly client: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.client.get<T>(`${this.BaseUrl}/${url}`);
  }

  post<TRequest, TResponse>(
    url: string,
    data: TRequest
  ): Observable<TResponse> {
    return this.client.post<TResponse>(`${this.BaseUrl}/${url}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  put<T>(url: string, data: T): Observable<T> {
    return this.client.put<T>(`${this.BaseUrl}/${url}`, data);
  }

  delete<T>(url: string): Observable<T> {
    return this.client.delete<T>(`${this.BaseUrl}/${url}`);
  }
}
