/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DateTime } from 'luxon';
import { TimeFormat } from '../models/time-format.enum';
import { TimePeriod } from '../models/time-period.enum';
import { TimepickerUtils } from '../utils/timepicker.utils';
// @dynamic
export class TimeAdapter {
    /**
     * @param {?} time
     * @return {?}
     */
    static parseTime(time) {
        if (time.indexOf(':') === -1) {
            return 'Invalid time';
        }
        /** @type {?} */
        let period = time.trim().substr(time.length - 2).toUpperCase();
        const [h, m] = time.split(':');
        /** @type {?} */
        const isPM = +h > 12;
        /** @type {?} */
        const isPeriodValid = period === TimePeriod.AM || period === TimePeriod.PM;
        /** @type {?} */
        const hours = isPM ? +h - 12 : +h;
        period = isPeriodValid ? period : isPM ? TimePeriod.PM : TimePeriod.AM;
        return `${hours}:${parseInt(m, 10)} ${period}`;
    }
    /**
     * @param {?} time
     * @param {?=} format
     * @return {?}
     */
    static formatTime(time, format = 12) {
        /** @type {?} */
        const timeFormat = format === 24 ? TimeFormat.TWENTY_FOUR : TimeFormat.TWELVE;
        return DateTime.fromFormat(this.parseTime(time), 'h:m a').toFormat(timeFormat).toLowerCase();
    }
    /**
     * @param {?} time
     * @return {?}
     */
    static convertTimeToDateTime(time) {
        return DateTime.fromFormat(this.parseTime(time), 'h:m a');
    }
    /**
     * @param {?} time
     * @param {?=} min
     * @param {?=} max
     * @param {?=} granularity
     * @param {?=} minutesGap
     * @return {?}
     */
    static isTimeAvailable(time, min, max, granularity, minutesGap) {
        if (!time) {
            return;
        }
        /** @type {?} */
        const convertedTime = this.convertTimeToDateTime(time);
        /** @type {?} */
        const minutes = convertedTime.minute;
        if (minutesGap && (minutes % minutesGap !== 0)) {
            throw new Error(`Your minutes - ${minutes} doesn\'t match your minutesGap - ${minutesGap}`);
        }
        /** @type {?} */
        const isAfter = (min && !max)
            && TimepickerUtils.isSameOrAfter(convertedTime, min, granularity);
        /** @type {?} */
        const isBefore = (max && !min)
            && TimepickerUtils.isSameOrBefore(convertedTime, max, granularity);
        /** @type {?} */
        const isBetween = (min && max)
            && TimepickerUtils.isBetween(convertedTime, min, max, granularity);
        /** @type {?} */
        const isAvailable = !min && !max;
        return isAfter || isBefore || isBetween || isAvailable;
    }
    /**
     *
     *  Format hour according to time format (12 or 24)
     * @param {?} currentHour
     * @param {?} format
     * @param {?} period
     * @return {?}
     */
    static formatHour(currentHour, format, period) {
        if (format === 24) {
            return currentHour;
        }
        /** @type {?} */
        const hour = period === TimePeriod.AM ? currentHour : currentHour + 12;
        if (period === TimePeriod.AM && hour === 12) {
            return 0;
        }
        else if (period === TimePeriod.PM && hour === 24) {
            return 12;
        }
        return hour;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21hdGVyaWFsLXRpbWVwaWNrZXIvc2VydmljZXMvdGltZS1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRWpDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQUc1RCxNQUFNLE9BQU8sV0FBVzs7Ozs7SUFFcEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFZO1FBQ3pCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUMxQixPQUFPLGNBQWMsQ0FBQztTQUN6Qjs7WUFDRyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRTtjQUV4RCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Y0FDeEIsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUU7O2NBQ2QsYUFBYSxHQUFHLE1BQU0sS0FBSyxVQUFVLENBQUMsRUFBRSxJQUFJLE1BQU0sS0FBSyxVQUFVLENBQUMsRUFBRTs7Y0FDcEUsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFakMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFFdkUsT0FBTyxHQUFHLEtBQUssSUFBSSxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDO0lBQ25ELENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBWSxFQUFFLE1BQU0sR0FBRyxFQUFFOztjQUNqQyxVQUFVLEdBQUcsTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU07UUFDN0UsT0FBTyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pHLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQVk7UUFDckMsT0FBTyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7Ozs7O0lBRUQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFZLEVBQUUsR0FBYyxFQUFFLEdBQWMsRUFBRSxXQUFpQyxFQUFFLFVBQW1CO1FBQ3ZILElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxPQUFPO1NBQ1Y7O2NBRUssYUFBYSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7O2NBQ2hELE9BQU8sR0FBRyxhQUFhLENBQUMsTUFBTTtRQUVwQyxJQUFJLFVBQVUsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDNUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsT0FBTyxxQ0FBcUMsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUMvRjs7Y0FDSyxPQUFPLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7ZUFDdEIsZUFBZSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLFdBQVcsQ0FBQzs7Y0FDL0QsUUFBUSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO2VBQ3ZCLGVBQWUsQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUM7O2NBQ2hFLFNBQVMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUM7ZUFDdkIsZUFBZSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUM7O2NBQ2hFLFdBQVcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUc7UUFFaEMsT0FBTyxPQUFPLElBQUksUUFBUSxJQUFJLFNBQVMsSUFBSSxXQUFXLENBQUM7SUFDM0QsQ0FBQzs7Ozs7Ozs7O0lBS0QsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFtQixFQUFFLE1BQWMsRUFBRSxNQUFrQjtRQUNyRSxJQUFJLE1BQU0sS0FBSyxFQUFFLEVBQUU7WUFDZixPQUFPLFdBQVcsQ0FBQztTQUN0Qjs7Y0FDSyxJQUFJLEdBQUcsTUFBTSxLQUFLLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLEVBQUU7UUFFdEUsSUFBSSxNQUFNLEtBQUssVUFBVSxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQ3pDLE9BQU8sQ0FBQyxDQUFDO1NBQ1o7YUFBTSxJQUFJLE1BQU0sS0FBSyxVQUFVLENBQUMsRUFBRSxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUU7WUFDaEQsT0FBTyxFQUFFLENBQUM7U0FDYjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nO1xuXG5pbXBvcnQgeyBUaW1lRm9ybWF0IH0gZnJvbSAnLi4vbW9kZWxzL3RpbWUtZm9ybWF0LmVudW0nO1xuaW1wb3J0IHsgVGltZVBlcmlvZCB9IGZyb20gJy4uL21vZGVscy90aW1lLXBlcmlvZC5lbnVtJztcbmltcG9ydCB7IFRpbWVwaWNrZXJVdGlscyB9IGZyb20gJy4uL3V0aWxzL3RpbWVwaWNrZXIudXRpbHMnO1xuXG4vLyBAZHluYW1pY1xuZXhwb3J0IGNsYXNzIFRpbWVBZGFwdGVyIHtcblxuICAgIHN0YXRpYyBwYXJzZVRpbWUodGltZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRpbWUuaW5kZXhPZignOicpID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuICdJbnZhbGlkIHRpbWUnO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwZXJpb2QgPSB0aW1lLnRyaW0oKS5zdWJzdHIodGltZS5sZW5ndGggLSAyKS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIGNvbnN0IFtoLCBtXSA9IHRpbWUuc3BsaXQoJzonKTtcbiAgICAgICAgY29uc3QgaXNQTSA9ICtoID4gMTI7XG4gICAgICAgIGNvbnN0IGlzUGVyaW9kVmFsaWQgPSBwZXJpb2QgPT09IFRpbWVQZXJpb2QuQU0gfHwgcGVyaW9kID09PSBUaW1lUGVyaW9kLlBNO1xuICAgICAgICBjb25zdCBob3VycyA9IGlzUE0gPyAraCAtIDEyIDogK2g7XG5cbiAgICAgICAgcGVyaW9kID0gaXNQZXJpb2RWYWxpZCA/IHBlcmlvZCA6IGlzUE0gPyBUaW1lUGVyaW9kLlBNIDogVGltZVBlcmlvZC5BTTtcblxuICAgICAgICByZXR1cm4gYCR7aG91cnN9OiR7cGFyc2VJbnQobSwgMTApfSAke3BlcmlvZH1gO1xuICAgIH1cblxuICAgIHN0YXRpYyBmb3JtYXRUaW1lKHRpbWU6IHN0cmluZywgZm9ybWF0ID0gMTIpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCB0aW1lRm9ybWF0ID0gZm9ybWF0ID09PSAyNCA/IFRpbWVGb3JtYXQuVFdFTlRZX0ZPVVIgOiBUaW1lRm9ybWF0LlRXRUxWRTtcbiAgICAgICAgcmV0dXJuIERhdGVUaW1lLmZyb21Gb3JtYXQodGhpcy5wYXJzZVRpbWUodGltZSksICdoOm0gYScpLnRvRm9ybWF0KHRpbWVGb3JtYXQpLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnZlcnRUaW1lVG9EYXRlVGltZSh0aW1lOiBzdHJpbmcpOiBEYXRlVGltZSB7XG4gICAgICAgIHJldHVybiBEYXRlVGltZS5mcm9tRm9ybWF0KHRoaXMucGFyc2VUaW1lKHRpbWUpLCAnaDptIGEnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNUaW1lQXZhaWxhYmxlKHRpbWU6IHN0cmluZywgbWluPzogRGF0ZVRpbWUsIG1heD86IERhdGVUaW1lLCBncmFudWxhcml0eT86ICdob3VycycgfCAnbWludXRlcycsIG1pbnV0ZXNHYXA/OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb252ZXJ0ZWRUaW1lID0gdGhpcy5jb252ZXJ0VGltZVRvRGF0ZVRpbWUodGltZSk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBjb252ZXJ0ZWRUaW1lLm1pbnV0ZTtcblxuICAgICAgICBpZiAobWludXRlc0dhcCAmJiAobWludXRlcyAlIG1pbnV0ZXNHYXAgIT09IDApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdXIgbWludXRlcyAtICR7bWludXRlc30gZG9lc25cXCd0IG1hdGNoIHlvdXIgbWludXRlc0dhcCAtICR7bWludXRlc0dhcH1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc0FmdGVyID0gKG1pbiAmJiAhbWF4KVxuICAgICAgICAgICAgJiYgVGltZXBpY2tlclV0aWxzLmlzU2FtZU9yQWZ0ZXIoY29udmVydGVkVGltZSwgbWluLCBncmFudWxhcml0eSk7XG4gICAgICAgIGNvbnN0IGlzQmVmb3JlID0gKG1heCAmJiAhbWluKVxuICAgICAgICAgICAgJiYgVGltZXBpY2tlclV0aWxzLmlzU2FtZU9yQmVmb3JlKGNvbnZlcnRlZFRpbWUsIG1heCwgZ3JhbnVsYXJpdHkpO1xuICAgICAgICBjb25zdCBpc0JldHdlZW4gPSAobWluICYmIG1heClcbiAgICAgICAgICAgICYmIFRpbWVwaWNrZXJVdGlscy5pc0JldHdlZW4oY29udmVydGVkVGltZSwgbWluLCBtYXgsIGdyYW51bGFyaXR5KTtcbiAgICAgICAgY29uc3QgaXNBdmFpbGFibGUgPSAhbWluICYmICFtYXg7XG5cbiAgICAgICAgcmV0dXJuIGlzQWZ0ZXIgfHwgaXNCZWZvcmUgfHwgaXNCZXR3ZWVuIHx8IGlzQXZhaWxhYmxlO1xuICAgIH1cblxuICAgIC8qKipcbiAgICAgKiAgRm9ybWF0IGhvdXIgYWNjb3JkaW5nIHRvIHRpbWUgZm9ybWF0ICgxMiBvciAyNClcbiAgICAgKi9cbiAgICBzdGF0aWMgZm9ybWF0SG91cihjdXJyZW50SG91cjogbnVtYmVyLCBmb3JtYXQ6IG51bWJlciwgcGVyaW9kOiBUaW1lUGVyaW9kKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gMjQpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50SG91cjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBob3VyID0gcGVyaW9kID09PSBUaW1lUGVyaW9kLkFNID8gY3VycmVudEhvdXIgOiBjdXJyZW50SG91ciArIDEyO1xuXG4gICAgICAgIGlmIChwZXJpb2QgPT09IFRpbWVQZXJpb2QuQU0gJiYgaG91ciA9PT0gMTIpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9IGVsc2UgaWYgKHBlcmlvZCA9PT0gVGltZVBlcmlvZC5QTSAmJiBob3VyID09PSAyNCkge1xuICAgICAgICAgICAgcmV0dXJuIDEyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBob3VyO1xuICAgIH1cbn1cbiJdfQ==