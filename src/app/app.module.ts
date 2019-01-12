import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NgCalendarModule } from 'ionic2-calendar';
import { CalendarPageModule } from '../pages/calendar/calendar.module';


@NgModule({
  declarations: [
    MyApp,
   
  ],
  imports: [ 
    NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CalendarPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
