import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public promptEvent: any;

  public constructor() {
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
  }

  public installPwa(): void {
    this.promptEvent.prompt();
  }

  public showNotification(): void {
    const notification = new Notification('Hello Test', <NotificationOptions>{
      body: 'Hello Body',
      tag: 'Test',
      vibrate: [200, 100, 200]
    });
  }
}
