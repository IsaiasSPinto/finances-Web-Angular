import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToastService } from '../../../Core/Services/toast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [ToastModule, ButtonModule],
  templateUrl: './alert.component.html',
  providers: [MessageService],
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  constructor(
    private messageService: MessageService,
    private alertService: ToastService
  ) {}

  show() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    });
  }

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
