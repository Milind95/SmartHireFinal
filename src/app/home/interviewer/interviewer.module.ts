import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CalendarModule, DateAdapter, CalendarDateFormatter, CalendarEventTitleFormatter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { IonicModule } from '@ionic/angular';

import { InterviewerPage } from './interviewer.page';
import { DayComponent } from './day/day.component';
import { MonthComponent } from './month/month.component';
import { WeekComponent } from './week/week.component';
import { SharedModule } from '../../Shared/shared.module';



const routes: Routes = [
  {
    path: '',
    component: InterviewerPage,
    children: [
      {
        path: '',
        component: MonthComponent,
      },
      {
        path: 'week',
        component: WeekComponent,
      },
      {
        path: 'day',
        component: DayComponent,
      }]

  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
  ],
  declarations: [InterviewerPage,DayComponent,WeekComponent,MonthComponent]
})
export class InterviewerPageModule { }
