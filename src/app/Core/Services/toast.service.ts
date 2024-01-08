import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ToastMessage } from '../../Shared/Toast/ToastMessage';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private subject = new Subject<any>();
  private showAfterRedirect = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.showAfterRedirect) {
          this.showAfterRedirect = false;
        } else {
          this.clear();
        }
      }
    });
  }

  onAlert(): Observable<ToastMessage> {
    return this.subject.asObservable();
  }

  send(message: ToastMessage, showAfterRedirect = false) {
    this.showAfterRedirect = showAfterRedirect;
    this.subject.next(message);
  }

  clear() {
    this.subject.next(null);
  }
}
