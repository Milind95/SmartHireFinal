/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, ViewChild } from "@angular/core";
import { IonContent, IonInfiniteScroll, IonSearchbar, NavParams } from "@ionic/angular";
import { IonicSelectableComponent } from "./ionic-selectable.component";
var IonicSelectableModalComponent = /** @class */ (function () {
    function IonicSelectableModalComponent(navParams, _element) {
        var _this = this;
        this.navParams = navParams;
        this._element = _element;
        this._cssClass = true;
        this.selectComponent = this.navParams.get('selectComponent');
        this.selectComponent._modalComponent = this;
        this.selectComponent._selectedItems = [];
        if (!this.selectComponent._isNullOrWhiteSpace(this.selectComponent.value)) {
            if (this.selectComponent.isMultiple) {
                this.selectComponent.value.forEach(function (item) {
                    _this.selectComponent._selectedItems.push(item);
                });
            }
            else {
                this.selectComponent._selectedItems.push(this.selectComponent.value);
            }
        }
        this.selectComponent._setItemsToConfirm(this.selectComponent._selectedItems);
    }
    Object.defineProperty(IonicSelectableModalComponent.prototype, "_canClearCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectComponent.canClear;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableModalComponent.prototype, "_isMultipleCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectComponent.isMultiple;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableModalComponent.prototype, "_isSearchingCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectComponent._isSearching;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableModalComponent.prototype, "_isIos", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectComponent._isIos;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IonicSelectableModalComponent.prototype._isMD = /**
     * @return {?}
     */
    function () {
        return this.selectComponent._isMD;
    };
    Object.defineProperty(IonicSelectableModalComponent.prototype, "_isAddItemTemplateVisibleCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectComponent._isAddItemTemplateVisible;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IonicSelectableModalComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        // ion-footer inside the template might change its height when
        // device orientation changes.
        this.selectComponent._positionAddItemTemplate();
    };
    /**
     * @return {?}
     */
    IonicSelectableModalComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._header = this._element.nativeElement.querySelector('ion-header');
        if (this._searchbarComponent && this.selectComponent.shouldFocusSearchbar) {
            // Focus after a delay because focus doesn't work without it.
            setTimeout(function () {
                _this._searchbarComponent.setFocus();
            }, 1000);
        }
    };
    IonicSelectableModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ionic-selectable-modal',
                    template: "<ion-header>\n  <ion-toolbar *ngIf=\"!selectComponent.headerTemplate\"\n    [color]=\"selectComponent.headerColor ? selectComponent.headerColor : null\">\n    <ion-buttons [slot]=\"selectComponent.closeButtonSlot\">\n      <ion-button (click)=\"selectComponent._close()\">\n        <span *ngIf=\"selectComponent.closeButtonTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.closeButtonTemplate\">\n        </span>\n        <span *ngIf=\"!selectComponent.closeButtonTemplate\">\n          {{selectComponent.closeButtonText}}\n        </span>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      <!-- Need span for for text ellipsis. -->\n      <span *ngIf=\"selectComponent.titleTemplate\"\n        [ngTemplateOutlet]=\"selectComponent.titleTemplate\">\n      </span>\n      <span *ngIf=\"!selectComponent.titleTemplate\">\n        {{selectComponent.label}}\n      </span>\n    </ion-title>\n  </ion-toolbar>\n  <div *ngIf=\"selectComponent.headerTemplate\"\n    [ngTemplateOutlet]=\"selectComponent.headerTemplate\">\n  </div>\n  <ion-toolbar\n    *ngIf=\"selectComponent.canSearch || selectComponent.messageTemplate\">\n    <ion-searchbar *ngIf=\"selectComponent.canSearch\" #searchbarComponent\n      [(ngModel)]=\"selectComponent._searchText\"\n      (ionChange)=\"selectComponent._filterItems()\"\n      (ionClear)=\"selectComponent._onSearchbarClear()\"\n      [placeholder]=\"selectComponent.searchPlaceholder\"\n      [debounce]=\"selectComponent.searchDebounce\">\n    </ion-searchbar>\n    <div class=\"ionic-selectable-message\"\n      *ngIf=\"selectComponent.messageTemplate\">\n      <div [ngTemplateOutlet]=\"selectComponent.messageTemplate\">\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"ionic-selectable-spinner\" *ngIf=\"selectComponent._isSearching\">\n    <div class=\"ionic-selectable-spinner-background\"></div>\n    <ion-spinner></ion-spinner>\n  </div>\n  <ion-list no-margin\n    *ngIf=\"!selectComponent.hasVirtualScroll && selectComponent._hasFilteredItems\">\n    <ion-item-group *ngFor=\"let group of selectComponent._filteredGroups\"\n      class=\"ionic-selectable-group\">\n      <ion-item-divider *ngIf=\"selectComponent._hasGroups\"\n        [color]=\"selectComponent.groupColor ? selectComponent.groupColor : null\">\n        <!-- Need span for for text ellipsis. -->\n        <span *ngIf=\"selectComponent.groupTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.groupTemplate\"\n          [ngTemplateOutletContext]=\"{ group: group }\">\n        </span>\n        <!-- Need ion-label for text ellipsis. -->\n        <ion-label *ngIf=\"!selectComponent.groupTemplate\">\n          {{group.text}}\n        </ion-label>\n        <div *ngIf=\"selectComponent.groupEndTemplate\" slot=\"end\">\n          <div [ngTemplateOutlet]=\"selectComponent.groupEndTemplate\"\n            [ngTemplateOutletContext]=\"{ group: group }\">\n          </div>\n        </div>\n      </ion-item-divider>\n      <ion-item button=\"true\" detail=\"false\" *ngFor=\"let item of group.items\"\n        (click)=\"selectComponent._select(item)\" class=\"ionic-selectable-item\"\n        [ngClass]=\"{\n          'ionic-selectable-item-is-selected': selectComponent._isItemSelected(item),\n          'ionic-selectable-item-is-disabled': selectComponent._isItemDisabled(item)\n        }\" [disabled]=\"selectComponent._isItemDisabled(item)\">\n        <!-- Need span for text ellipsis. -->\n        <span *ngIf=\"selectComponent.itemTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.itemTemplate\"\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n        </span>\n        <!-- Need ion-label for text ellipsis. -->\n        <ion-label *ngIf=\"!selectComponent.itemTemplate\">\n          {{selectComponent._formatItem(item)}}\n        </ion-label>\n        <div *ngIf=\"selectComponent.itemEndTemplate\" slot=\"end\">\n          <div [ngTemplateOutlet]=\"selectComponent.itemEndTemplate\"\n            [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n          </div>\n        </div>\n        <span *ngIf=\"selectComponent.itemIconTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.itemIconTemplate\"\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n        </span>\n        <ion-icon *ngIf=\"!selectComponent.itemIconTemplate\"\n          [name]=\"selectComponent._isItemSelected(item) ? 'checkmark-circle' : 'radio-button-off'\"\n          [color]=\"selectComponent._isItemSelected(item) ? 'primary' : null\"\n          [slot]=\"selectComponent.itemIconSlot\">\n        </ion-icon>\n        <ion-button *ngIf=\"selectComponent.canSaveItem\"\n          class=\"ionic-selectable-item-button\" slot=\"end\" fill=\"outline\"\n          (click)=\"selectComponent._saveItem($event, item)\">\n          <ion-icon slot=\"icon-only\" name=\"md-create\"></ion-icon>\n        </ion-button>\n        <ion-button *ngIf=\"selectComponent.canDeleteItem\"\n          class=\"ionic-selectable-item-button\" slot=\"end\" fill=\"outline\"\n          (click)=\"selectComponent._deleteItemClick($event, item)\">\n          <ion-icon slot=\"icon-only\" name=\"md-trash\"></ion-icon>\n        </ion-button>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n  <!-- Fail text should be above InfiniteScroll to avoid a gap when no items are found. -->\n  <div *ngIf=\"!selectComponent._hasFilteredItems\">\n    <span *ngIf=\"selectComponent.searchFailTemplate\"\n      [ngTemplateOutlet]=\"selectComponent.searchFailTemplate\">\n    </span>\n    <div *ngIf=\"!selectComponent.searchFailTemplate\" margin>\n      {{selectComponent.searchFailText}}\n    </div>\n  </div>\n  <ion-infinite-scroll *ngIf=\"!selectComponent.hasVirtualScroll\"\n    [disabled]=\"!selectComponent.hasInfiniteScroll\"\n    (ionInfinite)=\"selectComponent._getMoreItems()\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <ion-virtual-scroll no-margin\n    *ngIf=\"selectComponent.hasVirtualScroll && selectComponent._hasFilteredItems\"\n    [items]=\"selectComponent._filteredGroups[0].items\"\n    [headerFn]=\"selectComponent.virtualScrollHeaderFn\"\n    [approxItemHeight]=\"selectComponent.virtualScrollApproxItemHeight\">\n    <ion-item-divider *virtualHeader=\"let header\"\n      [color]=\"selectComponent.groupColor ? selectComponent.groupColor : null\">\n      {{header}}\n    </ion-item-divider>\n    <ion-item button=\"true\" detail=\"false\" *virtualItem=\"let item\"\n      (click)=\"selectComponent._select(item)\" class=\"ionic-selectable-item\"\n      [ngClass]=\"{\n        'ionic-selectable-item-is-selected': selectComponent._isItemSelected(item),\n        'ionic-selectable-item-is-disabled': selectComponent._isItemDisabled(item)\n      }\" [disabled]=\"selectComponent._isItemDisabled(item)\">\n      <!-- Need span for text ellipsis. -->\n      <span *ngIf=\"selectComponent.itemTemplate\"\n        [ngTemplateOutlet]=\"selectComponent.itemTemplate\"\n        [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n      </span>\n      <!-- Need ion-label for text ellipsis. -->\n      <ion-label *ngIf=\"!selectComponent.itemTemplate\">\n        {{selectComponent._formatItem(item)}}\n      </ion-label>\n      <div *ngIf=\"selectComponent.itemEndTemplate\" slot=\"end\">\n        <div [ngTemplateOutlet]=\"selectComponent.itemEndTemplate\"\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n        </div>\n      </div>\n      <span *ngIf=\"selectComponent.itemIconTemplate\"\n        [ngTemplateOutlet]=\"selectComponent.itemIconTemplate\"\n        [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n      </span>\n      <ion-icon *ngIf=\"!selectComponent.itemIconTemplate\"\n        [name]=\"selectComponent._isItemSelected(item) ? 'checkmark-circle' : 'radio-button-off'\"\n        [color]=\"selectComponent._isItemSelected(item) ? 'primary' : null\"\n        [slot]=\"selectComponent.itemIconSlot\">\n      </ion-icon>\n      <ion-button *ngIf=\"selectComponent.canSaveItem\"\n        class=\"ionic-selectable-item-button\" slot=\"end\" fill=\"outline\"\n        (click)=\"selectComponent._saveItem($event, item)\">\n        <ion-icon slot=\"icon-only\" name=\"md-create\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"selectComponent.canDeleteItem\"\n        class=\"ionic-selectable-item-button\" slot=\"end\" fill=\"outline\"\n        (click)=\"selectComponent._deleteItemClick($event, item)\">\n        <ion-icon slot=\"icon-only\" name=\"md-trash\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-virtual-scroll>\n</ion-content>\n<div class=\"ionic-selectable-add-item-template\"\n  *ngIf=\"selectComponent._isAddItemTemplateVisible\"\n  [ngStyle]=\"{ 'top.px': _header.offsetHeight }\">\n  <div class=\"ionic-selectable-add-item-template-inner\"\n    [ngStyle]=\"{ 'height': selectComponent._addItemTemplateFooterHeight }\">\n    <span [ngTemplateOutlet]=\"selectComponent.addItemTemplate\"\n      [ngTemplateOutletContext]=\"{ item: selectComponent._itemToAdd, isAdd: selectComponent._itemToAdd === null }\">\n    </span>\n  </div>\n</div>\n<ion-footer\n  *ngIf=\"selectComponent._footerButtonsCount > 0 || selectComponent.footerTemplate\"\n  [ngStyle]=\"{ 'visibility': selectComponent._isFooterVisible ? 'initial' : 'hidden' }\">\n  <ion-toolbar *ngIf=\"!selectComponent.footerTemplate\">\n    <ion-row>\n      <ion-col *ngIf=\"selectComponent.canClear\">\n        <ion-button expand=\"full\" (click)=\"selectComponent._clear()\"\n          [disabled]=\"!selectComponent._selectedItems.length\">\n          {{selectComponent.clearButtonText}}\n        </ion-button>\n      </ion-col>\n      <ion-col *ngIf=\"selectComponent.canAddItem\">\n        <ion-button expand=\"full\" (click)=\"selectComponent._addItemClick()\">\n          {{selectComponent.addButtonText}}\n        </ion-button>\n      </ion-col>\n      <ion-col\n        *ngIf=\"selectComponent.isMultiple || selectComponent.hasConfirmButton\">\n        <ion-button expand=\"full\" (click)=\"selectComponent._confirm()\"\n          [disabled]=\"!selectComponent.isConfirmButtonEnabled\">\n          {{selectComponent.confirmButtonText}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n  <div *ngIf=\"selectComponent.footerTemplate\"\n    [ngTemplateOutlet]=\"selectComponent.footerTemplate\">\n  </div>\n</ion-footer>\n"
                }] }
    ];
    /** @nocollapse */
    IonicSelectableModalComponent.ctorParameters = function () { return [
        { type: NavParams, },
        { type: ElementRef, },
    ]; };
    IonicSelectableModalComponent.propDecorators = {
        "_content": [{ type: ViewChild, args: [IonContent,] },],
        "_searchbarComponent": [{ type: ViewChild, args: ['searchbarComponent',] },],
        "_infiniteScroll": [{ type: ViewChild, args: [IonInfiniteScroll,] },],
        "_cssClass": [{ type: HostBinding, args: ['class.ionic-selectable-modal',] },],
        "_canClearCssClass": [{ type: HostBinding, args: ['class.ionic-selectable-modal-can-clear',] },],
        "_isMultipleCssClass": [{ type: HostBinding, args: ['class.ionic-selectable-modal-is-multiple',] },],
        "_isSearchingCssClass": [{ type: HostBinding, args: ['class.ionic-selectable-modal-is-searching',] },],
        "_isIos": [{ type: HostBinding, args: ['class.ionic-selectable-modal-ios',] },],
        "_isMD": [{ type: HostBinding, args: ['class.ionic-selectable-modal-md',] },],
        "_isAddItemTemplateVisibleCssClass": [{ type: HostBinding, args: ['class.ionic-selectable-modal-is-add-item-template-visible',] },],
        "onResize": [{ type: HostListener, args: ['window:resize',] },],
    };
    return IonicSelectableModalComponent;
}());
export { IonicSelectableModalComponent };
function IonicSelectableModalComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    IonicSelectableModalComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    IonicSelectableModalComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    IonicSelectableModalComponent.propDecorators;
    /** @type {?} */
    IonicSelectableModalComponent.prototype._content;
    /** @type {?} */
    IonicSelectableModalComponent.prototype._header;
    /** @type {?} */
    IonicSelectableModalComponent.prototype.selectComponent;
    /** @type {?} */
    IonicSelectableModalComponent.prototype._searchbarComponent;
    /** @type {?} */
    IonicSelectableModalComponent.prototype._infiniteScroll;
    /** @type {?} */
    IonicSelectableModalComponent.prototype._cssClass;
    /** @type {?} */
    IonicSelectableModalComponent.prototype.navParams;
    /** @type {?} */
    IonicSelectableModalComponent.prototype._element;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc2VsZWN0YWJsZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYy1zZWxlY3RhYmxlLyIsInNvdXJjZXMiOlsic3JjL2FwcC9jb21wb25lbnRzL2lvbmljLXNlbGVjdGFibGUvaW9uaWMtc2VsZWN0YWJsZS1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxzQkFBc0I7QUFDM0csT0FBTyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHVCQUF1QjtBQUN4RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUscUNBQXFDOztJQWdEdEUsdUNBQ1UsV0FDRDtRQUZULGlCQW1CQztRQWxCUyxjQUFTLEdBQVQsU0FBUztRQUNWLGFBQVEsR0FBUixRQUFRO3lCQWxDTCxJQUFJO1FBb0NkLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBRXpDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtvQkFDckMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNoRCxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0RTtTQUNGO1FBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQzlFOzBCQWpERyw0REFBaUI7Ozs7O1lBQ25CLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7Ozs7OzBCQUduQyw4REFBbUI7Ozs7O1lBQ3JCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7Ozs7OzBCQUdyQywrREFBb0I7Ozs7O1lBQ3RCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUM7Ozs7OzBCQUd2QyxpREFBTTs7Ozs7WUFDUixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDOzs7Ozs7OztJQUdyQyw2Q0FBSzs7OztRQUNILE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7OzBCQUdoQyw0RUFBaUM7Ozs7O1lBQ25DLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyx5QkFBeUIsQ0FBQzs7Ozs7Ozs7SUFHeEQsZ0RBQVE7Ozs7OztRQUdOLElBQUksQ0FBQyxlQUFlLENBQUMsd0JBQXdCLEVBQUUsQ0FBQzs7Ozs7SUF3QmxELHVEQUFlOzs7SUFBZjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFdkUsSUFBSSxJQUFJLENBQUMsbUJBQW1CLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsRUFBRTs7WUFFekUsVUFBVSxDQUFDO2dCQUNULEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNyQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1Y7S0FDRjs7Z0JBNUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxnK1VBQXNEO2lCQUN2RDs7OztnQkFOcUQsU0FBUztnQkFENUIsVUFBVTs7OzZCQVMxQyxTQUFTLFNBQUMsVUFBVTt3Q0FJcEIsU0FBUyxTQUFDLG9CQUFvQjtvQ0FFOUIsU0FBUyxTQUFDLGlCQUFpQjs4QkFFM0IsV0FBVyxTQUFDLDhCQUE4QjtzQ0FFMUMsV0FBVyxTQUFDLHdDQUF3Qzt3Q0FJcEQsV0FBVyxTQUFDLDBDQUEwQzt5Q0FJdEQsV0FBVyxTQUFDLDJDQUEyQzsyQkFJdkQsV0FBVyxTQUFDLGtDQUFrQzswQkFJOUMsV0FBVyxTQUFDLGlDQUFpQztzREFJN0MsV0FBVyxTQUFDLDJEQUEyRDs2QkFJdkUsWUFBWSxTQUFDLGVBQWU7O3dDQTNDL0I7O1NBUWEsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbkNvbnRlbnQsIElvbkluZmluaXRlU2Nyb2xsLCBJb25TZWFyY2hiYXIsIE5hdlBhcmFtcyB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpb25pYy1zZWxlY3RhYmxlLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lvbmljLXNlbGVjdGFibGUtbW9kYWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElvbmljU2VsZWN0YWJsZU1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoSW9uQ29udGVudClcbiAgX2NvbnRlbnQ6IElvbkNvbnRlbnQ7XG4gIF9oZWFkZXI6IEhUTUxFbGVtZW50O1xuICBzZWxlY3RDb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnc2VhcmNoYmFyQ29tcG9uZW50JylcbiAgX3NlYXJjaGJhckNvbXBvbmVudDogSW9uU2VhcmNoYmFyO1xuICBAVmlld0NoaWxkKElvbkluZmluaXRlU2Nyb2xsKVxuICBfaW5maW5pdGVTY3JvbGw6IElvbkluZmluaXRlU2Nyb2xsO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtbW9kYWwnKVxuICBfY3NzQ2xhc3MgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtbW9kYWwtY2FuLWNsZWFyJylcbiAgZ2V0IF9jYW5DbGVhckNzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdENvbXBvbmVudC5jYW5DbGVhcjtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtbW9kYWwtaXMtbXVsdGlwbGUnKVxuICBnZXQgX2lzTXVsdGlwbGVDc3NDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RDb21wb25lbnQuaXNNdWx0aXBsZTtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtbW9kYWwtaXMtc2VhcmNoaW5nJylcbiAgZ2V0IF9pc1NlYXJjaGluZ0Nzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdENvbXBvbmVudC5faXNTZWFyY2hpbmc7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLW1vZGFsLWlvcycpXG4gIGdldCBfaXNJb3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0Q29tcG9uZW50Ll9pc0lvcztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtbW9kYWwtbWQnKVxuICBfaXNNRCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RDb21wb25lbnQuX2lzTUQ7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLW1vZGFsLWlzLWFkZC1pdGVtLXRlbXBsYXRlLXZpc2libGUnKVxuICBnZXQgX2lzQWRkSXRlbVRlbXBsYXRlVmlzaWJsZUNzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdENvbXBvbmVudC5faXNBZGRJdGVtVGVtcGxhdGVWaXNpYmxlO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxuICBvblJlc2l6ZSgpIHtcbiAgICAvLyBpb24tZm9vdGVyIGluc2lkZSB0aGUgdGVtcGxhdGUgbWlnaHQgY2hhbmdlIGl0cyBoZWlnaHQgd2hlblxuICAgIC8vIGRldmljZSBvcmllbnRhdGlvbiBjaGFuZ2VzLlxuICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50Ll9wb3NpdGlvbkFkZEl0ZW1UZW1wbGF0ZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuYXZQYXJhbXM6IE5hdlBhcmFtcyxcbiAgICBwdWJsaWMgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICkge1xuICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50ID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCdzZWxlY3RDb21wb25lbnQnKTtcbiAgICB0aGlzLnNlbGVjdENvbXBvbmVudC5fbW9kYWxDb21wb25lbnQgPSB0aGlzO1xuICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50Ll9zZWxlY3RlZEl0ZW1zID0gW107XG5cbiAgICBpZiAoIXRoaXMuc2VsZWN0Q29tcG9uZW50Ll9pc051bGxPcldoaXRlU3BhY2UodGhpcy5zZWxlY3RDb21wb25lbnQudmFsdWUpKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RDb21wb25lbnQuaXNNdWx0aXBsZSkge1xuICAgICAgICB0aGlzLnNlbGVjdENvbXBvbmVudC52YWx1ZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50Ll9zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQuX3NlbGVjdGVkSXRlbXMucHVzaCh0aGlzLnNlbGVjdENvbXBvbmVudC52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RDb21wb25lbnQuX3NldEl0ZW1zVG9Db25maXJtKHRoaXMuc2VsZWN0Q29tcG9uZW50Ll9zZWxlY3RlZEl0ZW1zKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9oZWFkZXIgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW9uLWhlYWRlcicpO1xuXG4gICAgaWYgKHRoaXMuX3NlYXJjaGJhckNvbXBvbmVudCAmJiB0aGlzLnNlbGVjdENvbXBvbmVudC5zaG91bGRGb2N1c1NlYXJjaGJhcikge1xuICAgICAgLy8gRm9jdXMgYWZ0ZXIgYSBkZWxheSBiZWNhdXNlIGZvY3VzIGRvZXNuJ3Qgd29yayB3aXRob3V0IGl0LlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NlYXJjaGJhckNvbXBvbmVudC5zZXRGb2N1cygpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9XG59XG4iXX0=