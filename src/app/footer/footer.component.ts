import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  telLink: string;
  emailLink: string;

  constructor() {
    const phoneNumber = '+34682304109'; // Número de teléfono de Mas Altura
    this.telLink = `tel:${phoneNumber}`;
    const email = 'info@masaltura.es';
    const subject = 'Quiero informacion sobre vuestros servicios';
    const body =
      'A continuacion te dejo mis datos de contacto:\n' +
      '\n' +
      'Nombre:\n' +
      'Telefono:\n' +
      'Email:\n';
    this.emailLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }
}
