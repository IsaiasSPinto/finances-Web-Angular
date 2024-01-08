import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ToastService } from '../../../Core/Services/toast.service';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [ToastModule],
  templateUrl: './alert.component.html',
  providers: [MessageService],
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  constructor(
    private alertService: ToastService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.subscription = this.alertService.onAlert().subscribe((alert) => {
      this.messageService.add({
        summary: alert.title,
        detail: alert.message,
        severity: alert.type,
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
