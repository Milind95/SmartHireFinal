/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Inject, Input, ViewChild, ContentChild, Optional, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatOption, MatSelect, SELECT_PANEL_MAX_HEIGHT, _countGroupLabelsBeforeOption } from '@angular/material';
import { A, Z, ZERO, NINE, SPACE, END, HOME, } from '@angular/cdk/keycodes';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { Subject } from 'rxjs';
import { delay, take, takeUntil } from 'rxjs/operators';
import { MatSelectSearchClearDirective } from './mat-select-search-clear.directive';
/* tslint:disable:member-ordering component-selector */
/**
 * Component providing an input field for searching MatSelect options.
 *
 * Example usage:
 *
 * interface Bank {
 *  id: string;
 *  name: string;
 * }
 *
 * \@Component({
 *   selector: 'my-app-data-selection',
 *   template: `
 *     <mat-form-field>
 *       <mat-select [formControl]="bankCtrl" placeholder="Bank">
 *         <ngx-mat-select-search [formControl]="bankFilterCtrl"></ngx-mat-select-search>
 *         <mat-option *ngFor="let bank of filteredBanks | async" [value]="bank.id">
 *           {{bank.name}}
 *         </mat-option>
 *       </mat-select>
 *     </mat-form-field>
 *   `
 * })
 * export class DataSelectionComponent implements OnInit, OnDestroy {
 *
 *   // control for the selected bank
 *   public bankCtrl: FormControl = new FormControl();
 *   // control for the MatSelect filter keyword
 *   public bankFilterCtrl: FormControl = new FormControl();
 *
 *   // list of banks
 *   private banks: Bank[] = [{name: 'Bank A', id: 'A'}, {name: 'Bank B', id: 'B'}, {name: 'Bank C', id: 'C'}];
 *   // list of banks filtered by search keyword
 *   public filteredBanks: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);
 *
 *   // Subject that emits when the component has been destroyed.
 *   private _onDestroy = new Subject<void>();
 *
 *
 *   ngOnInit() {
 *     // load the initial bank list
 *     this.filteredBanks.next(this.banks.slice());
 *     // listen for search field value changes
 *     this.bankFilterCtrl.valueChanges
 *       .pipe(takeUntil(this._onDestroy))
 *       .subscribe(() => {
 *         this.filterBanks();
 *       });
 *   }
 *
 *   ngOnDestroy() {
 *     this._onDestroy.next();
 *     this._onDestroy.complete();
 *   }
 *
 *   private filterBanks() {
 *     if (!this.banks) {
 *       return;
 *     }
 *
 *     // get the search keyword
 *     let search = this.bankFilterCtrl.value;
 *     if (!search) {
 *       this.filteredBanks.next(this.banks.slice());
 *       return;
 *     } else {
 *       search = search.toLowerCase();
 *     }
 *
 *     // filter the banks
 *     this.filteredBanks.next(
 *       this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
 *     );
 *   }
 * }
 */
