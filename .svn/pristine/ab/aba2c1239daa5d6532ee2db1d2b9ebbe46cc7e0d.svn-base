/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, HostListener, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { merge } from 'rxjs';
import { NgxMaterialTimepickerService } from './services/ngx-material-timepicker.service';
import { TimeUnit } from './models/time-unit.enum';
import { animate, style, transition, trigger } from '@angular/animations';
import { NgxMaterialTimepickerEventService } from './services/ngx-material-timepicker-event.service';
import { filter } from 'rxjs/operators';
/** @enum {string} */
const AnimationState = {
    ENTER: 'enter',
    LEAVE: 'leave',
};
export { AnimationState };
/** @type {?} */
const ESCAPE = 27;
export class NgxMaterialTimepickerComponent {
    /**
     * @param {?} timepickerService
     * @param {?} eventService
     */
    constructor(timepickerService, eventService) {
        this.timepickerService = timepickerService;
        this.eventService = eventService;
        this.timeUnit = TimeUnit;
        this.activeTimeUnit = TimeUnit.HOUR;
        this.isOpened = false;
        this.isEsc = true;
        this.timeSet = new EventEmitter();
        this.opened = new EventEmitter();
        this.closed = new EventEmitter();
        this.hourSelected = new EventEmitter();
        this.subscriptions = [];
        this.subscriptions.push(merge(this.eventService.backdropClick, this.eventService.keydownEvent.pipe(filter(e => e.keyCode === ESCAPE && this.isEsc)))
            .subscribe(() => this.close()));
    }
    /**
     * @param {?} gap
     * @return {?}
     */
    set minutesGap(gap) {
        if (gap == null) {
            return;
        }
        gap = Math.floor(gap);
        this._minutesGap = gap <= 59 ? gap : 1;
    }
    /**
     * @return {?}
     */
    get minutesGap() {
        return this._minutesGap;
    }
    /**
     * @param {?} time
     * @return {?}
     */
    set defaultTime(time) {
        this.setDefaultTime(time);
    }
    /**
     * @return {?}
     */
    get minTime() {
        return this.timepickerInput && this.timepickerInput.min;
    }
    /**
     * @return {?}
     */
    get maxTime() {
        return this.timepickerInput && this.timepickerInput.max;
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this.timepickerInput && this.timepickerInput.disabled;
    }
    /**
     * @return {?}
     */
    get format() {
        return this.timepickerInput && this.timepickerInput.format;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscriptions.push(this.timepickerService.selectedHour
            .subscribe(hour => this.selectedHour = hour));
        this.subscriptions.push(this.timepickerService.selectedMinute
            .subscribe(minute => this.selectedMinute = minute));
        this.subscriptions.push(this.timepickerService.selectedPeriod
            .subscribe(period => this.selectedPeriod = period));
    }
    /**
     *
     * Register an input with this timepicker.
     * input - The timepicker input to register with this timepicker
     * @param {?} input
     * @return {?}
     */
    registerInput(input) {
        if (this.timepickerInput) {
            throw Error('A Timepicker can only be associated with a single input.');
        }
        this.timepickerInput = input;
    }
    /**
     * @param {?} hour
     * @return {?}
     */
    onHourChange(hour) {
        this.timepickerService.hour = hour;
    }
    /**
     * @param {?} hour
     * @return {?}
     */
    onHourSelected(hour) {
        this.changeTimeUnit(TimeUnit.MINUTE);
        this.hourSelected.next(hour);
    }
    /**
     * @param {?} minute
     * @return {?}
     */
    onMinuteChange(minute) {
        this.timepickerService.minute = minute;
    }
    /**
     * @param {?} period
     * @return {?}
     */
    changePeriod(period) {
        this.timepickerService.period = period;
    }
    /**
     * @param {?} unit
     * @return {?}
     */
    changeTimeUnit(unit) {
        this.activeTimeUnit = unit;
    }
    /**
     * @return {?}
     */
    setTime() {
        this.timeSet.next(this.timepickerService.getFullTime(this.format));
        this.close();
    }
    /**
     * @param {?} time
     * @return {?}
     */
    setDefaultTime(time) {
        this.timepickerService.setDefaultTimeIfAvailable(time, (/** @type {?} */ (this.minTime)), (/** @type {?} */ (this.maxTime)), this.format, this.minutesGap);
    }
    /**
     * @return {?}
     */
    open() {
        this.isOpened = true;
        this.animationState = AnimationState.ENTER;
        this.opened.next();
    }
    /**
     * @return {?}
     */
    close() {
        this.animationState = AnimationState.LEAVE;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    animationDone(event) {
        if (event.phaseName === 'done' && event.toState === AnimationState.LEAVE) {
            this.isOpened = false;
            this.activeTimeUnit = TimeUnit.HOUR;
            this.closed.next();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeydown(e) {
        this.eventService.dispatchEvent(e);
        e.stopPropagation();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
}
NgxMaterialTimepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-material-timepicker',
                template: "<div class=\"timepicker-backdrop-overlay\" *ngIf=\"isOpened\" [overlay]=\"preventOverlayClick\"></div>\n<div class=\"timepicker-overlay\" *ngIf=\"isOpened\">\n    <div class=\"timepicker\" [@timepicker]=\"animationState\" (@timepicker.done)=\"animationDone($event)\" #timepicker>\n        <header class=\"timepicker__header\">\n            <ngx-material-timepicker-dial [format]=\"format\" [hour]=\"selectedHour?.time\"\n                                          [minute]=\"selectedMinute?.time\"\n                                          [period]=\"selectedPeriod\" [activeTimeUnit]=\"activeTimeUnit\"\n                                          [minTime]=\"minTime\" [maxTime]=\"maxTime\"\n                                          [isEditable]=\"enableKeyboardInput\"\n                                          [editableHintTmpl]=\"editableHintTmpl\"\n                                          [minutesGap]=\"minutesGap\"\n                                          (periodChanged)=\"changePeriod($event)\"\n                                          (timeUnitChanged)=\"changeTimeUnit($event)\"\n                                          (hourChanged)=\"onHourChange($event)\"\n                                          (minuteChanged)=\"onMinuteChange($event)\"\n            ></ngx-material-timepicker-dial>\n        </header>\n        <div class=\"timepicker__main-content\">\n            <div class=\"timepicker__body\" [ngSwitch]=\"activeTimeUnit\">\n                <div *ngSwitchCase=\"timeUnit.HOUR\">\n                    <ngx-material-timepicker-24-hours-face *ngIf=\"format === 24;else ampmHours\"\n                                                           (hourChange)=\"onHourChange($event)\"\n                                                           [selectedHour]=\"selectedHour\"\n                                                           [minTime]=\"minTime\"\n                                                           [maxTime]=\"maxTime\"\n                                                           [format]=\"format\"\n                                                           (hourSelected)=\"onHourSelected($event)\"></ngx-material-timepicker-24-hours-face>\n                    <ng-template #ampmHours>\n                        <ngx-material-timepicker-12-hours-face\n                            (hourChange)=\"onHourChange($event)\"\n                            [selectedHour]=\"selectedHour\"\n                            [period]=\"selectedPeriod\"\n                            [minTime]=\"minTime\"\n                            [maxTime]=\"maxTime\"\n                            (hourSelected)=\"onHourSelected($event)\"></ngx-material-timepicker-12-hours-face>\n                    </ng-template>\n                </div>\n                <ngx-material-timepicker-minutes-face *ngSwitchCase=\"timeUnit.MINUTE\"\n                                                      [selectedMinute]=\"selectedMinute\"\n                                                      [selectedHour]=\"selectedHour?.time\"\n                                                      [minTime]=\"minTime\"\n                                                      [maxTime]=\"maxTime\"\n                                                      [format]=\"format\"\n                                                      [period]=\"selectedPeriod\"\n                                                      [minutesGap]=\"minutesGap\"\n                                                      (minuteChange)=\"onMinuteChange($event)\"></ngx-material-timepicker-minutes-face>\n            </div>\n            <div class=\"timepicker__actions\">\n                <div (click)=\"close()\">\n                    <!--suppress HtmlUnknownAttribute -->\n                    <ng-container *ngTemplateOutlet=\"cancelBtnTmpl ? cancelBtnTmpl : cancelBtnDefault\"></ng-container>\n                </div>\n                <div (click)=\"setTime()\">\n                    <!--suppress HtmlUnknownAttribute -->\n                    <ng-container\n                        *ngTemplateOutlet=\"confirmBtnTmpl ? confirmBtnTmpl : confirmBtnDefault\"></ng-container>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<ng-template #cancelBtnDefault>\n    <ngx-material-timepicker-button>Cancel</ngx-material-timepicker-button>\n</ng-template>\n<ng-template #confirmBtnDefault>\n    <ngx-material-timepicker-button>Ok</ngx-material-timepicker-button>\n</ng-template>\n",
                animations: [
                    trigger('timepicker', [
                        transition(`* => ${AnimationState.ENTER}`, [
                            style({ transform: 'translateY(-30%)' }),
                            animate('0.2s ease-out', style({ transform: 'translateY(0)' }))
                        ]),
                        transition(`${AnimationState.ENTER} => ${AnimationState.LEAVE}`, [
                            style({ transform: 'translateY(0)', opacity: 1 }),
                            animate('0.2s ease-out', style({ transform: 'translateY(-30%)', opacity: 0 }))
                        ])
                    ])
                ],
                providers: [NgxMaterialTimepickerService],
                styles: [":host{--body-background-color:#fff;--primary-font-family:'Roboto',sans-serif;--button-color:deepskyblue;--dial-active-color:#fff;--dial-inactive-color:rgba(255, 255, 255, .5);--dial-background-color:deepskyblue;--clock-face-time-active-color:#fff;--clock-face-time-inactive-color:#6c6c6c;--clock-face-inner-time-inactive-color:#929292;--clock-face-time-disabled-color:#c5c5c5;--clock-face-background-color:#f0f0f0;--clock-hand-color:deepskyblue}.timepicker-backdrop-overlay{position:fixed;top:0;bottom:0;right:0;left:0;background-color:rgba(0,0,0,.3);z-index:999;pointer-events:auto}.timepicker-overlay{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:999;pointer-events:none}.timepicker{width:300px;border-radius:2px;box-shadow:rgba(0,0,0,.25) 0 14px 45px,rgba(0,0,0,.22) 0 10px 18px;outline:0;position:static;z-index:999;pointer-events:auto}.timepicker__header{padding:15px 30px;background-color:#00bfff}@supports (background-color:var(--dial-background-color)){.timepicker__header{background-color:var(--dial-background-color)}}.timepicker__body{padding:15px 5px;display:flex;justify-content:center;align-items:center;background-color:#fff}@supports (background-color:var(--body-background-color)){.timepicker__body{background-color:var(--body-background-color)}}.timepicker__actions{display:flex;justify-content:flex-end;padding:15px;background-color:#fff}@supports (background-color:var(--body-background-color)){.timepicker__actions{background-color:var(--body-background-color)}}@media (max-device-width:1023px) and (orientation:landscape){.timepicker{display:flex;width:515px}.timepicker__header{display:flex;align-items:center}.timepicker__main-content{display:flex;flex-direction:column;width:100%}.timepicker__actions{padding:5px;margin-top:-1px}}"]
            }] }
];
/** @nocollapse */
NgxMaterialTimepickerComponent.ctorParameters = () => [
    { type: NgxMaterialTimepickerService },
    { type: NgxMaterialTimepickerEventService }
];
NgxMaterialTimepickerComponent.propDecorators = {
    cancelBtnTmpl: [{ type: Input }],
    editableHintTmpl: [{ type: Input }],
    confirmBtnTmpl: [{ type: Input }],
    isEsc: [{ type: Input, args: ['ESC',] }],
    enableKeyboardInput: [{ type: Input }],
    preventOverlayClick: [{ type: Input }],
    minutesGap: [{ type: Input }],
    defaultTime: [{ type: Input }],
    timeSet: [{ type: Output }],
    opened: [{ type: Output }],
    closed: [{ type: Output }],
    hourSelected: [{ type: Output }],
    timepickerComponent: [{ type: ViewChild, args: ['timepickerww',] }],
    onKeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    NgxMaterialTimepickerComponent.prototype.selectedHour;
    /** @type {?} */
    NgxMaterialTimepickerComponent.prototype.selectedMinute;
    /** @type {?} */
    NgxMaterialTimepickerComponent.prototype.selectedPeriod;
    /** @type {?} */
    NgxMaterialTimepickerComponent.prototype.timeUnit;
    /** @type {?} */
    NgxMaterialTimepickerComponent.prototype.activeTimeUnit;
    /** @type {?} */
    NgxMaterialTimepickerComponent.prototype.isOpened;
    /** @type {?} */
    NgxMaterialTimepickerComponent.prototype.animationState;
    /** @type {?} */
    NgxMaterialTimepickerComponent.prototype.cancelBtnTmpl;
    /** @type {?} */
    NgxMaterialTimepickerComponent.prototype.editableHintTmpl;
    /** @type {?} */
    NgxMaterialTimepickerComponent.prototype.confirmBtnTmpl;
    /** @type {?} */
    NgxMaterialTimepickerComponent.prototype.isEsc;
    /** @type {?} */
    NgxMaterialTimepickerComponent.prototype.enableKeyboardInput;
    /** @type {?} */
    NgxMaterialTimepickerComponent.prototype.preventOverlayClick;
    /** @type {?} */
    NgxMaterialTimepickerComponent.prototype.timeSet;
    /** @type {?} */
    NgxMaterialTimepickerComponent.prototype.opened;
    /** @type {?} */
    NgxMaterialTimepickerComponent.prototype.closed;
    /** @type {?} */
    NgxMaterialTimepickerComponent.prototype.hourSelected;
    /** @type {?} */
    NgxMaterialTimepickerComponent.prototype.timepickerComponent;
    /**
     * @type {?}
     * @private
     */
    NgxMaterialTimepickerComponent.prototype._minutesGap;
    /**
     * @type {?}
     * @private
     */
    NgxMaterialTimepickerComponent.prototype.timepickerInput;
    /**
     * @type {?}
     * @private
     */
    NgxMaterialTimepickerComponent.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    NgxMaterialTimepickerComponent.prototype.timepickerService;
    /**
     * @type {?}
     * @private
     */
    NgxMaterialTimepickerComponent.prototype.eventService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21hdGVyaWFsLXRpbWVwaWNrZXIvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHNUksT0FBTyxFQUFFLEtBQUssRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDMUYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQWtCLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDckcsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7SUFLcEMsT0FBUSxPQUFPO0lBQ2YsT0FBUSxPQUFPOzs7O01BSWIsTUFBTSxHQUFHLEVBQUU7QUFvQmpCLE1BQU0sT0FBTyw4QkFBOEI7Ozs7O0lBZ0R2QyxZQUFvQixpQkFBK0MsRUFDL0MsWUFBK0M7UUFEL0Msc0JBQWlCLEdBQWpCLGlCQUFpQixDQUE4QjtRQUMvQyxpQkFBWSxHQUFaLFlBQVksQ0FBbUM7UUEzQ25FLGFBQVEsR0FBRyxRQUFRLENBQUM7UUFDcEIsbUJBQWMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBRS9CLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFNSCxVQUFLLEdBQUcsSUFBSSxD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QUUsRUFBRTs0QkFDN0QsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUM7NEJBQy9DLE9BQU8sQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO3lCQUMvRSxDQUFDO3FCQUNMLENBQUM7aUJBQ0w7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7O2FBQzVDOzs7O1lBakNRLDRCQUE0QjtZQUc1QixpQ0FBaUM7Ozs0QkEyQ3JDLEtBQUs7K0JBQ0wsS0FBSzs2QkFDTCxLQUFLO29CQUNMLEtBQUssU0FBQyxLQUFLO2tDQUNYLEtBQUs7a0NBQ0wsS0FBSzt5QkFFTCxLQUFLOzBCQWFMLEtBQUs7c0JBS0wsTUFBTTtxQkFDTixNQUFNO3FCQUNOLE1BQU07MkJBQ04sTUFBTTtrQ0FFTixTQUFTLFNBQUMsY0FBYzt3QkFzR3hCLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUE5SW5DLHNEQUE0Qjs7SUFDNUIsd0RBQThCOztJQUM5Qix3REFBMkI7O0lBRTNCLGtEQUFvQjs7SUFDcEIsd0RBQStCOztJQUUvQixrREFBaUI7O0lBQ2pCLHdEQUErQjs7SUFFL0IsdURBQTBDOztJQUMxQywwREFBNkM7O0lBQzdDLHdEQUEyQzs7SUFDM0MsK0NBQTJCOztJQUMzQiw2REFBc0M7O0lBQ3RDLDZEQUFzQzs7SUFvQnRDLGlEQUErQzs7SUFDL0MsZ0RBQTRDOztJQUM1QyxnREFBNEM7O0lBQzVDLHNEQUFvRDs7SUFFcEQsNkRBQTJEOzs7OztJQUUzRCxxREFBNEI7Ozs7O0lBQzVCLHlEQUE2Qzs7Ozs7SUFDN0MsdURBQTJDOzs7OztJQUUvQiwyREFBdUQ7Ozs7O0lBQ3ZELHNEQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbG9ja0ZhY2VUaW1lIH0gZnJvbSAnLi9tb2RlbHMvY2xvY2stZmFjZS10aW1lLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUaW1lUGVyaW9kIH0gZnJvbSAnLi9tb2RlbHMvdGltZS1wZXJpb2QuZW51bSc7XG5pbXBvcnQgeyBtZXJnZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IFRpbWVVbml0IH0gZnJvbSAnLi9tb2RlbHMvdGltZS11bml0LmVudW0nO1xuaW1wb3J0IHsgYW5pbWF0ZSwgQW5pbWF0aW9uRXZlbnQsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJFdmVudFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL25neC1tYXRlcmlhbC10aW1lcGlja2VyLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVGltZXBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ3gtdGltZXBpY2tlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGVudW0gQW5pbWF0aW9uU3RhdGUge1xuICAgIEVOVEVSID0gJ2VudGVyJyxcbiAgICBMRUFWRSA9ICdsZWF2ZSdcbn1cblxuXG5jb25zdCBFU0NBUEUgPSAyNztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtbWF0ZXJpYWwtdGltZXBpY2tlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25neC1tYXRlcmlhbC10aW1lcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci5jb21wb25lbnQuc2NzcyddLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcigndGltZXBpY2tlcicsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oYCogPT4gJHtBbmltYXRpb25TdGF0ZS5FTlRFUn1gLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTMwJSknfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMC4ycyBlYXNlLW91dCcsIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJ30pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKGAke0FuaW1hdGlvblN0YXRlLkVOVEVSfSA9PiAke0FuaW1hdGlvblN0YXRlLkxFQVZFfWAsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScsIG9wYWNpdHk6IDF9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcwLjJzIGVhc2Utb3V0Jywgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTMwJSknLCBvcGFjaXR5OiAwfSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbTmd4TWF0ZXJpYWxUaW1lcGlja2VyU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4TWF0ZXJpYWxUaW1lcGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgc2VsZWN0ZWRIb3VyOiBDbG9ja0ZhY2VUaW1lO1xuICAgIHNlbGVjdGVkTWludXRlOiBDbG9ja0ZhY2VUaW1lO1xuICAgIHNlbGVjdGVkUGVyaW9kOiBUaW1lUGVyaW9kO1xuXG4gICAgdGltZVVuaXQgPSBUaW1lVW5pdDtcbiAgICBhY3RpdmVUaW1lVW5pdCA9IFRpbWVVbml0LkhPVVI7XG5cbiAgICBpc09wZW5lZCA9IGZhbHNlO1xuICAgIGFuaW1hdGlvblN0YXRlOiBBbmltYXRpb25TdGF0ZTtcblxuICAgIEBJbnB1dCgpIGNhbmNlbEJ0blRtcGw6IFRlbXBsYXRlUmVmPE5vZGU+O1xuICAgIEBJbnB1dCgpIGVkaXRhYmxlSGludFRtcGw6IFRlbXBsYXRlUmVmPE5vZGU+O1xuICAgIEBJbnB1dCgpIGNvbmZpcm1CdG5UbXBsOiBUZW1wbGF0ZVJlZjxOb2RlPjtcbiAgICBASW5wdXQoJ0VTQycpIGlzRXNjID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBlbmFibGVLZXlib2FyZElucHV0OiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHByZXZlbnRPdmVybGF5Q2xpY2s6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBtaW51dGVzR2FwKGdhcDogbnVtYmVyKSB7XG4gICAgICAgIGlmIChnYXAgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGdhcCA9IE1hdGguZmxvb3IoZ2FwKTtcbiAgICAgICAgdGhpcy5fbWludXRlc0dhcCA9IGdhcCA8PSA1OSA/IGdhcCA6IDE7XG4gICAgfVxuXG4gICAgZ2V0IG1pbnV0ZXNHYXAoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbnV0ZXNHYXA7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgZGVmYXVsdFRpbWUodGltZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdFRpbWUodGltZSk7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpIHRpbWVTZXQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBAT3V0cHV0KCkgb3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxudWxsPigpO1xuICAgIEBPdXRwdXQoKSBjbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bGw+KCk7XG4gICAgQE91dHB1dCgpIGhvdXJTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgQFZpZXdDaGlsZCgndGltZXBpY2tlcnd3JykgdGltZXBpY2tlckNvbXBvbmVudDogRWxlbWVudFJlZjtcblxuICAgIHByaXZhdGUgX21pbnV0ZXNHYXA6IG51bWJlcjtcbiAgICBwcml2YXRlIHRpbWVwaWNrZXJJbnB1dDogVGltZXBpY2tlckRpcmVjdGl2ZTtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRpbWVwaWNrZXJTZXJ2aWNlOiBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZXZlbnRTZXJ2aWNlOiBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJFdmVudFNlcnZpY2UpIHtcblxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChtZXJnZSh0aGlzLmV2ZW50U2VydmljZS5iYWNrZHJvcENsaWNrLFxuICAgICAgICAgICAgdGhpcy5ldmVudFNlcnZpY2Uua2V5ZG93bkV2ZW50LnBpcGUoZmlsdGVyKGUgPT4gZS5rZXlDb2RlID09PSBFU0NBUEUgJiYgdGhpcy5pc0VzYykpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlKCkpKTtcblxuICAgIH1cblxuICAgIGdldCBtaW5UaW1lKCk6IHN0cmluZyB8IE1vbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVwaWNrZXJJbnB1dCAmJiB0aGlzLnRpbWVwaWNrZXJJbnB1dC5taW47XG4gICAgfVxuXG4gICAgZ2V0IG1heFRpbWUoKTogc3RyaW5nIHwgTW9tZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXBpY2tlcklucHV0ICYmIHRoaXMudGltZXBpY2tlcklucHV0Lm1heDtcbiAgICB9XG5cbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVwaWNrZXJJbnB1dCAmJiB0aGlzLnRpbWVwaWNrZXJJbnB1dC5kaXNhYmxlZDtcbiAgICB9XG5cbiAgICBnZXQgZm9ybWF0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVwaWNrZXJJbnB1dCAmJiB0aGlzLnRpbWVwaWNrZXJJbnB1dC5mb3JtYXQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMudGltZXBpY2tlclNlcnZpY2Uuc2VsZWN0ZWRIb3VyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGhvdXIgPT4gdGhpcy5zZWxlY3RlZEhvdXIgPSBob3VyKSk7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy50aW1lcGlja2VyU2VydmljZS5zZWxlY3RlZE1pbnV0ZVxuICAgICAgICAgICAgLnN1YnNjcmliZShtaW51dGUgPT4gdGhpcy5zZWxlY3RlZE1pbnV0ZSA9IG1pbnV0ZSkpO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMudGltZXBpY2tlclNlcnZpY2Uuc2VsZWN0ZWRQZXJpb2RcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocGVyaW9kID0+IHRoaXMuc2VsZWN0ZWRQZXJpb2QgPSBwZXJpb2QpKTtcbiAgICB9XG5cbiAgICAvKioqXG4gICAgICogUmVnaXN0ZXIgYW4gaW5wdXQgd2l0aCB0aGlzIHRpbWVwaWNrZXIuXG4gICAgICogaW5wdXQgLSBUaGUgdGltZXBpY2tlciBpbnB1dCB0byByZWdpc3RlciB3aXRoIHRoaXMgdGltZXBpY2tlclxuICAgICAqL1xuICAgIHJlZ2lzdGVySW5wdXQoaW5wdXQ6IFRpbWVwaWNrZXJEaXJlY3RpdmUpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudGltZXBpY2tlcklucHV0KSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignQSBUaW1lcGlja2VyIGNhbiBvbmx5IGJlIGFzc29jaWF0ZWQgd2l0aCBhIHNpbmdsZSBpbnB1dC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbWVwaWNrZXJJbnB1dCA9IGlucHV0O1xuICAgIH1cblxuICAgIG9uSG91ckNoYW5nZShob3VyOiBDbG9ja0ZhY2VUaW1lKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGltZXBpY2tlclNlcnZpY2UuaG91ciA9IGhvdXI7XG4gICAgfVxuXG4gICAgb25Ib3VyU2VsZWN0ZWQoaG91cjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hhbmdlVGltZVVuaXQoVGltZVVuaXQuTUlOVVRFKTtcbiAgICAgICAgdGhpcy5ob3VyU2VsZWN0ZWQubmV4dChob3VyKTtcbiAgICB9XG5cbiAgICBvbk1pbnV0ZUNoYW5nZShtaW51dGU6IENsb2NrRmFjZVRpbWUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aW1lcGlja2VyU2VydmljZS5taW51dGUgPSBtaW51dGU7XG4gICAgfVxuXG4gICAgY2hhbmdlUGVyaW9kKHBlcmlvZDogVGltZVBlcmlvZCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRpbWVwaWNrZXJTZXJ2aWNlLnBlcmlvZCA9IHBlcmlvZDtcbiAgICB9XG5cbiAgICBjaGFuZ2VUaW1lVW5pdCh1bml0OiBUaW1lVW5pdCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFjdGl2ZVRpbWVVbml0ID0gdW5pdDtcbiAgICB9XG5cbiAgICBzZXRUaW1lKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRpbWVTZXQubmV4dCh0aGlzLnRpbWVwaWNrZXJTZXJ2aWNlLmdldEZ1bGxUaW1lKHRoaXMuZm9ybWF0KSk7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBzZXREZWZhdWx0VGltZSh0aW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aW1lcGlja2VyU2VydmljZS5zZXREZWZhdWx0VGltZUlmQXZhaWxhYmxlKFxuICAgICAgICAgICAgdGltZSwgdGhpcy5taW5UaW1lIGFzIE1vbWVudCwgdGhpcy5tYXhUaW1lIGFzIE1vbWVudCwgdGhpcy5mb3JtYXQsIHRoaXMubWludXRlc0dhcCk7XG4gICAgfVxuXG4gICAgb3BlbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc09wZW5lZCA9IHRydWU7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSBBbmltYXRpb25TdGF0ZS5FTlRFUjtcbiAgICAgICAgdGhpcy5vcGVuZWQubmV4dCgpO1xuICAgIH1cblxuICAgIGNsb3NlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gQW5pbWF0aW9uU3RhdGUuTEVBVkU7XG4gICAgfVxuXG4gICAgYW5pbWF0aW9uRG9uZShldmVudDogQW5pbWF0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGV2ZW50LnBoYXNlTmFtZSA9PT0gJ2RvbmUnICYmIGV2ZW50LnRvU3RhdGUgPT09IEFuaW1hdGlvblN0YXRlLkxFQVZFKSB7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbmVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVRpbWVVbml0ID0gVGltZVVuaXQuSE9VUjtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VkLm5leHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICAgIG9uS2V5ZG93bihlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIHRoaXMuZXZlbnRTZXJ2aWNlLmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19