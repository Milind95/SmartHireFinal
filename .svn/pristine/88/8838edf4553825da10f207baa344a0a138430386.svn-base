/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { TimePeriod } from '../../models/time-period.enum';
import { TimeUnit } from '../../models/time-unit.enum';
import { TimepickerTime } from '../../timepicker-time.namespace';
var NgxMaterialTimepickerDialComponent = /** @class */ (function () {
    function NgxMaterialTimepickerDialComponent() {
        this.timeUnit = TimeUnit;
        this.periodChanged = new EventEmitter();
        this.timeUnitChanged = new EventEmitter();
        this.hourChanged = new EventEmitter();
        this.minuteChanged = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxMaterialTimepickerDialComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['period'] && changes['period'].currentValue
            || changes['format'] && changes['format'].currentValue) {
            /** @type {?} */
            var hours = TimepickerTime.getHours(this.format);
            this.hours = TimepickerTime.disableHours(hours, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
        if (changes['period'] && changes['period'].currentValue
            || changes['hour'] && changes['hour'].currentValue) {
            /** @type {?} */
            var minutes = TimepickerTime.getMinutes(this.minutesGap);
            this.minutes = TimepickerTime.disableMinutes(minutes, +this.hour, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    };
    /**
     * @param {?} unit
     * @return {?}
     */
    NgxMaterialTimepickerDialComponent.prototype.changeTimeUnit = /**
     * @param {?} unit
     * @return {?}
     */
    function (unit) {
        this.timeUnitChanged.next(unit);
    };
    /**
     * @param {?} period
     * @return {?}
     */
    NgxMaterialTimepickerDialComponent.prototype.changePeriod = /**
     * @param {?} period
     * @return {?}
     */
    function (period) {
        this.periodChanged.next(period);
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    NgxMaterialTimepickerDialComponent.prototype.changeHour = /**
     * @param {?} hour
     * @return {?}
     */
    function (hour) {
        this.hourChanged.next(hour);
    };
    /**
     * @param {?} minute
     * @return {?}
     */
    NgxMaterialTimepickerDialComponent.prototype.changeMinute = /**
     * @param {?} minute
     * @return {?}
     */
    function (minute) {
        this.minuteChanged.next(minute);
    };
    /**
     * @return {?}
     */
    NgxMaterialTimepickerDialComponent.prototype.showHint = /**
     * @return {?}
     */
    function () {
        this.isHintVisible = true;
    };
    /**
     * @return {?}
     */
    NgxMaterialTimepickerDialComponent.prototype.hideHint = /**
     * @return {?}
     */
    function () {
        this.isHintVisible = false;
    };
    NgxMaterialTimepickerDialComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-material-timepicker-dial',
                    template: "<div class=\"timepicker-dial\">\n    <div class=\"timepicker-dial__container\">\n        <div class=\"timepicker-dial__time\">\n            <ngx-material-timepicker-dial-control [timeList]=\"hours\" [time]=\"hour\" [timeUnit]=\"timeUnit.HOUR\"\n                                                  [isActive]=\"activeTimeUnit === timeUnit.HOUR\"\n                                                  [isEditable]=\"isEditable\"\n                                                  (timeUnitChanged)=\"changeTimeUnit($event)\"\n                                                  (timeChanged)=\"changeHour($event)\"\n                                                  (focused)=\"showHint()\"\n                                                  (unfocused)=\"hideHint()\">\n\n            </ngx-material-timepicker-dial-control>\n            <span>:</span>\n            <ngx-material-timepicker-dial-control [timeList]=\"minutes\" [time]=\"minute\" [timeUnit]=\"timeUnit.MINUTE\"\n                                                  [isActive]=\"activeTimeUnit === timeUnit.MINUTE\"\n                                                  [isEditable]=\"isEditable\"\n                                                  [minutesGap]=\"minutesGap\"\n                                                  (timeUnitChanged)=\"changeTimeUnit($event)\"\n                                                  (timeChanged)=\"changeMinute($event)\"\n                                                  (focused)=\"showHint()\"\n                                                  (unfocused)=\"hideHint()\">\n\n            </ngx-material-timepicker-dial-control>\n        </div>\n        <ngx-material-timepicker-period class=\"timepicker-dial__period\"\n                                        [ngClass]=\"{'timepicker-dial__period--hidden': format === 24}\"\n                                        [selectedPeriod]=\"period\" [activeTimeUnit]=\"activeTimeUnit\"\n                                        [maxTime]=\"maxTime\" [minTime]=\"minTime\" [format]=\"format\"\n                                        [hours]=\"hours\" [minutes]=\"minutes\" [selectedHour]=\"hour\"\n                                        (periodChanged)=\"changePeriod($event)\"></ngx-material-timepicker-period>\n    </div>\n    <div *ngIf=\"isEditable\" [ngClass]=\"{'timepicker-dial__hint-container--hidden': !isHintVisible}\">\n        <!--suppress HtmlUnknownAttribute -->\n        <ng-container *ngTemplateOutlet=\"editableHintTmpl ? editableHintTmpl : editableHintDefault\"></ng-container>\n        <ng-template #editableHintDefault>\n            <small class=\"timepicker-dial__hint\"> * use arrows (<span>&#8645;</span>) to change the time</small>\n        </ng-template>\n    </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".timepicker-dial{text-align:right}.timepicker-dial__container{display:flex;align-items:center;justify-content:flex-end;-webkit-tap-highlight-color:transparent}.timepicker-dial__time{display:flex;align-items:baseline;line-height:normal;font-size:50px;color:rgba(255,255,255,.5);font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-dial__time{font-family:var(--primary-font-family);color:var(--dial-inactive-color)}}.timepicker-dial__period{display:block;margin-left:10px}.timepicker-dial__hint-container--hidden,.timepicker-dial__period--hidden{visibility:hidden}.timepicker-dial__hint{display:inline-block;font-size:10px;color:#fff}@supports (color:var(--dial-active-color)){.timepicker-dial__hint{color:var(--dial-active-color)}}.timepicker-dial__hint span{font-size:14px}@media (max-device-width:1023px) and (orientation:landscape){.timepicker-dial__container{flex-direction:column}.timepicker-dial__period{margin-left:0}}"]
                }] }
    ];
    NgxMaterialTimepickerDialComponent.propDecorators = {
        editableHintTmpl: [{ type: Input }],
        hour: [{ type: Input }],
        minute: [{ type: Input }],
        format: [{ type: Input }],
        period: [{ type: Input }],
        activeTimeUnit: [{ type: Input }],
        minTime: [{ type: Input }],
        maxTime: [{ type: Input }],
        isEditable: [{ type: Input }],
        minutesGap: [{ type: Input }],
        periodChanged: [{ type: Output }],
        timeUnitChanged: [{ type: Output }],
        hourChanged: [{ type: Output }],
        minuteChanged: [{ type: Output }]
    };
    return NgxMaterialTimepickerDialComponent;
}());
export { NgxMaterialTimepickerDialComponent };
if (false) {
    /** @type {?} */
    NgxMaterialTimepickerDialComponent.prototype.timeUnit;
    /** @type {?} */
    NgxMaterialTimepickerDialComponent.prototype.hours;
    /** @type {?} */
    NgxMaterialTimepickerDialComponent.prototype.minutes;
    /** @type {?} */
    NgxMaterialTimepickerDialComponent.prototype.isHintVisible;
    /** @type {?} */
    NgxMaterialTimepickerDialComponent.prototype.editableHintTmpl;
    /** @type {?} */
    NgxMaterialTimepickerDialComponent.prototype.hour;
    /** @type {?} */
    NgxMaterialTimepickerDialComponent.prototype.minute;
    /** @type {?} */
    NgxMaterialTimepickerDialComponent.prototype.format;
    /** @type {?} */
    NgxMaterialTimepickerDialComponent.prototype.period;
    /** @type {?} */
    NgxMaterialTimepickerDialComponent.prototype.activeTimeUnit;
    /** @type {?} */
    NgxMaterialTimepickerDialComponent.prototype.minTime;
    /** @type {?} */
    NgxMaterialTimepickerDialComponent.prototype.maxTime;
    /** @type {?} */
    NgxMaterialTimepickerDialComponent.prototype.isEditable;
    /** @type {?} */
    NgxMaterialTimepickerDialComponent.prototype.minutesGap;
    /** @type {?} */
    NgxMaterialTimepickerDialComponent.prototype.periodChanged;
    /** @type {?} */
    NgxMaterialTimepickerDialComponent.prototype.timeUnitChanged;
    /** @type {?} */
    NgxMaterialTimepickerDialComponent.prototype.hourChanged;
    /** @type {?} */
    NgxMaterialTimepickerDialComponent.prototype.minuteChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItZGlhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtdGltZXBpY2tlci9jb21wb25lbnRzL3RpbWVwaWNrZXItZGlhbC9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1kaWFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBaUIsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZJLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSWpFO0lBQUE7UUFRSSxhQUFRLEdBQUcsUUFBUSxDQUFDO1FBa0JWLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUMvQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFDL0MsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUNoRCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO0lBa0RoRSxDQUFDOzs7OztJQWhERyx3REFBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDOUIsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVk7ZUFDaEQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLEVBQUU7O2dCQUNsRCxLQUFLLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBRWxELElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUU7Z0JBQzVDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDakIsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTthQUN0QixDQUFDLENBQUM7U0FDTjtRQUNELElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZO2VBQ2hELE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxFQUFFOztnQkFDOUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUUxRCxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDOUQsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNqQixHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ3RCLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQzs7Ozs7SUFFRCwyREFBYzs7OztJQUFkLFVBQWUsSUFBYztRQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELHlEQUFZOzs7O0lBQVosVUFBYSxNQUFrQjtRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELHVEQUFVOzs7O0lBQVYsVUFBVyxJQUFtQjtRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELHlEQUFZOzs7O0lBQVosVUFBYSxNQUFxQjtRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQscURBQVE7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELHFEQUFROzs7SUFBUjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7O2dCQTlFSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsK3JGQUEwRDtvQkFFMUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNsRDs7O21DQVVJLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSztpQ0FDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7Z0NBRUwsTUFBTTtrQ0FDTixNQUFNOzhCQUNOLE1BQU07Z0NBQ04sTUFBTTs7SUFrRFgseUNBQUM7Q0FBQSxBQS9FRCxJQStFQztTQXpFWSxrQ0FBa0M7OztJQUUzQyxzREFBb0I7O0lBRXBCLG1EQUF1Qjs7SUFDdkIscURBQXlCOztJQUV6QiwyREFBdUI7O0lBRXZCLDhEQUE2Qzs7SUFDN0Msa0RBQStCOztJQUMvQixvREFBaUM7O0lBQ2pDLG9EQUF3Qjs7SUFDeEIsb0RBQTRCOztJQUM1Qiw0REFBa0M7O0lBQ2xDLHFEQUF5Qjs7SUFDekIscURBQXlCOztJQUN6Qix3REFBNkI7O0lBQzdCLHdEQUE0Qjs7SUFFNUIsMkRBQXlEOztJQUN6RCw2REFBeUQ7O0lBQ3pELHlEQUEwRDs7SUFDMUQsMkRBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaW1lUGVyaW9kIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RpbWUtcGVyaW9kLmVudW0nO1xuaW1wb3J0IHsgVGltZVVuaXQgfSBmcm9tICcuLi8uLi9tb2RlbHMvdGltZS11bml0LmVudW0nO1xuaW1wb3J0IHsgVGltZXBpY2tlclRpbWUgfSBmcm9tICcuLi8uLi90aW1lcGlja2VyLXRpbWUubmFtZXNwYWNlJztcbmltcG9ydCB7IENsb2NrRmFjZVRpbWUgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2xvY2stZmFjZS10aW1lLmludGVyZmFjZSc7XG5pbXBvcnQgeyBNb21lbnQgfSBmcm9tICdtb21lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1tYXRlcmlhbC10aW1lcGlja2VyLWRpYWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItZGlhbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ25neC1tYXRlcmlhbC10aW1lcGlja2VyLWRpYWwuY29tcG9uZW50LnNjc3MnXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJEaWFsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAgIHRpbWVVbml0ID0gVGltZVVuaXQ7XG5cbiAgICBob3VyczogQ2xvY2tGYWNlVGltZVtdO1xuICAgIG1pbnV0ZXM6IENsb2NrRmFjZVRpbWVbXTtcblxuICAgIGlzSGludFZpc2libGU6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBlZGl0YWJsZUhpbnRUbXBsOiBUZW1wbGF0ZVJlZjxOb2RlPjtcbiAgICBASW5wdXQoKSBob3VyOiBudW1iZXIgfCBzdHJpbmc7XG4gICAgQElucHV0KCkgbWludXRlOiBudW1iZXIgfCBzdHJpbmc7XG4gICAgQElucHV0KCkgZm9ybWF0OiBudW1iZXI7XG4gICAgQElucHV0KCkgcGVyaW9kOiBUaW1lUGVyaW9kO1xuICAgIEBJbnB1dCgpIGFjdGl2ZVRpbWVVbml0OiBUaW1lVW5pdDtcbiAgICBASW5wdXQoKSBtaW5UaW1lOiBNb21lbnQ7XG4gICAgQElucHV0KCkgbWF4VGltZTogTW9tZW50O1xuICAgIEBJbnB1dCgpIGlzRWRpdGFibGU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgbWludXRlc0dhcDogbnVtYmVyO1xuXG4gICAgQE91dHB1dCgpIHBlcmlvZENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFRpbWVQZXJpb2Q+KCk7XG4gICAgQE91dHB1dCgpIHRpbWVVbml0Q2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VGltZVVuaXQ+KCk7XG4gICAgQE91dHB1dCgpIGhvdXJDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxDbG9ja0ZhY2VUaW1lPigpO1xuICAgIEBPdXRwdXQoKSBtaW51dGVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxDbG9ja0ZhY2VUaW1lPigpO1xuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlc1sncGVyaW9kJ10gJiYgY2hhbmdlc1sncGVyaW9kJ10uY3VycmVudFZhbHVlXG4gICAgICAgICAgICB8fCBjaGFuZ2VzWydmb3JtYXQnXSAmJiBjaGFuZ2VzWydmb3JtYXQnXS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gVGltZXBpY2tlclRpbWUuZ2V0SG91cnModGhpcy5mb3JtYXQpO1xuXG4gICAgICAgICAgICB0aGlzLmhvdXJzID0gVGltZXBpY2tlclRpbWUuZGlzYWJsZUhvdXJzKGhvdXJzLCB7XG4gICAgICAgICAgICAgICAgbWluOiB0aGlzLm1pblRpbWUsXG4gICAgICAgICAgICAgICAgbWF4OiB0aGlzLm1heFRpbWUsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiB0aGlzLmZvcm1hdCxcbiAgICAgICAgICAgICAgICBwZXJpb2Q6IHRoaXMucGVyaW9kXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlc1sncGVyaW9kJ10gJiYgY2hhbmdlc1sncGVyaW9kJ10uY3VycmVudFZhbHVlXG4gICAgICAgICAgICB8fCBjaGFuZ2VzWydob3VyJ10gJiYgY2hhbmdlc1snaG91ciddLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IFRpbWVwaWNrZXJUaW1lLmdldE1pbnV0ZXModGhpcy5taW51dGVzR2FwKTtcblxuICAgICAgICAgICAgdGhpcy5taW51dGVzID0gVGltZXBpY2tlclRpbWUuZGlzYWJsZU1pbnV0ZXMobWludXRlcywgK3RoaXMuaG91ciwge1xuICAgICAgICAgICAgICAgIG1pbjogdGhpcy5taW5UaW1lLFxuICAgICAgICAgICAgICAgIG1heDogdGhpcy5tYXhUaW1lLFxuICAgICAgICAgICAgICAgIGZvcm1hdDogdGhpcy5mb3JtYXQsXG4gICAgICAgICAgICAgICAgcGVyaW9kOiB0aGlzLnBlcmlvZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VUaW1lVW5pdCh1bml0OiBUaW1lVW5pdCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRpbWVVbml0Q2hhbmdlZC5uZXh0KHVuaXQpO1xuICAgIH1cblxuICAgIGNoYW5nZVBlcmlvZChwZXJpb2Q6IFRpbWVQZXJpb2QpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wZXJpb2RDaGFuZ2VkLm5leHQocGVyaW9kKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VIb3VyKGhvdXI6IENsb2NrRmFjZVRpbWUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ob3VyQ2hhbmdlZC5uZXh0KGhvdXIpO1xuICAgIH1cblxuICAgIGNoYW5nZU1pbnV0ZShtaW51dGU6IENsb2NrRmFjZVRpbWUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5taW51dGVDaGFuZ2VkLm5leHQobWludXRlKTtcbiAgICB9XG5cbiAgICBzaG93SGludCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc0hpbnRWaXNpYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBoaWRlSGludCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc0hpbnRWaXNpYmxlID0gZmFsc2U7XG4gICAgfVxufVxuIl19