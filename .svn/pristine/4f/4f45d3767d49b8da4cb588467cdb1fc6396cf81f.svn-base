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
var AnimationState = {
    ENTER: 'enter',
    LEAVE: 'leave',
};
export { AnimationState };
/** @type {?} */
var ESCAPE = 27;
var NgxMaterialTimepickerComponent = /** @class */ (function () {
    function NgxMaterialTimepickerComponent(timepickerService, eventService) {
        var _this = this;
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
        this.subscriptions.push(merge(this.eventService.backdropClick, this.eventService.keydownEvent.pipe(filter(function (e) { return e.keyCode === ESCAPE && _this.isEsc; })))
            .subscribe(function () { return _this.close(); }));
    }
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "minutesGap", {
        get: /**
         * @return {?}
         */
        function () {
            return this._minutesGap;
        },
        set: /**
         * @param {?} gap
         * @return {?}
         */
        function (gap) {
            if (gap == null) {
                return;
            }
            gap = Math.floor(gap);
            this._minutesGap = gap <= 59 ? gap : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "defaultTime", {
        set: /**
         * @param {?} time
         * @return {?}
         */
        function (time) {
            this.setDefaultTime(time);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "minTime", {
        get: /**
         * @return {?}
         */
        function () {
            return this.timepickerInput && this.timepickerInput.min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "maxTime", {
        get: /**
         * @return {?}
         */
        function () {
            return this.timepickerInput && this.timepickerInput.max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.timepickerInput && this.timepickerInput.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "format", {
        get: /**
         * @return {?}
         */
        function () {
            return this.timepickerInput && this.timepickerInput.format;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxMaterialTimepickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscriptions.push(this.timepickerService.selectedHour
            .subscribe(function (hour) { return _this.selectedHour = hour; }));
        this.subscriptions.push(this.timepickerService.selectedMinute
            .subscribe(function (minute) { return _this.selectedMinute = minute; }));
        this.subscriptions.push(this.timepickerService.selectedPeriod
            .subscribe(function (period) { return _this.selectedPeriod = period; }));
    };
    /***
     * Register an input with this timepicker.
     * input - The timepicker input to register with this timepicker
     */
    /**
     *
     * Register an input with this timepicker.
     * input - The timepicker input to register with this timepicker
     * @param {?} input
     * @return {?}
     */
    NgxMaterialTimepickerComponent.prototype.registerInput = /**
     *
     * Register an input with this timepicker.
     * input - The timepicker input to register with this timepicker
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (this.timepickerInput) {
            throw Error('A Timepicker can only be associated with a single input.');
        }
        this.timepickerInput = input;
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    NgxMaterialTimepickerComponent.prototype.onHourChange = /**
     * @param {?} hour
     * @return {?}
     */
    function (hour) {
        this.timepickerService.hour = hour;
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    NgxMaterialTimepickerComponent.prototype.onHourSelected = /**
     * @param {?} hour
     * @return {?}
     */
    function (hour) {
        this.changeTimeUnit(TimeUnit.MINUTE);
        this.hourSelected.next(hour);
    };
    /**
     * @param {?} minute
     * @return {?}
     */
    NgxMaterialTimepickerComponent.prototype.onMinuteChange = /**
     * @param {?} minute
     * @return {?}
     */
    function (minute) {
        this.timepickerService.minute = minute;
    };
    /**
     * @param {?} period
     * @return {?}
     */
    NgxMaterialTimepickerComponent.prototype.changePeriod = /**
     * @param {?} period
     * @return {?}
     */
    function (period) {
        this.timepickerService.period = period;
    };
    /**
     * @param {?} unit
     * @return {?}
     */
    NgxMaterialTimepickerComponent.prototype.changeTimeUnit = /**
     * @param {?} unit
     * @return {?}
     */
    function (unit) {
        this.activeTimeUnit = unit;
    };
    /**
     * @return {?}
     */
    NgxMaterialTimepickerComponent.prototype.setTime = /**
     * @return {?}
     */
    function () {
        this.timeSet.next(this.timepickerService.getFullTime(this.format));
        this.close();
    };
    /**
     * @param {?} time
     * @return {?}
     */
    NgxMaterialTimepickerComponent.prototype.setDefaultTime = /**
     * @param {?} time
     * @return {?}
     */
    function (time) {
        this.timepickerService.setDefaultTimeIfAvailable(time, (/** @type {?} */ (this.minTime)), (/** @type {?} */ (this.maxTime)), this.format, this.minutesGap);
    };
    /**
     * @return {?}
     */
    NgxMaterialTimepickerComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.isOpened = true;
        this.animationState = AnimationState.ENTER;
        this.opened.next();
    };
    /**
     * @return {?}
     */
    NgxMaterialTimepickerComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.animationState = AnimationState.LEAVE;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxMaterialTimepickerComponent.prototype.animationDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.phaseName === 'done' && event.toState === AnimationState.LEAVE) {
            this.isOpened = false;
            this.activeTimeUnit = TimeUnit.HOUR;
            this.closed.next();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxMaterialTimepickerComponent.prototype.onKeydown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.eventService.dispatchEvent(e);
        e.stopPropagation();
    };
    /**
     * @return {?}
     */
    NgxMaterialTimepickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    NgxMaterialTimepickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-material-timepicker',
                    template: "<div class=\"timepicker-backdrop-overlay\" *ngIf=\"isOpened\" [overlay]=\"preventOverlayClick\"></div>\n<div class=\"timepicker-overlay\" *ngIf=\"isOpened\">\n    <div class=\"timepicker\" [@timepicker]=\"animationState\" (@timepicker.done)=\"animationDone($event)\" #timepicker>\n        <header class=\"timepicker__header\">\n            <ngx-material-timepicker-dial [format]=\"format\" [hour]=\"selectedHour?.time\"\n                                          [minute]=\"selectedMinute?.time\"\n                                          [period]=\"selectedPeriod\" [activeTimeUnit]=\"activeTimeUnit\"\n                                          [minTime]=\"minTime\" [maxTime]=\"maxTime\"\n                                          [isEditable]=\"enableKeyboardInput\"\n                                          [editableHintTmpl]=\"editableHintTmpl\"\n                                          [minutesGap]=\"minutesGap\"\n                                          (periodChanged)=\"changePeriod($event)\"\n                                          (timeUnitChanged)=\"changeTimeUnit($event)\"\n                                          (hourChanged)=\"onHourChange($event)\"\n                                          (minuteChanged)=\"onMinuteChange($event)\"\n            ></ngx-material-timepicker-dial>\n        </header>\n        <div class=\"timepicker__main-content\">\n            <div class=\"timepicker__body\" [ngSwitch]=\"activeTimeUnit\">\n                <div *ngSwitchCase=\"timeUnit.HOUR\">\n                    <ngx-material-timepicker-24-hours-face *ngIf=\"format === 24;else ampmHours\"\n                                                           (hourChange)=\"onHourChange($event)\"\n                                                           [selectedHour]=\"selectedHour\"\n                                                           [minTime]=\"minTime\"\n                                                           [maxTime]=\"maxTime\"\n                                                           [format]=\"format\"\n                                                           (hourSelected)=\"onHourSelected($event)\"></ngx-material-timepicker-24-hours-face>\n                    <ng-template #ampmHours>\n                        <ngx-material-timepicker-12-hours-face\n                            (hourChange)=\"onHourChange($event)\"\n                            [selectedHour]=\"selectedHour\"\n                            [period]=\"selectedPeriod\"\n                            [minTime]=\"minTime\"\n                            [maxTime]=\"maxTime\"\n                            (hourSelected)=\"onHourSelected($event)\"></ngx-material-timepicker-12-hours-face>\n                    </ng-template>\n                </div>\n                <ngx-material-timepicker-minutes-face *ngSwitchCase=\"timeUnit.MINUTE\"\n                                                      [selectedMinute]=\"selectedMinute\"\n                                                      [selectedHour]=\"selectedHour?.time\"\n                                                      [minTime]=\"minTime\"\n                                                      [maxTime]=\"maxTime\"\n                                                      [format]=\"format\"\n                                                      [period]=\"selectedPeriod\"\n                                                      [minutesGap]=\"minutesGap\"\n                                                      (minuteChange)=\"onMinuteChange($event)\"></ngx-material-timepicker-minutes-face>\n            </div>\n            <div class=\"timepicker__actions\">\n                <div (click)=\"close()\">\n                    <!--suppress HtmlUnknownAttribute -->\n                    <ng-container *ngTemplateOutlet=\"cancelBtnTmpl ? cancelBtnTmpl : cancelBtnDefault\"></ng-container>\n                </div>\n                <div (click)=\"setTime()\">\n                    <!--suppress HtmlUnknownAttribute -->\n                    <ng-container\n                        *ngTemplateOutlet=\"confirmBtnTmpl ? confirmBtnTmpl : confirmBtnDefault\"></ng-container>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<ng-template #cancelBtnDefault>\n    <ngx-material-timepicker-button>Cancel</ngx-material-timepicker-button>\n</ng-template>\n<ng-template #confirmBtnDefault>\n    <ngx-material-timepicker-button>Ok</ngx-material-timepicker-button>\n</ng-template>\n",
                    animations: [
                        trigger('timepicker', [
                            transition("* => " + AnimationState.ENTER, [
                                style({ transform: 'translateY(-30%)' }),
                                animate('0.2s ease-out', style({ transform: 'translateY(0)' }))
                            ]),
                            transition(AnimationState.ENTER + " => " + AnimationState.LEAVE, [
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
    NgxMaterialTimepickerComponent.ctorParameters = function () { return [
        { type: NgxMaterialTimepickerService },
        { type: NgxMaterialTimepickerEventService }
    ]; };
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
    return NgxMaterialTimepickerComponent;
}());
export { NgxMaterialTimepickerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21hdGVyaWFsLXRpbWVwaWNrZXIvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHNUksT0FBTyxFQUFFLEtBQUssRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDMUYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQWtCLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDckcsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7SUFLcEMsT0FBUSxPQUFPO0lBQ2YsT0FBUSxPQUFPOzs7O0lBSWIsTUFBTSxHQUFHLEVBQUU7QUFFakI7SUFrRUksd0NBQW9CLGlCQUErQyxFQUMvQyxZQUErQztRQURuRSxpQkFPQztRQVBtQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQThCO1FBQy9DLGlCQUFZLEdBQVosWUFBWSxDQUFtQztRQTNDbkUsYUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNwQixtQkFBYyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFFL0IsYUFBUSxHQUFHLEtBQUssQ0FBQztRQU1ILFVBQUssR0FBRyxJQUFJLENBQUM7UUFzQmpCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3JDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ2xDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ2xDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQU01QyxrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFLdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUN6RCxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sS0FBSyxNQUFNLElBQUksS0FBSSxDQUFDLEtBQUssRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDLENBQUM7YUFDcEYsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFFLEVBQVosQ0FBWSxDQUFDLENBQUMsQ0FBQztJQUV4QyxDQUFDO0lBcENELHNCQUNJLHNEQUFVOzs7O1FBUWQ7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzs7Ozs7UUFYRCxVQUNlLEdBQVc7WUFDdEIsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUNiLE9BQU87YUFDVjtZQUNELEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7SUFNRCxzQkFDSSx1REFBVzs7Ozs7UUFEZixVQUNnQixJQUFZO1lBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFzQkQsc0JBQUksbURBQU87Ozs7UUFBWDtZQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQztRQUM1RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG1EQUFPOzs7O1FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUM7UUFDNUQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvREFBUTs7OztRQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO1FBQ2pFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0RBQU07Ozs7UUFBVjtZQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztRQUMvRCxDQUFDOzs7T0FBQTs7OztJQUVELGlEQUFROzs7SUFBUjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVk7YUFDdEQsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEVBQXhCLENBQXdCLENBQUMsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjO2FBQ3hELFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxFQUE1QixDQUE0QixDQUFDLENBQUMsQ0FBQztRQUV4RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYzthQUN4RCxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7SUFDSCxzREFBYTs7Ozs7OztJQUFiLFVBQWMsS0FBMEI7UUFDcEMsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RCLE1BQU0sS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7U0FDM0U7UUFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELHFEQUFZOzs7O0lBQVosVUFBYSxJQUFtQjtRQUM1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVELHVEQUFjOzs7O0lBQWQsVUFBZSxJQUFZO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsdURBQWM7Ozs7SUFBZCxVQUFlLE1BQXFCO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQscURBQVk7Ozs7SUFBWixVQUFhLE1BQWtCO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsdURBQWM7Ozs7SUFBZCxVQUFlLElBQWM7UUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELGdEQUFPOzs7SUFBUDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7O0lBRUQsdURBQWM7Ozs7SUFBZCxVQUFlLElBQVk7UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixDQUM1QyxJQUFJLEVBQUUsbUJBQUEsSUFBSSxDQUFDLE9BQU8sRUFBVSxFQUFFLG1CQUFBLElBQUksQ0FBQyxPQUFPLEVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1RixDQUFDOzs7O0lBRUQsNkNBQUk7OztJQUFKO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELDhDQUFLOzs7SUFBTDtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVELHNEQUFhOzs7O0lBQWIsVUFBYyxLQUFxQjtRQUMvQixJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssY0FBYyxDQUFDLEtBQUssRUFBRTtZQUN0RSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN0QjtJQUNMLENBQUM7Ozs7O0lBR0Qsa0RBQVM7Ozs7SUFEVCxVQUNVLENBQWdCO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsb0RBQVc7OztJQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxZQUFZLElBQUksT0FBQSxZQUFZLENBQUMsV0FBVyxFQUFFLEVBQTFCLENBQTBCLENBQUMsQ0FBQztJQUMzRSxDQUFDOztnQkExS0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLDAzSUFBdUQ7b0JBRXZELFVBQVUsRUFBRTt3QkFDUixPQUFPLENBQUMsWUFBWSxFQUFFOzRCQUNsQixVQUFVLENBQUMsVUFBUSxjQUFjLENBQUMsS0FBTyxFQUFFO2dDQUN2QyxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQztnQ0FDdEMsT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFDLENBQUMsQ0FBQzs2QkFDaEUsQ0FBQzs0QkFDRixVQUFVLENBQUksY0FBYyxDQUFDLEtBQUssWUFBTyxjQUFjLENBQUMsS0FBTyxFQUFFO2dDQUM3RCxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQztnQ0FDL0MsT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7NkJBQy9FLENBQUM7eUJBQ0wsQ0FBQztxQkFDTDtvQkFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQzs7aUJBQzVDOzs7O2dCQWpDUSw0QkFBNEI7Z0JBRzVCLGlDQUFpQzs7O2dDQTJDckMsS0FBSzttQ0FDTCxLQUFLO2lDQUNMLEtBQUs7d0JBQ0wsS0FBSyxTQUFDLEtBQUs7c0NBQ1gsS0FBSztzQ0FDTCxLQUFLOzZCQUVMLEtBQUs7OEJBYUwsS0FBSzswQkFLTCxNQUFNO3lCQUNOLE1BQU07eUJBQ04sTUFBTTsrQkFDTixNQUFNO3NDQUVOLFNBQVMsU0FBQyxjQUFjOzRCQXNHeEIsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFTdkMscUNBQUM7Q0FBQSxBQTNLRCxJQTJLQztTQXpKWSw4QkFBOEI7OztJQUV2QyxzREFBNEI7O0lBQzVCLHdEQUE4Qjs7SUFDOUIsd0RBQTJCOztJQUUzQixrREFBb0I7O0lBQ3BCLHdEQUErQjs7SUFFL0Isa0RBQWlCOztJQUNqQix3REFBK0I7O0lBRS9CLHVEQUEwQzs7SUFDMUMsMERBQTZDOztJQUM3Qyx3REFBMkM7O0lBQzNDLCtDQUEyQjs7SUFDM0IsNkRBQXNDOztJQUN0Qyw2REFBc0M7O0lBb0J0QyxpREFBK0M7O0lBQy9DLGdEQUE0Qzs7SUFDNUMsZ0RBQTRDOztJQUM1QyxzREFBb0Q7O0lBRXBELDZEQUEyRDs7Ozs7SUFFM0QscURBQTRCOzs7OztJQUM1Qix5REFBNkM7Ozs7O0lBQzdDLHVEQUEyQzs7Ozs7SUFFL0IsMkRBQXVEOzs7OztJQUN2RCxzREFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2xvY2tGYWNlVGltZSB9IGZyb20gJy4vbW9kZWxzL2Nsb2NrLWZhY2UtdGltZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVGltZVBlcmlvZCB9IGZyb20gJy4vbW9kZWxzL3RpbWUtcGVyaW9kLmVudW0nO1xuaW1wb3J0IHsgbWVyZ2UsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmd4TWF0ZXJpYWxUaW1lcGlja2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBUaW1lVW5pdCB9IGZyb20gJy4vbW9kZWxzL3RpbWUtdW5pdC5lbnVtJztcbmltcG9ydCB7IGFuaW1hdGUsIEFuaW1hdGlvbkV2ZW50LCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTmd4TWF0ZXJpYWxUaW1lcGlja2VyRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRpbWVwaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmd4LXRpbWVwaWNrZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1vbWVudCB9IGZyb20gJ21vbWVudCc7XG5cbmV4cG9ydCBlbnVtIEFuaW1hdGlvblN0YXRlIHtcbiAgICBFTlRFUiA9ICdlbnRlcicsXG4gICAgTEVBVkUgPSAnbGVhdmUnXG59XG5cblxuY29uc3QgRVNDQVBFID0gMjc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ3RpbWVwaWNrZXInLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKGAqID0+ICR7QW5pbWF0aW9uU3RhdGUuRU5URVJ9YCwgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0zMCUpJ30pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzAuMnMgZWFzZS1vdXQnLCBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKSd9KSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbihgJHtBbmltYXRpb25TdGF0ZS5FTlRFUn0gPT4gJHtBbmltYXRpb25TdGF0ZS5MRUFWRX1gLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknLCBvcGFjaXR5OiAxfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMC4ycyBlYXNlLW91dCcsIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0zMCUpJywgb3BhY2l0eTogMH0pKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW05neE1hdGVyaWFsVGltZXBpY2tlclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE5neE1hdGVyaWFsVGltZXBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIHNlbGVjdGVkSG91cjogQ2xvY2tGYWNlVGltZTtcbiAgICBzZWxlY3RlZE1pbnV0ZTogQ2xvY2tGYWNlVGltZTtcbiAgICBzZWxlY3RlZFBlcmlvZDogVGltZVBlcmlvZDtcblxuICAgIHRpbWVVbml0ID0gVGltZVVuaXQ7XG4gICAgYWN0aXZlVGltZVVuaXQgPSBUaW1lVW5pdC5IT1VSO1xuXG4gICAgaXNPcGVuZWQgPSBmYWxzZTtcbiAgICBhbmltYXRpb25TdGF0ZTogQW5pbWF0aW9uU3RhdGU7XG5cbiAgICBASW5wdXQoKSBjYW5jZWxCdG5UbXBsOiBUZW1wbGF0ZVJlZjxOb2RlPjtcbiAgICBASW5wdXQoKSBlZGl0YWJsZUhpbnRUbXBsOiBUZW1wbGF0ZVJlZjxOb2RlPjtcbiAgICBASW5wdXQoKSBjb25maXJtQnRuVG1wbDogVGVtcGxhdGVSZWY8Tm9kZT47XG4gICAgQElucHV0KCdFU0MnKSBpc0VzYyA9IHRydWU7XG4gICAgQElucHV0KCkgZW5hYmxlS2V5Ym9hcmRJbnB1dDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBwcmV2ZW50T3ZlcmxheUNsaWNrOiBib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBzZXQgbWludXRlc0dhcChnYXA6IG51bWJlcikge1xuICAgICAgICBpZiAoZ2FwID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBnYXAgPSBNYXRoLmZsb29yKGdhcCk7XG4gICAgICAgIHRoaXMuX21pbnV0ZXNHYXAgPSBnYXAgPD0gNTkgPyBnYXAgOiAxO1xuICAgIH1cblxuICAgIGdldCBtaW51dGVzR2FwKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9taW51dGVzR2FwO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGRlZmF1bHRUaW1lKHRpbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNldERlZmF1bHRUaW1lKHRpbWUpO1xuICAgIH1cblxuICAgIEBPdXRwdXQoKSB0aW1lU2V0ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICAgQE91dHB1dCgpIG9wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVsbD4oKTtcbiAgICBAT3V0cHV0KCkgY2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxudWxsPigpO1xuICAgIEBPdXRwdXQoKSBob3VyU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAgIEBWaWV3Q2hpbGQoJ3RpbWVwaWNrZXJ3dycpIHRpbWVwaWNrZXJDb21wb25lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgICBwcml2YXRlIF9taW51dGVzR2FwOiBudW1iZXI7XG4gICAgcHJpdmF0ZSB0aW1lcGlja2VySW5wdXQ6IFRpbWVwaWNrZXJEaXJlY3RpdmU7XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0aW1lcGlja2VyU2VydmljZTogTmd4TWF0ZXJpYWxUaW1lcGlja2VyU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGV2ZW50U2VydmljZTogTmd4TWF0ZXJpYWxUaW1lcGlja2VyRXZlbnRTZXJ2aWNlKSB7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2gobWVyZ2UodGhpcy5ldmVudFNlcnZpY2UuYmFja2Ryb3BDbGljayxcbiAgICAgICAgICAgIHRoaXMuZXZlbnRTZXJ2aWNlLmtleWRvd25FdmVudC5waXBlKGZpbHRlcihlID0+IGUua2V5Q29kZSA9PT0gRVNDQVBFICYmIHRoaXMuaXNFc2MpKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZSgpKSk7XG5cbiAgICB9XG5cbiAgICBnZXQgbWluVGltZSgpOiBzdHJpbmcgfCBNb21lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy50aW1lcGlja2VySW5wdXQgJiYgdGhpcy50aW1lcGlja2VySW5wdXQubWluO1xuICAgIH1cblxuICAgIGdldCBtYXhUaW1lKCk6IHN0cmluZyB8IE1vbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVwaWNrZXJJbnB1dCAmJiB0aGlzLnRpbWVwaWNrZXJJbnB1dC5tYXg7XG4gICAgfVxuXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50aW1lcGlja2VySW5wdXQgJiYgdGhpcy50aW1lcGlja2VySW5wdXQuZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgZ2V0IGZvcm1hdCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy50aW1lcGlja2VySW5wdXQgJiYgdGhpcy50aW1lcGlja2VySW5wdXQuZm9ybWF0O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLnRpbWVwaWNrZXJTZXJ2aWNlLnNlbGVjdGVkSG91clxuICAgICAgICAgICAgLnN1YnNjcmliZShob3VyID0+IHRoaXMuc2VsZWN0ZWRIb3VyID0gaG91cikpO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMudGltZXBpY2tlclNlcnZpY2Uuc2VsZWN0ZWRNaW51dGVcbiAgICAgICAgICAgIC5zdWJzY3JpYmUobWludXRlID0+IHRoaXMuc2VsZWN0ZWRNaW51dGUgPSBtaW51dGUpKTtcblxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLnRpbWVwaWNrZXJTZXJ2aWNlLnNlbGVjdGVkUGVyaW9kXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHBlcmlvZCA9PiB0aGlzLnNlbGVjdGVkUGVyaW9kID0gcGVyaW9kKSk7XG4gICAgfVxuXG4gICAgLyoqKlxuICAgICAqIFJlZ2lzdGVyIGFuIGlucHV0IHdpdGggdGhpcyB0aW1lcGlja2VyLlxuICAgICAqIGlucHV0IC0gVGhlIHRpbWVwaWNrZXIgaW5wdXQgdG8gcmVnaXN0ZXIgd2l0aCB0aGlzIHRpbWVwaWNrZXJcbiAgICAgKi9cbiAgICByZWdpc3RlcklucHV0KGlucHV0OiBUaW1lcGlja2VyRGlyZWN0aXZlKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVwaWNrZXJJbnB1dCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0EgVGltZXBpY2tlciBjYW4gb25seSBiZSBhc3NvY2lhdGVkIHdpdGggYSBzaW5nbGUgaW5wdXQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aW1lcGlja2VySW5wdXQgPSBpbnB1dDtcbiAgICB9XG5cbiAgICBvbkhvdXJDaGFuZ2UoaG91cjogQ2xvY2tGYWNlVGltZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnRpbWVwaWNrZXJTZXJ2aWNlLmhvdXIgPSBob3VyO1xuICAgIH1cblxuICAgIG9uSG91clNlbGVjdGVkKGhvdXI6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmNoYW5nZVRpbWVVbml0KFRpbWVVbml0Lk1JTlVURSk7XG4gICAgICAgIHRoaXMuaG91clNlbGVjdGVkLm5leHQoaG91cik7XG4gICAgfVxuXG4gICAgb25NaW51dGVDaGFuZ2UobWludXRlOiBDbG9ja0ZhY2VUaW1lKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGltZXBpY2tlclNlcnZpY2UubWludXRlID0gbWludXRlO1xuICAgIH1cblxuICAgIGNoYW5nZVBlcmlvZChwZXJpb2Q6IFRpbWVQZXJpb2QpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aW1lcGlja2VyU2VydmljZS5wZXJpb2QgPSBwZXJpb2Q7XG4gICAgfVxuXG4gICAgY2hhbmdlVGltZVVuaXQodW5pdDogVGltZVVuaXQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmVUaW1lVW5pdCA9IHVuaXQ7XG4gICAgfVxuXG4gICAgc2V0VGltZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aW1lU2V0Lm5leHQodGhpcy50aW1lcGlja2VyU2VydmljZS5nZXRGdWxsVGltZSh0aGlzLmZvcm1hdCkpO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgc2V0RGVmYXVsdFRpbWUodGltZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGltZXBpY2tlclNlcnZpY2Uuc2V0RGVmYXVsdFRpbWVJZkF2YWlsYWJsZShcbiAgICAgICAgICAgIHRpbWUsIHRoaXMubWluVGltZSBhcyBNb21lbnQsIHRoaXMubWF4VGltZSBhcyBNb21lbnQsIHRoaXMuZm9ybWF0LCB0aGlzLm1pbnV0ZXNHYXApO1xuICAgIH1cblxuICAgIG9wZW4oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNPcGVuZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gQW5pbWF0aW9uU3RhdGUuRU5URVI7XG4gICAgICAgIHRoaXMub3BlbmVkLm5leHQoKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IEFuaW1hdGlvblN0YXRlLkxFQVZFO1xuICAgIH1cblxuICAgIGFuaW1hdGlvbkRvbmUoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmIChldmVudC5waGFzZU5hbWUgPT09ICdkb25lJyAmJiBldmVudC50b1N0YXRlID09PSBBbmltYXRpb25TdGF0ZS5MRUFWRSkge1xuICAgICAgICAgICAgdGhpcy5pc09wZW5lZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVUaW1lVW5pdCA9IFRpbWVVbml0LkhPVVI7XG4gICAgICAgICAgICB0aGlzLmNsb3NlZC5uZXh0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgICBvbktleWRvd24oZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICB0aGlzLmV2ZW50U2VydmljZS5kaXNwYXRjaEV2ZW50KGUpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzdWJzY3JpcHRpb24gPT4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiJdfQ==