import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  switchTheme(): void {
    let themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;

    if (themeLink.href.includes('ligthTheme.css')) {
      themeLink.href = 'darkTheme.css';
    } else {
      themeLink.href = 'ligthTheme.css';
    }
  }
}
