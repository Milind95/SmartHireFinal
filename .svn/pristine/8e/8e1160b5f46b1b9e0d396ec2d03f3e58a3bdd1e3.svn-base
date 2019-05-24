/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimeUnit } from '../../models/time-unit.enum';
import { TimePeriod } from '../../models/time-period.enum';
import { TimepickerTime } from '../../utils/timepicker-time.namespace';
import { DateTime } from 'luxon';
export class NgxMaterialTimepickerMinutesFaceComponent {
    constructor() {
        this.minutesList = [];
        this.timeUnit = TimeUnit;
        this.minuteChange = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['period'] && changes['period'].currentValue) {
            /** @type {?} */
            const minutes = TimepickerTime.getMinutes(this.minutesGap);
            this.minutesList = TimepickerTime.disableMinutes(minutes, this.selectedHour, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    }
}
NgxMaterialTimepickerMinutesFaceComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-material-timepicker-minutes-face',
                template: "<ngx-material-timepicker-face [faceTime]=\"minutesList\" [selectedTime]=\"selectedMinute\"\n                              [minutesGap]=\"minutesGap\"\n                              (timeChange)=\"minuteChange.next($event)\" [unit]=\"timeUnit.MINUTE\"></ngx-material-timepicker-face>\n"
            }] }
];
NgxMaterialTimepickerMinutesFaceComponent.propDecorators = {
    selectedMinute: [{ type: Input }],
    selectedHour: [{ type: Input }],
    period: [{ type: Input }],
    minTime: [{ type: Input }],
    maxTime: [{ type: Input }],
    format: [{ type: Input }],
    minutesGap: [{ type: Input }],
    minuteChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NgxMaterialTimepickerMinutesFaceComponent.prototype.minutesList;
    /** @type {?} */
    NgxMaterialTimepickerMinutesFaceComponent.prototype.timeUnit;
    /** @type {?} */
    NgxMaterialTimepickerMinutesFaceComponent.prototype.selectedMinute;
    /** @type {?} */
    NgxMaterialTimepickerMinutesFaceComponent.prototype.selectedHour;
    /** @type {?} */
    NgxMaterialTimepickerMinutesFaceComponent.prototype.period;
    /** @type {?} */
    NgxMaterialTimepickerMinutesFaceComponent.prototype.minTime;
    /** @type {?} */
    NgxMaterialTimepickerMinutesFaceComponent.prototype.maxTime;
    /** @type {?} */
    NgxMaterialTimepickerMinutesFaceComponent.prototype.format;
    /** @type {?} */
    NgxMaterialTimepickerMinutesFaceComponent.prototype.minutesGap;
    /** @type {?} */
    NgxMaterialTimepickerMinutesFaceComponent.prototype.minuteChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItbWludXRlcy1mYWNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL2NvbXBvbmVudHMvdGltZXBpY2tlci1taW51dGVzLWZhY2Uvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItbWludXRlcy1mYWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFakcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQU9qQyxNQUFNLE9BQU8seUNBQXlDO0lBSnREO1FBTUksZ0JBQVcsR0FBb0IsRUFBRSxDQUFDO1FBQ2xDLGFBQVEsR0FBRyxRQUFRLENBQUM7UUFVVixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO0lBYS9ELENBQUM7Ozs7O0lBWEcsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLEVBQUU7O2tCQUMvQyxPQUFPLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQzFELElBQUksQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDekUsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNqQixHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ3RCLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQzs7O1lBN0JKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCx3U0FBb0U7YUFDdkU7Ozs2QkFNSSxLQUFLOzJCQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLO3NCQUNMLEtBQUs7cUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUVMLE1BQU07Ozs7SUFYUCxnRUFBa0M7O0lBQ2xDLDZEQUFvQjs7SUFFcEIsbUVBQXVDOztJQUN2QyxpRUFBOEI7O0lBQzlCLDJEQUE0Qjs7SUFDNUIsNERBQTJCOztJQUMzQiw0REFBMkI7O0lBQzNCLDJEQUF3Qjs7SUFDeEIsK0RBQTRCOztJQUU1QixpRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbG9ja0ZhY2VUaW1lIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Nsb2NrLWZhY2UtdGltZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVGltZVVuaXQgfSBmcm9tICcuLi8uLi9tb2RlbHMvdGltZS11bml0LmVudW0nO1xuaW1wb3J0IHsgVGltZVBlcmlvZCB9IGZyb20gJy4uLy4uL21vZGVscy90aW1lLXBlcmlvZC5lbnVtJztcbmltcG9ydCB7IFRpbWVwaWNrZXJUaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGltZXBpY2tlci10aW1lLm5hbWVzcGFjZSc7XG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gJ2x1eG9uJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1tYXRlcmlhbC10aW1lcGlja2VyLW1pbnV0ZXMtZmFjZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25neC1tYXRlcmlhbC10aW1lcGlja2VyLW1pbnV0ZXMtZmFjZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4TWF0ZXJpYWxUaW1lcGlja2VyTWludXRlc0ZhY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gICAgbWludXRlc0xpc3Q6IENsb2NrRmFjZVRpbWVbXSA9IFtdO1xuICAgIHRpbWVVbml0ID0gVGltZVVuaXQ7XG5cbiAgICBASW5wdXQoKSBzZWxlY3RlZE1pbnV0ZTogQ2xvY2tGYWNlVGltZTtcbiAgICBASW5wdXQoKSBzZWxlY3RlZEhvdXI6IG51bWJlcjtcbiAgICBASW5wdXQoKSBwZXJpb2Q6IFRpbWVQZXJpb2Q7XG4gICAgQElucHV0KCkgbWluVGltZTogRGF0ZVRpbWU7XG4gICAgQElucHV0KCkgbWF4VGltZTogRGF0ZVRpbWU7XG4gICAgQElucHV0KCkgZm9ybWF0OiBudW1iZXI7XG4gICAgQElucHV0KCkgbWludXRlc0dhcDogbnVtYmVyO1xuXG4gICAgQE91dHB1dCgpIG1pbnV0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2xvY2tGYWNlVGltZT4oKTtcblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKGNoYW5nZXNbJ3BlcmlvZCddICYmIGNoYW5nZXNbJ3BlcmlvZCddLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IFRpbWVwaWNrZXJUaW1lLmdldE1pbnV0ZXModGhpcy5taW51dGVzR2FwKTtcbiAgICAgICAgICAgIHRoaXMubWludXRlc0xpc3QgPSBUaW1lcGlja2VyVGltZS5kaXNhYmxlTWludXRlcyhtaW51dGVzLCB0aGlzLnNlbGVjdGVkSG91ciwge1xuICAgICAgICAgICAgICAgIG1pbjogdGhpcy5taW5UaW1lLFxuICAgICAgICAgICAgICAgIG1heDogdGhpcy5tYXhUaW1lLFxuICAgICAgICAgICAgICAgIGZvcm1hdDogdGhpcy5mb3JtYXQsXG4gICAgICAgICAgICAgICAgcGVyaW9kOiB0aGlzLnBlcmlvZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdfQ==