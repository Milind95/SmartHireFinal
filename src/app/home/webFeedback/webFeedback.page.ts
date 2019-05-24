import { Component, OnInit, SimpleChanges, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Storage } from '@ionic/storage';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-webFeedback',
  templateUrl: './webFeedback.page.html',
  styleUrls: ['./webFeedback.page.scss'],
})
export class webFeedbackPage implements OnInit {

  candidateFormDetails: any;
  isSubmitDisabled: boolean = true;
  feedbackRating: any;
  feedbackStatus: any;
  email: string = '';
  role: string;
  dynamicFeedBackForm: any;
  candidateFormDetails2: any;
  isInterviewer: boolean = false;
  showNextTechRow: boolean = false;
  allowSubmitForm: boolean = false;
  isFormEditable: boolean = false;


  technicalEvalutionArray = [];
  interviewModeArray = [];
  technologyArray = [];
  indexArray = [];

  constructor(private service: DataService, private storage: Storage,
    private toastr: ToastrService, private router: Router,
    private spinner: NgxSpinnerService) {
      this.dynamicFeedBackForm = this.service.feedbackDetails[2];
      this.candidateFormDetails2 = this.service.feedbackDetails[0];
      this.candidateFormDetails = this.service.candidateDetails;
      this.technicalEvalutionArray = this.service.technicalevalutionData;
    console.log("details", this.service.feedbackDetails);
    console.log(this.candidateFormDetails2, this.candidateFormDetails);
    this.role = localStorage.getItem("role");
    // this.storage.get('role').then(val => {
    if (this.role === 'Interviewer') {
      this.isInterviewer = true;
    } else {
      this.isInterviewer = false;
    }
    // });

  }

