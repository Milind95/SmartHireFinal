/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TimePeriod } from '../models/time-period.enum';
import * as moment_ from 'moment';
import { TimeFormat } from '../models/time-format.enum';
import { TimeAdapter } from './time-adapter';
/** @type {?} */
var moment = moment_;
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
            var defaultTime = moment(time, TimeFormat.TWENTY_FOUR).toDate();
            if (moment(defaultTime).isValid()) {
                this.hour = tslib_1.__assign({}, DEFAULT_HOUR, { time: defaultTime.getHours() });
                this.minute = tslib_1.__assign({}, DEFAULT_MINUTE, { time: defaultTime.getMinutes() });
                this.period = (/** @type {?} */ (time.substr(time.length - 2).toUpperCase()));
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
        { type: Injectable }
    ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL3NlcnZpY2VzL25neC1tYXRlcmlhbC10aW1lcGlja2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ3RELE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O0lBR3JDLE1BQU0sR0FBRyxPQUFPOztJQUVoQixZQUFZLEdBQWtCO0lBQ2hDLElBQUksRUFBRSxFQUFFO0lBQ1IsS0FBSyxFQUFFLEdBQUc7Q0FDYjs7SUFDSyxjQUFjLEdBQWtCO0lBQ2xDLElBQUksRUFBRSxDQUFDO0lBQ1AsS0FBSyxFQUFFLEdBQUc7Q0FDYjtBQUVEO0lBQUE7UUFHWSxnQkFBVyxHQUFHLElBQUksZUFBZSxDQUFnQixZQUFZLENBQUMsQ0FBQztRQUMvRCxrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFnQixjQUFjLENBQUMsQ0FBQztRQUNuRSxrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFhLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQStEM0UsQ0FBQztJQTdERyxzQkFBWSxxREFBVzs7Ozs7O1FBQXZCLFVBQXdCLElBQVk7O2dCQUMxQixXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFO1lB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O0lBQ2hDLENBQUM7O2dCQW5FSixVQUFVOztJQW9FWCxtQ0FBQztDQUFBLEFBcEVELElBb0VDO1NBbkVZLDRCQUE0Qjs7Ozs7O0lBRXJDLG1EQUF1RTs7Ozs7SUFDdkUscURBQTJFOzs7OztJQUMzRSxxREFBdUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDbG9ja0ZhY2VUaW1lfSBmcm9tICcuLi9tb2RlbHMvY2xvY2stZmFjZS10aW1lLmludGVyZmFjZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1RpbWVQZXJpb2R9IGZyb20gJy4uL21vZGVscy90aW1lLXBlcmlvZC5lbnVtJztcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcbmltcG9ydCB7VGltZUZvcm1hdH0gZnJvbSAnLi4vbW9kZWxzL3RpbWUtZm9ybWF0LmVudW0nO1xuaW1wb3J0IHtUaW1lQWRhcHRlcn0gZnJvbSAnLi90aW1lLWFkYXB0ZXInO1xuaW1wb3J0IHtNb21lbnR9IGZyb20gJ21vbWVudCc7XG5cbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XG5cbmNvbnN0IERFRkFVTFRfSE9VUjogQ2xvY2tGYWNlVGltZSA9IHtcbiAgICB0aW1lOiAxMixcbiAgICBhbmdsZTogMzYwXG59O1xuY29uc3QgREVGQVVMVF9NSU5VVEU6IENsb2NrRmFjZVRpbWUgPSB7XG4gICAgdGltZTogMCxcbiAgICBhbmdsZTogMzYwXG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmd4TWF0ZXJpYWxUaW1lcGlja2VyU2VydmljZSB7XG5cbiAgICBwcml2YXRlIGhvdXJTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDbG9ja0ZhY2VUaW1lPihERUZBVUxUX0hPVVIpO1xuICAgIHByaXZhdGUgbWludXRlU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Q2xvY2tGYWNlVGltZT4oREVGQVVMVF9NSU5VVEUpO1xuICAgIHByaXZhdGUgcGVyaW9kU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VGltZVBlcmlvZD4oVGltZVBlcmlvZC5BTSk7XG5cbiAgICBwcml2YXRlIHNldCBkZWZhdWx0VGltZSh0aW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFRpbWUgPSBtb21lbnQodGltZSwgVGltZUZvcm1hdC5UV0VOVFlfRk9VUikudG9EYXRlKCk7XG5cbiAgICAgICAgaWYgKG1vbWVudChkZWZhdWx0VGltZSkuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmhvdXIgPSB7Li4uREVGQVVMVF9IT1VSLCB0aW1lOiBkZWZhdWx0VGltZS5nZXRIb3VycygpfTtcbiAgICAgICAgICAgIHRoaXMubWludXRlID0gey4uLkRFRkFVTFRfTUlOVVRFLCB0aW1lOiBkZWZhdWx0VGltZS5nZXRNaW51dGVzKCl9O1xuICAgICAgICAgICAgdGhpcy5wZXJpb2QgPSA8VGltZVBlcmlvZD50aW1lLnN1YnN0cih0aW1lLmxlbmd0aCAtIDIpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0VGltZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0IGhvdXIoaG91cjogQ2xvY2tGYWNlVGltZSkge1xuICAgICAgICB0aGlzLmhvdXJTdWJqZWN0Lm5leHQoaG91cik7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkSG91cigpOiBPYnNlcnZhYmxlPENsb2NrRmFjZVRpbWU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG91clN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgc2V0IG1pbnV0ZShtaW51dGU6IENsb2NrRmFjZVRpbWUpIHtcbiAgICAgICAgdGhpcy5taW51dGVTdWJqZWN0Lm5leHQobWludXRlKTtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRNaW51dGUoKTogT2JzZXJ2YWJsZTxDbG9ja0ZhY2VUaW1lPiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbnV0ZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgc2V0IHBlcmlvZChwZXJpb2Q6IFRpbWVQZXJpb2QpIHtcbiAgICAgICAgdGhpcy5wZXJpb2RTdWJqZWN0Lm5leHQocGVyaW9kKTtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRQZXJpb2QoKTogT2JzZXJ2YWJsZTxUaW1lUGVyaW9kPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBlcmlvZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG5cbiAgICBzZXREZWZhdWx0VGltZUlmQXZhaWxhYmxlKHRpbWU6IHN0cmluZywgbWluOiBNb21lbnQsIG1heDogTW9tZW50LCBmb3JtYXQ6IG51bWJlciwgbWludXRlc0dhcD86IG51bWJlcikge1xuICAgICAgICAvKiBXb3JrYXJvdW5kIHRvIGRvdWJsZSBlcnJvciBtZXNzYWdlKi9cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChUaW1lQWRhcHRlci5pc1RpbWVBdmFpbGFibGUodGltZSwgbWluLCBtYXgsICdtaW51dGVzJywgbWludXRlc0dhcCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRUaW1lID0gVGltZUFkYXB0ZXIuZm9ybWF0VGltZSh0aW1lLCBmb3JtYXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RnVsbFRpbWUoZm9ybWF0OiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBob3VyID0gdGhpcy5ob3VyU3ViamVjdC5nZXRWYWx1ZSgpLnRpbWU7XG4gICAgICAgIGNvbnN0IG1pbnV0ZSA9IHRoaXMubWludXRlU3ViamVjdC5nZXRWYWx1ZSgpLnRpbWU7XG4gICAgICAgIGNvbnN0IHBlcmlvZCA9IGZvcm1hdCA9PT0gMTIgPyB0aGlzLnBlcmlvZFN1YmplY3QuZ2V0VmFsdWUoKSA6ICcnO1xuXG4gICAgICAgIHJldHVybiBUaW1lQWRhcHRlci5mb3JtYXRUaW1lKGAke2hvdXJ9OiR7bWludXRlfSAke3BlcmlvZH1gLCBmb3JtYXQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXRUaW1lKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmhvdXIgPSB7Li4uREVGQVVMVF9IT1VSfTtcbiAgICAgICAgdGhpcy5taW51dGUgPSB7Li4uREVGQVVMVF9NSU5VVEV9O1xuICAgICAgICB0aGlzLnBlcmlvZCA9IFRpbWVQZXJpb2QuQU07XG4gICAgfVxufVxuIl19