import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MbscEventcalendarOptions } from '@mobiscroll/angular';

//let now = new Date();

@IonicPage({
  name: 'calendar-pop'
})
@Component({
    selector: 'page-calendar-pop',
    templateUrl: 'calendar-pop.html'
})
export class CalendarPopPage {
    // Place the code below into your own component or use the full template

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    events: Array < any > = [ {
    
    }];

    eventSettings: MbscEventcalendarOptions = {
        theme: 'ios',
        display: 'inline',
        view: {
            calendar: { type: 'month' },
            eventList: { type: 'month' }
        }
    };
}


