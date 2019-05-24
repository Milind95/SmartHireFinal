/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TimePeriod } from '../models/time-period.enum';
import { TimeAdapter } from './time-adapter';
import { DateTime } from 'luxon';
import * as i0 from "@angular/core";
/** @type {?} */
var DEFAULT_HOUR = {
    time: 12,
    angle: 360
};
/** @type {?} */
var DEFAULT_MINUTE = {
    time: 0,
    angle: 360
};
var NgxMaterialTimepickerService = /** @class */ (function () {
    function NgxMaterialTimepickerService() {
        this.hourSubject = new BehaviorSubject(DEFAULT_HOUR);
        this.minuteSubject = new BehaviorSubject(DEFAULT_MINUTE);
        this.periodSubject = new BehaviorSubject(TimePeriod.AM);
    }
    Object.defineProperty(NgxMaterialTimepickerService.prototype, "defaultTime", {
        set: /**
         * @private
         * @param {?} time
         * @return {?}
         */
        function (time) {
            /** @type {?} */
            var defaultTime = TimeAdapter.convertTimeToDateTime(time).toJSDate();
            if (DateTime.fromJSDate(defaultTime).isValid) {
                /** @type {?} */
                var period = time.substr(time.length - 2).toUpperCase();
                this.hour = tslib_1.__assign({}, DEFAULT_HOUR, { time: period === TimePeriod.PM ? defaultTime.getHours() - 12 : defaultTime.getHours() });
                this.minute = tslib_1.__assign({}, DEFAULT_MINUTE, { time: defaultTime.getMinutes() });
                this.period = (/** @type {?} */ (period));
            }
            else {
                this.resetTime();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerService.prototype, "hour", {
        set: /**
         * @param {?} hour
         * @return {?}
         */
        function (hour) {
            this.hourSubject.next(hour);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerService.prototype, "selectedHour", {
        get: /**
         * @return {?}
         */
        function () {
            return this.hourSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerService.prototype, "minute", {
        set: /**
         * @param {?} minute
         * @return {?}
         */
        function (minute) {
            this.minuteSubject.next(minute);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerService.prototype, "selectedMinute", {
        get: /**
         * @return {?}
         */
        function () {
            return this.minuteSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerService.prototype, "period", {
        set: /**
         * @param {?} period
         * @return {?}
         */
        function (period) {
            this.periodSubject.next(period);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerService.prototype, "selectedPeriod", {
        get: /**
         * @return {?}
         */
        function () {
            return this.periodSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} time
     * @param {?} min
     * @param {?} max
     * @param {?} format
     * @param {?=} minutesGap
     * @return {?}
     */
    NgxMaterialTimepickerService.prototype.setDefaultTimeIfAvailable = /**
     * @param {?} time
     * @param {?} min
     * @param {?} max
     * @param {?} format
     * @param {?=} minutesGap
     * @return {?}
     */
    function (time, min, max, format, minutesGap) {
        /* Workaround to double error message*/
        try {
            if (TimeAdapter.isTimeAvailable(time, min, max, 'minutes', minutesGap)) {
                this.defaultTime = TimeAdapter.formatTime(time, format);
            }
        }
        catch (e) {
            console.error(e);
        }
    };
    /**
     * @param {?} format
     * @return {?}
     */
    NgxMaterialTimepickerService.prototype.getFullTime = /**
     * @param {?} format
     * @return {?}
     */
    function (format) {
        /** @type {?} */
        var hour = this.hourSubject.getValue().time;
        /** @type {?} */
        var minute = this.minuteSubject.getValue().time;
        /** @type {?} */
        var period = format === 12 ? this.periodSubject.getValue() : '';
        return TimeAdapter.formatTime(hour + ":" + minute + " " + period, format);
    };
    /**
     * @private
     * @return {?}
     */
    NgxMaterialTimepickerService.prototype.resetTime = /**
     * @private
     * @return {?}
     */
    function () {
        this.hour = tslib_1.__assign({}, DEFAULT_HOUR);
        this.minute = tslib_1.__assign({}, DEFAULT_MINUTE);
        this.period = TimePeriod.AM;
    };
    NgxMaterialTimepickerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ NgxMaterialTimepickerService.ngInjectableDef = i0.defineInjectable({ factory: function NgxMaterialTimepickerService_Factory() { return new NgxMaterialTimepickerService(); }, token: NgxMaterialTimepickerService, providedIn: "root" });
    return NgxMaterialTimepickerService;
}());
export { NgxMaterialTimepickerService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL3NlcnZpY2VzL25neC1tYXRlcmlhbC10aW1lcGlja2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sT0FBTyxDQUFDOzs7SUFHM0IsWUFBWSxHQUFrQjtJQUNoQyxJQUFJLEVBQUUsRUFBRTtJQUNSLEtBQUssRUFBRSxHQUFHO0NBQ2I7O0lBQ0ssY0FBYyxHQUFrQjtJQUNsQyxJQUFJLEVBQUUsQ0FBQztJQUNQLEtBQUssRUFBRSxHQUFHO0NBQ2I7QUFFRDtJQUFBO1FBS1ksZ0JBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBZ0IsWUFBWSxDQUFDLENBQUM7UUFDL0Qsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBZ0IsY0FBYyxDQUFDLENBQUM7UUFDbkUsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBYSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7S0FpRTFFO0lBL0RHLHNCQUFZLHFEQUFXOzs7Ozs7UUFBdkIsVUFBd0IsSUFBWTs7Z0JBQzFCLFdBQVcsR0FBRyxXQUFXLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBRXRFLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEVBQUU7O29CQUNwQyxNQUFNLEdBQUcs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QyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Z0JBdkVKLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7Ozt1Q0FuQkQ7Q0F5RkMsQUF4RUQsSUF3RUM7U0FyRVksNEJBQTRCOzs7Ozs7SUFFckMsbURBQXVFOzs7OztJQUN2RSxxREFBMkU7Ozs7O0lBQzNFLHFEQUF1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENsb2NrRmFjZVRpbWUgfSBmcm9tICcuLi9tb2RlbHMvY2xvY2stZmFjZS10aW1lLmludGVyZmFjZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRpbWVQZXJpb2QgfSBmcm9tICcuLi9tb2RlbHMvdGltZS1wZXJpb2QuZW51bSc7XG5pbXBvcnQgeyBUaW1lQWRhcHRlciB9IGZyb20gJy4vdGltZS1hZGFwdGVyJztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nO1xuXG5cbmNvbnN0IERFRkFVTFRfSE9VUjogQ2xvY2tGYWNlVGltZSA9IHtcbiAgICB0aW1lOiAxMixcbiAgICBhbmdsZTogMzYwXG59O1xuY29uc3QgREVGQVVMVF9NSU5VVEU6IENsb2NrRmFjZVRpbWUgPSB7XG4gICAgdGltZTogMCxcbiAgICBhbmdsZTogMzYwXG59O1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neE1hdGVyaWFsVGltZXBpY2tlclNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBob3VyU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Q2xvY2tGYWNlVGltZT4oREVGQVVMVF9IT1VSKTtcbiAgICBwcml2YXRlIG1pbnV0ZVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENsb2NrRmFjZVRpbWU+KERFRkFVTFRfTUlOVVRFKTtcbiAgICBwcml2YXRlIHBlcmlvZFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFRpbWVQZXJpb2Q+KFRpbWVQZXJpb2QuQU0pO1xuXG4gICAgcHJpdmF0ZSBzZXQgZGVmYXVsdFRpbWUodGltZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRUaW1lID0gVGltZUFkYXB0ZXIuY29udmVydFRpbWVUb0RhdGVUaW1lKHRpbWUpLnRvSlNEYXRlKCk7XG5cbiAgICAgICAgaWYgKERhdGVUaW1lLmZyb21KU0RhdGUoZGVmYXVsdFRpbWUpLmlzVmFsaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBlcmlvZCA9IHRpbWUuc3Vic3RyKHRpbWUubGVuZ3RoIC0gMikudG9VcHBlckNhc2UoKTtcblxuICAgICAgICAgICAgdGhpcy5ob3VyID0gey4uLkRFRkFVTFRfSE9VUiwgdGltZTogcGVyaW9kID09PSBUaW1lUGVyaW9kLlBNID8gZGVmYXVsdFRpbWUuZ2V0SG91cnMoKSAtIDEyIDogZGVmYXVsdFRpbWUuZ2V0SG91cnMoKX07XG4gICAgICAgICAgICB0aGlzLm1pbnV0ZSA9IHsuLi5ERUZBVUxUX01JTlVURSwgdGltZTogZGVmYXVsdFRpbWUuZ2V0TWludXRlcygpfTtcbiAgICAgICAgICAgIHRoaXMucGVyaW9kID0gcGVyaW9kIGFzIFRpbWVQZXJpb2Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0VGltZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0IGhvdXIoaG91cjogQ2xvY2tGYWNlVGltZSkge1xuICAgICAgICB0aGlzLmhvdXJTdWJqZWN0Lm5leHQoaG91cik7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkSG91cigpOiBPYnNlcnZhYmxlPENsb2NrRmFjZVRpbWU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG91clN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgc2V0IG1pbnV0ZShtaW51dGU6IENsb2NrRmFjZVRpbWUpIHtcbiAgICAgICAgdGhpcy5taW51dGVTdWJqZWN0Lm5leHQobWludXRlKTtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRNaW51dGUoKTogT2JzZXJ2YWJsZTxDbG9ja0ZhY2VUaW1lPiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbnV0ZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgc2V0IHBlcmlvZChwZXJpb2Q6IFRpbWVQZXJpb2QpIHtcbiAgICAgICAgdGhpcy5wZXJpb2RTdWJqZWN0Lm5leHQocGVyaW9kKTtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRQZXJpb2QoKTogT2JzZXJ2YWJsZTxUaW1lUGVyaW9kPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBlcmlvZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG5cbiAgICBzZXREZWZhdWx0VGltZUlmQXZhaWxhYmxlKHRpbWU6IHN0cmluZywgbWluOiBEYXRlVGltZSwgbWF4OiBEYXRlVGltZSwgZm9ybWF0OiBudW1iZXIsIG1pbnV0ZXNHYXA/OiBudW1iZXIpIHtcbiAgICAgICAgLyogV29ya2Fyb3VuZCB0byBkb3VibGUgZXJyb3IgbWVzc2FnZSovXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoVGltZUFkYXB0ZXIuaXNUaW1lQXZhaWxhYmxlKHRpbWUsIG1pbiwgbWF4LCAnbWludXRlcycsIG1pbnV0ZXNHYXApKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0VGltZSA9IFRpbWVBZGFwdGVyLmZvcm1hdFRpbWUodGltZSwgZm9ybWF0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEZ1bGxUaW1lKGZvcm1hdDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgaG91ciA9IHRoaXMuaG91clN1YmplY3QuZ2V0VmFsdWUoKS50aW1lO1xuICAgICAgICBjb25zdCBtaW51dGUgPSB0aGlzLm1pbnV0ZVN1YmplY3QuZ2V0VmFsdWUoKS50aW1lO1xuICAgICAgICBjb25zdCBwZXJpb2QgPSBmb3JtYXQgPT09IDEyID8gdGhpcy5wZXJpb2RTdWJqZWN0LmdldFZhbHVlKCkgOiAnJztcblxuICAgICAgICByZXR1cm4gVGltZUFkYXB0ZXIuZm9ybWF0VGltZShgJHtob3VyfToke21pbnV0ZX0gJHtwZXJpb2R9YCwgZm9ybWF0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0VGltZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ob3VyID0gey4uLkRFRkFVTFRfSE9VUn07XG4gICAgICAgIHRoaXMubWludXRlID0gey4uLkRFRkFVTFRfTUlOVVRFfTtcbiAgICAgICAgdGhpcy5wZXJpb2QgPSBUaW1lUGVyaW9kLkFNO1xuICAgIH1cbn1cbiJdfQ==