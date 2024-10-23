import { Component, OnInit, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  imageUrl: string = '';
  imageWidth: number = 0;
  imageHeight: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Solo ejecuta el código en el navegador
      this.setImageUrlAndSize();
      window.addEventListener('resize', () => this.setImageUrlAndSize());
    }
  }

  setImageUrlAndSize() {
    if (window.innerWidth <= 768) {
      // Umbral para dispositivos móviles
      this.imageUrl = '/images/mas-altura-logo-mobile.svg';
      this.imageWidth = 200; // Ancho para móviles
      this.imageHeight = 50; // Alto para móviles
    } else {
      this.imageUrl = '/images/mas-altura-logo-desktop.svg';
      this.imageWidth = 400; // Ancho para escritorio
      this.imageHeight = 100; // Alto para escritorio
    }
  }
}
