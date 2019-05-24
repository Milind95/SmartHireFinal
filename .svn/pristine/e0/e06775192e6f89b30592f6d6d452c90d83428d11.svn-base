import { Subscription } from 'rxjs';
import { BookingEvent } from './../../../../Shared/dataModal/bookingSlot.modal';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, ViewEncapsulation, OnChanges } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-booked',
  templateUrl: './booked.page.html',
  styleUrls: ['./booked.page.scss'],
})
export class BookedPage implements OnInit {

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
  bookedSubscription: Subscription;
  userRole: string;
  currentDateTimeStamp = new Date().getTime();

  selectedDateObjectFromCalendar: {
    date: number,
    month: number,
    year: number
  }
  constructor(private data: DataService,
    private router: Router,
    private storage: Storage,
    private toastController: ToastController) {
    this.userRole = localStorage.getItem("role");
    console.log("userRole", this.userRole);

    // this.storage.get('role').then((val) => {
    //   this.userRole = val;
    // });
  }

  ngOnInit() {
    console.log("booking constructor");

    this.bookedSubscription = this.data.slotSubject.subscribe((res: BookingEvent[]) => {
      console.log(res);
      this.currentSlotInfo = res.filter(slots => {
        return slots.color["name"] === 'pink'
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
    // this.data.slotSubject.complete();
    this.bookedSubscription.unsubscribe();
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

  async toasterNotification(message) {
    const toast = await this.toastController.create({
      message: message,
      showCloseButton: true,
      duration: 2000,
      position: 'bottom',
      closeButtonText: 'Close'
    });
    toast.present();
  }

  goToFeedback(slot) {
    console.log("slot", slot);
    console.log("inside feedback");
    let obj = {};
    if (this.userRole === 'Interviewer') {
      obj = {
        interviewTypeId: slot.interviewTypeId,
        calendarId: slot.calendarId,
        recruiterCalendarId: 0
      }
    } else {
      obj = {
        interviewTypeId: slot.interviewTypeId,
        recruiterCalendarId: slot.calendarId,
        calendarId: 0
      }
    }
    console.log(obj);
    localStorage.setItem("feedBackInputDto", JSON.stringify(obj))
    // this.storage.set("feedBackInputDto", JSON.stringify(obj))
    this.router.navigate(["/feedback"]);
    // console.log(obj);
    // this.data.getFeedbackForm(obj);
    // this.data.feedbackFormEmitter.subscribe(res => {
    //   console.log(res);

    //   if (res.flag) {
    //     this.router.navigate(["/feedback"]);
    //   } else {
    //     this.toasterNotification("No Feedback !!");
    //   }
    // })
  }

}
