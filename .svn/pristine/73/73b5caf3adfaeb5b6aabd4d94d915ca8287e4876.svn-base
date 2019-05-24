/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, forwardRef, HostListener, Input } from '@angular/core';
import { NgxMaterialTimepickerComponent } from '../ngx-material-timepicker.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TimeAdapter } from '../services/time-adapter';
/** @type {?} */
const VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line
    useExisting: forwardRef(() => TimepickerDirective),
    multi: true
};
export class TimepickerDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this._format = 12;
        this._value = '';
        this.timepickerSubscriptions = [];
        this.onTouched = () => { };
        this.onChange = () => { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set format(value) {
        this._format = value === 24 ? 24 : 12;
    }
    /**
     * @return {?}
     */
    get format() {
        return this._format;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set min(value) {
        if (typeof value === 'string') {
            this._min = TimeAdapter.convertTimeToMoment(value);
            return;
        }
        this._min = value;
    }
    /**
     * @return {?}
     */
    get min() {
        return this._min;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set max(value) {
        if (typeof value === 'string') {
            this._max = TimeAdapter.convertTimeToMoment(value);
            return;
        }
        this._max = value;
    }
    /**
     * @return {?}
     */
    get max() {
        return this._max;
    }
    /**
     * @param {?} picker
     * @return {?}
     */
    set timepicker(picker) {
        this.registerTimepicker(picker);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (!value) {
            this._value = '';
            this.updateInputValue();
            return;
        }
        /** @type {?} */
        const time = TimeAdapter.formatTime(value, this._format);
        if (TimeAdapter.isTimeAvailable(time, (/** @type {?} */ (this._min)), (/** @type {?} */ (this._max)), 'minutes', this._timepicker.minutesGap)) {
            this._value = time;
            this.updateInputValue();
            return;
        }
        console.warn('Selected time doesn\'t match min or max value');
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @private
     * @param {?} time
     * @return {?}
     */
    set defaultTime(time) {
        this._timepicker.setDefaultTime(time);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onInput(value) {
        this.value = value;
        this.onChange(value);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['value'] && changes['value'].currentValue) {
            this.defaultTime = changes['value'].currentValue;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        if (!this.disableClick) {
            this._timepicker.open();
            event.stopPropagation();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this.defaultTime = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.timepickerSubscriptions.forEach(s => s.unsubscribe());
    }
    /**
     * @private
     * @param {?} picker
     * @return {?}
     */
    registerTimepicker(picker) {
        if (picker) {
            this._timepicker = picker;
            this._timepicker.registerInput(this);
            this.timepickerSubscriptions.push(this._timepicker.timeSet.subscribe((time) => {
                this.value = time;
                this.onChange(this._value);
                this.onTouched();
            }));
            this.timepickerSubscriptions.push(this._timepicker.closed.subscribe(() => this.defaultTime = this._value));
        }
        else {
            throw new Error('NgxMaterialTimepickerComponent is not defined.' +
                ' Please make sure you passed the timepicker to ngxTimepicker directive');
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateInputValue() {
        this.elementRef.nativeElement.value = this.value;
    }
}
TimepickerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxTimepicker]',
                providers: [VALUE_ACCESSOR],
                host: {
                    '[disabled]': 'disabled',
                    '(input)': 'onInput($event.target.value)',
                    '(blur)': 'onTouched()',
                },
            },] }
];
/** @nocollapse */
TimepickerDirective.ctorParameters = () => [
    { type: ElementRef }
];
TimepickerDirective.propDecorators = {
    format: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    timepicker: [{ type: Input, args: ['ngxTimepicker',] }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    disableClick: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TimepickerDirective.prototype._format;
    /**
     * @type {?}
     * @private
     */
    TimepickerDirective.prototype._min;
    /**
     * @type {?}
     * @private
     */
    TimepickerDirective.prototype._max;
    /**
     * @type {?}
     * @private
     */
    TimepickerDirective.prototype._timepicker;
    /**
     * @type {?}
     * @private
     */
    TimepickerDirective.prototype._value;
    /** @type {?} */
    TimepickerDirective.prototype.disabled;
    /** @type {?} */
    TimepickerDirective.prototype.disableClick;
    /**
     * @type {?}
     * @private
     */
    TimepickerDirective.prototype.timepickerSubscriptions;
    /** @type {?} */
    TimepickerDirective.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    TimepickerDirective.prototype.onChange;
    /**
     * @type {?}
     * @private
     */
    TimepickerDirective.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRpbWVwaWNrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21hdGVyaWFsLXRpbWVwaWNrZXIvZGlyZWN0aXZlcy9uZ3gtdGltZXBpY2tlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFzQyxNQUFNLGVBQWUsQ0FBQztBQUMxSCxPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUNwRixPQUFPLEVBQXVCLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFHdkUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDBCQUEwQixDQUFDOztNQUUvQyxjQUFjLEdBQUc7SUFDbkIsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztJQUNsRCxLQUFLLEVBQUUsSUFBSTtDQUNkO0FBV0QsTUFBTSxPQUFPLG1CQUFtQjs7OztJQTZFNUIsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQWxFbEMsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQTBEYixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBSVosNEJBQXVCLEdBQW1CLEVBQUUsQ0FBQztRQUNyRCxjQUFTLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQ2IsYUFBUSxHQUF5QixHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFHbEQsQ0FBQzs7Ozs7SUE1RUQsSUFDSSxNQUFNLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lB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QUNILE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQWdEO2dCQUM1RCx3RUFBd0UsQ0FBQyxDQUFDO1NBQ2pGO0lBQ0wsQ0FBQzs7Ozs7SUFFTyxnQkFBZ0I7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDckQsQ0FBQzs7O1lBeEpKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzNCLElBQUksRUFBRTtvQkFDRixZQUFZLEVBQUUsVUFBVTtvQkFDeEIsU0FBUyxFQUFFLDhCQUE4QjtvQkFDekMsUUFBUSxFQUFFLGFBQWE7aUJBQzFCO2FBQ0o7Ozs7WUF0QmtCLFVBQVU7OztxQkF5QnhCLEtBQUs7a0JBV0wsS0FBSztrQkFlTCxLQUFLO3lCQWVMLEtBQUssU0FBQyxlQUFlO29CQU1yQixLQUFLO3VCQXNCTCxLQUFLOzJCQUNMLEtBQUs7c0JBdUJMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7SUFwRmpDLHNDQUFxQjs7Ozs7SUFlckIsbUNBQThCOzs7OztJQWU5QixtQ0FBOEI7Ozs7O0lBTTlCLDBDQUFvRDs7Ozs7SUFzQnBELHFDQUFvQjs7SUFFcEIsdUNBQTJCOztJQUMzQiwyQ0FBK0I7Ozs7O0lBQy9CLHNEQUFxRDs7SUFDckQsd0NBQXFCOzs7OztJQUNyQix1Q0FBa0Q7Ozs7O0lBRXRDLHlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05neE1hdGVyaWFsVGltZXBpY2tlckNvbXBvbmVudH0gZnJvbSAnLi4vbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge01vbWVudH0gZnJvbSAnbW9tZW50JztcbmltcG9ydCB7VGltZUFkYXB0ZXJ9IGZyb20gJy4uL3NlcnZpY2VzL3RpbWUtYWRhcHRlcic7XG5cbmNvbnN0IFZBTFVFX0FDQ0VTU09SID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRpbWVwaWNrZXJEaXJlY3RpdmUpLFxuICAgIG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tuZ3hUaW1lcGlja2VyXScsXG4gICAgcHJvdmlkZXJzOiBbVkFMVUVfQUNDRVNTT1JdLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tkaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxuICAgICAgICAnKGlucHV0KSc6ICdvbklucHV0KCRldmVudC50YXJnZXQudmFsdWUpJyxcbiAgICAgICAgJyhibHVyKSc6ICdvblRvdWNoZWQoKScsXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBmb3JtYXQodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9mb3JtYXQgPSB2YWx1ZSA9PT0gMjQgPyAyNCA6IDEyO1xuICAgIH1cblxuICAgIGdldCBmb3JtYXQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9mb3JtYXQgPSAxMjtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IG1pbih2YWx1ZTogc3RyaW5nIHwgTW9tZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLl9taW4gPSBUaW1lQWRhcHRlci5jb252ZXJ0VGltZVRvTW9tZW50KHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9taW4gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgbWluKCk6IHN0cmluZyB8IE1vbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9taW47XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbWluOiBzdHJpbmcgfCBNb21lbnQ7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBtYXgodmFsdWU6IHN0cmluZyB8IE1vbWVudCkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5fbWF4ID0gVGltZUFkYXB0ZXIuY29udmVydFRpbWVUb01vbWVudCh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbWF4ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IG1heCgpOiBzdHJpbmcgfCBNb21lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4O1xuICAgIH1cblxuICAgIHByaXZhdGUgX21heDogc3RyaW5nIHwgTW9tZW50O1xuXG4gICAgQElucHV0KCduZ3hUaW1lcGlja2VyJylcbiAgICBzZXQgdGltZXBpY2tlcihwaWNrZXI6IE5neE1hdGVyaWFsVGltZXBpY2tlckNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyVGltZXBpY2tlcihwaWNrZXIpO1xuICAgIH1cbiAgICBwcml2YXRlIF90aW1lcGlja2VyOiBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJDb21wb25lbnQ7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUlucHV0VmFsdWUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aW1lID0gVGltZUFkYXB0ZXIuZm9ybWF0VGltZSh2YWx1ZSwgdGhpcy5fZm9ybWF0KTtcbiAgICAgICAgaWYgKFRpbWVBZGFwdGVyLmlzVGltZUF2YWlsYWJsZSh0aW1lLCA8TW9tZW50PnRoaXMuX21pbiwgPE1vbWVudD50aGlzLl9tYXgsICdtaW51dGVzJywgdGhpcy5fdGltZXBpY2tlci5taW51dGVzR2FwKSkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB0aW1lO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVJbnB1dFZhbHVlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS53YXJuKCdTZWxlY3RlZCB0aW1lIGRvZXNuXFwndCBtYXRjaCBtaW4gb3IgbWF4IHZhbHVlJyk7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF92YWx1ZSA9ICcnO1xuXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgZGlzYWJsZUNsaWNrOiBib29sZWFuO1xuICAgIHByaXZhdGUgdGltZXBpY2tlclN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gICAgb25Ub3VjaGVkID0gKCkgPT4ge307XG4gICAgcHJpdmF0ZSBvbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0IGRlZmF1bHRUaW1lKHRpbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl90aW1lcGlja2VyLnNldERlZmF1bHRUaW1lKHRpbWUpO1xuICAgIH1cblxuICAgIG9uSW5wdXQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKGNoYW5nZXNbJ3ZhbHVlJ10gJiYgY2hhbmdlc1sndmFsdWUnXS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFRpbWUgPSBjaGFuZ2VzWyd2YWx1ZSddLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlQ2xpY2spIHtcbiAgICAgICAgICAgIHRoaXMuX3RpbWVwaWNrZXIub3BlbigpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmRlZmF1bHRUaW1lID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnRpbWVwaWNrZXJTdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVnaXN0ZXJUaW1lcGlja2VyKHBpY2tlcjogTmd4TWF0ZXJpYWxUaW1lcGlja2VyQ29tcG9uZW50KTogdm9pZCB7XG4gICAgICAgIGlmIChwaWNrZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3RpbWVwaWNrZXIgPSBwaWNrZXI7XG4gICAgICAgICAgICB0aGlzLl90aW1lcGlja2VyLnJlZ2lzdGVySW5wdXQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnRpbWVwaWNrZXJTdWJzY3JpcHRpb25zLnB1c2godGhpcy5fdGltZXBpY2tlci50aW1lU2V0LnN1YnNjcmliZSgodGltZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRpbWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHRoaXMudGltZXBpY2tlclN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICB0aGlzLl90aW1lcGlja2VyLmNsb3NlZC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5kZWZhdWx0VGltZSA9IHRoaXMuX3ZhbHVlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05neE1hdGVyaWFsVGltZXBpY2tlckNvbXBvbmVudCBpcyBub3QgZGVmaW5lZC4nICtcbiAgICAgICAgICAgICAgICAnIFBsZWFzZSBtYWtlIHN1cmUgeW91IHBhc3NlZCB0aGUgdGltZXBpY2tlciB0byBuZ3hUaW1lcGlja2VyIGRpcmVjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVJbnB1dFZhbHVlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgfVxuXG59XG5cbiJdfQ==