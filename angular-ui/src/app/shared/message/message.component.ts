import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
   <span *ngIf="hasError()" class="p-message p-message-error">
         {{text}}
  </span>
  `,
  styles: [`
   .p-message-error {
      margin: 0 !important;
      padding: 3px;
      margin-top: 4px !important;
    }
  `]
})
export class MessageComponent {

  @Input() error: string = ''
  @Input() control: any
  @Input() text: string = ''

  constructor() { }

  hasError(): boolean {
    return this.control.hasError(this.error) &&
      this.control.dirty
  }
}