var MatSelectSearchComponent = /** @class */ (function () {
    function MatSelectSearchComponent(matSelect, changeDetectorRef, _viewportRuler, matOption) {
        if (matOption === void 0) { matOption = null; }
        this.matSelect = matSelect;
        this.changeDetectorRef = changeDetectorRef;
        this._viewportRuler = _viewportRuler;
        this.matOption = matOption;
        /**
         * Label of the search placeholder
         */
        this.placeholderLabel = 'Suche';
        /**
         * Type of the search input field
         */
        this.type = "text";
        /**
         * Label to be shown when no entries are found. Set to null if no message should be shown.
         */
        this.noEntriesFoundLabel = 'Keine Optionen gefunden';
        /**
         * Whether or not the search field should be cleared after the dropdown menu is closed.
         * Useful for server-side filtering. See [#3](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/3)
         */
        this.clearSearchInput = true;
        /**
         * Whether to show the search-in-progress indicator
         */
        this.searching = false;
        /**
         * Disables initial focusing of the input field
         */
        this.disableInitialFocus = false;
        /**
         * Prevents home / end key being propagated to mat-select,
         * allowing to move the cursor within the search input instead of navigating the options
         */
        this.preventHomeEndKeyPropagation = false;
        /**
         * Disables scrolling to active options when option list changes. Useful for server-side search
         */
        this.disableScrollToActiveOnOptionsChanged = false;
        this.onChange = function (_) { };
        this.onTouched = function (_) { };
        /**
         * Whether the backdrop class has been set
         */
        this.overlayClassSet = false;
        /**
         * Event that emits when the current value changes
         */
        this.change = new EventEmitter();
        /**
         * Subject that emits when the component has been destroyed.
         */
        this._onDestroy = new Subject();
    }
    Object.defineProperty(MatSelectSearchComponent.prototype, "isInsideMatOption", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.matOption;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelectSearchComponent.prototype, "value", {
        /** Current search value */
        get: /**
         * Current search value
         * @return {?}
         */
        function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatSelectSearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // set custom panel class
        /** @type {?} */
        var panelClass = 'mat-select-search-panel';
        if (this.matSelect.panelClass) {
            if (Array.isArray(this.matSelect.panelClass)) {
                this.matSelect.panelClass.push(panelClass);
            }
            else if (typeof this.matSelect.panelClass === 'string') {
                this.matSelect.panelClass = [this.matSelect.panelClass, panelClass];
            }
            else if (typeof this.matSelect.panelClass === 'object') {
                this.matSelect.panelClass[panelClass] = true;
            }
        }
        else {
            this.matSelect.panelClass = panelClass;
        }
        // set custom mat-option class if the component was placed inside a mat-option
        if (this.matOption) {
            this.matOption.disabled = true;
            this.matOption._getHostElement().classList.add('contains-mat-select-search');
        }
        // when the select dropdown panel is opened or closed
        this.matSelect.openedChange
            .pipe(delay(1), takeUntil(this._onDestroy))
            .subscribe(function (opened) {
            if (opened) {
                _this.updateInputWidth();
                // focus the search field when opening
                if (!_this.disableInitialFocus) {
                    _this._focus();
                }
            }
            else {
                // clear it when closing
                if (_this.clearSearchInput) {
                    _this._reset();
                }
            }
        });
        // set the first item active after the options changed
        this.matSelect.openedChange
            .pipe(take(1))
            .pipe(takeUntil(this._onDestroy))
            .subscribe(function () {
            if (_this.matSelect._keyManager) {
                _this.matSelect._keyManager.change.pipe(takeUntil(_this._onDestroy))
                    .subscribe(function () { return _this.adjustScrollTopToFitActiveOptionIntoView(); });
            }
            else {
                console.log('_keyManager was not initialized.');
            }
            _this._options = _this.matSelect.options;
            _this._options.changes
                .pipe(takeUntil(_this._onDestroy))
                .subscribe(function () {
                /** @type {?} */
                var keyManager = _this.matSelect._keyManager;
                if (keyManager && _this.matSelect.panelOpen) {
                    // avoid "expression has been changed" error
                    setTimeout(function () {
                        // set first item active and input width
                        keyManager.setFirstItemActive();
                        _this.updateInputWidth();
                        // set no entries found class on mat option
                        if (_this.matOption) {
                            if (_this._noEntriesFound()) {
                                _this.matOption._getHostElement().classList.add('mat-select-search-no-entries-found');
                            }
                            else {
                                _this.matOption._getHostElement().classList.remove('mat-select-search-no-entries-found');
                            }
                        }
                        if (!_this.disableScrollToActiveOnOptionsChanged) {
                            _this.adjustScrollTopToFitActiveOptionIntoView();
                        }
                    }, 1);
                }
            });
        });
        // detect changes when the input changes
        this.change
            .pipe(takeUntil(this._onDestroy))
            .subscribe(function () {
            _this.changeDetectorRef.detectChanges();
        });
        // resize the input width when the viewport is resized, i.e. the trigger width could potentially be resized
        this._viewportRuler.change()
            .pipe(takeUntil(this._onDestroy))
            .subscribe(function () {
            if (_this.matSelect.panelOpen) {
                _this.updateInputWidth();
            }
        });
        this.initMultipleHandling();
    };
    /**
     * @return {?}
     */
    MatSelectSearchComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    /**
     * @return {?}
     */
    MatSelectSearchComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setOverlayClass();
        // update view when available options change
        this.matSelect.openedChange
            .pipe(take(1), takeUntil(this._onDestroy)).subscribe(function () {
            _this.matSelect.options.changes
                .pipe(takeUntil(_this._onDestroy))
                .subscribe(function () {
                _this.changeDetectorRef.markForCheck();
            });
        });
    };
    /**
     * Handles the key down event with MatSelect.
     * Allows e.g. selecting with enter key, navigation with arrow keys, etc.
     * @param event
     */
    /**
     * Handles the key down event with MatSelect.
     * Allows e.g. selecting with enter key, navigation with arrow keys, etc.
     * @param {?} event
     * @return {?}
     */
    MatSelectSearchComponent.prototype._handleKeydown = /**
     * Handles the key down event with MatSelect.
     * Allows e.g. selecting with enter key, navigation with arrow keys, etc.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Prevent propagation for all alphanumeric characters in order to avoid selection issues
        if ((event.key && event.key.length === 1) ||
            (event.keyCode >= A && event.keyCode <= Z) ||
            (event.keyCode >= ZERO && event.keyCode <= NINE) ||
            (event.keyCode === SPACE)
            || (this.preventHomeEndKeyPropagation && (event.keyCode === HOME || event.keyCode === END))) {
            event.stopPropagation();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MatSelectSearchComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var valueChanged = value !== this._value;
        if (valueChanged) {
            this._value = value;
            this.change.emit(value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MatSelectSearchComponent.prototype.onInputChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var valueChanged = value !== this._value;
        if (valueChanged) {
            this.initMultiSelectedValues();
            this._value = value;
            this.onChange(value);
            this.change.emit(value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MatSelectSearchComponent.prototype.onBlur = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.writeValue(value);
        this.onTouched();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MatSelectSearchComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MatSelectSearchComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * Focuses the search input field
     */
    /**
     * Focuses the search input field
     * @return {?}
     */
    MatSelectSearchComponent.prototype._focus = /**
     * Focuses the search input field
     * @return {?}
     */
    function () {
        if (!this.searchSelectInput || !this.matSelect.panel) {
            return;
        }
        // save and restore scrollTop of panel, since it will be reset by focus()
        // note: this is hacky
        /** @type {?} */
        var panel = this.matSelect.panel.nativeElement;
        /** @type {?} */
        var scrollTop = panel.scrollTop;
        // focus
        this.searchSelectInput.nativeElement.focus();
        panel.scrollTop = scrollTop;
    };
    /**
     * Resets the current search value
     * @param focus whether to focus after resetting
     */
    /**
     * Resets the current search value
     * @param {?=} focus whether to focus after resetting
     * @return {?}
     */
    MatSelectSearchComponent.prototype._reset = /**
     * Resets the current search value
     * @param {?=} focus whether to focus after resetting
     * @return {?}
     */
    function (focus) {
        if (!this.searchSelectInput) {
            return;
        }
        this.searchSelectInput.nativeElement.value = '';
        this.onInputChange('');
        if (this.matOption && !focus) {
            // remove no entries found class on mat option
            this.matOption._getHostElement().classList.remove('mat-select-search-no-entries-found');
        }
        if (focus) {
            this._focus();
        }
    };
    /**
     * Sets the overlay class  to correct offsetY
     * so that the selected option is at the position of the select box when opening
     */
    /**
     * Sets the overlay class  to correct offsetY
     * so that the selected option is at the position of the select box when opening
     * @private
     * @return {?}
     */
    MatSelectSearchComponent.prototype.setOverlayClass = /**
     * Sets the overlay class  to correct offsetY
     * so that the selected option is at the position of the select box when opening
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.overlayClassSet) {
            return;
        }
        /** @type {?} */
        var overlayClasses = ['cdk-overlay-pane-select-search'];
        if (!this.matOption) {
            // add offset to panel if component is not placed inside mat-option
            overlayClasses.push('cdk-overlay-pane-select-search-with-offset');
        }
        this.matSelect.overlayDir.attach
            .pipe(takeUntil(this._onDestroy))
            .subscribe(function () {
            // note: this is hacky, but currently there is no better way to do this
            /** @type {?} */
            var element = _this.searchSelectInput.nativeElement;
            /** @type {?} */
            var overlayElement;
            while (element = element.parentElement) {
                if (element.classList.contains('cdk-overlay-pane')) {
                    overlayElement = element;
                    break;
                }
            }
            if (overlayElement) {
                overlayClasses.forEach(function (overlayClass) {
                    overlayElement.classList.add(overlayClass);
                });
            }
        });
        this.overlayClassSet = true;
    };
    /**
     * Initializes handling <mat-select [multiple]="true">
     * Note: to improve this code, mat-select should be extended to allow disabling resetting the selection while filtering.
     */
    /**
     * Initializes handling <mat-select [multiple]="true">
     * Note: to improve this code, mat-select should be extended to allow disabling resetting the selection while filtering.
     * @private
     * @return {?}
     */
    MatSelectSearchComponent.prototype.initMultipleHandling = /**
     * Initializes handling <mat-select [multiple]="true">
     * Note: to improve this code, mat-select should be extended to allow disabling resetting the selection while filtering.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // if <mat-select [multiple]="true">
        // store previously selected values and restore them when they are deselected
        // because the option is not available while we are currently filtering
        this.matSelect.valueChange
            .pipe(takeUntil(this._onDestroy))
            .subscribe(function (values) {
            if (_this.matSelect.multiple) {
                /** @type {?} */
                var restoreSelectedValues_1 = false;
                if (_this._value && _this._value.length
                    && _this.previousSelectedValues && Array.isArray(_this.previousSelectedValues)) {
                    if (!values || !Array.isArray(values)) {
                        values = [];
                    }
                    /** @type {?} */
                    var optionValues_1 = _this.matSelect.options.map(function (option) { return option.value; });
                    _this.previousSelectedValues.forEach(function (previousValue) {
                        if (values.indexOf(previousValue) === -1 && optionValues_1.indexOf(previousValue) === -1) {
                            // if a value that was selected before is deselected and not found in the options, it was deselected
                            // due to the filtering, so we restore it.
                            values.push(previousValue);
                            restoreSelectedValues_1 = true;
                        }
                    });
                }
                if (restoreSelectedValues_1) {
                    _this.matSelect._onChange(values);
                }
                _this.previousSelectedValues = values;
            }
        });
    };
    /**
     * Scrolls the currently active option into the view if it is not yet visible.
     */
    /**
     * Scrolls the currently active option into the view if it is not yet visible.
     * @private
     * @return {?}
     */
    MatSelectSearchComponent.prototype.adjustScrollTopToFitActiveOptionIntoView = /**
     * Scrolls the currently active option into the view if it is not yet visible.
     * @private
     * @return {?}
     */
    function () {
        if (this.matSelect.panel && this.matSelect.options.length > 0) {
            /** @type {?} */
            var matOptionHeight = this.getMatOptionHeight();
            /** @type {?} */
            var activeOptionIndex = this.matSelect._keyManager.activeItemIndex || 0;
            /** @type {?} */
            var labelCount = _countGroupLabelsBeforeOption(activeOptionIndex, this.matSelect.options, this.matSelect.optionGroups);
            // If the component is in a MatOption, the activeItemIndex will be offset by one.
            /** @type {?} */
            var indexOfOptionToFitIntoView = (this.matOption ? -1 : 0) + labelCount + activeOptionIndex;
            /** @type {?} */
            var currentScrollTop = this.matSelect.panel.nativeElement.scrollTop;
            /** @type {?} */
            var searchInputHeight = this.innerSelectSearch.nativeElement.offsetHeight;
            /** @type {?} */
            var amountOfVisibleOptions = Math.floor((SELECT_PANEL_MAX_HEIGHT - searchInputHeight) / matOptionHeight);
            /** @type {?} */
            var indexOfFirstVisibleOption = Math.round((currentScrollTop + searchInputHeight) / matOptionHeight) - 1;
            if (indexOfFirstVisibleOption >= indexOfOptionToFitIntoView) {
                this.matSelect.panel.nativeElement.scrollTop = indexOfOptionToFitIntoView * matOptionHeight;
            }
            else if (indexOfFirstVisibleOption + amountOfVisibleOptions <= indexOfOptionToFitIntoView) {
                this.matSelect.panel.nativeElement.scrollTop = (indexOfOptionToFitIntoView + 1) * matOptionHeight - (SELECT_PANEL_MAX_HEIGHT - searchInputHeight);
            }
        }
    };
    /**
     *  Set the width of the innerSelectSearch to fit even custom scrollbars
     *  And support all Operation Systems
     */
    /**
     *  Set the width of the innerSelectSearch to fit even custom scrollbars
     *  And support all Operation Systems
     * @return {?}
     */
    MatSelectSearchComponent.prototype.updateInputWidth = /**
     *  Set the width of the innerSelectSearch to fit even custom scrollbars
     *  And support all Operation Systems
     * @return {?}
     */
    function () {
        if (!this.innerSelectSearch || !this.innerSelectSearch.nativeElement) {
            return;
        }
        /** @type {?} */
        var element = this.innerSelectSearch.nativeElement;
        /** @type {?} */
        var panelElement;
        while (element = element.parentElement) {
            if (element.classList.contains('mat-select-panel')) {
                panelElement = element;
                break;
            }
        }
        if (panelElement) {
            this.innerSelectSearch.nativeElement.style.width = panelElement.clientWidth + 'px';
        }
    };
    /**
     * @private
     * @return {?}
     */
    MatSelectSearchComponent.prototype.getMatOptionHeight = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.matSelect.options.length > 0) {
            return this.matSelect.options.first._getHostElement().getBoundingClientRect().height;
        }
        return 0;
    };
    /**
     *  Initialize this.previousSelectedValues once the first filtering occurs.
     */
    /**
     *  Initialize this.previousSelectedValues once the first filtering occurs.
     * @return {?}
     */
    MatSelectSearchComponent.prototype.initMultiSelectedValues = /**
     *  Initialize this.previousSelectedValues once the first filtering occurs.
     * @return {?}
     */
    function () {
        if (this.matSelect.multiple && !this._value) {
            this.previousSelectedValues = this.matSelect.options
                .filter(function (option) { return option.selected; })
                .map(function (option) { return option.value; });
        }
    };
    /**
     * Returns whether the "no entries found" message should be displayed
     */
    /**
     * Returns whether the "no entries found" message should be displayed
     * @return {?}
     */
    MatSelectSearchComponent.prototype._noEntriesFound = /**
     * Returns whether the "no entries found" message should be displayed
     * @return {?}
     */
    function () {
        if (!this._options) {
            return;
        }
        if (this.matOption) {
            return this.noEntriesFoundLabel && this.value && this._options.length === 1;
        }
        else {
            return this.noEntriesFoundLabel && this.value && this._options.length === 0;
        }
    };
    MatSelectSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-mat-select-search',
                    template: "<!-- Placeholder to adjust vertical offset of the mat-option elements -->\n<input matInput class=\"mat-select-search-input mat-select-search-hidden\"/>\n\n<!-- Note: the  mat-datepicker-content mat-tab-header are needed to inherit the material theme colors, see PR #22 -->\n<div\n      #innerSelectSearch\n      class=\"mat-select-search-inner mat-typography mat-datepicker-content mat-tab-header\"\n      [ngClass]=\"{'mat-select-search-inner-multiple': matSelect.multiple}\">\n  <input matInput\n         class=\"mat-select-search-input\"\n         autocomplete=\"off\"\n         [type]=\"type\"\n         #searchSelectInput\n         (keydown)=\"_handleKeydown($event)\"\n         (input)=\"onInputChange($event.target.value)\"\n         (blur)=\"onBlur($event.target.value)\"\n         [placeholder]=\"placeholderLabel\"\n  />\n  <mat-spinner *ngIf=\"searching\"\n          [@enterAnimation]\n          class=\"mat-select-search-spinner\"\n          diameter=\"16\"></mat-spinner>\n\n  <button mat-button\n          *ngIf=\"value && !searching\"\n          mat-icon-button\n          aria-label=\"Clear\"\n          (click)=\"_reset(true)\"\n          class=\"mat-select-search-clear\">\n    <ng-content *ngIf=\"clearIcon; else defaultIcon\" select=\"[ngxMatSelectSearchClear]\"></ng-content>\n    <ng-template #defaultIcon>\n      <mat-icon>close</mat-icon>\n    </ng-template>\n  </button>\n</div>\n\n<div *ngIf=\"_noEntriesFound()\"\n     class=\"mat-select-search-no-entries-found\">\n  {{noEntriesFoundLabel}}\n</div>\n<!--\nCopyright (c) 2018 Bithost GmbH All Rights Reserved.\n\nUse of this source code is governed by an MIT-style license that can be\nfound in the LICENSE file at https://angular.io/license\n-->\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return MatSelectSearchComponent; }),
                            multi: true
                        }
                    ],
                    animations: [
                        trigger('enterAnimation', [
                            state('void', style({
                                opacity: 0
                            })),
                            state('*', style({
                                opacity: 1
                            })),
                            transition('void <=> *', [
                                animate('0.1s ease-out')
                            ])
                        ])
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".mat-select-search-hidden{visibility:hidden}.mat-select-search-inner{position:absolute;top:0;width:100%;border-bottom-width:1px;border-bottom-style:solid;z-index:100;font-size:inherit;box-shadow:none;border-radius:0;-webkit-transform:translate3d(0,0,0)}.mat-select-search-inner.mat-select-search-inner-multiple{width:100%}.mat-select-search-inner .mat-input-element:-ms-input-placeholder{-ms-user-select:text}/deep/ .mat-select-search-panel{-webkit-transform:none!important;transform:none!important;overflow-x:hidden}.mat-select-search-input{padding:16px 36px 16px 16px;box-sizing:border-box}.mat-select-search-no-entries-found{padding:16px}.mat-select-search-clear{position:absolute;right:4px;top:5px}.mat-select-search-spinner{position:absolute;right:16px;top:calc(50% - 8px)}:host.mat-select-search-inside-mat-option .mat-select-search-input{padding-top:0;padding-bottom:0;height:3em;line-height:3em}:host.mat-select-search-inside-mat-option .mat-select-search-clear{top:3px}/deep/ .cdk-overlay-pane-select-search.cdk-overlay-pane-select-search-with-offset{margin-top:-50px}/deep/ .mat-option[aria-disabled=true].contains-mat-select-search{position:static;padding:0}/deep/ .mat-option[aria-disabled=true].contains-mat-select-search .mat-icon{margin-right:0}/deep/ .mat-option[aria-disabled=true].contains-mat-select-search .mat-option-pseudo-checkbox{display:none}/deep/ .mat-option[aria-disabled=true].contains-mat-select-search.mat-select-search-no-entries-found{height:6em}"]
                }] }
    ];
    /** @nocollapse */
    MatSelectSearchComponent.ctorParameters = function () { return [
        { type: MatSelect, decorators: [{ type: Inject, args: [MatSelect,] }] },
        { type: ChangeDetectorRef },
        { type: ViewportRuler },
        { type: MatOption, decorators: [{ type: Optional }, { type: Inject, args: [MatOption,] }] }
    ]; };
    MatSelectSearchComponent.propDecorators = {
        placeholderLabel: [{ type: Input }],
        type: [{ type: Input }],
        noEntriesFoundLabel: [{ type: Input }],
        clearSearchInput: [{ type: Input }],
        searching: [{ type: Input }],
        disableInitialFocus: [{ type: Input }],
        preventHomeEndKeyPropagation: [{ type: Input }],
        disableScrollToActiveOnOptionsChanged: [{ type: Input }],
        searchSelectInput: [{ type: ViewChild, args: ['searchSelectInput', { read: ElementRef },] }],
        innerSelectSearch: [{ type: ViewChild, args: ['innerSelectSearch', { read: ElementRef },] }],
        clearIcon: [{ type: ContentChild, args: [MatSelectSearchClearDirective,] }],
        isInsideMatOption: [{ type: HostBinding, args: ['class.mat-select-search-inside-mat-option',] }]
    };
    return MatSelectSearchComponent;
}());
export { MatSelectSearchComponent };
if (false) {
    /**
     * Label of the search placeholder
     * @type {?}
     */
    MatSelectSearchComponent.prototype.placeholderLabel;
    /**
     * Type of the search input field
     * @type {?}
     */
    MatSelectSearchComponent.prototype.type;
    /**
     * Label to be shown when no entries are found. Set to null if no message should be shown.
     * @type {?}
     */
    MatSelectSearchComponent.prototype.noEntriesFoundLabel;
    /**
     * Whether or not the search field should be cleared after the dropdown menu is closed.
     * Useful for server-side filtering. See [#3](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/3)
     * @type {?}
     */
    MatSelectSearchComponent.prototype.clearSearchInput;
    /**
     * Whether to show the search-in-progress indicator
     * @type {?}
     */
    MatSelectSearchComponent.prototype.searching;
    /**
     * Disables initial focusing of the input field
     * @type {?}
     */
    MatSelectSearchComponent.prototype.disableInitialFocus;
    /**
     * Prevents home / end key being propagated to mat-select,
     * allowing to move the cursor within the search input instead of navigating the options
     * @type {?}
     */
    MatSelectSearchComponent.prototype.preventHomeEndKeyPropagation;
    /**
     * Disables scrolling to active options when option list changes. Useful for server-side search
     * @type {?}
     */
    MatSelectSearchComponent.prototype.disableScrollToActiveOnOptionsChanged;
    /**
     * Reference to the search input field
     * @type {?}
     */
    MatSelectSearchComponent.prototype.searchSelectInput;
    /**
     * Reference to the search input field
     * @type {?}
     */
    MatSelectSearchComponent.prototype.innerSelectSearch;
    /**
     * Reference to custom search input clear icon
     * @type {?}
     */
    MatSelectSearchComponent.prototype.clearIcon;
    /**
     * @type {?}
     * @private
     */
    MatSelectSearchComponent.prototype._value;
    /** @type {?} */
    MatSelectSearchComponent.prototype.onChange;
    /** @type {?} */
    MatSelectSearchComponent.prototype.onTouched;
    /**
     * Reference to the MatSelect options
     * @type {?}
     */
    MatSelectSearchComponent.prototype._options;
    /**
     * Previously selected values when using <mat-select [multiple]="true">
     * @type {?}
     * @private
     */
    MatSelectSearchComponent.prototype.previousSelectedValues;
    /**
     * Whether the backdrop class has been set
     * @type {?}
     * @private
     */
    MatSelectSearchComponent.prototype.overlayClassSet;
    /**
     * Event that emits when the current value changes
     * @type {?}
     * @private
     */
    MatSelectSearchComponent.prototype.change;
    /**
     * Subject that emits when the component has been destroyed.
     * @type {?}
     * @private
     */
    MatSelectSearchComponent.prototype._onDestroy;
    /** @type {?} */
    MatSelectSearchComponent.prototype.matSelect;
    /** @type {?} */
    MatSelectSearchComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    MatSelectSearchComponent.prototype._viewportRuler;
    /** @type {?} */
    MatSelectSearchComponent.prototype.matOption;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlbGVjdC1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdC1zZWxlY3Qtc2VhcmNoLyIsInNvdXJjZXMiOlsibWF0LXNlbGVjdC1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBRUwsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQzFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUM5RCxTQUFTLEVBQ1QsWUFBWSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQ3BDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pILE9BQU8sRUFDTCxDQUFDLEVBQ0QsQ0FBQyxFQUNELElBQUksRUFDSixJQUFJLEVBQ0osS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEdBQ2pCLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O2dCQW5NSixpQkFBaUI7Z0JBZW5DLGFBQWE7Z0JBVGIsU0FBUyx1QkFnTUgsUUFBUSxZQUFJLE1BQU0sU0FBQyxTQUFTOzs7bUNBdkV4QyxLQUFLO3VCQUdMLEtBQUs7c0NBR0wsS0FBSzttQ0FNTCxLQUFLOzRCQUdMLEtBQUs7c0NBR0wsS0FBSzsrQ0FNTCxLQUFLO3dEQUdMLEtBQUs7b0NBR0wsU0FBUyxTQUFDLG1CQUFtQixFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQztvQ0FHakQsU0FBUyxTQUFDLG1CQUFtQixFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQzs0QkFHakQsWUFBWSxTQUFDLDZCQUE2QjtvQ0FFMUMsV0FBVyxTQUFDLDJDQUEyQzs7SUFzWjFELCtCQUFDO0NBQUEsQUF6ZEQsSUF5ZEM7U0EvYlksd0JBQXdCOzs7Ozs7SUFHbkMsb0RBQW9DOzs7OztJQUdwQyx3Q0FBdUI7Ozs7O0lBR3ZCLHVEQUF5RDs7Ozs7O0lBTXpELG9EQUFpQzs7Ozs7SUFHakMsNkNBQTJCOzs7OztJQUczQix1REFBcUM7Ozs7OztJQU1yQyxnRUFBOEM7Ozs7O0lBRzlDLHlFQUF1RDs7Ozs7SUFHdkQscURBQWtGOzs7OztJQUdsRixxREFBa0Y7Ozs7O0lBR2xGLDZDQUFzRjs7Ozs7SUFXdEYsMENBQXVCOztJQUV2Qiw0Q0FBb0M7O0lBQ3BDLDZDQUFxQzs7Ozs7SUFHckMsNENBQXNDOzs7Ozs7SUFHdEMsMERBQXNDOzs7Ozs7SUFHdEMsbURBQWdDOzs7Ozs7SUFHaEMsMENBQTRDOzs7Ozs7SUFHNUMsOENBQXlDOztJQUc3Qiw2Q0FBOEM7O0lBQzlDLHFEQUEyQzs7Ozs7SUFDM0Msa0RBQXFDOztJQUNyQyw2Q0FBaUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOCBCaXRob3N0IEdtYkggQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZCxcbiAgQ29udGVudENoaWxkLCBPcHRpb25hbCwgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRPcHRpb24sIE1hdFNlbGVjdCwgU0VMRUNUX1BBTkVMX01BWF9IRUlHSFQsIF9jb3VudEdyb3VwTGFiZWxzQmVmb3JlT3B0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHtcbiAgQSxcbiAgWixcbiAgWkVSTyxcbiAgTklORSxcbiAgU1BBQ0UsIEVORCwgSE9NRSxcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgVmlld3BvcnRSdWxlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVsYXksIHRha2UsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTWF0U2VsZWN0U2VhcmNoQ2xlYXJEaXJlY3RpdmUgfSBmcm9tICcuL21hdC1zZWxlY3Qtc2VhcmNoLWNsZWFyLmRpcmVjdGl2ZSc7XG5cbi8qIHRzbGludDpkaXNhYmxlOm1lbWJlci1vcmRlcmluZyBjb21wb25lbnQtc2VsZWN0b3IgKi9cbi8qKlxuICogQ29tcG9uZW50IHByb3ZpZGluZyBhbiBpbnB1dCBmaWVsZCBmb3Igc2VhcmNoaW5nIE1hdFNlbGVjdCBvcHRpb25zLlxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKlxuICogaW50ZXJmYWNlIEJhbmsge1xuICogIGlkOiBzdHJpbmc7XG4gKiAgbmFtZTogc3RyaW5nO1xuICogfVxuICpcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ215LWFwcC1kYXRhLXNlbGVjdGlvbicsXG4gKiAgIHRlbXBsYXRlOiBgXG4gKiAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICogICAgICAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sXT1cImJhbmtDdHJsXCIgcGxhY2Vob2xkZXI9XCJCYW5rXCI+XG4gKiAgICAgICAgIDxuZ3gtbWF0LXNlbGVjdC1zZWFyY2ggW2Zvcm1Db250cm9sXT1cImJhbmtGaWx0ZXJDdHJsXCI+PC9uZ3gtbWF0LXNlbGVjdC1zZWFyY2g+XG4gKiAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBiYW5rIG9mIGZpbHRlcmVkQmFua3MgfCBhc3luY1wiIFt2YWx1ZV09XCJiYW5rLmlkXCI+XG4gKiAgICAgICAgICAge3tiYW5rLm5hbWV9fVxuICogICAgICAgICA8L21hdC1vcHRpb24+XG4gKiAgICAgICA8L21hdC1zZWxlY3Q+XG4gKiAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAqICAgYFxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBEYXRhU2VsZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICpcbiAqICAgLy8gY29udHJvbCBmb3IgdGhlIHNlbGVjdGVkIGJhbmtcbiAqICAgcHVibGljIGJhbmtDdHJsOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICogICAvLyBjb250cm9sIGZvciB0aGUgTWF0U2VsZWN0IGZpbHRlciBrZXl3b3JkXG4gKiAgIHB1YmxpYyBiYW5rRmlsdGVyQ3RybDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAqXG4gKiAgIC8vIGxpc3Qgb2YgYmFua3NcbiAqICAgcHJpdmF0ZSBiYW5rczogQmFua1tdID0gW3tuYW1lOiAnQmFuayBBJywgaWQ6ICdBJ30sIHtuYW1lOiAnQmFuayBCJywgaWQ6ICdCJ30sIHtuYW1lOiAnQmFuayBDJywgaWQ6ICdDJ31dO1xuICogICAvLyBsaXN0IG9mIGJhbmtzIGZpbHRlcmVkIGJ5IHNlYXJjaCBrZXl3b3JkXG4gKiAgIHB1YmxpYyBmaWx0ZXJlZEJhbmtzOiBSZXBsYXlTdWJqZWN0PEJhbmtbXT4gPSBuZXcgUmVwbGF5U3ViamVjdDxCYW5rW10+KDEpO1xuICpcbiAqICAgLy8gU3ViamVjdCB0aGF0IGVtaXRzIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBkZXN0cm95ZWQuXG4gKiAgIHByaXZhdGUgX29uRGVzdHJveSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gKlxuICpcbiAqICAgbmdPbkluaXQoKSB7XG4gKiAgICAgLy8gbG9hZCB0aGUgaW5pdGlhbCBiYW5rIGxpc3RcbiAqICAgICB0aGlzLmZpbHRlcmVkQmFua3MubmV4dCh0aGlzLmJhbmtzLnNsaWNlKCkpO1xuICogICAgIC8vIGxpc3RlbiBmb3Igc2VhcmNoIGZpZWxkIHZhbHVlIGNoYW5nZXNcbiAqICAgICB0aGlzLmJhbmtGaWx0ZXJDdHJsLnZhbHVlQ2hhbmdlc1xuICogICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpXG4gKiAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAqICAgICAgICAgdGhpcy5maWx0ZXJCYW5rcygpO1xuICogICAgICAgfSk7XG4gKiAgIH1cbiAqXG4gKiAgIG5nT25EZXN0cm95KCkge1xuICogICAgIHRoaXMuX29uRGVzdHJveS5uZXh0KCk7XG4gKiAgICAgdGhpcy5fb25EZXN0cm95LmNvbXBsZXRlKCk7XG4gKiAgIH1cbiAqXG4gKiAgIHByaXZhdGUgZmlsdGVyQmFua3MoKSB7XG4gKiAgICAgaWYgKCF0aGlzLmJhbmtzKSB7XG4gKiAgICAgICByZXR1cm47XG4gKiAgICAgfVxuICpcbiAqICAgICAvLyBnZXQgdGhlIHNlYXJjaCBrZXl3b3JkXG4gKiAgICAgbGV0IHNlYXJjaCA9IHRoaXMuYmFua0ZpbHRlckN0cmwudmFsdWU7XG4gKiAgICAgaWYgKCFzZWFyY2gpIHtcbiAqICAgICAgIHRoaXMuZmlsdGVyZWRCYW5rcy5uZXh0KHRoaXMuYmFua3Muc2xpY2UoKSk7XG4gKiAgICAgICByZXR1cm47XG4gKiAgICAgfSBlbHNlIHtcbiAqICAgICAgIHNlYXJjaCA9IHNlYXJjaC50b0xvd2VyQ2FzZSgpO1xuICogICAgIH1cbiAqXG4gKiAgICAgLy8gZmlsdGVyIHRoZSBiYW5rc1xuICogICAgIHRoaXMuZmlsdGVyZWRCYW5rcy5uZXh0KFxuICogICAgICAgdGhpcy5iYW5rcy5maWx0ZXIoYmFuayA9PiBiYW5rLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaCkgPiAtMSlcbiAqICAgICApO1xuICogICB9XG4gKiB9XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1tYXQtc2VsZWN0LXNlYXJjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXQtc2VsZWN0LXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hdC1zZWxlY3Qtc2VhcmNoLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWF0U2VsZWN0U2VhcmNoQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZW50ZXJBbmltYXRpb24nLCBbXG4gICAgICBzdGF0ZSgndm9pZCcsIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJyonLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPD0+IConLCBbXG4gICAgICAgIGFuaW1hdGUoJzAuMXMgZWFzZS1vdXQnKVxuICAgICAgXSlcbiAgICBdKVxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBNYXRTZWxlY3RTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIC8qKiBMYWJlbCBvZiB0aGUgc2VhcmNoIHBsYWNlaG9sZGVyICovXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyTGFiZWwgPSAnU3VjaGUnO1xuICBcbiAgLyoqIFR5cGUgb2YgdGhlIHNlYXJjaCBpbnB1dCBmaWVsZCAqL1xuICBASW5wdXQoKSB0eXBlID0gXCJ0ZXh0XCI7XG5cbiAgLyoqIExhYmVsIHRvIGJlIHNob3duIHdoZW4gbm8gZW50cmllcyBhcmUgZm91bmQuIFNldCB0byBudWxsIGlmIG5vIG1lc3NhZ2Ugc2hvdWxkIGJlIHNob3duLiAqL1xuICBASW5wdXQoKSBub0VudHJpZXNGb3VuZExhYmVsID0gJ0tlaW5lIE9wdGlvbmVuIGdlZnVuZGVuJztcblxuICAvKipcbiAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSBzZWFyY2ggZmllbGQgc2hvdWxkIGJlIGNsZWFyZWQgYWZ0ZXIgdGhlIGRyb3Bkb3duIG1lbnUgaXMgY2xvc2VkLlxuICAgICogVXNlZnVsIGZvciBzZXJ2ZXItc2lkZSBmaWx0ZXJpbmcuIFNlZSBbIzNdKGh0dHBzOi8vZ2l0aHViLmNvbS9iaXRob3N0LWdtYmgvbmd4LW1hdC1zZWxlY3Qtc2VhcmNoL2lzc3Vlcy8zKVxuICAgICovXG4gIEBJbnB1dCgpIGNsZWFyU2VhcmNoSW5wdXQgPSB0cnVlO1xuXG4gIC8qKiBXaGV0aGVyIHRvIHNob3cgdGhlIHNlYXJjaC1pbi1wcm9ncmVzcyBpbmRpY2F0b3IgKi9cbiAgQElucHV0KCkgc2VhcmNoaW5nID0gZmFsc2U7XG5cbiAgLyoqIERpc2FibGVzIGluaXRpYWwgZm9jdXNpbmcgb2YgdGhlIGlucHV0IGZpZWxkICovXG4gIEBJbnB1dCgpIGRpc2FibGVJbml0aWFsRm9jdXMgPSBmYWxzZTtcblxuICAvKipcbiAgICogUHJldmVudHMgaG9tZSAvIGVuZCBrZXkgYmVpbmcgcHJvcGFnYXRlZCB0byBtYXQtc2VsZWN0LFxuICAgKiBhbGxvd2luZyB0byBtb3ZlIHRoZSBjdXJzb3Igd2l0aGluIHRoZSBzZWFyY2ggaW5wdXQgaW5zdGVhZCBvZiBuYXZpZ2F0aW5nIHRoZSBvcHRpb25zXG4gICAqL1xuICBASW5wdXQoKSBwcmV2ZW50SG9tZUVuZEtleVByb3BhZ2F0aW9uID0gZmFsc2U7XG5cbiAgLyoqIERpc2FibGVzIHNjcm9sbGluZyB0byBhY3RpdmUgb3B0aW9ucyB3aGVuIG9wdGlvbiBsaXN0IGNoYW5nZXMuIFVzZWZ1bCBmb3Igc2VydmVyLXNpZGUgc2VhcmNoICovXG4gIEBJbnB1dCgpIGRpc2FibGVTY3JvbGxUb0FjdGl2ZU9uT3B0aW9uc0NoYW5nZWQgPSBmYWxzZTtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBzZWFyY2ggaW5wdXQgZmllbGQgKi9cbiAgQFZpZXdDaGlsZCgnc2VhcmNoU2VsZWN0SW5wdXQnLCB7cmVhZDogRWxlbWVudFJlZn0pIHNlYXJjaFNlbGVjdElucHV0OiBFbGVtZW50UmVmO1xuXG4gIC8qKiBSZWZlcmVuY2UgdG8gdGhlIHNlYXJjaCBpbnB1dCBmaWVsZCAqL1xuICBAVmlld0NoaWxkKCdpbm5lclNlbGVjdFNlYXJjaCcsIHtyZWFkOiBFbGVtZW50UmVmfSkgaW5uZXJTZWxlY3RTZWFyY2g6IEVsZW1lbnRSZWY7XG5cbiAgLyoqIFJlZmVyZW5jZSB0byBjdXN0b20gc2VhcmNoIGlucHV0IGNsZWFyIGljb24gKi9cbiAgQENvbnRlbnRDaGlsZChNYXRTZWxlY3RTZWFyY2hDbGVhckRpcmVjdGl2ZSkgY2xlYXJJY29uOiBNYXRTZWxlY3RTZWFyY2hDbGVhckRpcmVjdGl2ZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1zZWxlY3Qtc2VhcmNoLWluc2lkZS1tYXQtb3B0aW9uJylcbiAgZ2V0IGlzSW5zaWRlTWF0T3B0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMubWF0T3B0aW9uO1xuICB9XG5cbiAgLyoqIEN1cnJlbnQgc2VhcmNoIHZhbHVlICovXG4gIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBwcml2YXRlIF92YWx1ZTogc3RyaW5nO1xuXG4gIG9uQ2hhbmdlOiBGdW5jdGlvbiA9IChfOiBhbnkpID0+IHt9O1xuICBvblRvdWNoZWQ6IEZ1bmN0aW9uID0gKF86IGFueSkgPT4ge307XG5cbiAgLyoqIFJlZmVyZW5jZSB0byB0aGUgTWF0U2VsZWN0IG9wdGlvbnMgKi9cbiAgcHVibGljIF9vcHRpb25zOiBRdWVyeUxpc3Q8TWF0T3B0aW9uPjtcblxuICAvKiogUHJldmlvdXNseSBzZWxlY3RlZCB2YWx1ZXMgd2hlbiB1c2luZyA8bWF0LXNlbGVjdCBbbXVsdGlwbGVdPVwidHJ1ZVwiPiovXG4gIHByaXZhdGUgcHJldmlvdXNTZWxlY3RlZFZhbHVlczogYW55W107XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGJhY2tkcm9wIGNsYXNzIGhhcyBiZWVuIHNldCAqL1xuICBwcml2YXRlIG92ZXJsYXlDbGFzc1NldCA9IGZhbHNlO1xuXG4gIC8qKiBFdmVudCB0aGF0IGVtaXRzIHdoZW4gdGhlIGN1cnJlbnQgdmFsdWUgY2hhbmdlcyAqL1xuICBwcml2YXRlIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8qKiBTdWJqZWN0IHRoYXQgZW1pdHMgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGRlc3Ryb3llZC4gKi9cbiAgcHJpdmF0ZSBfb25EZXN0cm95ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTWF0U2VsZWN0KSBwdWJsaWMgbWF0U2VsZWN0OiBNYXRTZWxlY3QsXG4gICAgICAgICAgICAgIHB1YmxpYyBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3ZpZXdwb3J0UnVsZXI6IFZpZXdwb3J0UnVsZXIsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTWF0T3B0aW9uKSBwdWJsaWMgbWF0T3B0aW9uOiBNYXRPcHRpb24gPSBudWxsKSB7XG5cblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gc2V0IGN1c3RvbSBwYW5lbCBjbGFzc1xuICAgIGNvbnN0IHBhbmVsQ2xhc3MgPSAnbWF0LXNlbGVjdC1zZWFyY2gtcGFuZWwnO1xuICAgIGlmICh0aGlzLm1hdFNlbGVjdC5wYW5lbENsYXNzKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLm1hdFNlbGVjdC5wYW5lbENsYXNzKSkge1xuICAgICAgICB0aGlzLm1hdFNlbGVjdC5wYW5lbENsYXNzLnB1c2gocGFuZWxDbGFzcyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLm1hdFNlbGVjdC5wYW5lbENsYXNzID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLm1hdFNlbGVjdC5wYW5lbENsYXNzID0gW3RoaXMubWF0U2VsZWN0LnBhbmVsQ2xhc3MsIHBhbmVsQ2xhc3NdO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5tYXRTZWxlY3QucGFuZWxDbGFzcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhpcy5tYXRTZWxlY3QucGFuZWxDbGFzc1twYW5lbENsYXNzXSA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWF0U2VsZWN0LnBhbmVsQ2xhc3MgPSBwYW5lbENsYXNzO1xuICAgIH1cblxuICAgIC8vIHNldCBjdXN0b20gbWF0LW9wdGlvbiBjbGFzcyBpZiB0aGUgY29tcG9uZW50IHdhcyBwbGFjZWQgaW5zaWRlIGEgbWF0LW9wdGlvblxuICAgIGlmICh0aGlzLm1hdE9wdGlvbikge1xuICAgICAgdGhpcy5tYXRPcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5tYXRPcHRpb24uX2dldEhvc3RFbGVtZW50KCkuY2xhc3NMaXN0LmFkZCgnY29udGFpbnMtbWF0LXNlbGVjdC1zZWFyY2gnKTtcbiAgICB9XG5cbiAgICAvLyB3aGVuIHRoZSBzZWxlY3QgZHJvcGRvd24gcGFuZWwgaXMgb3BlbmVkIG9yIGNsb3NlZFxuICAgIHRoaXMubWF0U2VsZWN0Lm9wZW5lZENoYW5nZVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlbGF5KDEpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgob3BlbmVkKSA9PiB7XG4gICAgICAgIGlmIChvcGVuZWQpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUlucHV0V2lkdGgoKTtcbiAgICAgICAgICAvLyBmb2N1cyB0aGUgc2VhcmNoIGZpZWxkIHdoZW4gb3BlbmluZ1xuICAgICAgICAgIGlmICghdGhpcy5kaXNhYmxlSW5pdGlhbEZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLl9mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjbGVhciBpdCB3aGVuIGNsb3NpbmdcbiAgICAgICAgICBpZiAodGhpcy5jbGVhclNlYXJjaElucHV0KSB7XG4gICAgICAgICAgICB0aGlzLl9yZXNldCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAvLyBzZXQgdGhlIGZpcnN0IGl0ZW0gYWN0aXZlIGFmdGVyIHRoZSBvcHRpb25zIGNoYW5nZWRcbiAgICB0aGlzLm1hdFNlbGVjdC5vcGVuZWRDaGFuZ2VcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5tYXRTZWxlY3QuX2tleU1hbmFnZXIpIHtcbiAgICAgICAgICB0aGlzLm1hdFNlbGVjdC5fa2V5TWFuYWdlci5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5hZGp1c3RTY3JvbGxUb3BUb0ZpdEFjdGl2ZU9wdGlvbkludG9WaWV3KCkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ19rZXlNYW5hZ2VyIHdhcyBub3QgaW5pdGlhbGl6ZWQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9vcHRpb25zID0gdGhpcy5tYXRTZWxlY3Qub3B0aW9ucztcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5jaGFuZ2VzXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXlNYW5hZ2VyID0gdGhpcy5tYXRTZWxlY3QuX2tleU1hbmFnZXI7XG4gICAgICAgICAgICBpZiAoa2V5TWFuYWdlciAmJiB0aGlzLm1hdFNlbGVjdC5wYW5lbE9wZW4pIHtcblxuICAgICAgICAgICAgICAvLyBhdm9pZCBcImV4cHJlc3Npb24gaGFzIGJlZW4gY2hhbmdlZFwiIGVycm9yXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHNldCBmaXJzdCBpdGVtIGFjdGl2ZSBhbmQgaW5wdXQgd2lkdGhcbiAgICAgICAgICAgICAgICBrZXlNYW5hZ2VyLnNldEZpcnN0SXRlbUFjdGl2ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSW5wdXRXaWR0aCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gc2V0IG5vIGVudHJpZXMgZm91bmQgY2xhc3Mgb24gbWF0IG9wdGlvblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hdE9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX25vRW50cmllc0ZvdW5kKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRPcHRpb24uX2dldEhvc3RFbGVtZW50KCkuY2xhc3NMaXN0LmFkZCgnbWF0LXNlbGVjdC1zZWFyY2gtbm8tZW50cmllcy1mb3VuZCcpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRPcHRpb24uX2dldEhvc3RFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZSgnbWF0LXNlbGVjdC1zZWFyY2gtbm8tZW50cmllcy1mb3VuZCcpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kaXNhYmxlU2Nyb2xsVG9BY3RpdmVPbk9wdGlvbnNDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmFkanVzdFNjcm9sbFRvcFRvRml0QWN0aXZlT3B0aW9uSW50b1ZpZXcoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfSwgMSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgLy8gZGV0ZWN0IGNoYW5nZXMgd2hlbiB0aGUgaW5wdXQgY2hhbmdlc1xuICAgIHRoaXMuY2hhbmdlXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuXG4gICAgLy8gcmVzaXplIHRoZSBpbnB1dCB3aWR0aCB3aGVuIHRoZSB2aWV3cG9ydCBpcyByZXNpemVkLCBpLmUuIHRoZSB0cmlnZ2VyIHdpZHRoIGNvdWxkIHBvdGVudGlhbGx5IGJlIHJlc2l6ZWRcbiAgICB0aGlzLl92aWV3cG9ydFJ1bGVyLmNoYW5nZSgpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5tYXRTZWxlY3QucGFuZWxPcGVuKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVJbnB1dFdpZHRoKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5pbml0TXVsdGlwbGVIYW5kbGluZygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fb25EZXN0cm95Lm5leHQoKTtcbiAgICB0aGlzLl9vbkRlc3Ryb3kuY29tcGxldGUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnNldE92ZXJsYXlDbGFzcygpO1xuXG4gICAgLy8gdXBkYXRlIHZpZXcgd2hlbiBhdmFpbGFibGUgb3B0aW9ucyBjaGFuZ2VcbiAgICB0aGlzLm1hdFNlbGVjdC5vcGVuZWRDaGFuZ2VcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KVxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLm1hdFNlbGVjdC5vcHRpb25zLmNoYW5nZXNcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSlcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSBrZXkgZG93biBldmVudCB3aXRoIE1hdFNlbGVjdC5cbiAgICogQWxsb3dzIGUuZy4gc2VsZWN0aW5nIHdpdGggZW50ZXIga2V5LCBuYXZpZ2F0aW9uIHdpdGggYXJyb3cga2V5cywgZXRjLlxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICovXG4gIF9oYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgLy8gUHJldmVudCBwcm9wYWdhdGlvbiBmb3IgYWxsIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzIGluIG9yZGVyIHRvIGF2b2lkIHNlbGVjdGlvbiBpc3N1ZXNcbiAgICBpZiAoKGV2ZW50LmtleSAmJiBldmVudC5rZXkubGVuZ3RoID09PSAxKSB8fFxuICAgICAgKGV2ZW50LmtleUNvZGUgPj0gQSAmJiBldmVudC5rZXlDb2RlIDw9IFopIHx8XG4gICAgICAoZXZlbnQua2V5Q29kZSA+PSBaRVJPICYmIGV2ZW50LmtleUNvZGUgPD0gTklORSkgfHxcbiAgICAgIChldmVudC5rZXlDb2RlID09PSBTUEFDRSlcbiAgICAgIHx8ICh0aGlzLnByZXZlbnRIb21lRW5kS2V5UHJvcGFnYXRpb24gJiYgKGV2ZW50LmtleUNvZGUgPT09IEhPTUUgfHwgZXZlbnQua2V5Q29kZSA9PT0gRU5EKSlcbiAgICApIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgdmFsdWVDaGFuZ2VkID0gdmFsdWUgIT09IHRoaXMuX3ZhbHVlO1xuICAgIGlmICh2YWx1ZUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvbklucHV0Q2hhbmdlKHZhbHVlKSB7XG4gICAgY29uc3QgdmFsdWVDaGFuZ2VkID0gdmFsdWUgIT09IHRoaXMuX3ZhbHVlO1xuICAgIGlmICh2YWx1ZUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuaW5pdE11bHRpU2VsZWN0ZWRWYWx1ZXMoKTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uQmx1cih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy53cml0ZVZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvY3VzZXMgdGhlIHNlYXJjaCBpbnB1dCBmaWVsZFxuICAgKi9cbiAgcHVibGljIF9mb2N1cygpIHtcbiAgICBpZiAoIXRoaXMuc2VhcmNoU2VsZWN0SW5wdXQgfHwgIXRoaXMubWF0U2VsZWN0LnBhbmVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHNhdmUgYW5kIHJlc3RvcmUgc2Nyb2xsVG9wIG9mIHBhbmVsLCBzaW5jZSBpdCB3aWxsIGJlIHJlc2V0IGJ5IGZvY3VzKClcbiAgICAvLyBub3RlOiB0aGlzIGlzIGhhY2t5XG4gICAgY29uc3QgcGFuZWwgPSB0aGlzLm1hdFNlbGVjdC5wYW5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHBhbmVsLnNjcm9sbFRvcDtcblxuICAgIC8vIGZvY3VzXG4gICAgdGhpcy5zZWFyY2hTZWxlY3RJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG5cbiAgICBwYW5lbC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBjdXJyZW50IHNlYXJjaCB2YWx1ZVxuICAgKiBAcGFyYW0gZm9jdXMgd2hldGhlciB0byBmb2N1cyBhZnRlciByZXNldHRpbmdcbiAgICovXG4gIHB1YmxpYyBfcmVzZXQoZm9jdXM/OiBib29sZWFuKSB7XG4gICAgaWYgKCF0aGlzLnNlYXJjaFNlbGVjdElucHV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2VhcmNoU2VsZWN0SW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIHRoaXMub25JbnB1dENoYW5nZSgnJyk7XG4gICAgaWYgKHRoaXMubWF0T3B0aW9uICYmICFmb2N1cykge1xuICAgICAgLy8gcmVtb3ZlIG5vIGVudHJpZXMgZm91bmQgY2xhc3Mgb24gbWF0IG9wdGlvblxuICAgICAgdGhpcy5tYXRPcHRpb24uX2dldEhvc3RFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZSgnbWF0LXNlbGVjdC1zZWFyY2gtbm8tZW50cmllcy1mb3VuZCcpO1xuICAgIH1cbiAgICBpZiAoZm9jdXMpIHtcbiAgICAgIHRoaXMuX2ZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIG92ZXJsYXkgY2xhc3MgIHRvIGNvcnJlY3Qgb2Zmc2V0WVxuICAgKiBzbyB0aGF0IHRoZSBzZWxlY3RlZCBvcHRpb24gaXMgYXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBzZWxlY3QgYm94IHdoZW4gb3BlbmluZ1xuICAgKi9cbiAgcHJpdmF0ZSBzZXRPdmVybGF5Q2xhc3MoKSB7XG4gICAgaWYgKHRoaXMub3ZlcmxheUNsYXNzU2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG92ZXJsYXlDbGFzc2VzOiBzdHJpbmdbXSA9IFsnY2RrLW92ZXJsYXktcGFuZS1zZWxlY3Qtc2VhcmNoJ107XG5cbiAgICBpZiAoIXRoaXMubWF0T3B0aW9uKSB7XG4gICAgICAvLyBhZGQgb2Zmc2V0IHRvIHBhbmVsIGlmIGNvbXBvbmVudCBpcyBub3QgcGxhY2VkIGluc2lkZSBtYXQtb3B0aW9uXG4gICAgICBvdmVybGF5Q2xhc3Nlcy5wdXNoKCdjZGstb3ZlcmxheS1wYW5lLXNlbGVjdC1zZWFyY2gtd2l0aC1vZmZzZXQnKTtcbiAgICB9XG5cbiAgICB0aGlzLm1hdFNlbGVjdC5vdmVybGF5RGlyLmF0dGFjaFxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgLy8gbm90ZTogdGhpcyBpcyBoYWNreSwgYnV0IGN1cnJlbnRseSB0aGVyZSBpcyBubyBiZXR0ZXIgd2F5IHRvIGRvIHRoaXNcbiAgICAgICAgbGV0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5zZWFyY2hTZWxlY3RJbnB1dC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBsZXQgb3ZlcmxheUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgICAgICB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY2RrLW92ZXJsYXktcGFuZScpKSB7XG4gICAgICAgICAgICBvdmVybGF5RWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG92ZXJsYXlFbGVtZW50KSB7XG4gICAgICAgICAgb3ZlcmxheUNsYXNzZXMuZm9yRWFjaChvdmVybGF5Q2xhc3MgPT4ge1xuICAgICAgICAgICAgb3ZlcmxheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChvdmVybGF5Q2xhc3MpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIHRoaXMub3ZlcmxheUNsYXNzU2V0ID0gdHJ1ZTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGhhbmRsaW5nIDxtYXQtc2VsZWN0IFttdWx0aXBsZV09XCJ0cnVlXCI+XG4gICAqIE5vdGU6IHRvIGltcHJvdmUgdGhpcyBjb2RlLCBtYXQtc2VsZWN0IHNob3VsZCBiZSBleHRlbmRlZCB0byBhbGxvdyBkaXNhYmxpbmcgcmVzZXR0aW5nIHRoZSBzZWxlY3Rpb24gd2hpbGUgZmlsdGVyaW5nLlxuICAgKi9cbiAgcHJpdmF0ZSBpbml0TXVsdGlwbGVIYW5kbGluZygpIHtcbiAgICAvLyBpZiA8bWF0LXNlbGVjdCBbbXVsdGlwbGVdPVwidHJ1ZVwiPlxuICAgIC8vIHN0b3JlIHByZXZpb3VzbHkgc2VsZWN0ZWQgdmFsdWVzIGFuZCByZXN0b3JlIHRoZW0gd2hlbiB0aGV5IGFyZSBkZXNlbGVjdGVkXG4gICAgLy8gYmVjYXVzZSB0aGUgb3B0aW9uIGlzIG5vdCBhdmFpbGFibGUgd2hpbGUgd2UgYXJlIGN1cnJlbnRseSBmaWx0ZXJpbmdcbiAgICB0aGlzLm1hdFNlbGVjdC52YWx1ZUNoYW5nZVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZXMpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubWF0U2VsZWN0Lm11bHRpcGxlKSB7XG4gICAgICAgICAgbGV0IHJlc3RvcmVTZWxlY3RlZFZhbHVlcyA9IGZhbHNlO1xuICAgICAgICAgIGlmICh0aGlzLl92YWx1ZSAmJiB0aGlzLl92YWx1ZS5sZW5ndGhcbiAgICAgICAgICAgICYmIHRoaXMucHJldmlvdXNTZWxlY3RlZFZhbHVlcyAmJiBBcnJheS5pc0FycmF5KHRoaXMucHJldmlvdXNTZWxlY3RlZFZhbHVlcykpIHtcbiAgICAgICAgICAgIGlmICghdmFsdWVzIHx8ICFBcnJheS5pc0FycmF5KHZhbHVlcykpIHtcbiAgICAgICAgICAgICAgdmFsdWVzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBvcHRpb25WYWx1ZXMgPSB0aGlzLm1hdFNlbGVjdC5vcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNTZWxlY3RlZFZhbHVlcy5mb3JFYWNoKHByZXZpb3VzVmFsdWUgPT4ge1xuICAgICAgICAgICAgICBpZiAodmFsdWVzLmluZGV4T2YocHJldmlvdXNWYWx1ZSkgPT09IC0xICYmIG9wdGlvblZhbHVlcy5pbmRleE9mKHByZXZpb3VzVmFsdWUpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIGEgdmFsdWUgdGhhdCB3YXMgc2VsZWN0ZWQgYmVmb3JlIGlzIGRlc2VsZWN0ZWQgYW5kIG5vdCBmb3VuZCBpbiB0aGUgb3B0aW9ucywgaXQgd2FzIGRlc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAvLyBkdWUgdG8gdGhlIGZpbHRlcmluZywgc28gd2UgcmVzdG9yZSBpdC5cbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChwcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXN0b3JlU2VsZWN0ZWRWYWx1ZXMgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocmVzdG9yZVNlbGVjdGVkVmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLm1hdFNlbGVjdC5fb25DaGFuZ2UodmFsdWVzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnByZXZpb3VzU2VsZWN0ZWRWYWx1ZXMgPSB2YWx1ZXM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjcm9sbHMgdGhlIGN1cnJlbnRseSBhY3RpdmUgb3B0aW9uIGludG8gdGhlIHZpZXcgaWYgaXQgaXMgbm90IHlldCB2aXNpYmxlLlxuICAgKi9cbiAgcHJpdmF0ZSBhZGp1c3RTY3JvbGxUb3BUb0ZpdEFjdGl2ZU9wdGlvbkludG9WaWV3KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1hdFNlbGVjdC5wYW5lbCAmJiB0aGlzLm1hdFNlbGVjdC5vcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG1hdE9wdGlvbkhlaWdodCA9IHRoaXMuZ2V0TWF0T3B0aW9uSGVpZ2h0KCk7XG4gICAgICBjb25zdCBhY3RpdmVPcHRpb25JbmRleCA9IHRoaXMubWF0U2VsZWN0Ll9rZXlNYW5hZ2VyLmFjdGl2ZUl0ZW1JbmRleCB8fCAwO1xuICAgICAgY29uc3QgbGFiZWxDb3VudCA9IF9jb3VudEdyb3VwTGFiZWxzQmVmb3JlT3B0aW9uKGFjdGl2ZU9wdGlvbkluZGV4LCB0aGlzLm1hdFNlbGVjdC5vcHRpb25zLCB0aGlzLm1hdFNlbGVjdC5vcHRpb25Hcm91cHMpO1xuICAgICAgLy8gSWYgdGhlIGNvbXBvbmVudCBpcyBpbiBhIE1hdE9wdGlvbiwgdGhlIGFjdGl2ZUl0ZW1JbmRleCB3aWxsIGJlIG9mZnNldCBieSBvbmUuXG4gICAgICBjb25zdCBpbmRleE9mT3B0aW9uVG9GaXRJbnRvVmlldyA9ICh0aGlzLm1hdE9wdGlvbiA/IC0xIDogMCkgKyBsYWJlbENvdW50ICsgYWN0aXZlT3B0aW9uSW5kZXg7XG4gICAgICBjb25zdCBjdXJyZW50U2Nyb2xsVG9wID0gdGhpcy5tYXRTZWxlY3QucGFuZWwubmF0aXZlRWxlbWVudC5zY3JvbGxUb3A7XG5cbiAgICAgIGNvbnN0IHNlYXJjaElucHV0SGVpZ2h0ID0gdGhpcy5pbm5lclNlbGVjdFNlYXJjaC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodFxuICAgICAgY29uc3QgYW1vdW50T2ZWaXNpYmxlT3B0aW9ucyA9IE1hdGguZmxvb3IoKFNFTEVDVF9QQU5FTF9NQVhfSEVJR0hUIC0gc2VhcmNoSW5wdXRIZWlnaHQpIC8gbWF0T3B0aW9uSGVpZ2h0KTtcblxuICAgICAgY29uc3QgaW5kZXhPZkZpcnN0VmlzaWJsZU9wdGlvbiA9IE1hdGgucm91bmQoKGN1cnJlbnRTY3JvbGxUb3AgKyBzZWFyY2hJbnB1dEhlaWdodCkgLyBtYXRPcHRpb25IZWlnaHQpIC0gMTtcblxuICAgICAgaWYgKGluZGV4T2ZGaXJzdFZpc2libGVPcHRpb24gPj0gaW5kZXhPZk9wdGlvblRvRml0SW50b1ZpZXcpIHtcbiAgICAgICAgdGhpcy5tYXRTZWxlY3QucGFuZWwubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSBpbmRleE9mT3B0aW9uVG9GaXRJbnRvVmlldyAqIG1hdE9wdGlvbkhlaWdodDtcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXhPZkZpcnN0VmlzaWJsZU9wdGlvbiArIGFtb3VudE9mVmlzaWJsZU9wdGlvbnMgPD0gaW5kZXhPZk9wdGlvblRvRml0SW50b1ZpZXcpIHtcbiAgICAgICAgdGhpcy5tYXRTZWxlY3QucGFuZWwubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSAoaW5kZXhPZk9wdGlvblRvRml0SW50b1ZpZXcgKyAxKSAqIG1hdE9wdGlvbkhlaWdodCAtIChTRUxFQ1RfUEFORUxfTUFYX0hFSUdIVCAtIHNlYXJjaElucHV0SGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogIFNldCB0aGUgd2lkdGggb2YgdGhlIGlubmVyU2VsZWN0U2VhcmNoIHRvIGZpdCBldmVuIGN1c3RvbSBzY3JvbGxiYXJzXG4gICAqICBBbmQgc3VwcG9ydCBhbGwgT3BlcmF0aW9uIFN5c3RlbXNcbiAgICovXG4gIHB1YmxpYyB1cGRhdGVJbnB1dFdpZHRoKCkge1xuICAgIGlmICghdGhpcy5pbm5lclNlbGVjdFNlYXJjaCB8fCAhdGhpcy5pbm5lclNlbGVjdFNlYXJjaC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuaW5uZXJTZWxlY3RTZWFyY2gubmF0aXZlRWxlbWVudDtcbiAgICBsZXQgcGFuZWxFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYXQtc2VsZWN0LXBhbmVsJykpIHtcbiAgICAgICAgcGFuZWxFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwYW5lbEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5uZXJTZWxlY3RTZWFyY2gubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IHBhbmVsRWxlbWVudC5jbGllbnRXaWR0aCArICdweCc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYXRPcHRpb25IZWlnaHQoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5tYXRTZWxlY3Qub3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXRTZWxlY3Qub3B0aW9ucy5maXJzdC5fZ2V0SG9zdEVsZW1lbnQoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICAvKipcbiAgICogIEluaXRpYWxpemUgdGhpcy5wcmV2aW91c1NlbGVjdGVkVmFsdWVzIG9uY2UgdGhlIGZpcnN0IGZpbHRlcmluZyBvY2N1cnMuXG4gICAqL1xuICBpbml0TXVsdGlTZWxlY3RlZFZhbHVlcygpIHtcbiAgICBpZiAodGhpcy5tYXRTZWxlY3QubXVsdGlwbGUgJiYgIXRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLnByZXZpb3VzU2VsZWN0ZWRWYWx1ZXMgPSB0aGlzLm1hdFNlbGVjdC5vcHRpb25zXG4gICAgICAgIC5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZClcbiAgICAgICAgLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBcIm5vIGVudHJpZXMgZm91bmRcIiBtZXNzYWdlIHNob3VsZCBiZSBkaXNwbGF5ZWRcbiAgICovXG4gIHB1YmxpYyBfbm9FbnRyaWVzRm91bmQoKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLl9vcHRpb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLm1hdE9wdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMubm9FbnRyaWVzRm91bmRMYWJlbCAmJiB0aGlzLnZhbHVlICYmIHRoaXMuX29wdGlvbnMubGVuZ3RoID09PSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5ub0VudHJpZXNGb3VuZExhYmVsICYmIHRoaXMudmFsdWUgJiYgdGhpcy5fb3B0aW9ucy5sZW5ndGggPT09IDA7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==