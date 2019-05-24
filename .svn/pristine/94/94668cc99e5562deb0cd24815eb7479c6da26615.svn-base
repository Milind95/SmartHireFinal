/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DateTime } from 'luxon';
import { TimeFormat } from '../models/time-format.enum';
import { TimePeriod } from '../models/time-period.enum';
import { TimepickerUtils } from '../utils/timepicker.utils';
// @dynamic
var 
// @dynamic
TimeAdapter = /** @class */ (function () {
    function TimeAdapter() {
    }
    /**
     * @param {?} time
     * @return {?}
     */
    TimeAdapter.parseTime = /**
     * @param {?} time
     * @return {?}
     */
    function (time) {
        if (time.indexOf(':') === -1) {
            return 'Invalid time';
        }
        /** @type {?} */
        var period = time.trim().substr(time.length - 2).toUpperCase();
        var _a = tslib_1.__read(time.split(':'), 2), h = _a[0], m = _a[1];
        /** @type {?} */
        var isPM = +h > 12;
        /** @type {?} */
        var isPeriodValid = period === TimePeriod.AM || period === TimePeriod.PM;
        /** @type {?} */
        var hours = isPM ? +h - 12 : +h;
        period = isPeriodValid ? period : isPM ? TimePeriod.PM : TimePeriod.AM;
        return hours + ":" + parseInt(m, 10) + " " + period;
    };
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
        return DateTime.fromFormat(this.parseTime(time), 'h:m a').toFormat(timeFormat).toLowerCase();
    };
    /**
     * @param {?} time
     * @return {?}
     */
    TimeAdapter.convertTimeToDateTime = /**
     * @param {?} time
     * @return {?}
     */
    function (time) {
        return DateTime.fromFormat(this.parseTime(time), 'h:m a');
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
        var convertedTime = this.convertTimeToDateTime(time);
        /** @type {?} */
        var minutes = convertedTime.minute;
        if (minutesGap && (minutes % minutesGap !== 0)) {
            throw new Error("Your minutes - " + minutes + " doesn't match your minutesGap - " + minutesGap);
        }
        /** @type {?} */
        var isAfter = (min && !max)
            && TimepickerUtils.isSameOrAfter(convertedTime, min, granularity);
        /** @type {?} */
        var isBefore = (max && !min)
            && TimepickerUtils.isSameOrBefore(convertedTime, max, granularity);
        /** @type {?} */
        var isBetween = (min && max)
            && TimepickerUtils.isBetween(convertedTime, min, max, granularity);
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
// @dynamic
export { TimeAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21hdGVyaWFsLXRpbWVwaWNrZXIvc2VydmljZXMvdGltZS1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUVqQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFHNUQ7OztJQUFBO0lBaUVBLENBQUM7Ozs7O0lBL0RVLHFCQUFTOzs7O0lBQWhCLFVBQWlCLElBQVk7UUFDekIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzFCLE9BQU8sY0FBYyxDQUFDO1NBQ3pCOztZQUNHLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFO1FBRXhELElBQUEsdUNBQXdCLEVBQXZCLFNBQUMsRUFBRSxTQUFvQjs7WUFDeEIsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUU7O1lBQ2QsYUFBYSxHQUFHLE1BQU0sS0FBSyxVQUFVLENBQUMsRUFBRSxJQUFJLE1BQU0sS0FBSyxVQUFVLENBQUMsRUFBRTs7WUFDcEUsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFakMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVB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ICdsdXhvbic7XG5cbmltcG9ydCB7IFRpbWVGb3JtYXQgfSBmcm9tICcuLi9tb2RlbHMvdGltZS1mb3JtYXQuZW51bSc7XG5pbXBvcnQgeyBUaW1lUGVyaW9kIH0gZnJvbSAnLi4vbW9kZWxzL3RpbWUtcGVyaW9kLmVudW0nO1xuaW1wb3J0IHsgVGltZXBpY2tlclV0aWxzIH0gZnJvbSAnLi4vdXRpbHMvdGltZXBpY2tlci51dGlscyc7XG5cbi8vIEBkeW5hbWljXG5leHBvcnQgY2xhc3MgVGltZUFkYXB0ZXIge1xuXG4gICAgc3RhdGljIHBhcnNlVGltZSh0aW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGltZS5pbmRleE9mKCc6JykgPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0ludmFsaWQgdGltZSc7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBlcmlvZCA9IHRpbWUudHJpbSgpLnN1YnN0cih0aW1lLmxlbmd0aCAtIDIpLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgY29uc3QgW2gsIG1dID0gdGltZS5zcGxpdCgnOicpO1xuICAgICAgICBjb25zdCBpc1BNID0gK2ggPiAxMjtcbiAgICAgICAgY29uc3QgaXNQZXJpb2RWYWxpZCA9IHBlcmlvZCA9PT0gVGltZVBlcmlvZC5BTSB8fCBwZXJpb2QgPT09IFRpbWVQZXJpb2QuUE07XG4gICAgICAgIGNvbnN0IGhvdXJzID0gaXNQTSA/ICtoIC0gMTIgOiAraDtcblxuICAgICAgICBwZXJpb2QgPSBpc1BlcmlvZFZhbGlkID8gcGVyaW9kIDogaXNQTSA/IFRpbWVQZXJpb2QuUE0gOiBUaW1lUGVyaW9kLkFNO1xuXG4gICAgICAgIHJldHVybiBgJHtob3Vyc306JHtwYXJzZUludChtLCAxMCl9ICR7cGVyaW9kfWA7XG4gICAgfVxuXG4gICAgc3RhdGljIGZvcm1hdFRpbWUodGltZTogc3RyaW5nLCBmb3JtYXQgPSAxMik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHRpbWVGb3JtYXQgPSBmb3JtYXQgPT09IDI0ID8gVGltZUZvcm1hdC5UV0VOVFlfRk9VUiA6IFRpbWVGb3JtYXQuVFdFTFZFO1xuICAgICAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbUZvcm1hdCh0aGlzLnBhcnNlVGltZSh0aW1lKSwgJ2g6bSBhJykudG9Gb3JtYXQodGltZUZvcm1hdCkudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udmVydFRpbWVUb0RhdGVUaW1lKHRpbWU6IHN0cmluZyk6IERhdGVUaW1lIHtcbiAgICAgICAgcmV0dXJuIERhdGVUaW1lLmZyb21Gb3JtYXQodGhpcy5wYXJzZVRpbWUodGltZSksICdoOm0gYScpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc1RpbWVBdmFpbGFibGUodGltZTogc3RyaW5nLCBtaW4/OiBEYXRlVGltZSwgbWF4PzogRGF0ZVRpbWUsIGdyYW51bGFyaXR5PzogJ2hvdXJzJyB8ICdtaW51dGVzJywgbWludXRlc0dhcD86IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRpbWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZFRpbWUgPSB0aGlzLmNvbnZlcnRUaW1lVG9EYXRlVGltZSh0aW1lKTtcbiAgICAgICAgY29uc3QgbWludXRlcyA9IGNvbnZlcnRlZFRpbWUubWludXRlO1xuXG4gICAgICAgIGlmIChtaW51dGVzR2FwICYmIChtaW51dGVzICUgbWludXRlc0dhcCAhPT0gMCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgWW91ciBtaW51dGVzIC0gJHttaW51dGVzfSBkb2VzblxcJ3QgbWF0Y2ggeW91ciBtaW51dGVzR2FwIC0gJHttaW51dGVzR2FwfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzQWZ0ZXIgPSAobWluICYmICFtYXgpXG4gICAgICAgICAgICAmJiBUaW1lcGlja2VyVXRpbHMuaXNTYW1lT3JBZnRlcihjb252ZXJ0ZWRUaW1lLCBtaW4sIGdyYW51bGFyaXR5KTtcbiAgICAgICAgY29uc3QgaXNCZWZvcmUgPSAobWF4ICYmICFtaW4pXG4gICAgICAgICAgICAmJiBUaW1lcGlja2VyVXRpbHMuaXNTYW1lT3JCZWZvcmUoY29udmVydGVkVGltZSwgbWF4LCBncmFudWxhcml0eSk7XG4gICAgICAgIGNvbnN0IGlzQmV0d2VlbiA9IChtaW4gJiYgbWF4KVxuICAgICAgICAgICAgJiYgVGltZXBpY2tlclV0aWxzLmlzQmV0d2Vlbihjb252ZXJ0ZWRUaW1lLCBtaW4sIG1heCwgZ3JhbnVsYXJpdHkpO1xuICAgICAgICBjb25zdCBpc0F2YWlsYWJsZSA9ICFtaW4gJiYgIW1heDtcblxuICAgICAgICByZXR1cm4gaXNBZnRlciB8fCBpc0JlZm9yZSB8fCBpc0JldHdlZW4gfHwgaXNBdmFpbGFibGU7XG4gICAgfVxuXG4gICAgLyoqKlxuICAgICAqICBGb3JtYXQgaG91ciBhY2NvcmRpbmcgdG8gdGltZSBmb3JtYXQgKDEyIG9yIDI0KVxuICAgICAqL1xuICAgIHN0YXRpYyBmb3JtYXRIb3VyKGN1cnJlbnRIb3VyOiBudW1iZXIsIGZvcm1hdDogbnVtYmVyLCBwZXJpb2Q6IFRpbWVQZXJpb2QpOiBudW1iZXIge1xuICAgICAgICBpZiAoZm9ybWF0ID09PSAyNCkge1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRIb3VyO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhvdXIgPSBwZXJpb2QgPT09IFRpbWVQZXJpb2QuQU0gPyBjdXJyZW50SG91ciA6IGN1cnJlbnRIb3VyICsgMTI7XG5cbiAgICAgICAgaWYgKHBlcmlvZCA9PT0gVGltZVBlcmlvZC5BTSAmJiBob3VyID09PSAxMikge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0gZWxzZSBpZiAocGVyaW9kID09PSBUaW1lUGVyaW9kLlBNICYmIGhvdXIgPT09IDI0KSB7XG4gICAgICAgICAgICByZXR1cm4gMTI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgfVxufVxuIl19