import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { NgCalendarModule } from 'ionic2-calendar';
import { UserService } from '../providers/user-service/user-service';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
//import { CalendarPageModule } from '../pages/calendar/calendar.module';


@NgModule({
  declarations: [
    MyApp,
   
  ],
  imports: [ 
    NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(MyApp, { mode: 'md'}),
    HttpClientModule,
    IonicStorageModule.forRoot()
    //CalendarPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService
  ]
})
export class AppModule {}
