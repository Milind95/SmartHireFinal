import { EventEmitter } from '@angular/core';
import { ClockFaceTime } from '../../models/clock-face-time.interface';
import { Moment } from 'moment';
export declare class NgxMaterialTimepickerHoursFace {
    selectedHour: ClockFaceTime;
    minTime: Moment;
    maxTime: Moment;
    format: number;
    hourChange: EventEmitter<ClockFaceTime>;
    hourSelected: EventEmitter<number>;
    hoursList: ClockFaceTime[];
    protected constructor(format: number);
    onTimeSelected(time: number): void;
}