  ngOnInit() {

    if (this.candidateFormDetails.feedbackStatus === 3 || this.candidateFormDetails.feedbackStatus === 0) this.isFormEditable = false;
    else this.isFormEditable = true;

    console.log('editable form', this.isFormEditable);
    this.feedbackRating = [];
    this.feedbackStatus = [];
    console.log('inside ngOnit');

    this.service.getFeedbackRating().subscribe(res => {
      console.log('ratings', res);
      this.feedbackRating = res;
    });

    this.service.eventEmitterForLookup.subscribe(res => {
      if (res.flag) {
        this.technologyArray = this.service.technologyArray;
        this.interviewModeArray = this.service.interviewTypeArray;
        console.log(this.interviewModeArray);
      }
    });
    this.service.getlookUpData();

    this.service.getFeedbackStatusArray().subscribe(res => {
      console.log("feedback status", res);
      this.feedbackStatus = res;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngDestroy() {
    console.log('inside ngDestroy');
  }

  submitStatus(){
    if(this.candidateFormDetails.feedbackStatus === 3 || this.candidateFormDetails.feedbackStatus === 0) return true;
    else return false
  }

  addTechRow(completeData, index) {
    let dataIndex;

    for (let i = 0; i < completeData.length; i++) {
      if (!completeData[i].showRow && completeData[i].col2_response === '') {
        dataIndex = i;
        break;
      }
    }
    if (dataIndex) {
      completeData[dataIndex].showRow = true;
    }
  }
  removeTechRow(completeData, currentData, index) {
    let dataIndex;
    for (let i = 0; i < completeData.length; i++) {
      if (!completeData[i].showRow && completeData[i].col2_response === '') {
        dataIndex = i - 1; // previous index for deletion
        break;
      } else {
        dataIndex = completeData.length - 1 // previous index for deletion if it exceeds total compleData length
      }
    }
    if (dataIndex > 0) {
      completeData[dataIndex].showRow = false;
      completeData[dataIndex].col2_response = '';
    }
  }

  checkValidityForAdd(completeData) {

    let dataIndex;
    for (let i = 0; i < completeData.length; i++) {
      if (!completeData[i].showRow && completeData[i].col2_response === '') {
        dataIndex = i;
        break;
      }
    }
    if (dataIndex) {
      return true;
    } else {
      return false;
    }
  }

  checkValidityForMinus(completeData) {
    let dataIndex;
    for (let i = 0; i < completeData.length; i++) {
      if (!completeData[i].showRow && completeData[i].col2_response === '') {
        dataIndex = i;
        break;
      }
    }
    if (dataIndex === 1) {
      return false;
    } else {
      return true;
    }
  }


  selectedTechnology(val, id) {
    if (id === 31 && id){
      this.allowSubmitForm = false;
    } 
  }

  feedbackRatingChanged(event){
    console.log(event);
    this.allowSubmitForm = false;
  }


  feedbackSubmit() {
    let feedbackCalendarId = this.service.calendarId;
    let checkSubmission = [];
    let feedbackResponse = [];
    this.technicalEvalutionArray.forEach(tech => {
      tech.tableData.forEach(tData => {
        if (tData.col2_dynamic) {
          tData.col2_dynamic.forEach((tData1, index) => {
            if (index === 0) {
              checkSubmission.push(tData1.col2_response.toString());
              checkSubmission.push(tData1.col3_response.toString());
              checkSubmission.push(tData1.col4_response.toString());
            }
            feedbackResponse.push({
              "feedbackFormId": tData1.col2_formDetailId,
              "feedbackResponse": tData1.col2_response.toString(),
              "calendarId": feedbackCalendarId
            });
            feedbackResponse.push({
              "feedbackFormId": tData1.col3_formDetailId,
              "feedbackResponse": tData1.col3_response.toString(),
              "calendarId": feedbackCalendarId
            });
            feedbackResponse.push({
              "feedbackFormId": tData1.col4_formDetailId,
              "feedbackResponse": tData1.col4_response,
              "calendarId": feedbackCalendarId
            });
          });
        } else {
          feedbackResponse.push({
            "feedbackFormId": tData.col3_formDetailId,
            "feedbackResponse": tData.col3_response.toString(),
            "calendarId": feedbackCalendarId
          });
          feedbackResponse.push({
            "feedbackFormId": tData.col4_formDetailId,
            "feedbackResponse": tData.col4_response,
            "calendarId": feedbackCalendarId
          });
        }
      });
    });

    this.dynamicFeedBackForm.feedbackSubFormDTOs.forEach(feed => {
      feedbackResponse.push({
        "feedbackFormId": feed.formDetailId,
        "feedbackResponse": feed.response,
        "calendarId": feedbackCalendarId
      });
    });

        this.candidateFormDetails2.feedbackSubFormDTOs.forEach(feed => {
      feedbackResponse.push({
        "feedbackFormId": feed.formDetailId,
        "feedbackResponse": feed.response,
        "calendarId": feedbackCalendarId
      });
    });

    let index = 0;
    checkSubmission.forEach(chk => {
      if (chk === '') return;
      else index++;
    });

    if (index === checkSubmission.length && this.candidateFormDetails.feedbackStatus !== 0) {
      this.allowSubmitForm = false;
      let obj = {
        "interviewerCalendarId": feedbackCalendarId,
        "participationId": Number(this.candidateFormDetails.participationId),
        "feedbackStatusId": this.candidateFormDetails.feedbackStatus,
        "saveFeedbackDetailsDTOs": feedbackResponse,
      }
      console.log('feedback body', obj);
      this.spinner.show();
      this.service.saveFeedbackForm(obj).subscribe(res => {
        console.log('feedback response ', res);
        if (res['response'] !== 0 && res['response'][0]) {
          this.toastr.success(res['message']);
          this.router.navigate(['/dashboard']);
          this.service.feedbackSuccessEmitter.emit({
            flag: true
          });
        } else {
          this.toastr.error(res['exception']);
        }
        this.spinner.hide();
      });
    } else this.allowSubmitForm = true;
  }

}
