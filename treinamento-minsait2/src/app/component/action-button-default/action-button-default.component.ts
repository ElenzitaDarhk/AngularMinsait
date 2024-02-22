import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-button-default',
  templateUrl: './action-button-default.component.html',
  styleUrl: './action-button-default.component.css'
})
export class ActionButtonDefaultComponent {
  @Input() nomeBotao: string = '';
  @Input() url: string = '';
}
