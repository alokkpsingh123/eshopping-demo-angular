import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `
    <div class="alert alert-success" [hidden]="displayNoti">
      <p>This website uses cookies to provide better user experience.</p>
      <button class="btn" (click)="closeNotification()">X</button>
    </div>
  `,
  styles: [
    `
      div {
        display: flex;
        margin: 10px 0px;
        padding: 10px 20px;
        text-align: center;
        justify-content: center;
        background-color: #cfe0dd;
      }
    `,
    `
      p {
        font-size: 18px;
        color: #1d6459;
      }
    `,
    `
      button {
        margin-left: 30px;
        align-self: flex-end;
        padding: 2px 5px;
        border: none;
        background-color: #cfe0dd;
        transition: ease-in-out;
      }
    `,
    `
      button:hover {
        background-color: #1d6459;
        transition: ease-in-out;
      }
    `,
  ],
})
export class NotificationComponent {
  displayNoti: boolean = false;

  closeNotification() {
    this.displayNoti = true;
    console.log('Function clicked');
  }
}
