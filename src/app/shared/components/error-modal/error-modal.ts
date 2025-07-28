// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-error-modal',
//   imports: [],
//   templateUrl: './error-modal.html',
//   styleUrl: './error-modal.css'
// })
// export class ErrorModal {

// }

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-error-modal',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule],
  templateUrl: './error-modal.html',
  styleUrls: ['./error-modal.css']
})
export class ErrorModalComponent {
  @Input() visible: boolean = false;
  @Input() errorMessage: string = '';
  @Input() errorDetails: Record<string, string[]> | null = null;
  @Output() visibleChange = new EventEmitter<boolean>();

  onClose() {
    this.visible = false;
    this.visibleChange.emit(false);
  }

  hasDetails(): boolean {
    if (!this.errorDetails) return false;

    // Verifica si al menos una clave tiene mensajes
    return Object.keys(this.errorDetails).some(
      key => this.errorDetails![key]?.length > 0
    );
  }


  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
