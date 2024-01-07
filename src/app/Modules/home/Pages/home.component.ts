import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from '../../../Data/Services/account.service';
import { Account } from '../../../Data/Schemas/Account';
import { Observable } from 'rxjs';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  accounts$ = new Observable<Account[]>();
  selectedAccount?: Account;

  constructor(private readonly accountService: AccountService) {}

  ngOnInit(): void {
    this.accounts$ = this.accountService.getAccounts();
  }
}
