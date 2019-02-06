import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public promptEvent: any;

  public constructor(private pushService: PushNotificationsService, private swPush: SwPush) {
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

    const notification2 = new Notification('Hello Test');

  }
}
