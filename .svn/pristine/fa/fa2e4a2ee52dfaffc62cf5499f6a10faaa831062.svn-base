/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _moment from 'moment';
import { TimeFormat } from '../models/time-format.enum';
import { TimePeriod } from '../models/time-period.enum';
/** @type {?} */
var moment = _moment;
var TimeAdapter = /** @class */ (function () {
    function TimeAdapter() {
    }
    /**
     * @param {?} time
     * @param {?=} format
     * @return {?}
     */
    TimeAdapter.formatTime = /**
     * @param {?} time
     * @param {?=} format
     * @return {?}
     */
    function (time, format) {
        if (format === void 0) { format = 12; }
        /** @type {?} */
        var timeFormat = format === 24 ? TimeFormat.TWENTY_FOUR : TimeFormat.TWELVE;
        return moment(time, TimeFormat.TWELVE).format(timeFormat);
    };
    /**
     * @param {?} time
     * @return {?}
     */
    TimeAdapter.convertTimeToMoment = /**
     * @param {?} time
     * @return {?}
     */
    function (time) {
        return moment(time, TimeFormat.TWELVE);
    };
    /**
     * @param {?} time
     * @param {?=} min
     * @param {?=} max
     * @param {?=} granularity
     * @param {?=} minutesGap
     * @return {?}
     */
    TimeAdapter.isTimeAvailable = /**
     * @param {?} time
     * @param {?=} min
     * @param {?=} max
     * @param {?=} granularity
     * @param {?=} minutesGap
     * @return {?}
     */
    function (time, min, max, granularity, minutesGap) {
        if (!time) {
            return;
        }
        /** @type {?} */
        var convertedTime = this.convertTimeToMoment(time);
        /** @type {?} */
        var minutes = convertedTime.minutes();
        if (minutesGap && (minutes % minutesGap !== 0)) {
            throw new Error("Your minutes - " + minutes + " doesn't match your minutesGap - " + minutesGap);
        }
        /** @type {?} */
        var isAfter = (min && !max)
            && convertedTime.isSameOrAfter(min, granularity);
        /** @type {?} */
        var isBefore = (max && !min)
            && convertedTime.isSameOrBefore(max, granularity);
        /** @type {?} */
        var isBetween = (min && max)
            && convertedTime.isBetween(min, max, granularity, '[]');
        /** @type {?} */
        var isAvailable = !min && !max;
        return isAfter || isBefore || isBetween || isAvailable;
    };
    /***
     *  Format hour according to time format (12 or 24)
     */
    /**
     *
     *  Format hour according to time format (12 or 24)
     * @param {?} currentHour
     * @param {?} format
     * @param {?} period
     * @return {?}
     */
    TimeAdapter.formatHour = /**
     *
     *  Format hour according to time format (12 or 24)
     * @param {?} currentHour
     * @param {?} format
     * @param {?} period
     * @return {?}
     */
    function (currentHour, format, period) {
        if (format === 24) {
            return currentHour;
        }
        /** @type {?} */
        var hour = period === TimePeriod.AM ? currentHour : currentHour + 12;
        if (period === TimePeriod.AM && hour === 12) {
            return 0;
        }
        else if (period === TimePeriod.PM && hour === 24) {
            return 12;
        }
        return hour;
    };
    return TimeAdapter;
}());
export { TimeAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21hdGVyaWFsLXRpbWVwaWNrZXIvc2VydmljZXMvdGltZS1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztBQUVsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztJQUVsRCxNQUFNLEdBQUcsT0FBTztBQUV0QjtJQUFBO0lBa0RBLENBQUM7Ozs7OztJQWhEVSxzQkFBVTs7Ozs7SUFBakIsVUFBa0IsSUFBWSxFQUFFLE1BQVc7UUFBWCx1QkFBQSxFQUFBLFdBQVc7O1lBQ2pDLFVBQVUsR0FBRyxNQUFNLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTTtRQUM3RSxPQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7OztJQUVNLCtCQUFtQjs7OztJQUExQixVQUEyQixJQUFZO1FBQ25DLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7Ozs7O0lBRU0sMkJBQWU7Ozs7Ozs7O0lBQXRCLFVBQXVCLElBQVksRUFBRSxHQUFZLEVBQUUsR0FBWSxFQUFFLFdBQWdDLEVBQUUsVUFBbUI7UUFDbEgsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLE9BQU87U0FDVjs7WUFFSyxhQUFhLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQzs7WUFDOUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyxPQUFPLEVBQUU7UUFFdkMsSUFBSSxVQUFVLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzVDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQWtCLE9BQU8seUNBQXFDLFVBQVksQ0FBQyxDQUFDO1NBQy9GOztZQUNLLE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztlQUN0QixhQUFhLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUM7O1lBQzlDLFFBQVEsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztlQUN2QixhQUFhLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUM7O1lBQy9DLFNBQVMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUM7ZUFDdkIsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUM7O1lBQ3JELFdBQVcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUc7UUFFaEMsT0FBTyxPQUFPLElBQUksUUFBUSxJQUFJLFNBQVMsSUFBSSxXQUFXLENBQUM7SUFDM0QsQ0FBQztJQUVEOztPQUVHOzs7Ozs7Ozs7SUFDSSxzQkFBVTs7Ozs7Ozs7SUFBakIsVUFBa0IsV0FBbUIsRUFBRSxNQUFjLEVBQUUsTUFBa0I7UUFDckUsSUFBSSxNQUFNLEtBQUssRUFBRSxFQUFFO1lBQ2YsT0FBTyxXQUFXLENBQUM7U0FDdEI7O1lBQ0ssSUFBSSxHQUFHLE1BQU0sS0FBSyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxFQUFFO1FBRXRFLElBQUksTUFBTSxLQUFLLFVBQVUsQ0FBQyxFQUFFLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUN6QyxPQUFPLENBQUMsQ0FBQztTQUNaO2FBQU0sSUFBSSxNQUFNLEtBQUssVUFBVSxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQ2hELE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQUFDLEFBbERELElBa0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgX21vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgTW9tZW50LCB1bml0T2ZUaW1lIH0gZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IFRpbWVGb3JtYXQgfSBmcm9tICcuLi9tb2RlbHMvdGltZS1mb3JtYXQuZW51bSc7XG5pbXBvcnQgeyBUaW1lUGVyaW9kIH0gZnJvbSAnLi4vbW9kZWxzL3RpbWUtcGVyaW9kLmVudW0nO1xuXG5jb25zdCBtb21lbnQgPSBfbW9tZW50O1xuXG5leHBvcnQgY2xhc3MgVGltZUFkYXB0ZXIge1xuXG4gICAgc3RhdGljIGZvcm1hdFRpbWUodGltZTogc3RyaW5nLCBmb3JtYXQgPSAxMik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHRpbWVGb3JtYXQgPSBmb3JtYXQgPT09IDI0ID8gVGltZUZvcm1hdC5UV0VOVFlfRk9VUiA6IFRpbWVGb3JtYXQuVFdFTFZFO1xuICAgICAgICByZXR1cm4gbW9tZW50KHRpbWUsIFRpbWVGb3JtYXQuVFdFTFZFKS5mb3JtYXQodGltZUZvcm1hdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnZlcnRUaW1lVG9Nb21lbnQodGltZTogc3RyaW5nKTogTW9tZW50IHtcbiAgICAgICAgcmV0dXJuIG1vbWVudCh0aW1lLCBUaW1lRm9ybWF0LlRXRUxWRSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzVGltZUF2YWlsYWJsZSh0aW1lOiBzdHJpbmcsIG1pbj86IE1vbWVudCwgbWF4PzogTW9tZW50LCBncmFudWxhcml0eT86IHVuaXRPZlRpbWUuU3RhcnRPZiwgbWludXRlc0dhcD86IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRpbWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZFRpbWUgPSB0aGlzLmNvbnZlcnRUaW1lVG9Nb21lbnQodGltZSk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBjb252ZXJ0ZWRUaW1lLm1pbnV0ZXMoKTtcblxuICAgICAgICBpZiAobWludXRlc0dhcCAmJiAobWludXRlcyAlIG1pbnV0ZXNHYXAgIT09IDApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdXIgbWludXRlcyAtICR7bWludXRlc30gZG9lc25cXCd0IG1hdGNoIHlvdXIgbWludXRlc0dhcCAtICR7bWludXRlc0dhcH1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc0FmdGVyID0gKG1pbiAmJiAhbWF4KVxuICAgICAgICAgICAgJiYgY29udmVydGVkVGltZS5pc1NhbWVPckFmdGVyKG1pbiwgZ3JhbnVsYXJpdHkpO1xuICAgICAgICBjb25zdCBpc0JlZm9yZSA9IChtYXggJiYgIW1pbilcbiAgICAgICAgICAgICYmIGNvbnZlcnRlZFRpbWUuaXNTYW1lT3JCZWZvcmUobWF4LCBncmFudWxhcml0eSk7XG4gICAgICAgIGNvbnN0IGlzQmV0d2VlbiA9IChtaW4gJiYgbWF4KVxuICAgICAgICAgICAgJiYgY29udmVydGVkVGltZS5pc0JldHdlZW4obWluLCBtYXgsIGdyYW51bGFyaXR5LCAnW10nKTtcbiAgICAgICAgY29uc3QgaXNBdmFpbGFibGUgPSAhbWluICYmICFtYXg7XG5cbiAgICAgICAgcmV0dXJuIGlzQWZ0ZXIgfHwgaXNCZWZvcmUgfHwgaXNCZXR3ZWVuIHx8IGlzQXZhaWxhYmxlO1xuICAgIH1cblxuICAgIC8qKipcbiAgICAgKiAgRm9ybWF0IGhvdXIgYWNjb3JkaW5nIHRvIHRpbWUgZm9ybWF0ICgxMiBvciAyNClcbiAgICAgKi9cbiAgICBzdGF0aWMgZm9ybWF0SG91cihjdXJyZW50SG91cjogbnVtYmVyLCBmb3JtYXQ6IG51bWJlciwgcGVyaW9kOiBUaW1lUGVyaW9kKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gMjQpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50SG91cjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBob3VyID0gcGVyaW9kID09PSBUaW1lUGVyaW9kLkFNID8gY3VycmVudEhvdXIgOiBjdXJyZW50SG91ciArIDEyO1xuXG4gICAgICAgIGlmIChwZXJpb2QgPT09IFRpbWVQZXJpb2QuQU0gJiYgaG91ciA9PT0gMTIpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9IGVsc2UgaWYgKHBlcmlvZCA9PT0gVGltZVBlcmlvZC5QTSAmJiBob3VyID09PSAyNCkge1xuICAgICAgICAgICAgcmV0dXJuIDEyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBob3VyO1xuICAgIH1cblxufVxuIl19