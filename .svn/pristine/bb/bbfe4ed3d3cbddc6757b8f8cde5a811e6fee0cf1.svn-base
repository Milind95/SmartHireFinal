import { BookingEvent } from './../../../../Shared/dataModal/bookingSlot.modal';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { DataService } from '../../../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-panel-availability',
  templateUrl: './panel-availability.page.html',
  styleUrls: ['./panel-availability.page.scss'],
})
export class PanelAvailabilityPage implements OnInit {

  currentSlotInfo: BookingEvent[];
  allSlotInfo: BookingEvent[];
  currentDay: string;
  currentDate: number;
  dateModel: string = "March";
  step = null;
  fetchSlotAccordingToSelectedDate = [];
  noDataAvailableMsg: string = null;
  selectedDateFromCalendar: string;
  yesterdayDate: Date = new Date((new Date().setDate(new Date().getDate() - 1)));
  isPastDate: boolean = false;
  panelSubscription: Subscription;

  selectedDateObjectFromCalendar: {
    date: number,
    month: number,
    year: number
  }
  constructor(private data: DataService,
    private router: Router,
    private actionSheetController: ActionSheetController,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
    this.panelSubscription = this.data.slotSubject.subscribe((res: BookingEvent[]) => {
      console.log(res);
      this.currentSlotInfo = res.filter(slots => {
        return slots.color["name"] === 'yellow'
      });;
      if (this.currentSlotInfo.length !== 0) {
        this.commonSetDayandDate(this.currentSlotInfo);
        this.selectedDateFromCalendar = this.commonDateFormatter(this.currentSlotInfo[0].start);
        this.selectedDateObjectFromCalendar = null;
      } else {
        this.data.selectedDateSubject.subscribe((date: Date) => {
          this.selectedDateFromCalendar = this.commonDateFormatter(date);
          this.selectedDateObjectFromCalendar = null;
          this.noDataAvailableMsg = "No slots available";
        });

      }
    });
    this.allSlotInfo = this.data.events;
  }

  ngOnDestroy() {
    this.panelSubscription.unsubscribe();
  }


  setStep(index: number) {
    console.log(index);
    this.step = index;
  }

  commonSetDayandDate(data) {
    if (data.length !== 0) {
      this.currentDay = this.fetchWeekDaybyNumber(data[0].start.getDay());
      this.currentDate = data[0].start.getDate();
    }
  }

  commonDateFormatter(dateInput: Date) {
    let date;
    let month;
    let year;
    let totalString;
    this.isPastDate = dateInput.getTime() > this.yesterdayDate.getTime();

    date = dateInput.getDate();
    month = dateInput.getMonth();
    year = dateInput.getFullYear();
    totalString = `${date}-${this.fetchMonthbyNumber(month)}-${year}`;
    return totalString;
  }

  fetchWeekDaybyNumber(number) {
    let day = "";
    switch (number) {
      case 0:
        day = "Sun";
        break;
      case 1:
        day = "Mon";
        break;
      case 2:
        day = "Tue";
        break;
      case 3:
        day = "Wed";
        break;
      case 4:
        day = "Thur";
        break;
      case 5:
        day = "Fri";
        break;
      case 6:
        day = "Sat";
        break;
    }
    return day;
  }


  fetchMonthbyNumber(number) {
    let month = "";
    switch (number) {
      case 0:
        month = "Jan";
        break;
      case 1:
        month = "Feb";
        break;
      case 2:
        month = "Mar";
        break;
      case 3:
        month = "Apr";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "Jun";
        break;
      case 6:
        month = "Jul";
        break;
      case 7:
        month = "Aug";
        break;
      case 8:
        month = "Sep";
        break;
      case 9:
        month = "Oct";
        break;
      case 10:
        month = "Nov";
        break;
      case 11:
        month = "Dec";
        break;
    }
    return month;
  }

  getTimeFromDatein12HoursFormat(date: Date) {
    let timeInAmPmFormat: string = "";
    let time = date.getHours();
    let minutesNum = date.getMinutes();
    let minutes = minutesNum < 10 ? (0 + minutesNum.toString()) : minutesNum === 0 ? "00" : minutesNum;
    if (time > 12) {
      timeInAmPmFormat = (time - 12).toString() + ":" + minutes + " " + "PM"
    } else if (time === 12) {
      timeInAmPmFormat = "12" + ":" + minutes + " " + "PM"
    } else {
      timeInAmPmFormat = (time).toString() + ":" + minutes + " " + "AM"
    }
    return timeInAmPmFormat;
  }

  bookInterviewersSlot(slot) {
    console.log(slot);
    this.gotoBookingForm(slot);

  }

  gotoBookingForm(slotInfo?) {
    console.log("slotInfo", slotInfo);
    let value = this.selectedDateFromCalendar.split("-");
    let monthNumber: number;
    this.data.months.forEach((month, index) => {
      if (month === value[1]) {
        monthNumber = index;
      }
    });
    let year = Number(value[2]);
    let date = Number(value[0]);
    let selectedDate = new Date(year, monthNumber, date);
    console.log(selectedDate);
    this.router.navigate(["/booking-form"]);
    this.data.setBookingDataForBookingForm({
      dateInString: this.selectedDateFromCalendar,
      dateInObject: this.selectedDateObjectFromCalendar,
      date: selectedDate,
      slotInfo: slotInfo,
      from:"panelAvailability"
    });
  }
}
