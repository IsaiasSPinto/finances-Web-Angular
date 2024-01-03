import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly client: HttpClient) {}

  get<T>(url: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {});
  }
}
