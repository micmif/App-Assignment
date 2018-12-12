import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPopPage } from './calendar-pop';
import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CalendarPopPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarPopPage),
    MbscModule, // add the mobiscroll module
    FormsModule // add the forms module
  ],
})
export class CalendarPopPageModule {}
