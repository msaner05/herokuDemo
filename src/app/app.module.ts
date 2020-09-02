
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { SpinnerComponent } from 'src/shared/spinner/spinner.component';
// import { AuthHttp } from 'src/shared/services/authHTTP.service';
// import { HttpModule } from '@angular/http';
// import { HttpClientModule } from '@angular/common/http';

// import { AngularFireMessagingModule } from '@angular/fire/messaging';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFireModule } from '@angular/fire';
// import { MessagingService } from './shared/messaging.service';
// import { environment } from '../environments/environment';
// import { AsyncPipe } from '../../node_modules/@angular/common';
// import { MastersService } from 'src/shared/services/masters.service';
// import { AuthTokenService } from 'src/shared/services/authToken.service';
// import { SpinnerService } from 'src/shared/spinner/spinner.service';

// @NgModule({
//   declarations: [
//     AppComponent,
//     SpinnerComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     AngularFireDatabaseModule,
//     AngularFireAuthModule,
//     AngularFireMessagingModule,
//     AngularFireModule.initializeApp(environment.firebase),
//     HttpModule,
//     HttpClientModule
//   ],
//   providers: [MessagingService, AsyncPipe, MastersService, AuthHttp, AuthTokenService, SpinnerService,],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { MessagingService } from './shared/messaging.service';
import { environment } from '../environments/environment';
import { AsyncPipe } from '../../node_modules/@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpModule,
    HttpClientModule,
    // ServiceWorkerModule.register('/ngsw-worker.js', 
        // { enabled: environment.production }),
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [MessagingService, AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }