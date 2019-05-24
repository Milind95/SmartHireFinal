/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TimePeriod } from '../models/time-period.enum';
import { TimeAdapter } from './time-adapter';
import { DateTime } from 'luxon';
import * as i0 from "@angular/core";
/** @type {?} */
const DEFAULT_HOUR = {
    time: 12,
    angle: 360
};
/** @type {?} */
const DEFAULT_MINUTE = {
    time: 0,
    angle: 360
};
export class NgxMaterialTimepickerService {
    constructor() {
        this.hourSubject = new BehaviorSubject(DEFAULT_HOUR);
        this.minuteSubject = new BehaviorSubject(DEFAULT_MINUTE);
        this.periodSubject = new BehaviorSubject(TimePeriod.AM);
    }
    /**
     * @private
     * @param {?} time
     * @return {?}
     */
    set defaultTime(time) {
        /** @type {?} */
        const defaultTime = TimeAdapter.convertTimeToDateTime(time).toJSDate();
        if (DateTime.fromJSDate(defaultTime).isValid) {
            /** @type {?} */
            const period = time.substr(time.length - 2).toUpperCase();
            this.hour = Object.assign({}, DEFAULT_HOUR, { time: period === TimePeriod.PM ? defaultTime.getHours() - 12 : defaultTime.getHours() });
            this.minute = Object.assign({}, DEFAULT_MINUTE, { time: defaultTime.getMinutes() });
            this.period = (/** @type {?} */ (period));
        }
        else {
            this.resetTime();
        }
    }
    /**
     * @param {?} hour
     * @return {?}
     */
    set hour(hour) {
        this.hourSubject.next(hour);
    }
    /**
     * @return {?}
     */
    get selectedHour() {
        return this.hourSubject.asObservable();
    }
    /**
     * @param {?} minute
     * @return {?}
     */
    set minute(minute) {
        this.minuteSubject.next(minute);
    }
    /**
     * @return {?}
     */
    get selectedMinute() {
        return this.minuteSubject.asObservable();
    }
    /**
     * @param {?} period
     * @return {?}
     */
    set period(period) {
        this.periodSubject.next(period);
    }
    /**
     * @return {?}
     */
    get selectedPeriod() {
        return this.periodSubject.asObservable();
    }
    /**
     * @param {?} time
     * @param {?} min
     * @param {?} max
     * @param {?} format
     * @param {?=} minutesGap
     * @return {?}
     */
    setDefaultTimeIfAvailable(time, min, max, format, minutesGap) {
        /* Workaround to double error message*/
        try {
            if (TimeAdapter.isTimeAvailable(time, min, max, 'minutes', minutesGap)) {
                this.defaultTime = TimeAdapter.formatTime(time, format);
            }
        }
        catch (e) {
            console.error(e);
        }
    }
    /**
     * @param {?} format
     * @return {?}
     */
    getFullTime(format) {
        /** @type {?} */
        const hour = this.hourSubject.getValue().time;
        /** @type {?} */
        const minute = this.minuteSubject.getValue().time;
        /** @type {?} */
        const period = format === 12 ? this.periodSubject.getValue() : '';
        return TimeAdapter.formatTime(`${hour}:${minute} ${period}`, format);
    }
    /**
     * @private
     * @return {?}
     */
    resetTime() {
        this.hour = Object.assign({}, DEFAULT_HOUR);
        this.minute = Object.assign({}, DEFAULT_MINUTE);
        this.period = TimePeriod.AM;
    }
}
NgxMaterialTimepickerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ NgxMaterialTimepickerService.ngInjectableDef = i0.defineInjectable({ factory: function NgxMaterialTimepickerService_Factory() { return new NgxMaterialTimepickerService(); }, token: NgxMaterialTimepickerService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxMaterialTimepickerService.prototype.hourSubject;
    /**
     * @type {?}
     * @private
     */
    NgxMaterialTimepickerService.prototype.minuteSubject;
    /**
     * @type {?}
     * @private
     */
    NgxMaterialTimepickerService.prototype.periodSubject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL3NlcnZpY2VzL25neC1tYXRlcmlhbC10aW1lcGlja2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxPQUFPLENBQUM7OztNQUczQixZQUFZLEdBQWtCO0lBQ2hDLElBQUksRUFBRSxFQUFFO0lBQ1IsS0FBSyxFQUFFLEdBQUc7Q0FDYjs7TUFDSyxjQUFjLEdBQWtCO0lBQ2xDLElBQUksRUFBRSxDQUFDO0lBQ1AsS0FBSyxFQUFFLEdBQUc7Q0FDYjtBQUtELE1BQU0sT0FBTyw0QkFBNEI7SUFIekM7UUFLWSxnQkFBVyxHQUFHLElBQUksZUFBZSxDQUFnQixZQUFZLENBQUMsQ0FBQztRQUMvRCxrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFnQixjQUFjLENBQUMsQ0FBQztRQUNuRSxrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFhLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQWlFMUU7Ozs7OztJQS9ERyxJQUFZLFdBQVcsQ0FBQyxJQUFZOztjQUMxQixXQUFXLEdBQUcsV0FBVyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtRQUV0RSxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxFQUFFOztrQkFDcEMsTUFB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RTs7Ozs7SUFDdkUscURBQTJFOzs7OztJQUMzRSxxREFBdUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbG9ja0ZhY2VUaW1lIH0gZnJvbSAnLi4vbW9kZWxzL2Nsb2NrLWZhY2UtdGltZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUaW1lUGVyaW9kIH0gZnJvbSAnLi4vbW9kZWxzL3RpbWUtcGVyaW9kLmVudW0nO1xuaW1wb3J0IHsgVGltZUFkYXB0ZXIgfSBmcm9tICcuL3RpbWUtYWRhcHRlcic7XG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gJ2x1eG9uJztcblxuXG5jb25zdCBERUZBVUxUX0hPVVI6IENsb2NrRmFjZVRpbWUgPSB7XG4gICAgdGltZTogMTIsXG4gICAgYW5nbGU6IDM2MFxufTtcbmNvbnN0IERFRkFVTFRfTUlOVVRFOiBDbG9ja0ZhY2VUaW1lID0ge1xuICAgIHRpbWU6IDAsXG4gICAgYW5nbGU6IDM2MFxufTtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgaG91clN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENsb2NrRmFjZVRpbWU+KERFRkFVTFRfSE9VUik7XG4gICAgcHJpdmF0ZSBtaW51dGVTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDbG9ja0ZhY2VUaW1lPihERUZBVUxUX01JTlVURSk7XG4gICAgcHJpdmF0ZSBwZXJpb2RTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxUaW1lUGVyaW9kPihUaW1lUGVyaW9kLkFNKTtcblxuICAgIHByaXZhdGUgc2V0IGRlZmF1bHRUaW1lKHRpbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBkZWZhdWx0VGltZSA9IFRpbWVBZGFwdGVyLmNvbnZlcnRUaW1lVG9EYXRlVGltZSh0aW1lKS50b0pTRGF0ZSgpO1xuXG4gICAgICAgIGlmIChEYXRlVGltZS5mcm9tSlNEYXRlKGRlZmF1bHRUaW1lKS5pc1ZhbGlkKSB7XG4gICAgICAgICAgICBjb25zdCBwZXJpb2QgPSB0aW1lLnN1YnN0cih0aW1lLmxlbmd0aCAtIDIpLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuaG91ciA9IHsuLi5ERUZBVUxUX0hPVVIsIHRpbWU6IHBlcmlvZCA9PT0gVGltZVBlcmlvZC5QTSA/IGRlZmF1bHRUaW1lLmdldEhvdXJzKCkgLSAxMiA6IGRlZmF1bHRUaW1lLmdldEhvdXJzKCl9O1xuICAgICAgICAgICAgdGhpcy5taW51dGUgPSB7Li4uREVGQVVMVF9NSU5VVEUsIHRpbWU6IGRlZmF1bHRUaW1lLmdldE1pbnV0ZXMoKX07XG4gICAgICAgICAgICB0aGlzLnBlcmlvZCA9IHBlcmlvZCBhcyBUaW1lUGVyaW9kO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXNldFRpbWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldCBob3VyKGhvdXI6IENsb2NrRmFjZVRpbWUpIHtcbiAgICAgICAgdGhpcy5ob3VyU3ViamVjdC5uZXh0KGhvdXIpO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZEhvdXIoKTogT2JzZXJ2YWJsZTxDbG9ja0ZhY2VUaW1lPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvdXJTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIHNldCBtaW51dGUobWludXRlOiBDbG9ja0ZhY2VUaW1lKSB7XG4gICAgICAgIHRoaXMubWludXRlU3ViamVjdC5uZXh0KG1pbnV0ZSk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkTWludXRlKCk6IE9ic2VydmFibGU8Q2xvY2tGYWNlVGltZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5taW51dGVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIHNldCBwZXJpb2QocGVyaW9kOiBUaW1lUGVyaW9kKSB7XG4gICAgICAgIHRoaXMucGVyaW9kU3ViamVjdC5uZXh0KHBlcmlvZCk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkUGVyaW9kKCk6IE9ic2VydmFibGU8VGltZVBlcmlvZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wZXJpb2RTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuXG4gICAgc2V0RGVmYXVsdFRpbWVJZkF2YWlsYWJsZSh0aW1lOiBzdHJpbmcsIG1pbjogRGF0ZVRpbWUsIG1heDogRGF0ZVRpbWUsIGZvcm1hdDogbnVtYmVyLCBtaW51dGVzR2FwPzogbnVtYmVyKSB7XG4gICAgICAgIC8qIFdvcmthcm91bmQgdG8gZG91YmxlIGVycm9yIG1lc3NhZ2UqL1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKFRpbWVBZGFwdGVyLmlzVGltZUF2YWlsYWJsZSh0aW1lLCBtaW4sIG1heCwgJ21pbnV0ZXMnLCBtaW51dGVzR2FwKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFRpbWUgPSBUaW1lQWRhcHRlci5mb3JtYXRUaW1lKHRpbWUsIGZvcm1hdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRGdWxsVGltZShmb3JtYXQ6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGhvdXIgPSB0aGlzLmhvdXJTdWJqZWN0LmdldFZhbHVlKCkudGltZTtcbiAgICAgICAgY29uc3QgbWludXRlID0gdGhpcy5taW51dGVTdWJqZWN0LmdldFZhbHVlKCkudGltZTtcbiAgICAgICAgY29uc3QgcGVyaW9kID0gZm9ybWF0ID09PSAxMiA/IHRoaXMucGVyaW9kU3ViamVjdC5nZXRWYWx1ZSgpIDogJyc7XG5cbiAgICAgICAgcmV0dXJuIFRpbWVBZGFwdGVyLmZvcm1hdFRpbWUoYCR7aG91cn06JHttaW51dGV9ICR7cGVyaW9kfWAsIGZvcm1hdCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldFRpbWUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaG91ciA9IHsuLi5ERUZBVUxUX0hPVVJ9O1xuICAgICAgICB0aGlzLm1pbnV0ZSA9IHsuLi5ERUZBVUxUX01JTlVURX07XG4gICAgICAgIHRoaXMucGVyaW9kID0gVGltZVBlcmlvZC5BTTtcbiAgICB9XG59XG4iXX0=