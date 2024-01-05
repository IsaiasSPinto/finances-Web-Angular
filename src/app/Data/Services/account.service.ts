import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Account } from '../Schemas/Account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private readonly api: ApiService) {}

  public getAccounts() {
    return this.api.get<Account[]>('account');
  }
}
