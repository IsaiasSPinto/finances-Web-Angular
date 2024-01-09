import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from '../../../Data/Services/account.service';
import { Account } from '../../../Data/Schemas/Account';
import { Observable } from 'rxjs';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastService } from '../../../Core/Services/toast.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  accounts$ = new Observable<Account[]>();
  selectedAccount?: Account;

  constructor(
    private readonly accountService: AccountService,
    private readonly toastService: ToastService
  ) {}

  alert() {
    this.toastService.send({
      message: 'asdfsadas',
      title: 'fasf',
      type: 'error',
    });
  }

  ngOnInit(): void {
    this.accounts$ = this.accountService.getAccounts();
  }
}
