import { ToastrMobileService } from './../../../services/toastr-mobile.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  slideOpts = {
    effect: 'flip'
  };
  candidateFormDetails: any;
  dynamicFeedBackForm: any;
  feedbackRating: any;
  feedbackStatusData: any = [];;
  email: string = '';
  candidateDetailsII: any;
  isInterviewer: boolean = false; // temporary change to true
  showNextTechRow: boolean = false;
  allowSubmitForm: boolean = false;
  isFormEditable: boolean = false;
  role: string;
  technicalEvalutionArray = [];
  interviewModeArray = [];
  technologyArray = [];
  indexArray = [];
  customRemarkOptions: any = {
    header: 'Remark',
  };
  customRatingOptions: any = {
    header: 'Rating',
  };
  customTechnologyOptions: any = {
    header: 'Technology',
  };
  calendarInfo = {};

  constructor(private data: DataService, private storage: Storage,
    private toastr: ToastrMobileService, private router: Router) {

    // this.data.getDummyFeeddbackJson();
    // this.data.feedbackFormEmitter.subscribe(res => {
    //   console.log(res);
    //   this.dynamicFeedBackForm = this.data.feedbackDetails[2];
    //   this.candidateFormDetails = this.data.candidateDetails;
    //   this.feedbackStatus = this.candidateFormDetails.feedbackStatus;
    //   this.technicalEvalutionArray = this.data.technicalevalutionData;
    //   console.log("details", this.dynamicFeedBackForm);
    //   console.log(this.candidateFormDetails);
    //   console.log(this.technicalEvalutionArray);
    //   if (this.candidateFormDetails.feedbackStatus === 3 || this.candidateFormDetails.feedbackStatus === 0) {
    //     this.isFormEditable = false; // temporary change
    //   }
    //   else {
    //     this.isFormEditable = false;
    //   }

    //   console.log('editable form', this.isFormEditable);


    //   console.log('editable form', this.isFormEditable);
    //   if (this.candidateFormDetails.feedbackStatus === 3) {
    //     this.technicalEvalutionArray.forEach(tech => {
    //       tech.tableData.forEach(tech1 => {
    //         if (tech1.col2_dynamic) {
    //           tech1.col2_dynamic.forEach(tech2 => {
    //             if (tech2.col2_response !== '') this.indexArray.push(0);
    //           });
    //         }
    //       });
    //     })
    //   }
    //   console.log("index array", this.indexArray)

    // })

    console.log("first time loaded");
    this.role = localStorage.getItem("role");
    // this.storage.get('role').then(val => {
    console.log(this.role);
    if (this.role === 'Interviewer') {
      this.isInterviewer = true;
    } else {
      this.isInterviewer = false;
    }
    // });
    let feedBackInputData = localStorage.getItem("feedBackInputDto");
    // this.storage.get('feedBackInputDto').then(val => {
    console.log(feedBackInputData);

    this.calendarInfo = JSON.parse(feedBackInputData);
    console.log("this.calendarInfo", this.calendarInfo);

    this.data.getFeedbackForm(JSON.parse(feedBackInputData));
    this.data.feedbackFormEmitter.subscribe(res => {
      console.log(res);
      console.log(this.data.feedbackDetails);

      this.dynamicFeedBackForm = this.data.feedbackDetails[2];
      this.candidateFormDetails = this.data.candidateDetails;
      this.candidateDetailsII = this.data.feedbackDetails[0];

      this.technicalEvalutionArray = this.data.technicalevalutionData;
      console.log("details", this.dynamicFeedBackForm);
      console.log(this.candidateFormDetails);
      console.log(this.technicalEvalutionArray);
      if (this.candidateFormDetails.feedbackStatus === 3 || this.candidateFormDetails.feedbackStatus === 0) {
        this.isFormEditable = false;
      }
      else {
        this.isFormEditable = true;
      }
    })
    // });

  }

  ngOnInit() {

    this.data.getFeedbackRating().subscribe(res => {
      console.log('ratings', res);
      this.feedbackRating = res;
    });

    this.data.eventEmitterForLookup.subscribe(res => {
      if (res.flag) {
        this.technologyArray = this.data.technologyArray;
        this.interviewModeArray = this.data.interviewTypeArray;
        console.log(this.interviewModeArray);
        console.log(this.technologyArray);

      }
    });
    this.data.getlookUpData();

    this.data.getFeedbackStatusArray().subscribe(res => {
      console.log("feedback status", res);
      this.feedbackStatusData = res;
    });

  }


  addTechRow(completeData) {
    console.log(completeData);
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

  removeTechRow(completeData) {
    console.log(completeData);
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
    if (id === 31 && id) {
      this.allowSubmitForm = false;
    }
  }

  feedbackSubmit() {
    let feedbackCalendarId = this.calendarInfo["calendarId"];
    // this.spinner.show();
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
    this.candidateDetailsII.feedbackSubFormDTOs.forEach(details => {
      feedbackResponse.push({
        "feedbackFormId": details.formDetailId,
        "feedbackResponse": details.response,
        "calendarId": feedbackCalendarId
      });
    });
    let index = 0;
    checkSubmission.forEach(chk => {
      if (chk === '') {
        return
      }
      else index++;
    });

    if (index === checkSubmission.length && (this.candidateFormDetails.feedbackStatus !== '' && this.candidateFormDetails.feedbackStatus !== null && this.candidateFormDetails.feedbackStatus !== 0)) {
      this.allowSubmitForm = false;
      let obj = {
        "interviewerCalendarId": feedbackCalendarId,
        "participationId": Number(this.candidateFormDetails.participationId),
        "feedbackStatusId": this.candidateFormDetails.feedbackStatus,
        "saveFeedbackDetailsDTOs": feedbackResponse,
      }
      console.log('feedback body', obj);
      this.data.saveFeedbackForm(obj).subscribe(res => {
        console.log('feedback response ', res);
        if (res['response'] && res['response'].length !== 0 && res['response'][0]) {
          this.toastr.toasterNotification(res['message']);
          this.router.navigate(['/dashboard']);
        } else {
          this.toastr.toasterNotification(res['exception']);
        }
      });
    } else {
      if (index !== checkSubmission.length) {
        this.toastr.toasterNotification("Please fill Technical Area 1 !!");
      } else if (this.candidateFormDetails.feedbackStatus === '' || this.candidateFormDetails.feedbackStatus === null || this.candidateFormDetails.feedbackStatus === 0) {
        this.toastr.toasterNotification("Please Select Feedback status");
      }
      this.allowSubmitForm = true;
    }
  }

}
