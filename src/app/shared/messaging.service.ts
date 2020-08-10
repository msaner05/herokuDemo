import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs'
import { PushNotification } from 'src/shared/modules/modules.module';
import { MastersService } from 'src/shared/services/masters.service';


@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  _notifications: PushNotification;
  currentMessage = new BehaviorSubject(null);
  userTokens: any = [];


  constructor(private angularFireDB: AngularFireDatabase,
    private angularFireAuth: AngularFireAuth,
    private angularFireMessaging: AngularFireMessaging, private _masterservice: MastersService) {
    this.angularFireMessaging.messages.subscribe(
      (_messaging) => {
        //_messaging.onMessage = _messaging.onMessage.bind(_messaging);
        //_messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
    )
  }
 
  /**
* update token in firebase database
* 
* @param userId userId as a key 
* @param token token as a value
*/
  updateToken(userId, token) {
    // we can change this function to request our backend service
    this.angularFireAuth.authState.pipe(take(1)).subscribe(
      () => {
        const data = {};
        data[userId] = token
        this.angularFireDB.object('fcmTokens/').update(data)
      })

    let _notifications: PushNotification = new PushNotification();
    _notifications.token = token;
    _notifications.employeeid = 3;

    this._masterservice.getAllUserTokens().subscribe(tokenId => {
      console.log(tokenId);
      let checkDuplicateToken = tokenId.filter(userToken => userToken.token == token);
      if (checkDuplicateToken.length == 0) {
        this._masterservice.addTokens(_notifications).subscribe(result => {
          if (result) {
            
          }
        });
      }
    });

  }

  /**
   * request permission for notification from firebase cloud messaging
   * 
   * @param userId userId
   */
  requestPermission(userId) {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log(token);
        this.updateToken(userId, token);
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }

  /**
   * hook method when new notification received in foreground
   */
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        console.log("new message received. ", payload);
        this.currentMessage.next(payload);
      })
  }


}
