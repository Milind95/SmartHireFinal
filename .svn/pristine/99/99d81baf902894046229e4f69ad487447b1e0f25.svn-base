/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable-next-line:max-line-length
import { Component, ContentChild, DoCheck, ElementRef, EventEmitter, forwardRef, HostBinding, Input, IterableDiffer, IterableDiffers, OnInit, Optional, Output, Renderer, TemplateRef, ViewEncapsulation } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { IonItem, ModalController, Platform } from "@ionic/angular";
import { AnimationBuilder, ModalOptions } from "@ionic/core";
import { Subscription } from "rxjs";
import { IonicSelectableAddItemTemplateDirective } from "./ionic-selectable-add-item-template.directive";
import { IonicSelectableCloseButtonTemplateDirective } from "./ionic-selectable-close-button-template.directive";
import { IonicSelectableFooterTemplateDirective } from "./ionic-selectable-footer-template.directive";
import { IonicSelectableGroupEndTemplateDirective } from "./ionic-selectable-group-end-template.directive";
import { IonicSelectableGroupTemplateDirective } from "./ionic-selectable-group-template.directive";
import { IonicSelectableHeaderTemplateDirective } from "./ionic-selectable-header-template.directive";
import { IonicSelectableItemEndTemplateDirective } from "./ionic-selectable-item-end-template.directive";
import { IonicSelectableItemIconTemplateDirective } from "./ionic-selectable-item-icon-template.directive";
import { IonicSelectableItemTemplateDirective } from "./ionic-selectable-item-template.directive";
import { IonicSelectableMessageTemplateDirective } from "./ionic-selectable-message-template.directive";
import { IonicSelectableModalComponent } from "./ionic-selectable-modal.component";
import { IonicSelectablePlaceholderTemplateDirective } from "./ionic-selectable-placeholder-template.directive";
import { IonicSelectableSearchFailTemplateDirective } from "./ionic-selectable-search-fail-template.directive";
import { IonicSelectableTitleTemplateDirective } from "./ionic-selectable-title-template.directive";
import { IonicSelectableValueTemplateDirective } from "./ionic-selectable-value-template.directive";
var IonicSelectableComponent = /** @class */ (function () {
    function IonicSelectableComponent(_modalController, _platform, ionItem, _iterableDiffers, _element, _renderer) {
        this._modalController = _modalController;
        this._platform = _platform;
        this.ionItem = ionItem;
        this._iterableDiffers = _iterableDiffers;
        this._element = _element;
        this._renderer = _renderer;
        this._cssClass = true;
        this._isOnSearchEnabled = true;
        this._isEnabled = true;
        this._shouldBackdropClose = true;
        this._isOpened = false;
        this._value = null;
        this._canClear = false;
        this._hasConfirmButton = false;
        this._isMultiple = false;
        this._canAddItem = false;
        this.onItemsChange = new EventEmitter();
        this._hasIonLabel = false;
        this._ionLabelPosition = null;
        this._label = null;
        this._valueItems = [];
        this._searchText = '';
        this._hasSearchText = false;
        this._groups = [];
        this._itemsToConfirm = [];
        this._selectedItems = [];
        this._filteredGroups = [];
        this._isAddItemTemplateVisible = false;
        this._isFooterVisible = true;
        this._itemToAdd = null;
        this._footerButtonsCount = 0;
        this._hasFilteredItems = false;
        /**
         * A list of items.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#items).
         *
         * \@default []
         * \@memberof IonicSelectableComponent
         */
        this.items = [];
        this.itemsChange = new EventEmitter();
        /**
         * Modal CSS class.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalcssclass).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.modalCssClass = null;
        /**
         * Modal enter animation.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalenteranimation).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.modalEnterAnimation = null;
        /**
         * Modal leave animation.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalleaveanimation).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.modalLeaveAnimation = null;
        /**
         * Determines whether Confirm button is enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isconfirmbuttonenabled).
         *
         * \@default true
         * \@memberof IonicSelectableComponent
         */
        this.isConfirmButtonEnabled = true;
        /**
         * Item property to use as a unique identifier, e.g, `'id'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemvaluefield).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.itemValueField = null;
        /**
         * Item property to display, e.g, `'name'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemtextfield).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.itemTextField = null;
        /**
         *
         * Group property to use as a unique identifier to group items, e.g. `'country.id'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#groupvaluefield).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.groupValueField = null;
        /**
         * Group property to display, e.g. `'country.name'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#grouptextfield).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.groupTextField = null;
        /**
         * Determines whether to show Searchbar.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#cansearch).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.canSearch = false;
        /**
         * Determines whether Ionic [InfiniteScroll](https://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/) is enabled.
         * **Note**: Infinite scroll cannot be used together with virtual scroll.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasinfinitescroll).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.hasInfiniteScroll = false;
        /**
         * Determines whether Ionic [VirtualScroll](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/) is enabled.
         * **Note**: Virtual scroll cannot be used together with infinite scroll.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvirtualscroll).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.hasVirtualScroll = false;
        /**
         * See Ionic VirtualScroll [approxItemHeight](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollapproxitemheight).
         *
         * \@default '40px'
         * \@memberof IonicSelectableComponent
         */
        this.virtualScrollApproxItemHeight = '40px';
        /**
         * A placeholder for Searchbar.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchplaceholder).
         *
         * \@default 'Search'
         * \@memberof IonicSelectableComponent
         */
        this.searchPlaceholder = 'Search';
        /**
         * A placeholder.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#placeholder).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.placeholder = null;
        /**
         * Text to display when no items have been found during search.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchfailtext).
         *
         * \@default 'No items found.'
         * \@memberof IonicSelectableComponent
         */
        this.searchFailText = 'No items found.';
        /**
         * Clear button text.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#clearbuttontext).
         *
         * \@default 'Clear'
         * \@memberof IonicSelectableComponent
         */
        this.clearButtonText = 'Clear';
        /**
         * Add button text.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#addbuttontext).
         *
         * \@default 'Add'
         * \@memberof IonicSelectableComponent
         */
        this.addButtonText = 'Add';
        /**
         * Confirm button text.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirmbuttontext).
         *
         * \@default 'OK'
         * \@memberof IonicSelectableComponent
         */
        this.confirmButtonText = 'OK';
        /**
         * Close button text.
         * The field is only applicable to **iOS** platform, on **Android** only Cross icon is displayed.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#closebuttontext).
         *
         * \@default 'Cancel'
         * \@memberof IonicSelectableComponent
         */
        this.closeButtonText = 'Cancel';
        /**
         * Determines whether Searchbar should receive focus when Modal is opened.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldfocussearchbar).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.shouldFocusSearchbar = false;
        /**
         * Header color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#headercolor).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.headerColor = null;
        /**
         * Group color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#groupcolor).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.groupColor = null;
        /**
         * Close button slot. [Ionic slots](https://ionicframework.com/docs/api/buttons) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#closebuttonslot).
         *
         * \@default 'start'
         * \@memberof IonicSelectableComponent
         */
        this.closeButtonSlot = 'start';
        /**
         * Item icon slot. [Ionic slots](https://ionicframework.com/docs/api/item) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemiconslot).
         *
         * \@default 'start'
         * \@memberof IonicSelectableComponent
         */
        this.itemIconSlot = 'start';
        /**
         * Fires when item/s has been selected and Modal closed.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onchange).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onChange = new EventEmitter();
        /**
         * Fires when the user is typing in Searchbar.
         * **Note**: `canSearch` and `isOnSearchEnabled` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearch).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onSearch = new EventEmitter();
        /**
         * Fires when no items have been found.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearchfail).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onSearchFail = new EventEmitter();
        /**
         * Fires when some items have been found.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearchsuccess).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onSearchSuccess = new EventEmitter();
        /**
         * Fires when the user has scrolled to the end of the list.
         * **Note**: `hasInfiniteScroll` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#oninfinitescroll).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onInfiniteScroll = new EventEmitter();
        /**
         * Fires when Modal has been opened.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onopen).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onOpen = new EventEmitter();
        /**
         * Fires when Modal has been closed.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onclose).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onClose = new EventEmitter();
        /**
         * Fires when an item has been selected or unselected.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onselect).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onSelect = new EventEmitter();
        /**
         * Fires when Clear button has been clicked.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onclear).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onClear = new EventEmitter();
        /**
         * How long, in milliseconds, to wait to filter items or to trigger `onSearch` event after each keystroke.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchdebounce).
         *
         * \@default 250
         * \@memberof IonicSelectableComponent
         */
        this.searchDebounce = 250;
        /**
         * A list of items to disable.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#disableditems).
         *
         * \@default []
         * \@memberof IonicSelectableComponent
         */
        this.disabledItems = [];
        /**
         * Determines whether item value only should be stored in `ngModel`, not the entire item.
         * **Note**: Item value is defined by `itemValueField`.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldstoreitemvalue).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.shouldStoreItemValue = false;
        /**
         * Determines whether to allow editing items.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#cansaveitem).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.canSaveItem = false;
        /**
         * Determines whether to allow deleting items.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#candeleteitem).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.canDeleteItem = false;
        /**
         * Fires when Edit item button has been clicked.
         * When the button has been clicked `ionicSelectableAddItemTemplate` will be shown. Use the template to create a form to edit item.
         * **Note**: `canSaveItem` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsaveitem).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onSaveItem = new EventEmitter();
        /**
         * Fires when Delete item button has been clicked.
         * **Note**: `canDeleteItem` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#ondeleteitem).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onDeleteItem = new EventEmitter();
        /**
         * Fires when Add item button has been clicked.
         * When the button has been clicked `ionicSelectableAddItemTemplate` will be shown. Use the template to create a form to add item.
         * **Note**: `canAddItem` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onadditem).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onAddItem = new EventEmitter();
        /**
         * See Ionic VirtualScroll [headerFn](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollheaderfn).
         *
         * \@memberof IonicSelectableComponent
         */
        this.virtualScrollHeaderFn = function () {
            return null;
        };
        this.propagateOnChange = function (_) { };
        this.propagateOnTouched = function () { };
        if (!this.items || !this.items.length) {
            this.items = [];
        }
        this._itemsDiffer = this._iterableDiffers.find(this.items).create();
    }
    Object.defineProperty(IonicSelectableComponent.prototype, "_isMultipleCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isMultiple;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "_hasValueCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.hasValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "_hasPlaceholderCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasPlaceholder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "_hasIonLabelCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasIonLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "_hasDefaultIonLabelCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ionLabelPosition === 'default';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "_hasFixedIonLabelCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ionLabelPosition === 'fixed';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "_hasStackedIonLabelCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ionLabelPosition === 'stacked';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "_hasFloatingIonLabelCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ionLabelPosition === 'floating';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "_hasInfiniteScroll", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isEnabled && this._modalComponent &&
                this._modalComponent._infiniteScroll ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "_shouldStoreItemValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this.shouldStoreItemValue && this._hasObjects;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "label", {
        /**
         * Text of [Ionic Label](https://ionicframework.com/docs/api/label).
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#label).
         *
         * @readonly
         * @default null
         * @memberof IonicSelectableComponent
         */
        get: /**
         * Text of [Ionic Label](https://ionicframework.com/docs/api/label).
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#label).
         *
         * \@readonly
         * \@default null
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "searchText", {
        /**
         * Text that the user has typed in Searchbar.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchtext).
         *
         * @readonly
         * @default ''
         * @memberof IonicSelectableComponent
         */
        get: /**
         * Text that the user has typed in Searchbar.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchtext).
         *
         * \@readonly
         * \@default ''
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._searchText;
        },
        set: /**
         * @param {?} searchText
         * @return {?}
         */
        function (searchText) {
            this._searchText = searchText;
            this._setHasSearchText();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "isSearching", {
        /**
         * Determines whether search is running.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#issearching).
         *
         * @default false
         * @readonly
         * @memberof IonicSelectableComponent
         */
        get: /**
         * Determines whether search is running.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#issearching).
         *
         * \@default false
         * \@readonly
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._isSearching;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "hasSearchText", {
        /**
         * Determines whether user has typed anything in Searchbar.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hassearchtext).
         *
         * @default false
         * @readonly
         * @memberof IonicSelectableComponent
         */
        get: /**
         * Determines whether user has typed anything in Searchbar.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hassearchtext).
         *
         * \@default false
         * \@readonly
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._hasSearchText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
            // Set value items.
            this._valueItems.splice(0, this._valueItems.length);
            if (this.isMultiple) {
                if (value && value.length) {
                    Array.prototype.push.apply(this._valueItems, value);
                }
            }
            else {
                if (!this._isNullOrWhiteSpace(value)) {
                    this._valueItems.push(value);
                }
            }
            this._setIonItemHasValue();
            this._setHasPlaceholder();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "isEnabled", {
        get: /**
         * Determines whether the component is enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isenabled).
         *
         * \@default true
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._isEnabled;
        },
        set: /**
         * @param {?} isEnabled
         * @return {?}
         */
        function (isEnabled) {
            this._isEnabled = !!isEnabled;
            this.enableIonItem(this._isEnabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "shouldBackdropClose", {
        get: /**
         * Determines whether Modal should be closed when backdrop is clicked.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldbackdropclose).
         *
         * \@default true
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._shouldBackdropClose;
        },
        set: /**
         * @param {?} shouldBackdropClose
         * @return {?}
         */
        function (shouldBackdropClose) {
            this._shouldBackdropClose = !!shouldBackdropClose;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "isOpened", {
        /**
         * Determines whether Modal is opened.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isopened).
         *
         * @default false
         * @readonly
         * @memberof IonicSelectableComponent
         */
        get: /**
         * Determines whether Modal is opened.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isopened).
         *
         * \@default false
         * \@readonly
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._isOpened;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "hasConfirmButton", {
        get: /**
         * Determines whether Confirm button is visible for single selection.
         * By default Confirm button is visible only for multiple selection.
         * **Note**: It is always true for multiple selection and cannot be changed.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasconfirmbutton).
         *
         * \@default true
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._hasConfirmButton;
        },
        set: /**
         * @param {?} hasConfirmButton
         * @return {?}
         */
        function (hasConfirmButton) {
            this._hasConfirmButton = !!hasConfirmButton;
            this._countFooterButtons();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "isOnSearchEnabled", {
        get: /**
         * Determines whether `onSearch` event is enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isonsearchenabled).
         *
         * \@default true
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._isOnSearchEnabled;
        },
        set: /**
         * @param {?} isOnSearchEnabled
         * @return {?}
         */
        function (isOnSearchEnabled) {
            this._isOnSearchEnabled = !!isOnSearchEnabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "canClear", {
        get: /**
         * Determines whether to show Clear button.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#canclear).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._canClear;
        },
        set: /**
         * @param {?} canClear
         * @return {?}
         */
        function (canClear) {
            this._canClear = !!canClear;
            this._countFooterButtons();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "isMultiple", {
        get: /**
         * Determines whether multiple items can be selected.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#ismultiple).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._isMultiple;
        },
        set: /**
         * @param {?} isMultiple
         * @return {?}
         */
        function (isMultiple) {
            this._isMultiple = !!isMultiple;
            this._countFooterButtons();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "itemsToConfirm", {
        /**
         * A list of items that are selected and awaiting confirmation by user, when he has clicked Confirm button.
         * After the user has clicked Confirm button items to confirm are cleared.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemstoconfirm).
         *
         * @default []
         * @readonly
         * @memberof IonicSelectableComponent
         */
        get: /**
         * A list of items that are selected and awaiting confirmation by user, when he has clicked Confirm button.
         * After the user has clicked Confirm button items to confirm are cleared.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemstoconfirm).
         *
         * \@default []
         * \@readonly
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._itemsToConfirm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "canAddItem", {
        get: /**
         * Determines whether to allow adding items.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#canadditem).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._canAddItem;
        },
        set: /**
         * @param {?} canAddItem
         * @return {?}
         */
        function (canAddItem) {
            this._canAddItem = !!canAddItem;
            this._countFooterButtons();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype.initFocus = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} isEnabled
     * @return {?}
     */
    IonicSelectableComponent.prototype.enableIonItem = /**
     * @param {?} isEnabled
     * @return {?}
     */
    function (isEnabled) {
        if (!this.ionItem) {
            return;
        }
        this.ionItem.disabled = !isEnabled;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    IonicSelectableComponent.prototype._isNullOrWhiteSpace = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === null || value === undefined) {
            return true;
        }
        // Convert value to string in case if it's not.
        return value.toString().replace(/\s/g, '').length < 1;
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._setHasSearchText = /**
     * @return {?}
     */
    function () {
        this._hasSearchText = !this._isNullOrWhiteSpace(this._searchText);
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._hasOnSearch = /**
     * @return {?}
     */
    function () {
        return this.isOnSearchEnabled && this.onSearch.observers.length > 0;
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._hasOnSaveItem = /**
     * @return {?}
     */
    function () {
        return this.canSaveItem && this.onSaveItem.observers.length > 0;
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._hasOnAddItem = /**
     * @return {?}
     */
    function () {
        return this.canAddItem && this.onAddItem.observers.length > 0;
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._hasOnDeleteItem = /**
     * @return {?}
     */
    function () {
        return this.canDeleteItem && this.onDeleteItem.observers.length > 0;
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._emitValueChange = /**
     * @return {?}
     */
    function () {
        this.propagateOnChange(this.value);
        this.onChange.emit({
            component: this,
            value: this.value
        });
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._emitSearch = /**
     * @return {?}
     */
    function () {
        if (!this.canSearch) {
            return;
        }
        this.onSearch.emit({
            component: this,
            text: this._searchText
        });
    };
    /**
     * @param {?} item
     * @param {?} isSelected
     * @return {?}
     */
    IonicSelectableComponent.prototype._emitOnSelect = /**
     * @param {?} item
     * @param {?} isSelected
     * @return {?}
     */
    function (item, isSelected) {
        this.onSelect.emit({
            component: this,
            item: item,
            isSelected: isSelected
        });
    };
    /**
     * @param {?} items
     * @return {?}
     */
    IonicSelectableComponent.prototype._emitOnClear = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        this.onClear.emit({
            component: this,
            items: items
        });
    };
    /**
     * @param {?} isSuccess
     * @return {?}
     */
    IonicSelectableComponent.prototype._emitOnSearchSuccessOrFail = /**
     * @param {?} isSuccess
     * @return {?}
     */
    function (isSuccess) {
        var /** @type {?} */ eventData = {
            component: this,
            text: this._searchText
        };
        if (isSuccess) {
            this.onSearchSuccess.emit(eventData);
        }
        else {
            this.onSearchFail.emit(eventData);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    IonicSelectableComponent.prototype._formatItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this._isNullOrWhiteSpace(item)) {
            return null;
        }
        return this.itemTextField ? item[this.itemTextField] : item.toString();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    IonicSelectableComponent.prototype._formatValueItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        if (this._shouldStoreItemValue) {
            // Get item text from the list as we store it's value only.
            var /** @type {?} */ selectedItem = this.items.find(function (_item) {
                return _item[_this.itemValueField] === item;
            });
            return this._formatItem(selectedItem);
        }
        else {
            return this._formatItem(item);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    IonicSelectableComponent.prototype._getItemValue = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!this._hasObjects) {
            return item;
        }
        return item[this.itemValueField];
    };
    /**
     * @param {?} item
     * @return {?}
     */
    IonicSelectableComponent.prototype._getStoredItemValue = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!this._hasObjects) {
            return item;
        }
        return this._shouldStoreItemValue ? item : item[this.itemValueField];
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._onSearchbarClear = /**
     * @return {?}
     */
    function () {
        // Ionic Searchbar doesn't clear bind with ngModel value.
        // Do it ourselves.
        this._searchText = '';
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._filterItems = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._setHasSearchText();
        if (this._hasOnSearch()) {
            // Delegate filtering to the event.
            this._emitSearch();
        }
        else {
            // Default filtering.
            var /** @type {?} */ groups_1 = [];
            if (!this._searchText || !this._searchText.trim()) {
                groups_1 = this._groups;
            }
            else {
                var /** @type {?} */ filterText_1 = this._searchText.trim().toLowerCase();
                this._groups.forEach(function (group) {
                    var /** @type {?} */ items = group.items.filter(function (item) {
                        var /** @type {?} */ itemText = (_this.itemTextField ?
                            item[_this.itemTextField] : item).toString().toLowerCase();
                        return itemText.indexOf(filterText_1) !== -1;
                    });
                    if (items.length) {
                        groups_1.push({
                            value: group.value,
                            text: group.text,
                            items: items
                        });
                    }
                });
                // No items found.
                if (!groups_1.length) {
                    groups_1.push({
                        items: []
                    });
                }
            }
            this._filteredGroups = groups_1;
            this._hasFilteredItems = !this._areGroupsEmpty(groups_1);
            this._emitOnSearchSuccessOrFail(this._hasFilteredItems);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    IonicSelectableComponent.prototype._isItemDisabled = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        if (!this.disabledItems) {
            return;
        }
        return this.disabledItems.some(function (_item) {
            return _this._getItemValue(_item) === _this._getItemValue(item);
        });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    IonicSelectableComponent.prototype._isItemSelected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        return this._selectedItems.find(function (selectedItem) {
            return _this._getItemValue(item) === _this._getStoredItemValue(selectedItem);
        }) !== undefined;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    IonicSelectableComponent.prototype._addSelectedItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this._shouldStoreItemValue) {
            this._selectedItems.push(this._getItemValue(item));
        }
        else {
            this._selectedItems.push(item);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    IonicSelectableComponent.prototype._deleteSelectedItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        var /** @type {?} */ itemToDeleteIndex;
        this._selectedItems.forEach(function (selectedItem, itemIndex) {
            if (_this._getItemValue(item) ===
                _this._getStoredItemValue(selectedItem)) {
                itemToDeleteIndex = itemIndex;
            }
        });
        this._selectedItems.splice(itemToDeleteIndex, 1);
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._click = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isEnabled) {
            return;
        }
        this._label = this._getLabelText();
        this.open().then(function () {
            _this.onOpen.emit({
                component: _this
            });
        });
    };
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    IonicSelectableComponent.prototype._saveItem = /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    function (event, item) {
        event.stopPropagation();
        this._itemToAdd = item;
        if (this._hasOnSaveItem()) {
            this.onSaveItem.emit({
                component: this,
                item: this._itemToAdd
            });
        }
        else {
            this.showAddItemTemplate();
        }
    };
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    IonicSelectableComponent.prototype._deleteItemClick = /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    function (event, item) {
        event.stopPropagation();
        this._itemToAdd = item;
        if (this._hasOnDeleteItem()) {
            // Delegate logic to event.
            this.onDeleteItem.emit({
                component: this,
                item: this._itemToAdd
            });
        }
        else {
            this.deleteItem(this._itemToAdd);
        }
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._addItemClick = /**
     * @return {?}
     */
    function () {
        if (this._hasOnAddItem()) {
            this.onAddItem.emit({
                component: this
            });
        }
        else {
            this.showAddItemTemplate();
        }
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._positionAddItemTemplate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Wait for the template to render.
        setTimeout(function () {
            var /** @type {?} */ footer = _this._modalComponent._element.nativeElement
                .querySelector('.ionic-selectable-add-item-template ion-footer');
            _this._addItemTemplateFooterHeight = footer ? "calc(100% - " + footer.offsetHeight + "px)" : '100%';
        }, 100);
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._close = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.close().then(function () {
            _this.onClose.emit({
                component: _this
            });
        });
        if (!this._hasOnSearch()) {
            this._searchText = '';
            this._setHasSearchText();
        }
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._clear = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ selectedItems = this._selectedItems;
        this.clear();
        this._emitValueChange();
        this._emitOnClear(selectedItems);
        this.close().then(function () {
            _this.onClose.emit({
                component: _this
            });
        });
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._getMoreItems = /**
     * @return {?}
     */
    function () {
        this.onInfiniteScroll.emit({
            component: this,
            text: this._searchText
        });
    };
    /**
     * @param {?} items
     * @return {?}
     */
    IonicSelectableComponent.prototype._setItemsToConfirm = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        // Return a copy of original array, so it couldn't be changed from outside.
        this._itemsToConfirm = [].concat(items);
    };
    /**
     * @param {?} selectedItem
     * @return {?}
     */
    IonicSelectableComponent.prototype._doSelect = /**
     * @param {?} selectedItem
     * @return {?}
     */
    function (selectedItem) {
        this.value = selectedItem;
        this._emitValueChange();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    IonicSelectableComponent.prototype._select = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var /** @type {?} */ isItemSelected = this._isItemSelected(item);
        if (this.isMultiple) {
            if (isItemSelected) {
                this._deleteSelectedItem(item);
            }
            else {
                this._addSelectedItem(item);
            }
            this._setItemsToConfirm(this._selectedItems);
            // Emit onSelect event after setting items to confirm so they could be used
            // inside the event.
            this._emitOnSelect(item, !isItemSelected);
        }
        else {
            if (this.hasConfirmButton || this.footerTemplate) {
                // Don't close Modal and keep track on items to confirm.
                // When footer template is used it's up to developer to close Modal.
                this._selectedItems = [];
                if (isItemSelected) {
                    this._deleteSelectedItem(item);
                }
                else {
                    this._addSelectedItem(item);
                }
                this._setItemsToConfirm(this._selectedItems);
                // Emit onSelect event after setting items to confirm so they could be used
                // inside the event.
                this._emitOnSelect(item, !isItemSelected);
            }
            else {
                if (!isItemSelected) {
                    this._selectedItems = [];
                    this._addSelectedItem(item);
                    // Emit onSelect before onChange.
                    this._emitOnSelect(item, true);
                    if (this._shouldStoreItemValue) {
                        this._doSelect(this._getItemValue(item));
                    }
                    else {
                        this._doSelect(item);
                    }
                }
                this._close();
            }
        }
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._confirm = /**
     * @return {?}
     */
    function () {
        this.confirm();
        this._close();
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._getLabelText = /**
     * @return {?}
     */
    function () {
        return this._ionLabelElement ? this._ionLabelElement.textContent : null;
    };
    /**
     * @param {?} groups
     * @return {?}
     */
    IonicSelectableComponent.prototype._areGroupsEmpty = /**
     * @param {?} groups
     * @return {?}
     */
    function (groups) {
        return groups.length === 0 || groups.every(function (group) {
            return !group.items || group.items.length === 0;
        });
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._countFooterButtons = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ footerButtonsCount = 0;
        if (this.canClear) {
            footerButtonsCount++;
        }
        if (this.isMultiple || this._hasConfirmButton) {
            footerButtonsCount++;
        }
        if (this.canAddItem) {
            footerButtonsCount++;
        }
        this._footerButtonsCount = footerButtonsCount;
    };
    /**
     * @param {?} items
     * @return {?}
     */
    IonicSelectableComponent.prototype._setItems = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        // It's important to have an empty starting group with empty items (groups[0].items),
        // because we bind to it when using VirtualScroll.
        // See https://github.com/eakoriakin/ionic-selectable/issues/70.
        var /** @type {?} */ groups = [{
                items: items || []
            }];
        if (items && items.length) {
            if (this._hasGroups) {
                groups = [];
                items.forEach(function (item) {
                    var /** @type {?} */ groupValue = _this._getPropertyValue(item, _this.groupValueField), /** @type {?} */
                    group = groups.find(function (_group) { return _group.value === groupValue; });
                    if (group) {
                        group.items.push(item);
                    }
                    else {
                        groups.push({
                            value: groupValue,
                            text: _this._getPropertyValue(item, _this.groupTextField),
                            items: [item]
                        });
                    }
                });
            }
        }
        this._groups = groups;
        this._filteredGroups = this._groups;
        this._hasFilteredItems = !this._areGroupsEmpty(this._filteredGroups);
    };
    /**
     * @param {?} object
     * @param {?} property
     * @return {?}
     */
    IonicSelectableComponent.prototype._getPropertyValue = /**
     * @param {?} object
     * @param {?} property
     * @return {?}
     */
    function (object, property) {
        if (!property) {
            return null;
        }
        return property.split('.').reduce(function (_object, _property) {
            return _object ? _object[_property] : null;
        }, object);
    };
    /**
     * @param {?} hasFocus
     * @return {?}
     */
    IonicSelectableComponent.prototype._setIonItemHasFocus = /**
     * @param {?} hasFocus
     * @return {?}
     */
    function (hasFocus) {
        if (!this.ionItem) {
            return;
        }
        // Apply focus CSS class for proper stylying of ion-item/ion-label.
        this._setIonItemCssClass('item-has-focus', hasFocus);
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._setIonItemHasValue = /**
     * @return {?}
     */
    function () {
        if (!this.ionItem) {
            return;
        }
        // Apply value CSS class for proper stylying of ion-item/ion-label.
        this._setIonItemCssClass('item-has-value', this.hasValue());
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._setHasPlaceholder = /**
     * @return {?}
     */
    function () {
        this._hasPlaceholder = !this.hasValue() &&
            (!this._isNullOrWhiteSpace(this.placeholder) || this.placeholderTemplate) ?
            true : false;
    };
    /**
     * @param {?} cssClass
     * @param {?} shouldAdd
     * @return {?}
     */
    IonicSelectableComponent.prototype._setIonItemCssClass = /**
     * @param {?} cssClass
     * @param {?} shouldAdd
     * @return {?}
     */
    function (cssClass, shouldAdd) {
        if (!this._ionItemElement) {
            return;
        }
        this._renderer.setElementClass(this._ionItemElement, cssClass, shouldAdd);
    };
    /**
     * @param {?} isVisible
     * @return {?}
     */
    IonicSelectableComponent.prototype._toggleAddItemTemplate = /**
     * @param {?} isVisible
     * @return {?}
     */
    function (isVisible) {
        // It should be possible to show/hide the template regardless
        // canAddItem or canSaveItem parameters, so we could implement some
        // custom behavior. E.g. adding item when search fails using onSearchFail event.
        if (!this.addItemTemplate) {
            return;
        }
        // To make SaveItemTemplate visible we just position it over list using CSS.
        // We don't hide list with *ngIf or [hidden] to prevent its scroll position.
        this._isAddItemTemplateVisible = isVisible;
        this._isFooterVisible = !isVisible;
    };
    /* ControlValueAccessor */
    /**
     * @param {?} value
     * @return {?}
     */
    IonicSelectableComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * @param {?} method
     * @return {?}
     */
    IonicSelectableComponent.prototype.registerOnChange = /**
     * @param {?} method
     * @return {?}
     */
    function (method) {
        this.propagateOnChange = method;
    };
    /**
     * @param {?} method
     * @return {?}
     */
    IonicSelectableComponent.prototype.registerOnTouched = /**
     * @param {?} method
     * @return {?}
     */
    function (method) {
        this.propagateOnTouched = method;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    IonicSelectableComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.isEnabled = !isDisabled;
    };
    /* .ControlValueAccessor */
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._isIos = this._platform.is('ios');
        this._isMD = !this._isIos;
        this._hasObjects = !this._isNullOrWhiteSpace(this.itemValueField);
        // Grouping is supported for objects only.
        // Ionic VirtualScroll has it's own implementation of grouping.
        this._hasGroups = Boolean(this._hasObjects && this.groupValueField && !this.hasVirtualScroll);
        if (this.ionItem) {
            this._ionItemElement = this._element.nativeElement.closest('ion-item');
            this._setIonItemCssClass('item-interactive', true);
            this._setIonItemCssClass('item-ionic-selectable', true);
            if (this._ionItemElement) {
                this._ionLabelElement = this._ionItemElement.querySelector('ion-label');
                if (this._ionLabelElement) {
                    this._hasIonLabel = true;
                    this._ionLabelPosition = this._ionLabelElement.getAttribute('position') || 'default';
                }
            }
        }
        this.enableIonItem(this.isEnabled);
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ itemsChanges = this._itemsDiffer.diff(this.items);
        if (itemsChanges) {
            this._setItems(this.items);
            this.value = this.value;
            this.onItemsChange.emit({
                component: this
            });
        }
    };
    /**
     * Adds item.
     * **Note**: If you want an item to be added to the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#additem).
     *
     * @param item Item to add.
     * @returns Promise that resolves when item has been added.
     * @memberof IonicSelectableComponent
     */
    /**
     * Adds item.
     * **Note**: If you want an item to be added to the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#additem).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} item Item to add.
     * @return {?} Promise that resolves when item has been added.
     */
    IonicSelectableComponent.prototype.addItem = /**
     * Adds item.
     * **Note**: If you want an item to be added to the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#additem).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} item Item to add.
     * @return {?} Promise that resolves when item has been added.
     */
    function (item) {
        var /** @type {?} */ self = this;
        // Adding item triggers onItemsChange.
        // Return a promise that resolves when onItemsChange finishes.
        // We need a promise or user could do something after item has been added,
        // e.g. use search() method to find the added item.
        this.items.unshift(item);
        // Close any running subscription.
        if (this._addItemObservable) {
            this._addItemObservable.unsubscribe();
        }
        return new Promise(function (resolve, reject) {
            // Complete callback isn't fired for some reason,
            // so unsubscribe in both success and fail cases.
            self._addItemObservable = self.onItemsChange.asObservable().subscribe(function () {
                self._addItemObservable.unsubscribe();
                resolve();
            }, function () {
                self._addItemObservable.unsubscribe();
                reject();
            });
        });
    };
    /**
   * Deletes item.
   * **Note**: If you want an item to be deleted from the original array as well use two-way data binding syntax on `[(items)]` field.
   * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#deleteitem).
   *
   * @param item Item to delete.
   * @returns Promise that resolves when item has been deleted.
   * @memberof IonicSelectableComponent
   */
    /**
     * Deletes item.
     * **Note**: If you want an item to be deleted from the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#deleteitem).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} item Item to delete.
     * @return {?} Promise that resolves when item has been deleted.
     */
    IonicSelectableComponent.prototype.deleteItem = /**
     * Deletes item.
     * **Note**: If you want an item to be deleted from the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#deleteitem).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} item Item to delete.
     * @return {?} Promise that resolves when item has been deleted.
     */
    function (item) {
        var _this = this;
        var /** @type {?} */ self = this;
        var /** @type {?} */ hasValueChanged = false;
        // Remove deleted item from selected items.
        if (this._selectedItems) {
            this._selectedItems = this._selectedItems.filter(function (_item) {
                return _this._getItemValue(item) !== _this._getStoredItemValue(_item);
            });
        }
        // Remove deleted item from value.
        if (this.value) {
            if (this.isMultiple) {
                var /** @type {?} */ values = this.value.filter(function (value) {
                    return value.id !== item.id;
                });
                if (values.length !== this.value.length) {
                    this.value = values;
                    hasValueChanged = true;
                }
            }
            else {
                if (item === this.value) {
                    this.value = null;
                    hasValueChanged = true;
                }
            }
        }
        if (hasValueChanged) {
            this._emitValueChange();
        }
        // Remove deleted item from list.
        var /** @type {?} */ items = this.items.filter(function (_item) {
            return _item.id !== item.id;
        });
        // Refresh items on parent component.
        this.itemsChange.emit(items);
        // Refresh list.
        this._setItems(items);
        this.onItemsChange.emit({
            component: this
        });
        // Close any running subscription.
        if (this._deleteItemObservable) {
            this._deleteItemObservable.unsubscribe();
        }
        return new Promise(function (resolve, reject) {
            // Complete callback isn't fired for some reason,
            // so unsubscribe in both success and fail cases.
            self._deleteItemObservable = self.onItemsChange.asObservable().subscribe(function () {
                self._deleteItemObservable.unsubscribe();
                resolve();
            }, function () {
                self._deleteItemObservable.unsubscribe();
                reject();
            });
        });
    };
    /**
     * Determines whether any item has been selected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvalue).
     *
     * @returns A boolean determining whether any item has been selected.
     * @memberof IonicSelectableComponent
     */
    /**
     * Determines whether any item has been selected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvalue).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} A boolean determining whether any item has been selected.
     */
    IonicSelectableComponent.prototype.hasValue = /**
     * Determines whether any item has been selected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvalue).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} A boolean determining whether any item has been selected.
     */
    function () {
        if (this.isMultiple) {
            return this._valueItems.length !== 0;
        }
        else {
            return this._valueItems.length !== 0 && !this._isNullOrWhiteSpace(this._valueItems[0]);
        }
    };
    /**
     * Opens Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#open).
     *
     * @returns Promise that resolves when Modal has been opened.
     * @memberof IonicSelectableComponent
     */
    /**
     * Opens Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#open).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when Modal has been opened.
     */
    IonicSelectableComponent.prototype.open = /**
     * Opens Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#open).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when Modal has been opened.
     */
    function () {
        var /** @type {?} */ self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isEnabled || self._isOpened) {
                reject('IonicSelectable is disabled or already opened.');
                return;
            }
            self._filterItems();
            self._isOpened = true;
            var /** @type {?} */ modalOptions = {
                component: IonicSelectableModalComponent,
                componentProps: { selectComponent: self },
                backdropDismiss: self._shouldBackdropClose
            };
            if (self.modalCssClass) {
                modalOptions.cssClass = self.modalCssClass;
            }
            if (self.modalEnterAnimation) {
                modalOptions.enterAnimation = self.modalEnterAnimation;
            }
            if (self.modalLeaveAnimation) {
                modalOptions.leaveAnimation = self.modalLeaveAnimation;
            }
            self._modalController.create(modalOptions).then(function (modal) {
                self._modal = modal;
                modal.present().then(function () {
                    // Set focus after Modal has opened to avoid flickering of focus highlighting
                    // before Modal opening.
                    self._setIonItemHasFocus(true);
                    resolve();
                });
                modal.onWillDismiss().then(function () {
                    self._setIonItemHasFocus(false);
                });
                modal.onDidDismiss().then(function (event) {
                    self._isOpened = false;
                    self._itemsToConfirm = [];
                    // Closed by clicking on backdrop outside modal.
                    if (event.role === 'backdrop') {
                        self.onClose.emit({
                            component: self
                        });
                    }
                });
            });
        });
    };
    /**
     * Closes Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#close).
     *
     * @returns Promise that resolves when Modal has been closed.
     * @memberof IonicSelectableComponent
     */
    /**
     * Closes Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#close).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when Modal has been closed.
     */
    IonicSelectableComponent.prototype.close = /**
     * Closes Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#close).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when Modal has been closed.
     */
    function () {
        var /** @type {?} */ self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isEnabled || !self._isOpened) {
                reject('IonicSelectable is disabled or already closed.');
                return;
            }
            self.propagateOnTouched();
            self._isOpened = false;
            self._itemToAdd = null;
            self._modal.dismiss().then(function () {
                self._setIonItemHasFocus(false);
                self.hideAddItemTemplate();
                resolve();
            });
        });
    };
    /**
     * Clears value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#clear).
     *
     * @memberof IonicSelectableComponent
     */
    /**
     * Clears value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#clear).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    IonicSelectableComponent.prototype.clear = /**
     * Clears value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#clear).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    function () {
        this.value = this.isMultiple ? [] : null;
        this._itemsToConfirm = [];
        this.propagateOnChange(this.value);
    };
    /**
     * Confirms selected items by updating value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirm).
     *
     * @memberof IonicSelectableComponent
     */
    /**
     * Confirms selected items by updating value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirm).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    IonicSelectableComponent.prototype.confirm = /**
     * Confirms selected items by updating value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirm).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    function () {
        if (this.isMultiple) {
            this._doSelect(this._selectedItems);
        }
        else if (this.hasConfirmButton || this.footerTemplate) {
            this._doSelect(this._selectedItems[0] || null);
        }
    };
    /**
     * Selects or deselects all or specific items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#toggleitems).
     *
     * @param isSelect Determines whether to select or deselect items.
     * @param [items] Items to toggle. If items are not set all items will be toggled.
     * @memberof IonicSelectableComponent
     */
    /**
     * Selects or deselects all or specific items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#toggleitems).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} isSelect Determines whether to select or deselect items.
     * @param {?=} items
     * @return {?}
     */
    IonicSelectableComponent.prototype.toggleItems = /**
     * Selects or deselects all or specific items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#toggleitems).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} isSelect Determines whether to select or deselect items.
     * @param {?=} items
     * @return {?}
     */
    function (isSelect, items) {
        var _this = this;
        if (isSelect) {
            var /** @type {?} */ hasItems = items && items.length;
            var /** @type {?} */ itemsToToggle = this._groups.reduce(function (allItems, group) {
                return allItems.concat(group.items);
            }, []);
            // Don't allow to select all items in single mode.
            if (!this.isMultiple && !hasItems) {
                itemsToToggle = [];
            }
            // Toggle specific items.
            if (hasItems) {
                itemsToToggle = itemsToToggle.filter(function (itemToToggle) {
                    return items.find(function (item) {
                        return _this._getItemValue(itemToToggle) === _this._getItemValue(item);
                    }) !== undefined;
                });
                // Take the first item for single mode.
                if (!this.isMultiple) {
                    itemsToToggle.splice(0, 1);
                }
            }
            itemsToToggle.forEach(function (item) {
                _this._addSelectedItem(item);
            });
        }
        else {
            this._selectedItems = [];
        }
        this._setItemsToConfirm(this._selectedItems);
    };
    /**
     * Scrolls to the top of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltotop).
     *
     * @returns Promise that resolves when scroll has been completed.
     * @memberof IonicSelectableComponent
     */
    /**
     * Scrolls to the top of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltotop).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when scroll has been completed.
     */
    IonicSelectableComponent.prototype.scrollToTop = /**
     * Scrolls to the top of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltotop).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when scroll has been completed.
     */
    function () {
        var /** @type {?} */ self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isOpened) {
                reject('IonicSelectable content cannot be scrolled.');
                return;
            }
            self._modalComponent._content.scrollToTop().then(function () {
                resolve();
            });
        });
    };
    /**
     * Scrolls to the bottom of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltobottom).
     *
     * @returns Promise that resolves when scroll has been completed.
     * @memberof IonicSelectableComponent
     */
    /**
     * Scrolls to the bottom of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltobottom).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when scroll has been completed.
     */
    IonicSelectableComponent.prototype.scrollToBottom = /**
     * Scrolls to the bottom of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltobottom).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when scroll has been completed.
     */
    function () {
        var /** @type {?} */ self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isOpened) {
                reject('IonicSelectable content cannot be scrolled.');
                return;
            }
            self._modalComponent._content.scrollToBottom().then(function () {
                resolve();
            });
        });
    };
    /**
     * Starts search process by showing Loading spinner.
     * Use it together with `onSearch` event to indicate search start.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#startsearch).
     *
     * @memberof IonicSelectableComponent
     */
    /**
     * Starts search process by showing Loading spinner.
     * Use it together with `onSearch` event to indicate search start.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#startsearch).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    IonicSelectableComponent.prototype.startSearch = /**
     * Starts search process by showing Loading spinner.
     * Use it together with `onSearch` event to indicate search start.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#startsearch).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    function () {
        if (!this._isEnabled) {
            return;
        }
        this.showLoading();
    };
    /**
     * Ends search process by hiding Loading spinner and refreshing items.
     * Use it together with `onSearch` event to indicate search end.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endsearch).
     *
     * @memberof IonicSelectableComponent
     */
    /**
     * Ends search process by hiding Loading spinner and refreshing items.
     * Use it together with `onSearch` event to indicate search end.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endsearch).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    IonicSelectableComponent.prototype.endSearch = /**
     * Ends search process by hiding Loading spinner and refreshing items.
     * Use it together with `onSearch` event to indicate search end.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endsearch).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    function () {
        if (!this._isEnabled) {
            return;
        }
        this.hideLoading();
        // When inside Ionic Modal and onSearch event is used,
        // ngDoCheck() doesn't work as _itemsDiffer fails to detect changes.
        // See https://github.com/eakoriakin/ionic-selectable/issues/44.
        // Refresh items manually.
        this._setItems(this.items);
        this._emitOnSearchSuccessOrFail(this._hasFilteredItems);
    };
    /**
     * Enables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#enableinfinitescroll).
     *
     * @memberof IonicSelectableComponent
     */
    /**
     * Enables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#enableinfinitescroll).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    IonicSelectableComponent.prototype.enableInfiniteScroll = /**
     * Enables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#enableinfinitescroll).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    function () {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.disabled = false;
    };
    /**
     * Disables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#disableinfinitescroll).
     *
     * @memberof IonicSelectableComponent
     */
    /**
     * Disables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#disableinfinitescroll).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    IonicSelectableComponent.prototype.disableInfiniteScroll = /**
     * Disables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#disableinfinitescroll).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    function () {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.disabled = true;
    };
    /**
     * Ends infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endinfinitescroll).
     *
     * @memberof IonicSelectableComponent
     */
    /**
     * Ends infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endinfinitescroll).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    IonicSelectableComponent.prototype.endInfiniteScroll = /**
     * Ends infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endinfinitescroll).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    function () {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.complete();
        this._setItems(this.items);
    };
    /**
     * Triggers search of items.
     * **Note**: `canSearch` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#search).
     *
     * @param text Text to search items by.
     * @memberof IonicSelectableComponent
     */
    /**
     * Triggers search of items.
     * **Note**: `canSearch` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#search).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} text Text to search items by.
     * @return {?}
     */
    IonicSelectableComponent.prototype.search = /**
     * Triggers search of items.
     * **Note**: `canSearch` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#search).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} text Text to search items by.
     * @return {?}
     */
    function (text) {
        if (!this._isEnabled || !this._isOpened || !this.canSearch) {
            return;
        }
        this._searchText = text;
        this._setHasSearchText();
        this._filterItems();
    };
    /**
     * Shows Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showloading).
     *
     * @memberof IonicSelectableComponent
     */
    /**
     * Shows Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showloading).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    IonicSelectableComponent.prototype.showLoading = /**
     * Shows Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showloading).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    function () {
        if (!this._isEnabled) {
            return;
        }
        this._isSearching = true;
    };
    /**
     * Hides Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideloading).
     *
     * @memberof IonicSelectableComponent
     */
    /**
     * Hides Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideloading).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    IonicSelectableComponent.prototype.hideLoading = /**
     * Hides Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideloading).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    function () {
        if (!this._isEnabled) {
            return;
        }
        this._isSearching = false;
    };
    /**
     * Shows `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showadditemtemplate).
     *
     * @memberof IonicSelectableComponent
     */
    /**
     * Shows `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showadditemtemplate).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    IonicSelectableComponent.prototype.showAddItemTemplate = /**
     * Shows `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showadditemtemplate).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    function () {
        this._toggleAddItemTemplate(true);
        // Position the template only when it shous up.
        this._positionAddItemTemplate();
    };
    /**
     * Hides `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideadditemtemplate).
     *
     * @memberof IonicSelectableComponent
     */
    /**
     * Hides `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideadditemtemplate).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    IonicSelectableComponent.prototype.hideAddItemTemplate = /**
     * Hides `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideadditemtemplate).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    function () {
        // Clean item to add as it's no longer needed once Add Item Modal has been closed.
        this._itemToAdd = null;
        this._toggleAddItemTemplate(false);
    };
    IonicSelectableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ionic-selectable',
                    template: "<div class=\"ionic-selectable-inner\">\n  <div class=\"ionic-selectable-value\">\n    <div *ngIf=\"valueTemplate && _valueItems.length && isMultiple\"\n      [ngTemplateOutlet]=\"valueTemplate\"\n      [ngTemplateOutletContext]=\"{ value: _valueItems }\">\n    </div>\n    <div class=\"ionic-selectable-value-item\"\n      *ngIf=\"valueTemplate && _valueItems.length && !isMultiple\">\n      <div [ngTemplateOutlet]=\"valueTemplate\"\n        [ngTemplateOutletContext]=\"{ value: _valueItems[0] }\">\n      </div>\n    </div>\n    <span *ngIf=\"!valueTemplate && _valueItems.length\">\n      <div class=\"ionic-selectable-value-item\"\n        *ngFor=\"let valueItem of _valueItems\">\n        {{_formatValueItem(valueItem)}}\n      </div>\n    </span>\n    <div *ngIf=\"_hasPlaceholder && placeholderTemplate\"\n      class=\"ionic-selectable-value-item\">\n      <div [ngTemplateOutlet]=\"placeholderTemplate\">\n      </div>\n    </div>\n    <div class=\"ionic-selectable-value-item\"\n      *ngIf=\"_hasPlaceholder && !placeholderTemplate\">\n      {{placeholder}}\n    </div>\n    <!-- Fix icon allignment when there's no value or placeholder. -->\n    <span *ngIf=\"!_valueItems.length && !_hasPlaceholder\">&nbsp;</span>\n  </div>\n  <div class=\"ionic-selectable-icon\">\n    <div class=\"ionic-selectable-icon-inner\"></div>\n  </div>\n  <!-- Need to be type=\"button\" otherwise click event triggers form ngSubmit. -->\n  <button class=\"ionic-selectable-cover\" [disabled]=\"!isEnabled\"\n    (click)=\"_click()\" type=\"button\">\n  </button>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return IonicSelectableComponent; }),
                            multi: true
                        }],
                    styles: [".item-ionic-selectable .item-inner .input-wrapper{align-items:normal}.item-ionic-selectable ion-label{flex:1;max-width:initial}.ionic-selectable{display:block;max-width:45%}.ionic-selectable-inner{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:flex-end}.ionic-selectable-has-placeholder .ionic-selectable-value-item{color:var(--placeholder-color,#999)}.ionic-selectable-value{flex:1;padding-top:13px;padding-bottom:13px;overflow:hidden}.ionic-selectable-value-item{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.ionic-selectable-value-item:not(:last-child){margin-bottom:5px}.ionic-selectable-icon{position:relative;width:20px}.ionic-selectable-icon-inner{position:absolute;top:20px;left:5px;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;pointer-events:none;color:var(--icon-color,#999)}.ionic-selectable-ios .ionic-selectable-value{padding-top:11px;padding-bottom:11px}.ionic-selectable-ios .ionic-selectable-icon-inner{top:19px}.ionic-selectable-spinner{position:fixed;bottom:0;top:0;left:0;right:0;z-index:1}.ionic-selectable-spinner-background{top:0;bottom:0;left:0;right:0;position:absolute;background-color:#000;opacity:.05}.ionic-selectable-spinner ion-spinner{position:absolute;top:50%;left:50%;z-index:10;margin-top:-14px;margin-left:-14px}.ionic-selectable-cover{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0}.ionic-selectable-add-item-template{position:fixed;bottom:0;left:0;right:0;background-color:#fff}.ionic-selectable-add-item-template-inner{overflow-y:auto}.ionic-selectable-add-item-template-inner>ion-footer{bottom:0;position:absolute}.ionic-selectable:not(.ionic-selectable-has-label){max-width:100%;width:100%}.ionic-selectable:not(.ionic-selectable-has-label)-value-item{text-align:right}.ionic-selectable-label-floating,.ionic-selectable-label-stacked{-ms-grid-row-align:stretch;align-self:stretch;max-width:100%;padding-left:0;padding-top:8px;padding-bottom:8px}.ionic-selectable-label-floating .ionic-selectable-value,.ionic-selectable-label-stacked .ionic-selectable-value{padding-top:0;padding-bottom:0;min-height:19px}.ionic-selectable-label-floating .ionic-selectable-icon-inner,.ionic-selectable-label-stacked .ionic-selectable-icon-inner{top:7px}.ionic-selectable-label-floating.ionic-selectable-ios .ionic-selectable-value,.ionic-selectable-label-stacked.ionic-selectable-ios .ionic-selectable-value{padding-top:0;padding-bottom:0;min-height:20px}.ionic-selectable-label-floating.ionic-selectable-ios .ionic-selectable-icon-inner,.ionic-selectable-label-stacked.ionic-selectable-ios .ionic-selectable-icon-inner{top:8px}.ionic-selectable-label-default .ionic-selectable-value,.ionic-selectable-label-fixed .ionic-selectable-value{padding-left:var(--padding-start,16px)}.ionic-selectable-label-fixed:not(.ionic-selectable-has-value) .ionic-selectable-value{padding-left:calc(var(--padding-start,$padding) + 11px)}.ionic-selectable-modal .ionic-selectable-group ion-item-divider{padding-right:16px}.ionic-selectable-modal .ionic-selectable-item-button{margin-left:8px;margin-right:8px}.ionic-selectable-modal-ios .ionic-selectable-message{padding:8px}.ionic-selectable-modal-ios .ionic-selectable-group ion-item-divider{padding-right:8px}.ionic-selectable-modal-md .ionic-selectable-message{padding:8px 12px}.ionic-selectable-modal.ionic-selectable-modal-can-clear.ionic-selectable-modal-is-multiple .footer .col:first-child{padding-right:8px}.ionic-selectable-modal.ionic-selectable-modal-can-clear.ionic-selectable-modal-is-multiple .footer .col:last-child{padding-left:8px}.ionic-selectable-modal.ionic-selectable-modal-is-add-item-template-visible>.content>.scroll-content,.ionic-selectable-modal.ionic-selectable-modal-is-searching .scroll-content{overflow-y:hidden}"]
                }] }
    ];
    /** @nocollapse */
    IonicSelectableComponent.ctorParameters = function () { return [
        { type: ModalController, },
        { type: Platform, },
        { type: IonItem, decorators: [{ type: Optional },] },
        { type: IterableDiffers, },
        { type: ElementRef, },
        { type: Renderer, },
    ]; };
    IonicSelectableComponent.propDecorators = {
        "_cssClass": [{ type: HostBinding, args: ['class.ionic-selectable',] },],
        "_isIos": [{ type: HostBinding, args: ['class.ionic-selectable-ios',] },],
        "_isMD": [{ type: HostBinding, args: ['class.ionic-selectable-md',] },],
        "_isMultipleCssClass": [{ type: HostBinding, args: ['class.ionic-selectable-is-multiple',] },],
        "_hasValueCssClass": [{ type: HostBinding, args: ['class.ionic-selectable-has-value',] },],
        "_hasPlaceholderCssClass": [{ type: HostBinding, args: ['class.ionic-selectable-has-placeholder',] },],
        "_hasIonLabelCssClass": [{ type: HostBinding, args: ['class.ionic-selectable-has-label',] },],
        "_hasDefaultIonLabelCssClass": [{ type: HostBinding, args: ['class.ionic-selectable-label-default',] },],
        "_hasFixedIonLabelCssClass": [{ type: HostBinding, args: ['class.ionic-selectable-label-fixed',] },],
        "_hasStackedIonLabelCssClass": [{ type: HostBinding, args: ['class.ionic-selectable-label-stacked',] },],
        "_hasFloatingIonLabelCssClass": [{ type: HostBinding, args: ['class.ionic-selectable-label-floating',] },],
        "items": [{ type: Input },],
        "itemsChange": [{ type: Output },],
        "isEnabled": [{ type: HostBinding, args: ['class.ionic-selectable-is-enabled',] }, { type: Input, args: ['isEnabled',] },],
        "shouldBackdropClose": [{ type: Input, args: ['shouldBackdropClose',] },],
        "modalCssClass": [{ type: Input },],
        "modalEnterAnimation": [{ type: Input },],
        "modalLeaveAnimation": [{ type: Input },],
        "isConfirmButtonEnabled": [{ type: Input },],
        "hasConfirmButton": [{ type: Input, args: ['hasConfirmButton',] },],
        "itemValueField": [{ type: Input },],
        "itemTextField": [{ type: Input },],
        "groupValueField": [{ type: Input },],
        "groupTextField": [{ type: Input },],
        "canSearch": [{ type: Input },],
        "isOnSearchEnabled": [{ type: Input, args: ['isOnSearchEnabled',] },],
        "canClear": [{ type: HostBinding, args: ['class.ionic-selectable-can-clear',] }, { type: Input, args: ['canClear',] },],
        "hasInfiniteScroll": [{ type: Input },],
        "hasVirtualScroll": [{ type: Input },],
        "virtualScrollApproxItemHeight": [{ type: Input },],
        "searchPlaceholder": [{ type: Input },],
        "placeholder": [{ type: Input },],
        "isMultiple": [{ type: Input, args: ['isMultiple',] },],
        "searchFailText": [{ type: Input },],
        "clearButtonText": [{ type: Input },],
        "addButtonText": [{ type: Input },],
        "confirmButtonText": [{ type: Input },],
        "closeButtonText": [{ type: Input },],
        "shouldFocusSearchbar": [{ type: Input },],
        "headerColor": [{ type: Input },],
        "groupColor": [{ type: Input },],
        "closeButtonSlot": [{ type: Input },],
        "itemIconSlot": [{ type: Input },],
        "onChange": [{ type: Output },],
        "onSearch": [{ type: Output },],
        "onSearchFail": [{ type: Output },],
        "onSearchSuccess": [{ type: Output },],
        "onInfiniteScroll": [{ type: Output },],
        "onOpen": [{ type: Output },],
        "onClose": [{ type: Output },],
        "onSelect": [{ type: Output },],
        "onClear": [{ type: Output },],
        "searchDebounce": [{ type: Input },],
        "disabledItems": [{ type: Input },],
        "shouldStoreItemValue": [{ type: Input },],
        "canSaveItem": [{ type: Input },],
        "canDeleteItem": [{ type: Input },],
        "canAddItem": [{ type: Input, args: ['canAddItem',] },],
        "onSaveItem": [{ type: Output },],
        "onDeleteItem": [{ type: Output },],
        "onAddItem": [{ type: Output },],
        "valueTemplate": [{ type: ContentChild, args: [IonicSelectableValueTemplateDirective, { read: TemplateRef },] },],
        "itemTemplate": [{ type: ContentChild, args: [IonicSelectableItemTemplateDirective, { read: TemplateRef },] },],
        "itemEndTemplate": [{ type: ContentChild, args: [IonicSelectableItemEndTemplateDirective, { read: TemplateRef },] },],
        "titleTemplate": [{ type: ContentChild, args: [IonicSelectableTitleTemplateDirective, { read: TemplateRef },] },],
        "placeholderTemplate": [{ type: ContentChild, args: [IonicSelectablePlaceholderTemplateDirective, { read: TemplateRef },] },],
        "messageTemplate": [{ type: ContentChild, args: [IonicSelectableMessageTemplateDirective, { read: TemplateRef },] },],
        "groupTemplate": [{ type: ContentChild, args: [IonicSelectableGroupTemplateDirective, { read: TemplateRef },] },],
        "groupEndTemplate": [{ type: ContentChild, args: [IonicSelectableGroupEndTemplateDirective, { read: TemplateRef },] },],
        "closeButtonTemplate": [{ type: ContentChild, args: [IonicSelectableCloseButtonTemplateDirective, { read: TemplateRef },] },],
        "searchFailTemplate": [{ type: ContentChild, args: [IonicSelectableSearchFailTemplateDirective, { read: TemplateRef },] },],
        "addItemTemplate": [{ type: ContentChild, args: [IonicSelectableAddItemTemplateDirective, { read: TemplateRef },] },],
        "footerTemplate": [{ type: ContentChild, args: [IonicSelectableFooterTemplateDirective, { read: TemplateRef },] },],
        "headerTemplate": [{ type: ContentChild, args: [IonicSelectableHeaderTemplateDirective, { read: TemplateRef },] },],
        "itemIconTemplate": [{ type: ContentChild, args: [IonicSelectableItemIconTemplateDirective, { read: TemplateRef },] },],
        "virtualScrollHeaderFn": [{ type: Input },],
    };
    return IonicSelectableComponent;
}());
export { IonicSelectableComponent };
function IonicSelectableComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    IonicSelectableComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    IonicSelectableComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    IonicSelectableComponent.propDecorators;
    /** @type {?} */
    IonicSelectableComponent.prototype._cssClass;
    /** @type {?} */
    IonicSelectableComponent.prototype._isIos;
    /** @type {?} */
    IonicSelectableComponent.prototype._isMD;
    /** @type {?} */
    IonicSelectableComponent.prototype._isOnSearchEnabled;
    /** @type {?} */
    IonicSelectableComponent.prototype._isEnabled;
    /** @type {?} */
    IonicSelectableComponent.prototype._shouldBackdropClose;
    /** @type {?} */
    IonicSelectableComponent.prototype._isOpened;
    /** @type {?} */
    IonicSelectableComponent.prototype._value;
    /** @type {?} */
    IonicSelectableComponent.prototype._modal;
    /** @type {?} */
    IonicSelectableComponent.prototype._itemsDiffer;
    /** @type {?} */
    IonicSelectableComponent.prototype._hasObjects;
    /** @type {?} */
    IonicSelectableComponent.prototype._canClear;
    /** @type {?} */
    IonicSelectableComponent.prototype._hasConfirmButton;
    /** @type {?} */
    IonicSelectableComponent.prototype._isMultiple;
    /** @type {?} */
    IonicSelectableComponent.prototype._canAddItem;
    /** @type {?} */
    IonicSelectableComponent.prototype._addItemObservable;
    /** @type {?} */
    IonicSelectableComponent.prototype._deleteItemObservable;
    /** @type {?} */
    IonicSelectableComponent.prototype.onItemsChange;
    /** @type {?} */
    IonicSelectableComponent.prototype._ionItemElement;
    /** @type {?} */
    IonicSelectableComponent.prototype._ionLabelElement;
    /** @type {?} */
    IonicSelectableComponent.prototype._hasIonLabel;
    /** @type {?} */
    IonicSelectableComponent.prototype._ionLabelPosition;
    /** @type {?} */
    IonicSelectableComponent.prototype._label;
    /** @type {?} */
    IonicSelectableComponent.prototype._valueItems;
    /** @type {?} */
    IonicSelectableComponent.prototype._searchText;
    /** @type {?} */
    IonicSelectableComponent.prototype._hasSearchText;
    /** @type {?} */
    IonicSelectableComponent.prototype._groups;
    /** @type {?} */
    IonicSelectableComponent.prototype._itemsToConfirm;
    /** @type {?} */
    IonicSelectableComponent.prototype._selectedItems;
    /** @type {?} */
    IonicSelectableComponent.prototype._modalComponent;
    /** @type {?} */
    IonicSelectableComponent.prototype._filteredGroups;
    /** @type {?} */
    IonicSelectableComponent.prototype._hasGroups;
    /** @type {?} */
    IonicSelectableComponent.prototype._isSearching;
    /** @type {?} */
    IonicSelectableComponent.prototype._hasPlaceholder;
    /** @type {?} */
    IonicSelectableComponent.prototype._isAddItemTemplateVisible;
    /** @type {?} */
    IonicSelectableComponent.prototype._isFooterVisible;
    /** @type {?} */
    IonicSelectableComponent.prototype._itemToAdd;
    /** @type {?} */
    IonicSelectableComponent.prototype._footerButtonsCount;
    /** @type {?} */
    IonicSelectableComponent.prototype._hasFilteredItems;
    /**
     * A list of items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#items).
     *
     * \@default []
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.items;
    /** @type {?} */
    IonicSelectableComponent.prototype.itemsChange;
    /**
     * Modal CSS class.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalcssclass).
     *
     * \@default null
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.modalCssClass;
    /**
     * Modal enter animation.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalenteranimation).
     *
     * \@default null
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.modalEnterAnimation;
    /**
     * Modal leave animation.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalleaveanimation).
     *
     * \@default null
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.modalLeaveAnimation;
    /**
     * Determines whether Confirm button is enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isconfirmbuttonenabled).
     *
     * \@default true
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.isConfirmButtonEnabled;
    /**
     * Item property to use as a unique identifier, e.g, `'id'`.
     * **Note**: `items` should be an object array.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemvaluefield).
     *
     * \@default null
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.itemValueField;
    /**
     * Item property to display, e.g, `'name'`.
     * **Note**: `items` should be an object array.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemtextfield).
     *
     * \@default false
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.itemTextField;
    /**
     *
     * Group property to use as a unique identifier to group items, e.g. `'country.id'`.
     * **Note**: `items` should be an object array.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#groupvaluefield).
     *
     * \@default null
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.groupValueField;
    /**
     * Group property to display, e.g. `'country.name'`.
     * **Note**: `items` should be an object array.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#grouptextfield).
     *
     * \@default null
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.groupTextField;
    /**
     * Determines whether to show Searchbar.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#cansearch).
     *
     * \@default false
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.canSearch;
    /**
     * Determines whether Ionic [InfiniteScroll](https://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/) is enabled.
     * **Note**: Infinite scroll cannot be used together with virtual scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasinfinitescroll).
     *
     * \@default false
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.hasInfiniteScroll;
    /**
     * Determines whether Ionic [VirtualScroll](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/) is enabled.
     * **Note**: Virtual scroll cannot be used together with infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvirtualscroll).
     *
     * \@default false
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.hasVirtualScroll;
    /**
     * See Ionic VirtualScroll [approxItemHeight](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollapproxitemheight).
     *
     * \@default '40px'
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.virtualScrollApproxItemHeight;
    /**
     * A placeholder for Searchbar.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchplaceholder).
     *
     * \@default 'Search'
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.searchPlaceholder;
    /**
     * A placeholder.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#placeholder).
     *
     * \@default null
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.placeholder;
    /**
     * Text to display when no items have been found during search.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchfailtext).
     *
     * \@default 'No items found.'
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.searchFailText;
    /**
     * Clear button text.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#clearbuttontext).
     *
     * \@default 'Clear'
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.clearButtonText;
    /**
     * Add button text.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#addbuttontext).
     *
     * \@default 'Add'
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.addButtonText;
    /**
     * Confirm button text.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirmbuttontext).
     *
     * \@default 'OK'
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.confirmButtonText;
    /**
     * Close button text.
     * The field is only applicable to **iOS** platform, on **Android** only Cross icon is displayed.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#closebuttontext).
     *
     * \@default 'Cancel'
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.closeButtonText;
    /**
     * Determines whether Searchbar should receive focus when Modal is opened.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldfocussearchbar).
     *
     * \@default false
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.shouldFocusSearchbar;
    /**
     * Header color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#headercolor).
     *
     * \@default null
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.headerColor;
    /**
     * Group color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#groupcolor).
     *
     * \@default null
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.groupColor;
    /**
     * Close button slot. [Ionic slots](https://ionicframework.com/docs/api/buttons) are supported.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#closebuttonslot).
     *
     * \@default 'start'
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.closeButtonSlot;
    /**
     * Item icon slot. [Ionic slots](https://ionicframework.com/docs/api/item) are supported.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemiconslot).
     *
     * \@default 'start'
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.itemIconSlot;
    /**
     * Fires when item/s has been selected and Modal closed.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onchange).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.onChange;
    /**
     * Fires when the user is typing in Searchbar.
     * **Note**: `canSearch` and `isOnSearchEnabled` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearch).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.onSearch;
    /**
     * Fires when no items have been found.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearchfail).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.onSearchFail;
    /**
     * Fires when some items have been found.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearchsuccess).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.onSearchSuccess;
    /**
     * Fires when the user has scrolled to the end of the list.
     * **Note**: `hasInfiniteScroll` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#oninfinitescroll).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.onInfiniteScroll;
    /**
     * Fires when Modal has been opened.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onopen).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.onOpen;
    /**
     * Fires when Modal has been closed.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onclose).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.onClose;
    /**
     * Fires when an item has been selected or unselected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onselect).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.onSelect;
    /**
     * Fires when Clear button has been clicked.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onclear).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.onClear;
    /**
     * How long, in milliseconds, to wait to filter items or to trigger `onSearch` event after each keystroke.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchdebounce).
     *
     * \@default 250
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.searchDebounce;
    /**
     * A list of items to disable.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#disableditems).
     *
     * \@default []
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.disabledItems;
    /**
     * Determines whether item value only should be stored in `ngModel`, not the entire item.
     * **Note**: Item value is defined by `itemValueField`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldstoreitemvalue).
     *
     * \@default false
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.shouldStoreItemValue;
    /**
     * Determines whether to allow editing items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#cansaveitem).
     *
     * \@default false
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.canSaveItem;
    /**
     * Determines whether to allow deleting items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#candeleteitem).
     *
     * \@default false
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.canDeleteItem;
    /**
     * Fires when Edit item button has been clicked.
     * When the button has been clicked `ionicSelectableAddItemTemplate` will be shown. Use the template to create a form to edit item.
     * **Note**: `canSaveItem` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsaveitem).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.onSaveItem;
    /**
     * Fires when Delete item button has been clicked.
     * **Note**: `canDeleteItem` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#ondeleteitem).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.onDeleteItem;
    /**
     * Fires when Add item button has been clicked.
     * When the button has been clicked `ionicSelectableAddItemTemplate` will be shown. Use the template to create a form to add item.
     * **Note**: `canAddItem` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onadditem).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.onAddItem;
    /** @type {?} */
    IonicSelectableComponent.prototype.valueTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype.itemTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype.itemEndTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype.titleTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype.placeholderTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype.messageTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype.groupTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype.groupEndTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype.closeButtonTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype.searchFailTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype.addItemTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype.footerTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype._addItemTemplateFooterHeight;
    /** @type {?} */
    IonicSelectableComponent.prototype.headerTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype.itemIconTemplate;
    /**
     * See Ionic VirtualScroll [headerFn](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollheaderfn).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.virtualScrollHeaderFn;
    /** @type {?} */
    IonicSelectableComponent.prototype.propagateOnChange;
    /** @type {?} */
    IonicSelectableComponent.prototype.propagateOnTouched;
    /** @type {?} */
    IonicSelectableComponent.prototype._modalController;
    /** @type {?} */
    IonicSelectableComponent.prototype._platform;
    /** @type {?} */
    IonicSelectableComponent.prototype.ionItem;
    /** @type {?} */
    IonicSelectableComponent.prototype._iterableDiffers;
    /** @type {?} */
    IonicSelectableComponent.prototype._element;
    /** @type {?} */
    IonicSelectableComponent.prototype._renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc2VsZWN0YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYy1zZWxlY3RhYmxlLyIsInNvdXJjZXMiOlsic3JjL2FwcC9jb21wb25lbnRzL2lvbmljLXNlbGVjdGFibGUvaW9uaWMtc2VsZWN0YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsc0JBQXNCO0FBQ2hPLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUI7QUFDekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLHVCQUF1QjtBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLG9CQUFvQjtBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWE7QUFDcEMsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLHVEQUF1RDtBQUN6RyxPQUFPLEVBQUUsMkNBQTJDLEVBQUUsMkRBQTJEO0FBQ2pILE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxxREFBcUQ7QUFDdEcsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLHdEQUF3RDtBQUMzRyxPQUFPLEVBQUUscUNBQXFDLEVBQUUsb0RBQW9EO0FBQ3BHLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxxREFBcUQ7QUFDdEcsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLHVEQUF1RDtBQUN6RyxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsd0RBQXdEO0FBQzNHLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxtREFBbUQ7QUFDbEcsT0FBTyxFQUFFLHVDQUF1QyxFQUFF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M0UsWUFBWSxTQUFDLHFDQUFxQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtxQ0FFekUsWUFBWSxTQUFDLHdDQUF3QyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTt3Q0FFNUUsWUFBWSxTQUFDLDJDQUEyQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTt1Q0FFL0UsWUFBWSxTQUFDLDBDQUEwQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtvQ0FFOUUsWUFBWSxTQUFDLHVDQUF1QyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTttQ0FFM0UsWUFBWSxTQUFDLHNDQUFzQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTttQ0FHMUUsWUFBWSxTQUFDLHNDQUFzQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtxQ0FFMUUsWUFBWSxTQUFDLHdDQUF3QyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTswQ0FTNUUsS0FBSzs7bUNBeHhCUjs7U0FpQ2Esd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIERvQ2hlY2ssIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBJdGVyYWJsZURpZmZlciwgSXRlcmFibGVEaWZmZXJzLCBPbkluaXQsIE9wdGlvbmFsLCBPdXRwdXQsIFJlbmRlcmVyLCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElvbkl0ZW0sIE1vZGFsQ29udHJvbGxlciwgUGxhdGZvcm0gfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBBbmltYXRpb25CdWlsZGVyLCBNb2RhbE9wdGlvbnMgfSBmcm9tICdAaW9uaWMvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZUFkZEl0ZW1UZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1hZGQtaXRlbS10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlQ2xvc2VCdXR0b25UZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1jbG9zZS1idXR0b24tdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZUZvb3RlclRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWZvb3Rlci10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlR3JvdXBFbmRUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1ncm91cC1lbmQtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZUdyb3VwVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtZ3JvdXAtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZUhlYWRlclRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWhlYWRlci10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlSXRlbUVuZFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWl0ZW0tZW5kLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVJdGVtSWNvblRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWl0ZW0taWNvbi10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlSXRlbVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWl0ZW0tdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZU1lc3NhZ2VUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1tZXNzYWdlLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlUGxhY2Vob2xkZXJUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1wbGFjZWhvbGRlci10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlU2VhcmNoRmFpbFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLXNlYXJjaC1mYWlsLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVUaXRsZVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLXRpdGxlLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVWYWx1ZVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLXZhbHVlLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lvbmljLXNlbGVjdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW9uaWMtc2VsZWN0YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lvbmljLXNlbGVjdGFibGUuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWVcbiAgfV1cbn0pXG5leHBvcnQgY2xhc3MgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgRG9DaGVjayB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZScpXG4gIF9jc3NDbGFzcyA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1pb3MnKVxuICBfaXNJb3M6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1tZCcpXG4gIF9pc01EOiBib29sZWFuO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtaXMtbXVsdGlwbGUnKVxuICBnZXQgX2lzTXVsdGlwbGVDc3NDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc011bHRpcGxlO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1oYXMtdmFsdWUnKVxuICBnZXQgX2hhc1ZhbHVlQ3NzQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaGFzVmFsdWUoKTtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtaGFzLXBsYWNlaG9sZGVyJylcbiAgZ2V0IF9oYXNQbGFjZWhvbGRlckNzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oYXNQbGFjZWhvbGRlcjtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtaGFzLWxhYmVsJylcbiAgZ2V0IF9oYXNJb25MYWJlbENzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oYXNJb25MYWJlbDtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtbGFiZWwtZGVmYXVsdCcpXG4gIGdldCBfaGFzRGVmYXVsdElvbkxhYmVsQ3NzQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lvbkxhYmVsUG9zaXRpb24gPT09ICdkZWZhdWx0JztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtbGFiZWwtZml4ZWQnKVxuICBnZXQgX2hhc0ZpeGVkSW9uTGFiZWxDc3NDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW9uTGFiZWxQb3NpdGlvbiA9PT0gJ2ZpeGVkJztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtbGFiZWwtc3RhY2tlZCcpXG4gIGdldCBfaGFzU3RhY2tlZElvbkxhYmVsQ3NzQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lvbkxhYmVsUG9zaXRpb24gPT09ICdzdGFja2VkJztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtbGFiZWwtZmxvYXRpbmcnKVxuICBnZXQgX2hhc0Zsb2F0aW5nSW9uTGFiZWxDc3NDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW9uTGFiZWxQb3NpdGlvbiA9PT0gJ2Zsb2F0aW5nJztcbiAgfVxuICBwcml2YXRlIF9pc09uU2VhcmNoRW5hYmxlZCA9IHRydWU7XG4gIHByaXZhdGUgX2lzRW5hYmxlZCA9IHRydWU7XG4gIHByaXZhdGUgX3Nob3VsZEJhY2tkcm9wQ2xvc2UgPSB0cnVlO1xuICBwcml2YXRlIF9pc09wZW5lZCA9IGZhbHNlO1xuICBwcml2YXRlIF92YWx1ZTogYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSBfbW9kYWw6IEhUTUxJb25Nb2RhbEVsZW1lbnQ7XG4gIHByaXZhdGUgX2l0ZW1zRGlmZmVyOiBJdGVyYWJsZURpZmZlcjxhbnk+O1xuICBwcml2YXRlIF9oYXNPYmplY3RzOiBib29sZWFuO1xuICBwcml2YXRlIF9jYW5DbGVhciA9IGZhbHNlO1xuICBwcml2YXRlIF9oYXNDb25maXJtQnV0dG9uID0gZmFsc2U7XG4gIHByaXZhdGUgX2lzTXVsdGlwbGUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY2FuQWRkSXRlbSA9IGZhbHNlO1xuICBwcml2YXRlIF9hZGRJdGVtT2JzZXJ2YWJsZTogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9kZWxldGVJdGVtT2JzZXJ2YWJsZTogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIG9uSXRlbXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwcml2YXRlIF9pb25JdGVtRWxlbWVudDogYW55O1xuICBwcml2YXRlIF9pb25MYWJlbEVsZW1lbnQ6IGFueTtcbiAgcHJpdmF0ZSBfaGFzSW9uTGFiZWwgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaW9uTGFiZWxQb3NpdGlvbjogJ2ZpeGVkJyB8ICdzdGFja2VkJyB8ICdmbG9hdGluZycgfCAnZGVmYXVsdCcgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfbGFiZWw6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgZ2V0IF9oYXNJbmZpbml0ZVNjcm9sbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0VuYWJsZWQgJiYgdGhpcy5fbW9kYWxDb21wb25lbnQgJiZcbiAgICAgIHRoaXMuX21vZGFsQ29tcG9uZW50Ll9pbmZpbml0ZVNjcm9sbCA/IHRydWUgOiBmYWxzZTtcbiAgfVxuICBnZXQgX3Nob3VsZFN0b3JlSXRlbVZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNob3VsZFN0b3JlSXRlbVZhbHVlICYmIHRoaXMuX2hhc09iamVjdHM7XG4gIH1cbiAgX3ZhbHVlSXRlbXM6IGFueVtdID0gW107XG4gIF9zZWFyY2hUZXh0ID0gJyc7XG4gIF9oYXNTZWFyY2hUZXh0ID0gZmFsc2U7XG4gIF9ncm91cHM6IGFueVtdID0gW107XG4gIF9pdGVtc1RvQ29uZmlybTogYW55W10gPSBbXTtcbiAgX3NlbGVjdGVkSXRlbXM6IGFueVtdID0gW107XG4gIF9tb2RhbENvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlTW9kYWxDb21wb25lbnQ7XG4gIF9maWx0ZXJlZEdyb3VwczogYW55W10gPSBbXTtcbiAgX2hhc0dyb3VwczogYm9vbGVhbjtcbiAgX2lzU2VhcmNoaW5nOiBib29sZWFuO1xuICBfaGFzUGxhY2Vob2xkZXI6IGJvb2xlYW47XG4gIF9pc0FkZEl0ZW1UZW1wbGF0ZVZpc2libGUgPSBmYWxzZTtcbiAgX2lzRm9vdGVyVmlzaWJsZSA9IHRydWU7XG4gIF9pdGVtVG9BZGQ6IGFueSA9IG51bGw7XG4gIF9mb290ZXJCdXR0b25zQ291bnQgPSAwO1xuICBfaGFzRmlsdGVyZWRJdGVtcyA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUZXh0IG9mIFtJb25pYyBMYWJlbF0oaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9hcGkvbGFiZWwpLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNsYWJlbCkuXG4gICAqXG4gICAqIEByZWFkb25seVxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGdldCBsYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sYWJlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZXh0IHRoYXQgdGhlIHVzZXIgaGFzIHR5cGVkIGluIFNlYXJjaGJhci5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2VhcmNodGV4dCkuXG4gICAqXG4gICAqIEByZWFkb25seVxuICAgKiBAZGVmYXVsdCAnJ1xuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBnZXQgc2VhcmNoVGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zZWFyY2hUZXh0O1xuICB9XG4gIHNldCBzZWFyY2hUZXh0KHNlYXJjaFRleHQ6IHN0cmluZykge1xuICAgIHRoaXMuX3NlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xuICAgIHRoaXMuX3NldEhhc1NlYXJjaFRleHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgc2VhcmNoIGlzIHJ1bm5pbmcuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2lzc2VhcmNoaW5nKS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQHJlYWRvbmx5XG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGdldCBpc1NlYXJjaGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNTZWFyY2hpbmc7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHVzZXIgaGFzIHR5cGVkIGFueXRoaW5nIGluIFNlYXJjaGJhci5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaGFzc2VhcmNodGV4dCkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEByZWFkb25seVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBnZXQgaGFzU2VhcmNoVGV4dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGFzU2VhcmNoVGV4dDtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG5cbiAgICAvLyBTZXQgdmFsdWUgaXRlbXMuXG4gICAgdGhpcy5fdmFsdWVJdGVtcy5zcGxpY2UoMCwgdGhpcy5fdmFsdWVJdGVtcy5sZW5ndGgpO1xuXG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCkge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSh0aGlzLl92YWx1ZUl0ZW1zLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5faXNOdWxsT3JXaGl0ZVNwYWNlKHZhbHVlKSkge1xuICAgICAgICB0aGlzLl92YWx1ZUl0ZW1zLnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3NldElvbkl0ZW1IYXNWYWx1ZSgpO1xuICAgIHRoaXMuX3NldEhhc1BsYWNlaG9sZGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQSBsaXN0IG9mIGl0ZW1zLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNpdGVtcykuXG4gICAqXG4gICAqIEBkZWZhdWx0IFtdXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGl0ZW1zOiBhbnlbXSA9IFtdO1xuICBAT3V0cHV0KClcbiAgaXRlbXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBpcyBlbmFibGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNpc2VuYWJsZWQpLlxuICAgKlxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1pcy1lbmFibGVkJylcbiAgQElucHV0KCdpc0VuYWJsZWQnKVxuICBnZXQgaXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0VuYWJsZWQ7XG4gIH1cbiAgc2V0IGlzRW5hYmxlZChpc0VuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSAhIWlzRW5hYmxlZDtcbiAgICB0aGlzLmVuYWJsZUlvbkl0ZW0odGhpcy5faXNFbmFibGVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgTW9kYWwgc2hvdWxkIGJlIGNsb3NlZCB3aGVuIGJhY2tkcm9wIGlzIGNsaWNrZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3Nob3VsZGJhY2tkcm9wY2xvc2UpLlxuICAgKlxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgnc2hvdWxkQmFja2Ryb3BDbG9zZScpXG4gIGdldCBzaG91bGRCYWNrZHJvcENsb3NlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG91bGRCYWNrZHJvcENsb3NlO1xuICB9XG4gIHNldCBzaG91bGRCYWNrZHJvcENsb3NlKHNob3VsZEJhY2tkcm9wQ2xvc2U6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG91bGRCYWNrZHJvcENsb3NlID0gISFzaG91bGRCYWNrZHJvcENsb3NlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vZGFsIENTUyBjbGFzcy5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jbW9kYWxjc3NjbGFzcykuXG4gICAqXG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbW9kYWxDc3NDbGFzczogc3RyaW5nID0gbnVsbDtcblxuICAvKipcbiAgICogTW9kYWwgZW50ZXIgYW5pbWF0aW9uLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNtb2RhbGVudGVyYW5pbWF0aW9uKS5cbiAgICpcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RhbEVudGVyQW5pbWF0aW9uOiBBbmltYXRpb25CdWlsZGVyID0gbnVsbDtcblxuICAvKipcbiAgICogTW9kYWwgbGVhdmUgYW5pbWF0aW9uLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNtb2RhbGxlYXZlYW5pbWF0aW9uKS5cbiAgICpcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RhbExlYXZlQW5pbWF0aW9uOiBBbmltYXRpb25CdWlsZGVyID0gbnVsbDtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIE1vZGFsIGlzIG9wZW5lZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaXNvcGVuZWQpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAcmVhZG9ubHlcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgZ2V0IGlzT3BlbmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc09wZW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgQ29uZmlybSBidXR0b24gaXMgZW5hYmxlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaXNjb25maXJtYnV0dG9uZW5hYmxlZCkuXG4gICAqXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgaXNDb25maXJtQnV0dG9uRW5hYmxlZCA9IHRydWU7XG5cbiAgLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgQ29uZmlybSBidXR0b24gaXMgdmlzaWJsZSBmb3Igc2luZ2xlIHNlbGVjdGlvbi5cbiAqIEJ5IGRlZmF1bHQgQ29uZmlybSBidXR0b24gaXMgdmlzaWJsZSBvbmx5IGZvciBtdWx0aXBsZSBzZWxlY3Rpb24uXG4gKiAqKk5vdGUqKjogSXQgaXMgYWx3YXlzIHRydWUgZm9yIG11bHRpcGxlIHNlbGVjdGlvbiBhbmQgY2Fubm90IGJlIGNoYW5nZWQuXG4gKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNoYXNjb25maXJtYnV0dG9uKS5cbiAqXG4gKiBAZGVmYXVsdCB0cnVlXG4gKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gKi9cbiAgQElucHV0KCdoYXNDb25maXJtQnV0dG9uJylcbiAgZ2V0IGhhc0NvbmZpcm1CdXR0b24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0NvbmZpcm1CdXR0b247XG4gIH1cbiAgc2V0IGhhc0NvbmZpcm1CdXR0b24oaGFzQ29uZmlybUJ1dHRvbjogYm9vbGVhbikge1xuICAgIHRoaXMuX2hhc0NvbmZpcm1CdXR0b24gPSAhIWhhc0NvbmZpcm1CdXR0b247XG4gICAgdGhpcy5fY291bnRGb290ZXJCdXR0b25zKCk7XG4gIH1cblxuICAvKipcbiAgICogSXRlbSBwcm9wZXJ0eSB0byB1c2UgYXMgYSB1bmlxdWUgaWRlbnRpZmllciwgZS5nLCBgJ2lkJ2AuXG4gICAqICoqTm90ZSoqOiBgaXRlbXNgIHNob3VsZCBiZSBhbiBvYmplY3QgYXJyYXkuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2l0ZW12YWx1ZWZpZWxkKS5cbiAgICpcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBpdGVtVmFsdWVGaWVsZDogc3RyaW5nID0gbnVsbDtcblxuICAvKipcbiAgICogSXRlbSBwcm9wZXJ0eSB0byBkaXNwbGF5LCBlLmcsIGAnbmFtZSdgLlxuICAgKiAqKk5vdGUqKjogYGl0ZW1zYCBzaG91bGQgYmUgYW4gb2JqZWN0IGFycmF5LlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNpdGVtdGV4dGZpZWxkKS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgaXRlbVRleHRGaWVsZDogc3RyaW5nID0gbnVsbDtcblxuICAvKipcbiAgICpcbiAgICogR3JvdXAgcHJvcGVydHkgdG8gdXNlIGFzIGEgdW5pcXVlIGlkZW50aWZpZXIgdG8gZ3JvdXAgaXRlbXMsIGUuZy4gYCdjb3VudHJ5LmlkJ2AuXG4gICAqICoqTm90ZSoqOiBgaXRlbXNgIHNob3VsZCBiZSBhbiBvYmplY3QgYXJyYXkuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2dyb3VwdmFsdWVmaWVsZCkuXG4gICAqXG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgZ3JvdXBWYWx1ZUZpZWxkOiBzdHJpbmcgPSBudWxsO1xuXG4gIC8qKlxuKiBHcm91cCBwcm9wZXJ0eSB0byBkaXNwbGF5LCBlLmcuIGAnY291bnRyeS5uYW1lJ2AuXG4qICoqTm90ZSoqOiBgaXRlbXNgIHNob3VsZCBiZSBhbiBvYmplY3QgYXJyYXkuXG4qIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2dyb3VwdGV4dGZpZWxkKS5cbipcbiogQGRlZmF1bHQgbnVsbFxuKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4qL1xuICBASW5wdXQoKVxuICBncm91cFRleHRGaWVsZDogc3RyaW5nID0gbnVsbDtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNob3cgU2VhcmNoYmFyLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNjYW5zZWFyY2gpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBjYW5TZWFyY2ggPSBmYWxzZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGBvblNlYXJjaGAgZXZlbnQgaXMgZW5hYmxlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaXNvbnNlYXJjaGVuYWJsZWQpLlxuICAgKlxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgnaXNPblNlYXJjaEVuYWJsZWQnKVxuICBnZXQgaXNPblNlYXJjaEVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzT25TZWFyY2hFbmFibGVkO1xuICB9XG4gIHNldCBpc09uU2VhcmNoRW5hYmxlZChpc09uU2VhcmNoRW5hYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzT25TZWFyY2hFbmFibGVkID0gISFpc09uU2VhcmNoRW5hYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gc2hvdyBDbGVhciBidXR0b24uXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2NhbmNsZWFyKS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLWNhbi1jbGVhcicpXG4gIEBJbnB1dCgnY2FuQ2xlYXInKVxuICBnZXQgY2FuQ2xlYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbkNsZWFyO1xuICB9XG4gIHNldCBjYW5DbGVhcihjYW5DbGVhcjogYm9vbGVhbikge1xuICAgIHRoaXMuX2NhbkNsZWFyID0gISFjYW5DbGVhcjtcbiAgICB0aGlzLl9jb3VudEZvb3RlckJ1dHRvbnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgSW9uaWMgW0luZmluaXRlU2Nyb2xsXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2FwaS9jb21wb25lbnRzL2luZmluaXRlLXNjcm9sbC9JbmZpbml0ZVNjcm9sbC8pIGlzIGVuYWJsZWQuXG4gICAqICoqTm90ZSoqOiBJbmZpbml0ZSBzY3JvbGwgY2Fubm90IGJlIHVzZWQgdG9nZXRoZXIgd2l0aCB2aXJ0dWFsIHNjcm9sbC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaGFzaW5maW5pdGVzY3JvbGwpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBoYXNJbmZpbml0ZVNjcm9sbCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgSW9uaWMgW1ZpcnR1YWxTY3JvbGxdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvYXBpL2NvbXBvbmVudHMvdmlydHVhbC1zY3JvbGwvVmlydHVhbFNjcm9sbC8pIGlzIGVuYWJsZWQuXG4gICAqICoqTm90ZSoqOiBWaXJ0dWFsIHNjcm9sbCBjYW5ub3QgYmUgdXNlZCB0b2dldGhlciB3aXRoIGluZmluaXRlIHNjcm9sbC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaGFzdmlydHVhbHNjcm9sbCkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGhhc1ZpcnR1YWxTY3JvbGwgPSBmYWxzZTtcblxuICAvKipcbiAgICogU2VlIElvbmljIFZpcnR1YWxTY3JvbGwgW2FwcHJveEl0ZW1IZWlnaHRdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvYXBpL2NvbXBvbmVudHMvdmlydHVhbC1zY3JvbGwvVmlydHVhbFNjcm9sbC8pLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiN2aXJ0dWFsc2Nyb2xsYXBwcm94aXRlbWhlaWdodCkuXG4gICAqXG4gICAqIEBkZWZhdWx0ICc0MHB4J1xuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICB2aXJ0dWFsU2Nyb2xsQXBwcm94SXRlbUhlaWdodCA9ICc0MHB4JztcblxuICAvKipcbiAgICogQSBwbGFjZWhvbGRlciBmb3IgU2VhcmNoYmFyLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNzZWFyY2hwbGFjZWhvbGRlcikuXG4gICAqXG4gICAqIEBkZWZhdWx0ICdTZWFyY2gnXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNlYXJjaFBsYWNlaG9sZGVyID0gJ1NlYXJjaCc7XG5cbiAgLyoqXG4gICAqIEEgcGxhY2Vob2xkZXIuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3BsYWNlaG9sZGVyKS5cbiAgICpcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nID0gbnVsbDtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIG11bHRpcGxlIGl0ZW1zIGNhbiBiZSBzZWxlY3RlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaXNtdWx0aXBsZSkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgnaXNNdWx0aXBsZScpXG4gIGdldCBpc011bHRpcGxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc011bHRpcGxlO1xuICB9XG4gIHNldCBpc011bHRpcGxlKGlzTXVsdGlwbGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc011bHRpcGxlID0gISFpc011bHRpcGxlO1xuICAgIHRoaXMuX2NvdW50Rm9vdGVyQnV0dG9ucygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRleHQgdG8gZGlzcGxheSB3aGVuIG5vIGl0ZW1zIGhhdmUgYmVlbiBmb3VuZCBkdXJpbmcgc2VhcmNoLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNzZWFyY2hmYWlsdGV4dCkuXG4gICAqXG4gICAqIEBkZWZhdWx0ICdObyBpdGVtcyBmb3VuZC4nXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNlYXJjaEZhaWxUZXh0ID0gJ05vIGl0ZW1zIGZvdW5kLic7XG5cbiAgLyoqXG4gICAqIENsZWFyIGJ1dHRvbiB0ZXh0LlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNjbGVhcmJ1dHRvbnRleHQpLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnQ2xlYXInXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGNsZWFyQnV0dG9uVGV4dCA9ICdDbGVhcic7XG5cbiAgLyoqXG4gICAqIEFkZCBidXR0b24gdGV4dC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jYWRkYnV0dG9udGV4dCkuXG4gICAqXG4gICAqIEBkZWZhdWx0ICdBZGQnXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGFkZEJ1dHRvblRleHQgPSAnQWRkJztcblxuICAvKipcbiAgICogQ29uZmlybSBidXR0b24gdGV4dC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jY29uZmlybWJ1dHRvbnRleHQpLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnT0snXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGNvbmZpcm1CdXR0b25UZXh0ID0gJ09LJztcblxuICAvKipcbiAgICogQ2xvc2UgYnV0dG9uIHRleHQuXG4gICAqIFRoZSBmaWVsZCBpcyBvbmx5IGFwcGxpY2FibGUgdG8gKippT1MqKiBwbGF0Zm9ybSwgb24gKipBbmRyb2lkKiogb25seSBDcm9zcyBpY29uIGlzIGRpc3BsYXllZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jY2xvc2VidXR0b250ZXh0KS5cbiAgICpcbiAgICogQGRlZmF1bHQgJ0NhbmNlbCdcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgY2xvc2VCdXR0b25UZXh0ID0gJ0NhbmNlbCc7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBTZWFyY2hiYXIgc2hvdWxkIHJlY2VpdmUgZm9jdXMgd2hlbiBNb2RhbCBpcyBvcGVuZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3Nob3VsZGZvY3Vzc2VhcmNoYmFyKS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc2hvdWxkRm9jdXNTZWFyY2hiYXIgPSBmYWxzZTtcblxuICAvKipcbiAgICogSGVhZGVyIGNvbG9yLiBbSW9uaWMgY29sb3JzXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvYWR2YW5jZWQjY29sb3JzKSBhcmUgc3VwcG9ydGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNoZWFkZXJjb2xvcikuXG4gICAqXG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgaGVhZGVyQ29sb3I6IHN0cmluZyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEdyb3VwIGNvbG9yLiBbSW9uaWMgY29sb3JzXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvYWR2YW5jZWQjY29sb3JzKSBhcmUgc3VwcG9ydGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNncm91cGNvbG9yKS5cbiAgICpcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBncm91cENvbG9yOiBzdHJpbmcgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBDbG9zZSBidXR0b24gc2xvdC4gW0lvbmljIHNsb3RzXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2FwaS9idXR0b25zKSBhcmUgc3VwcG9ydGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNjbG9zZWJ1dHRvbnNsb3QpLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnc3RhcnQnXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGNsb3NlQnV0dG9uU2xvdCA9ICdzdGFydCc7XG5cbiAgLyoqXG4gICAqIEl0ZW0gaWNvbiBzbG90LiBbSW9uaWMgc2xvdHNdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvYXBpL2l0ZW0pIGFyZSBzdXBwb3J0ZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2l0ZW1pY29uc2xvdCkuXG4gICAqXG4gICAqIEBkZWZhdWx0ICdzdGFydCdcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgaXRlbUljb25TbG90ID0gJ3N0YXJ0JztcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBpdGVtL3MgaGFzIGJlZW4gc2VsZWN0ZWQgYW5kIE1vZGFsIGNsb3NlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jb25jaGFuZ2UpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50LCB2YWx1ZTogYW55IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHRoZSB1c2VyIGlzIHR5cGluZyBpbiBTZWFyY2hiYXIuXG4gICAqICoqTm90ZSoqOiBgY2FuU2VhcmNoYCBhbmQgYGlzT25TZWFyY2hFbmFibGVkYCBoYXMgdG8gYmUgZW5hYmxlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jb25zZWFyY2gpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgb25TZWFyY2g6IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50LCB0ZXh0OiBzdHJpbmcgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gbm8gaXRlbXMgaGF2ZSBiZWVuIGZvdW5kLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbnNlYXJjaGZhaWwpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgb25TZWFyY2hGYWlsOiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCwgdGV4dDogc3RyaW5nIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHNvbWUgaXRlbXMgaGF2ZSBiZWVuIGZvdW5kLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbnNlYXJjaHN1Y2Nlc3MpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgb25TZWFyY2hTdWNjZXNzOiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCwgdGV4dDogc3RyaW5nIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHRoZSB1c2VyIGhhcyBzY3JvbGxlZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxuICAgKiAqKk5vdGUqKjogYGhhc0luZmluaXRlU2Nyb2xsYCBoYXMgdG8gYmUgZW5hYmxlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jb25pbmZpbml0ZXNjcm9sbCkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvbkluZmluaXRlU2Nyb2xsOiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCwgdGV4dDogc3RyaW5nIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIE1vZGFsIGhhcyBiZWVuIG9wZW5lZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jb25vcGVuKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uT3BlbjogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gTW9kYWwgaGFzIGJlZW4gY2xvc2VkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbmNsb3NlKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGFuIGl0ZW0gaGFzIGJlZW4gc2VsZWN0ZWQgb3IgdW5zZWxlY3RlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jb25zZWxlY3QpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50LCBpdGVtOiBhbnksIGlzU2VsZWN0ZWQ6IGJvb2xlYW4gfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gQ2xlYXIgYnV0dG9uIGhhcyBiZWVuIGNsaWNrZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29uY2xlYXIpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgb25DbGVhcjogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQsIGl0ZW1zOiBhbnlbXSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogQSBsaXN0IG9mIGl0ZW1zIHRoYXQgYXJlIHNlbGVjdGVkIGFuZCBhd2FpdGluZyBjb25maXJtYXRpb24gYnkgdXNlciwgd2hlbiBoZSBoYXMgY2xpY2tlZCBDb25maXJtIGJ1dHRvbi5cbiAgICogQWZ0ZXIgdGhlIHVzZXIgaGFzIGNsaWNrZWQgQ29uZmlybSBidXR0b24gaXRlbXMgdG8gY29uZmlybSBhcmUgY2xlYXJlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaXRlbXN0b2NvbmZpcm0pLlxuICAgKlxuICAgKiBAZGVmYXVsdCBbXVxuICAgKiBAcmVhZG9ubHlcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgZ2V0IGl0ZW1zVG9Db25maXJtKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXNUb0NvbmZpcm07XG4gIH1cblxuICAvKipcbiAgICogSG93IGxvbmcsIGluIG1pbGxpc2Vjb25kcywgdG8gd2FpdCB0byBmaWx0ZXIgaXRlbXMgb3IgdG8gdHJpZ2dlciBgb25TZWFyY2hgIGV2ZW50IGFmdGVyIGVhY2gga2V5c3Ryb2tlLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNzZWFyY2hkZWJvdW5jZSkuXG4gICAqXG4gICAqIEBkZWZhdWx0IDI1MFxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBzZWFyY2hEZWJvdW5jZTogTnVtYmVyID0gMjUwO1xuXG4gIC8qKlxuICAgKiBBIGxpc3Qgb2YgaXRlbXMgdG8gZGlzYWJsZS5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jZGlzYWJsZWRpdGVtcykuXG4gICAqXG4gICAqIEBkZWZhdWx0IFtdXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkSXRlbXM6IGFueVtdID0gW107XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBpdGVtIHZhbHVlIG9ubHkgc2hvdWxkIGJlIHN0b3JlZCBpbiBgbmdNb2RlbGAsIG5vdCB0aGUgZW50aXJlIGl0ZW0uXG4gICAqICoqTm90ZSoqOiBJdGVtIHZhbHVlIGlzIGRlZmluZWQgYnkgYGl0ZW1WYWx1ZUZpZWxkYC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2hvdWxkc3RvcmVpdGVtdmFsdWUpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBzaG91bGRTdG9yZUl0ZW1WYWx1ZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gYWxsb3cgZWRpdGluZyBpdGVtcy5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jY2Fuc2F2ZWl0ZW0pLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBjYW5TYXZlSXRlbSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gYWxsb3cgZGVsZXRpbmcgaXRlbXMuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2NhbmRlbGV0ZWl0ZW0pLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBjYW5EZWxldGVJdGVtID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0byBhbGxvdyBhZGRpbmcgaXRlbXMuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2NhbmFkZGl0ZW0pLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoJ2NhbkFkZEl0ZW0nKVxuICBnZXQgY2FuQWRkSXRlbSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2FuQWRkSXRlbTtcbiAgfVxuICBzZXQgY2FuQWRkSXRlbShjYW5BZGRJdGVtOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY2FuQWRkSXRlbSA9ICEhY2FuQWRkSXRlbTtcbiAgICB0aGlzLl9jb3VudEZvb3RlckJ1dHRvbnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIEVkaXQgaXRlbSBidXR0b24gaGFzIGJlZW4gY2xpY2tlZC5cbiAgICogV2hlbiB0aGUgYnV0dG9uIGhhcyBiZWVuIGNsaWNrZWQgYGlvbmljU2VsZWN0YWJsZUFkZEl0ZW1UZW1wbGF0ZWAgd2lsbCBiZSBzaG93bi4gVXNlIHRoZSB0ZW1wbGF0ZSB0byBjcmVhdGUgYSBmb3JtIHRvIGVkaXQgaXRlbS5cbiAgICogKipOb3RlKio6IGBjYW5TYXZlSXRlbWAgaGFzIHRvIGJlIGVuYWJsZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29uc2F2ZWl0ZW0pLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgb25TYXZlSXRlbTogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQsIGl0ZW06IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBEZWxldGUgaXRlbSBidXR0b24gaGFzIGJlZW4gY2xpY2tlZC5cbiAgICogKipOb3RlKio6IGBjYW5EZWxldGVJdGVtYCBoYXMgdG8gYmUgZW5hYmxlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jb25kZWxldGVpdGVtKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uRGVsZXRlSXRlbTogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQsIGl0ZW06IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBBZGQgaXRlbSBidXR0b24gaGFzIGJlZW4gY2xpY2tlZC5cbiAgICogV2hlbiB0aGUgYnV0dG9uIGhhcyBiZWVuIGNsaWNrZWQgYGlvbmljU2VsZWN0YWJsZUFkZEl0ZW1UZW1wbGF0ZWAgd2lsbCBiZSBzaG93bi4gVXNlIHRoZSB0ZW1wbGF0ZSB0byBjcmVhdGUgYSBmb3JtIHRvIGFkZCBpdGVtLlxuICAgKiAqKk5vdGUqKjogYGNhbkFkZEl0ZW1gIGhhcyB0byBiZSBlbmFibGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbmFkZGl0ZW0pLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgb25BZGRJdGVtOiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZVZhbHVlVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgdmFsdWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVJdGVtVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZUl0ZW1FbmRUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBpdGVtRW5kVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlVGl0bGVUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICB0aXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZVBsYWNlaG9sZGVyVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgcGxhY2Vob2xkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVNZXNzYWdlVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgbWVzc2FnZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZUdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgZ3JvdXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVHcm91cEVuZFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGdyb3VwRW5kVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlQ2xvc2VCdXR0b25UZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBjbG9zZUJ1dHRvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZVNlYXJjaEZhaWxUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBzZWFyY2hGYWlsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlQWRkSXRlbVRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGFkZEl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBmb290ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgX2FkZEl0ZW1UZW1wbGF0ZUZvb3RlckhlaWdodDogc3RyaW5nO1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZUhlYWRlclRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZUl0ZW1JY29uVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgaXRlbUljb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogU2VlIElvbmljIFZpcnR1YWxTY3JvbGwgW2hlYWRlckZuXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2FwaS9jb21wb25lbnRzL3ZpcnR1YWwtc2Nyb2xsL1ZpcnR1YWxTY3JvbGwvKS5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jdmlydHVhbHNjcm9sbGhlYWRlcmZuKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgdmlydHVhbFNjcm9sbEhlYWRlckZuID0gKCkgPT4ge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbW9kYWxDb250cm9sbGVyOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBfcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgaW9uSXRlbTogSW9uSXRlbSxcbiAgICBwcml2YXRlIF9pdGVyYWJsZURpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcbiAgICBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlclxuICApIHtcbiAgICBpZiAoIXRoaXMuaXRlbXMgfHwgIXRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5faXRlbXNEaWZmZXIgPSB0aGlzLl9pdGVyYWJsZURpZmZlcnMuZmluZCh0aGlzLml0ZW1zKS5jcmVhdGUoKTtcbiAgfVxuXG4gIGluaXRGb2N1cygpIHsgfVxuXG4gIGVuYWJsZUlvbkl0ZW0oaXNFbmFibGVkOiBib29sZWFuKSB7XG4gICAgaWYgKCF0aGlzLmlvbkl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlvbkl0ZW0uZGlzYWJsZWQgPSAhaXNFbmFibGVkO1xuICB9XG5cbiAgX2lzTnVsbE9yV2hpdGVTcGFjZSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIENvbnZlcnQgdmFsdWUgdG8gc3RyaW5nIGluIGNhc2UgaWYgaXQncyBub3QuXG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxzL2csICcnKS5sZW5ndGggPCAxO1xuICB9XG5cbiAgX3NldEhhc1NlYXJjaFRleHQoKSB7XG4gICAgdGhpcy5faGFzU2VhcmNoVGV4dCA9ICF0aGlzLl9pc051bGxPcldoaXRlU3BhY2UodGhpcy5fc2VhcmNoVGV4dCk7XG4gIH1cblxuICBfaGFzT25TZWFyY2goKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNPblNlYXJjaEVuYWJsZWQgJiYgdGhpcy5vblNlYXJjaC5vYnNlcnZlcnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIF9oYXNPblNhdmVJdGVtKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNhblNhdmVJdGVtICYmIHRoaXMub25TYXZlSXRlbS5vYnNlcnZlcnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIF9oYXNPbkFkZEl0ZW0oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2FuQWRkSXRlbSAmJiB0aGlzLm9uQWRkSXRlbS5vYnNlcnZlcnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIF9oYXNPbkRlbGV0ZUl0ZW0oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2FuRGVsZXRlSXRlbSAmJiB0aGlzLm9uRGVsZXRlSXRlbS5vYnNlcnZlcnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIF9lbWl0VmFsdWVDaGFuZ2UoKSB7XG4gICAgdGhpcy5wcm9wYWdhdGVPbkNoYW5nZSh0aGlzLnZhbHVlKTtcblxuICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgX2VtaXRTZWFyY2goKSB7XG4gICAgaWYgKCF0aGlzLmNhblNlYXJjaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub25TZWFyY2guZW1pdCh7XG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICB0ZXh0OiB0aGlzLl9zZWFyY2hUZXh0XG4gICAgfSk7XG4gIH1cblxuICBfZW1pdE9uU2VsZWN0KGl0ZW06IGFueSwgaXNTZWxlY3RlZDogYm9vbGVhbikge1xuICAgIHRoaXMub25TZWxlY3QuZW1pdCh7XG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICBpdGVtOiBpdGVtLFxuICAgICAgaXNTZWxlY3RlZDogaXNTZWxlY3RlZFxuICAgIH0pO1xuICB9XG5cbiAgX2VtaXRPbkNsZWFyKGl0ZW1zOiBhbnlbXSkge1xuICAgIHRoaXMub25DbGVhci5lbWl0KHtcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGl0ZW1zOiBpdGVtc1xuICAgIH0pO1xuICB9XG5cbiAgX2VtaXRPblNlYXJjaFN1Y2Nlc3NPckZhaWwoaXNTdWNjZXNzOiBib29sZWFuKSB7XG4gICAgY29uc3QgZXZlbnREYXRhID0ge1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgdGV4dDogdGhpcy5fc2VhcmNoVGV4dFxuICAgIH07XG5cbiAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICB0aGlzLm9uU2VhcmNoU3VjY2Vzcy5lbWl0KGV2ZW50RGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25TZWFyY2hGYWlsLmVtaXQoZXZlbnREYXRhKTtcbiAgICB9XG4gIH1cblxuICBfZm9ybWF0SXRlbShpdGVtOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLl9pc051bGxPcldoaXRlU3BhY2UoaXRlbSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLml0ZW1UZXh0RmllbGQgPyBpdGVtW3RoaXMuaXRlbVRleHRGaWVsZF0gOiBpdGVtLnRvU3RyaW5nKCk7XG4gIH1cblxuICBfZm9ybWF0VmFsdWVJdGVtKGl0ZW06IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuX3Nob3VsZFN0b3JlSXRlbVZhbHVlKSB7XG4gICAgICAvLyBHZXQgaXRlbSB0ZXh0IGZyb20gdGhlIGxpc3QgYXMgd2Ugc3RvcmUgaXQncyB2YWx1ZSBvbmx5LlxuICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5pdGVtcy5maW5kKF9pdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIF9pdGVtW3RoaXMuaXRlbVZhbHVlRmllbGRdID09PSBpdGVtO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzLl9mb3JtYXRJdGVtKHNlbGVjdGVkSXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLl9mb3JtYXRJdGVtKGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIF9nZXRJdGVtVmFsdWUoaXRlbTogYW55KTogYW55IHtcbiAgICBpZiAoIXRoaXMuX2hhc09iamVjdHMpIHtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cblxuICAgIHJldHVybiBpdGVtW3RoaXMuaXRlbVZhbHVlRmllbGRdO1xuICB9XG5cbiAgX2dldFN0b3JlZEl0ZW1WYWx1ZShpdGVtOiBhbnkpOiBhbnkge1xuICAgIGlmICghdGhpcy5faGFzT2JqZWN0cykge1xuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3Nob3VsZFN0b3JlSXRlbVZhbHVlID8gaXRlbSA6IGl0ZW1bdGhpcy5pdGVtVmFsdWVGaWVsZF07XG4gIH1cblxuICBfb25TZWFyY2hiYXJDbGVhcigpIHtcbiAgICAvLyBJb25pYyBTZWFyY2hiYXIgZG9lc24ndCBjbGVhciBiaW5kIHdpdGggbmdNb2RlbCB2YWx1ZS5cbiAgICAvLyBEbyBpdCBvdXJzZWx2ZXMuXG4gICAgdGhpcy5fc2VhcmNoVGV4dCA9ICcnO1xuICB9XG5cbiAgX2ZpbHRlckl0ZW1zKCkge1xuICAgIHRoaXMuX3NldEhhc1NlYXJjaFRleHQoKTtcblxuICAgIGlmICh0aGlzLl9oYXNPblNlYXJjaCgpKSB7XG4gICAgICAvLyBEZWxlZ2F0ZSBmaWx0ZXJpbmcgdG8gdGhlIGV2ZW50LlxuICAgICAgdGhpcy5fZW1pdFNlYXJjaCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBEZWZhdWx0IGZpbHRlcmluZy5cbiAgICAgIGxldCBncm91cHMgPSBbXTtcblxuICAgICAgaWYgKCF0aGlzLl9zZWFyY2hUZXh0IHx8ICF0aGlzLl9zZWFyY2hUZXh0LnRyaW0oKSkge1xuICAgICAgICBncm91cHMgPSB0aGlzLl9ncm91cHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaWx0ZXJUZXh0ID0gdGhpcy5fc2VhcmNoVGV4dC50cmltKCkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICB0aGlzLl9ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgICAgY29uc3QgaXRlbXMgPSBncm91cC5pdGVtcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtVGV4dCA9ICh0aGlzLml0ZW1UZXh0RmllbGQgP1xuICAgICAgICAgICAgICBpdGVtW3RoaXMuaXRlbVRleHRGaWVsZF0gOiBpdGVtKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gaXRlbVRleHQuaW5kZXhPZihmaWx0ZXJUZXh0KSAhPT0gLTE7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBncm91cHMucHVzaCh7XG4gICAgICAgICAgICAgIHZhbHVlOiBncm91cC52YWx1ZSxcbiAgICAgICAgICAgICAgdGV4dDogZ3JvdXAudGV4dCxcbiAgICAgICAgICAgICAgaXRlbXM6IGl0ZW1zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE5vIGl0ZW1zIGZvdW5kLlxuICAgICAgICBpZiAoIWdyb3Vwcy5sZW5ndGgpIHtcbiAgICAgICAgICBncm91cHMucHVzaCh7XG4gICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9maWx0ZXJlZEdyb3VwcyA9IGdyb3VwcztcbiAgICAgIHRoaXMuX2hhc0ZpbHRlcmVkSXRlbXMgPSAhdGhpcy5fYXJlR3JvdXBzRW1wdHkoZ3JvdXBzKTtcbiAgICAgIHRoaXMuX2VtaXRPblNlYXJjaFN1Y2Nlc3NPckZhaWwodGhpcy5faGFzRmlsdGVyZWRJdGVtcyk7XG4gICAgfVxuICB9XG5cbiAgX2lzSXRlbURpc2FibGVkKGl0ZW06IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZEl0ZW1zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWRJdGVtcy5zb21lKF9pdGVtID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXRJdGVtVmFsdWUoX2l0ZW0pID09PSB0aGlzLl9nZXRJdGVtVmFsdWUoaXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBfaXNJdGVtU2VsZWN0ZWQoaXRlbTogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSXRlbXMuZmluZChzZWxlY3RlZEl0ZW0gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldEl0ZW1WYWx1ZShpdGVtKSA9PT0gdGhpcy5fZ2V0U3RvcmVkSXRlbVZhbHVlKHNlbGVjdGVkSXRlbSk7XG4gICAgfSkgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIF9hZGRTZWxlY3RlZEl0ZW0oaXRlbTogYW55KSB7XG4gICAgaWYgKHRoaXMuX3Nob3VsZFN0b3JlSXRlbVZhbHVlKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zLnB1c2godGhpcy5fZ2V0SXRlbVZhbHVlKGl0ZW0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIF9kZWxldGVTZWxlY3RlZEl0ZW0oaXRlbTogYW55KSB7XG4gICAgbGV0IGl0ZW1Ub0RlbGV0ZUluZGV4O1xuXG4gICAgdGhpcy5fc2VsZWN0ZWRJdGVtcy5mb3JFYWNoKChzZWxlY3RlZEl0ZW0sIGl0ZW1JbmRleCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9nZXRJdGVtVmFsdWUoaXRlbSkgPT09XG4gICAgICAgIHRoaXMuX2dldFN0b3JlZEl0ZW1WYWx1ZShzZWxlY3RlZEl0ZW0pXG4gICAgICApIHtcbiAgICAgICAgaXRlbVRvRGVsZXRlSW5kZXggPSBpdGVtSW5kZXg7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zLnNwbGljZShpdGVtVG9EZWxldGVJbmRleCwgMSk7XG4gIH1cblxuICBfY2xpY2soKSB7XG4gICAgaWYgKCF0aGlzLmlzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2xhYmVsID0gdGhpcy5fZ2V0TGFiZWxUZXh0KCk7XG4gICAgdGhpcy5vcGVuKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLm9uT3Blbi5lbWl0KHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIF9zYXZlSXRlbShldmVudDogRXZlbnQsIGl0ZW06IGFueSkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuX2l0ZW1Ub0FkZCA9IGl0ZW07XG5cbiAgICBpZiAodGhpcy5faGFzT25TYXZlSXRlbSgpKSB7XG4gICAgICB0aGlzLm9uU2F2ZUl0ZW0uZW1pdCh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgaXRlbTogdGhpcy5faXRlbVRvQWRkXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93QWRkSXRlbVRlbXBsYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgX2RlbGV0ZUl0ZW1DbGljayhldmVudDogRXZlbnQsIGl0ZW06IGFueSkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuX2l0ZW1Ub0FkZCA9IGl0ZW07XG5cbiAgICBpZiAodGhpcy5faGFzT25EZWxldGVJdGVtKCkpIHtcbiAgICAgIC8vIERlbGVnYXRlIGxvZ2ljIHRvIGV2ZW50LlxuICAgICAgdGhpcy5vbkRlbGV0ZUl0ZW0uZW1pdCh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgaXRlbTogdGhpcy5faXRlbVRvQWRkXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWxldGVJdGVtKHRoaXMuX2l0ZW1Ub0FkZCk7XG4gICAgfVxuICB9XG5cbiAgX2FkZEl0ZW1DbGljaygpIHtcbiAgICBpZiAodGhpcy5faGFzT25BZGRJdGVtKCkpIHtcbiAgICAgIHRoaXMub25BZGRJdGVtLmVtaXQoe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXNcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dBZGRJdGVtVGVtcGxhdGUoKTtcbiAgICB9XG4gIH1cblxuICBfcG9zaXRpb25BZGRJdGVtVGVtcGxhdGUoKSB7XG4gICAgLy8gV2FpdCBmb3IgdGhlIHRlbXBsYXRlIHRvIHJlbmRlci5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGZvb3RlciA9IHRoaXMuX21vZGFsQ29tcG9uZW50Ll9lbGVtZW50Lm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5pb25pYy1zZWxlY3RhYmxlLWFkZC1pdGVtLXRlbXBsYXRlIGlvbi1mb290ZXInKTtcblxuICAgICAgdGhpcy5fYWRkSXRlbVRlbXBsYXRlRm9vdGVySGVpZ2h0ID0gZm9vdGVyID8gYGNhbGMoMTAwJSAtICR7Zm9vdGVyLm9mZnNldEhlaWdodH1weClgIDogJzEwMCUnO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBfY2xvc2UoKSB7XG4gICAgdGhpcy5jbG9zZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5vbkNsb3NlLmVtaXQoe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXNcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKCF0aGlzLl9oYXNPblNlYXJjaCgpKSB7XG4gICAgICB0aGlzLl9zZWFyY2hUZXh0ID0gJyc7XG4gICAgICB0aGlzLl9zZXRIYXNTZWFyY2hUZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgX2NsZWFyKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSB0aGlzLl9zZWxlY3RlZEl0ZW1zO1xuXG4gICAgdGhpcy5jbGVhcigpO1xuICAgIHRoaXMuX2VtaXRWYWx1ZUNoYW5nZSgpO1xuICAgIHRoaXMuX2VtaXRPbkNsZWFyKHNlbGVjdGVkSXRlbXMpO1xuICAgIHRoaXMuY2xvc2UoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMub25DbG9zZS5lbWl0KHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIF9nZXRNb3JlSXRlbXMoKSB7XG4gICAgdGhpcy5vbkluZmluaXRlU2Nyb2xsLmVtaXQoe1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgdGV4dDogdGhpcy5fc2VhcmNoVGV4dFxuICAgIH0pO1xuICB9XG5cbiAgX3NldEl0ZW1zVG9Db25maXJtKGl0ZW1zOiBhbnlbXSkge1xuICAgIC8vIFJldHVybiBhIGNvcHkgb2Ygb3JpZ2luYWwgYXJyYXksIHNvIGl0IGNvdWxkbid0IGJlIGNoYW5nZWQgZnJvbSBvdXRzaWRlLlxuICAgIHRoaXMuX2l0ZW1zVG9Db25maXJtID0gW10uY29uY2F0KGl0ZW1zKTtcbiAgfVxuXG4gIF9kb1NlbGVjdChzZWxlY3RlZEl0ZW06IGFueSkge1xuICAgIHRoaXMudmFsdWUgPSBzZWxlY3RlZEl0ZW07XG4gICAgdGhpcy5fZW1pdFZhbHVlQ2hhbmdlKCk7XG4gIH1cblxuICBfc2VsZWN0KGl0ZW06IGFueSkge1xuICAgIGNvbnN0IGlzSXRlbVNlbGVjdGVkID0gdGhpcy5faXNJdGVtU2VsZWN0ZWQoaXRlbSk7XG5cbiAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICBpZiAoaXNJdGVtU2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5fZGVsZXRlU2VsZWN0ZWRJdGVtKGl0ZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYWRkU2VsZWN0ZWRJdGVtKGl0ZW0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZXRJdGVtc1RvQ29uZmlybSh0aGlzLl9zZWxlY3RlZEl0ZW1zKTtcblxuICAgICAgLy8gRW1pdCBvblNlbGVjdCBldmVudCBhZnRlciBzZXR0aW5nIGl0ZW1zIHRvIGNvbmZpcm0gc28gdGhleSBjb3VsZCBiZSB1c2VkXG4gICAgICAvLyBpbnNpZGUgdGhlIGV2ZW50LlxuICAgICAgdGhpcy5fZW1pdE9uU2VsZWN0KGl0ZW0sICFpc0l0ZW1TZWxlY3RlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmhhc0NvbmZpcm1CdXR0b24gfHwgdGhpcy5mb290ZXJUZW1wbGF0ZSkge1xuICAgICAgICAvLyBEb24ndCBjbG9zZSBNb2RhbCBhbmQga2VlcCB0cmFjayBvbiBpdGVtcyB0byBjb25maXJtLlxuICAgICAgICAvLyBXaGVuIGZvb3RlciB0ZW1wbGF0ZSBpcyB1c2VkIGl0J3MgdXAgdG8gZGV2ZWxvcGVyIHRvIGNsb3NlIE1vZGFsLlxuICAgICAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zID0gW107XG5cbiAgICAgICAgaWYgKGlzSXRlbVNlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5fZGVsZXRlU2VsZWN0ZWRJdGVtKGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2FkZFNlbGVjdGVkSXRlbShpdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NldEl0ZW1zVG9Db25maXJtKHRoaXMuX3NlbGVjdGVkSXRlbXMpO1xuXG4gICAgICAgIC8vIEVtaXQgb25TZWxlY3QgZXZlbnQgYWZ0ZXIgc2V0dGluZyBpdGVtcyB0byBjb25maXJtIHNvIHRoZXkgY291bGQgYmUgdXNlZFxuICAgICAgICAvLyBpbnNpZGUgdGhlIGV2ZW50LlxuICAgICAgICB0aGlzLl9lbWl0T25TZWxlY3QoaXRlbSwgIWlzSXRlbVNlbGVjdGVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaXNJdGVtU2VsZWN0ZWQpIHtcbiAgICAgICAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgICAgICAgdGhpcy5fYWRkU2VsZWN0ZWRJdGVtKGl0ZW0pO1xuXG4gICAgICAgICAgLy8gRW1pdCBvblNlbGVjdCBiZWZvcmUgb25DaGFuZ2UuXG4gICAgICAgICAgdGhpcy5fZW1pdE9uU2VsZWN0KGl0ZW0sIHRydWUpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX3Nob3VsZFN0b3JlSXRlbVZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9kb1NlbGVjdCh0aGlzLl9nZXRJdGVtVmFsdWUoaXRlbSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9kb1NlbGVjdChpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9jb25maXJtKCkge1xuICAgIHRoaXMuY29uZmlybSgpO1xuICAgIHRoaXMuX2Nsb3NlKCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRMYWJlbFRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faW9uTGFiZWxFbGVtZW50ID8gdGhpcy5faW9uTGFiZWxFbGVtZW50LnRleHRDb250ZW50IDogbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2FyZUdyb3Vwc0VtcHR5KGdyb3Vwcykge1xuICAgIHJldHVybiBncm91cHMubGVuZ3RoID09PSAwIHx8IGdyb3Vwcy5ldmVyeShncm91cCA9PiB7XG4gICAgICByZXR1cm4gIWdyb3VwLml0ZW1zIHx8IGdyb3VwLml0ZW1zLmxlbmd0aCA9PT0gMDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvdW50Rm9vdGVyQnV0dG9ucygpIHtcbiAgICBsZXQgZm9vdGVyQnV0dG9uc0NvdW50ID0gMDtcblxuICAgIGlmICh0aGlzLmNhbkNsZWFyKSB7XG4gICAgICBmb290ZXJCdXR0b25zQ291bnQrKztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc011bHRpcGxlIHx8IHRoaXMuX2hhc0NvbmZpcm1CdXR0b24pIHtcbiAgICAgIGZvb3RlckJ1dHRvbnNDb3VudCsrO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNhbkFkZEl0ZW0pIHtcbiAgICAgIGZvb3RlckJ1dHRvbnNDb3VudCsrO1xuICAgIH1cblxuICAgIHRoaXMuX2Zvb3RlckJ1dHRvbnNDb3VudCA9IGZvb3RlckJ1dHRvbnNDb3VudDtcbiAgfVxuXG4gIHByaXZhdGUgX3NldEl0ZW1zKGl0ZW1zOiBhbnlbXSkge1xuICAgIC8vIEl0J3MgaW1wb3J0YW50IHRvIGhhdmUgYW4gZW1wdHkgc3RhcnRpbmcgZ3JvdXAgd2l0aCBlbXB0eSBpdGVtcyAoZ3JvdXBzWzBdLml0ZW1zKSxcbiAgICAvLyBiZWNhdXNlIHdlIGJpbmQgdG8gaXQgd2hlbiB1c2luZyBWaXJ0dWFsU2Nyb2xsLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL2lzc3Vlcy83MC5cbiAgICBsZXQgZ3JvdXBzOiBhbnlbXSA9IFt7XG4gICAgICBpdGVtczogaXRlbXMgfHwgW11cbiAgICB9XTtcblxuICAgIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLl9oYXNHcm91cHMpIHtcbiAgICAgICAgZ3JvdXBzID0gW107XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBjb25zdCBncm91cFZhbHVlID0gdGhpcy5fZ2V0UHJvcGVydHlWYWx1ZShpdGVtLCB0aGlzLmdyb3VwVmFsdWVGaWVsZCksXG4gICAgICAgICAgICBncm91cCA9IGdyb3Vwcy5maW5kKF9ncm91cCA9PiBfZ3JvdXAudmFsdWUgPT09IGdyb3VwVmFsdWUpO1xuXG4gICAgICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgICAgICBncm91cC5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBncm91cHMucHVzaCh7XG4gICAgICAgICAgICAgIHZhbHVlOiBncm91cFZhbHVlLFxuICAgICAgICAgICAgICB0ZXh0OiB0aGlzLl9nZXRQcm9wZXJ0eVZhbHVlKGl0ZW0sIHRoaXMuZ3JvdXBUZXh0RmllbGQpLFxuICAgICAgICAgICAgICBpdGVtczogW2l0ZW1dXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2dyb3VwcyA9IGdyb3VwcztcbiAgICB0aGlzLl9maWx0ZXJlZEdyb3VwcyA9IHRoaXMuX2dyb3VwcztcbiAgICB0aGlzLl9oYXNGaWx0ZXJlZEl0ZW1zID0gIXRoaXMuX2FyZUdyb3Vwc0VtcHR5KHRoaXMuX2ZpbHRlcmVkR3JvdXBzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFByb3BlcnR5VmFsdWUob2JqZWN0OiBhbnksIHByb3BlcnR5OiBzdHJpbmcpOiBhbnkge1xuICAgIGlmICghcHJvcGVydHkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eS5zcGxpdCgnLicpLnJlZHVjZSgoX29iamVjdCwgX3Byb3BlcnR5KSA9PiB7XG4gICAgICByZXR1cm4gX29iamVjdCA/IF9vYmplY3RbX3Byb3BlcnR5XSA6IG51bGw7XG4gICAgfSwgb2JqZWN0KTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldElvbkl0ZW1IYXNGb2N1cyhoYXNGb2N1czogYm9vbGVhbikge1xuICAgIGlmICghdGhpcy5pb25JdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgZm9jdXMgQ1NTIGNsYXNzIGZvciBwcm9wZXIgc3R5bHlpbmcgb2YgaW9uLWl0ZW0vaW9uLWxhYmVsLlxuICAgIHRoaXMuX3NldElvbkl0ZW1Dc3NDbGFzcygnaXRlbS1oYXMtZm9jdXMnLCBoYXNGb2N1cyk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRJb25JdGVtSGFzVmFsdWUoKSB7XG4gICAgaWYgKCF0aGlzLmlvbkl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB2YWx1ZSBDU1MgY2xhc3MgZm9yIHByb3BlciBzdHlseWluZyBvZiBpb24taXRlbS9pb24tbGFiZWwuXG4gICAgdGhpcy5fc2V0SW9uSXRlbUNzc0NsYXNzKCdpdGVtLWhhcy12YWx1ZScsIHRoaXMuaGFzVmFsdWUoKSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRIYXNQbGFjZWhvbGRlcigpIHtcbiAgICB0aGlzLl9oYXNQbGFjZWhvbGRlciA9ICF0aGlzLmhhc1ZhbHVlKCkgJiZcbiAgICAgICghdGhpcy5faXNOdWxsT3JXaGl0ZVNwYWNlKHRoaXMucGxhY2Vob2xkZXIpIHx8IHRoaXMucGxhY2Vob2xkZXJUZW1wbGF0ZSkgP1xuICAgICAgdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBwcm9wYWdhdGVPbkNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcbiAgcHJpdmF0ZSBwcm9wYWdhdGVPblRvdWNoZWQgPSAoKSA9PiB7IH07XG5cbiAgcHJpdmF0ZSBfc2V0SW9uSXRlbUNzc0NsYXNzKGNzc0NsYXNzOiBzdHJpbmcsIHNob3VsZEFkZDogYm9vbGVhbikge1xuICAgIGlmICghdGhpcy5faW9uSXRlbUVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5faW9uSXRlbUVsZW1lbnQsIGNzc0NsYXNzLCBzaG91bGRBZGQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdG9nZ2xlQWRkSXRlbVRlbXBsYXRlKGlzVmlzaWJsZTogYm9vbGVhbikge1xuICAgIC8vIEl0IHNob3VsZCBiZSBwb3NzaWJsZSB0byBzaG93L2hpZGUgdGhlIHRlbXBsYXRlIHJlZ2FyZGxlc3NcbiAgICAvLyBjYW5BZGRJdGVtIG9yIGNhblNhdmVJdGVtIHBhcmFtZXRlcnMsIHNvIHdlIGNvdWxkIGltcGxlbWVudCBzb21lXG4gICAgLy8gY3VzdG9tIGJlaGF2aW9yLiBFLmcuIGFkZGluZyBpdGVtIHdoZW4gc2VhcmNoIGZhaWxzIHVzaW5nIG9uU2VhcmNoRmFpbCBldmVudC5cbiAgICBpZiAoIXRoaXMuYWRkSXRlbVRlbXBsYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVG8gbWFrZSBTYXZlSXRlbVRlbXBsYXRlIHZpc2libGUgd2UganVzdCBwb3NpdGlvbiBpdCBvdmVyIGxpc3QgdXNpbmcgQ1NTLlxuICAgIC8vIFdlIGRvbid0IGhpZGUgbGlzdCB3aXRoICpuZ0lmIG9yIFtoaWRkZW5dIHRvIHByZXZlbnQgaXRzIHNjcm9sbCBwb3NpdGlvbi5cbiAgICB0aGlzLl9pc0FkZEl0ZW1UZW1wbGF0ZVZpc2libGUgPSBpc1Zpc2libGU7XG4gICAgdGhpcy5faXNGb290ZXJWaXNpYmxlID0gIWlzVmlzaWJsZTtcbiAgfVxuXG4gIC8qIENvbnRyb2xWYWx1ZUFjY2Vzc29yICovXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UobWV0aG9kOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZU9uQ2hhbmdlID0gbWV0aG9kO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQobWV0aG9kOiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5wcm9wYWdhdGVPblRvdWNoZWQgPSBtZXRob2Q7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzRW5hYmxlZCA9ICFpc0Rpc2FibGVkO1xuICB9XG4gIC8qIC5Db250cm9sVmFsdWVBY2Nlc3NvciAqL1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2lzSW9zID0gdGhpcy5fcGxhdGZvcm0uaXMoJ2lvcycpO1xuICAgIHRoaXMuX2lzTUQgPSAhdGhpcy5faXNJb3M7XG4gICAgdGhpcy5faGFzT2JqZWN0cyA9ICF0aGlzLl9pc051bGxPcldoaXRlU3BhY2UodGhpcy5pdGVtVmFsdWVGaWVsZCk7XG4gICAgLy8gR3JvdXBpbmcgaXMgc3VwcG9ydGVkIGZvciBvYmplY3RzIG9ubHkuXG4gICAgLy8gSW9uaWMgVmlydHVhbFNjcm9sbCBoYXMgaXQncyBvd24gaW1wbGVtZW50YXRpb24gb2YgZ3JvdXBpbmcuXG4gICAgdGhpcy5faGFzR3JvdXBzID0gQm9vbGVhbih0aGlzLl9oYXNPYmplY3RzICYmIHRoaXMuZ3JvdXBWYWx1ZUZpZWxkICYmICF0aGlzLmhhc1ZpcnR1YWxTY3JvbGwpO1xuXG4gICAgaWYgKHRoaXMuaW9uSXRlbSkge1xuICAgICAgdGhpcy5faW9uSXRlbUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xvc2VzdCgnaW9uLWl0ZW0nKTtcbiAgICAgIHRoaXMuX3NldElvbkl0ZW1Dc3NDbGFzcygnaXRlbS1pbnRlcmFjdGl2ZScsIHRydWUpO1xuICAgICAgdGhpcy5fc2V0SW9uSXRlbUNzc0NsYXNzKCdpdGVtLWlvbmljLXNlbGVjdGFibGUnLCB0cnVlKTtcblxuICAgICAgaWYgKHRoaXMuX2lvbkl0ZW1FbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2lvbkxhYmVsRWxlbWVudCA9IHRoaXMuX2lvbkl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1sYWJlbCcpO1xuXG4gICAgICAgIGlmICh0aGlzLl9pb25MYWJlbEVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9oYXNJb25MYWJlbCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5faW9uTGFiZWxQb3NpdGlvbiA9IHRoaXMuX2lvbkxhYmVsRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykgfHwgJ2RlZmF1bHQnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbmFibGVJb25JdGVtKHRoaXMuaXNFbmFibGVkKTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBjb25zdCBpdGVtc0NoYW5nZXMgPSB0aGlzLl9pdGVtc0RpZmZlci5kaWZmKHRoaXMuaXRlbXMpO1xuXG4gICAgaWYgKGl0ZW1zQ2hhbmdlcykge1xuICAgICAgdGhpcy5fc2V0SXRlbXModGhpcy5pdGVtcyk7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZTtcblxuICAgICAgdGhpcy5vbkl0ZW1zQ2hhbmdlLmVtaXQoe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGl0ZW0uXG4gICAqICoqTm90ZSoqOiBJZiB5b3Ugd2FudCBhbiBpdGVtIHRvIGJlIGFkZGVkIHRvIHRoZSBvcmlnaW5hbCBhcnJheSBhcyB3ZWxsIHVzZSB0d28td2F5IGRhdGEgYmluZGluZyBzeW50YXggb24gYFsoaXRlbXMpXWAgZmllbGQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2FkZGl0ZW0pLlxuICAgKlxuICAgKiBAcGFyYW0gaXRlbSBJdGVtIHRvIGFkZC5cbiAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gaXRlbSBoYXMgYmVlbiBhZGRlZC5cbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgYWRkSXRlbShpdGVtOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gQWRkaW5nIGl0ZW0gdHJpZ2dlcnMgb25JdGVtc0NoYW5nZS5cbiAgICAvLyBSZXR1cm4gYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBvbkl0ZW1zQ2hhbmdlIGZpbmlzaGVzLlxuICAgIC8vIFdlIG5lZWQgYSBwcm9taXNlIG9yIHVzZXIgY291bGQgZG8gc29tZXRoaW5nIGFmdGVyIGl0ZW0gaGFzIGJlZW4gYWRkZWQsXG4gICAgLy8gZS5nLiB1c2Ugc2VhcmNoKCkgbWV0aG9kIHRvIGZpbmQgdGhlIGFkZGVkIGl0ZW0uXG4gICAgdGhpcy5pdGVtcy51bnNoaWZ0KGl0ZW0pO1xuXG4gICAgLy8gQ2xvc2UgYW55IHJ1bm5pbmcgc3Vic2NyaXB0aW9uLlxuICAgIGlmICh0aGlzLl9hZGRJdGVtT2JzZXJ2YWJsZSkge1xuICAgICAgdGhpcy5fYWRkSXRlbU9ic2VydmFibGUudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgLy8gQ29tcGxldGUgY2FsbGJhY2sgaXNuJ3QgZmlyZWQgZm9yIHNvbWUgcmVhc29uLFxuICAgICAgLy8gc28gdW5zdWJzY3JpYmUgaW4gYm90aCBzdWNjZXNzIGFuZCBmYWlsIGNhc2VzLlxuICAgICAgc2VsZi5fYWRkSXRlbU9ic2VydmFibGUgPSBzZWxmLm9uSXRlbXNDaGFuZ2UuYXNPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgc2VsZi5fYWRkSXRlbU9ic2VydmFibGUudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICBzZWxmLl9hZGRJdGVtT2JzZXJ2YWJsZS51bnN1YnNjcmliZSgpO1xuICAgICAgICByZWplY3QoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gKiBEZWxldGVzIGl0ZW0uXG4gKiAqKk5vdGUqKjogSWYgeW91IHdhbnQgYW4gaXRlbSB0byBiZSBkZWxldGVkIGZyb20gdGhlIG9yaWdpbmFsIGFycmF5IGFzIHdlbGwgdXNlIHR3by13YXkgZGF0YSBiaW5kaW5nIHN5bnRheCBvbiBgWyhpdGVtcyldYCBmaWVsZC5cbiAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2RlbGV0ZWl0ZW0pLlxuICpcbiAqIEBwYXJhbSBpdGVtIEl0ZW0gdG8gZGVsZXRlLlxuICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gaXRlbSBoYXMgYmVlbiBkZWxldGVkLlxuICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICovXG4gIGRlbGV0ZUl0ZW0oaXRlbTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBsZXQgaGFzVmFsdWVDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAvLyBSZW1vdmUgZGVsZXRlZCBpdGVtIGZyb20gc2VsZWN0ZWQgaXRlbXMuXG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkSXRlbXMpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMgPSB0aGlzLl9zZWxlY3RlZEl0ZW1zLmZpbHRlcihfaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRJdGVtVmFsdWUoaXRlbSkgIT09IHRoaXMuX2dldFN0b3JlZEl0ZW1WYWx1ZShfaXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZGVsZXRlZCBpdGVtIGZyb20gdmFsdWUuXG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZS5maWx0ZXIodmFsdWUgPT4ge1xuICAgICAgICAgIHJldHVybiB2YWx1ZS5pZCAhPT0gaXRlbS5pZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggIT09IHRoaXMudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlcztcbiAgICAgICAgICBoYXNWYWx1ZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXRlbSA9PT0gdGhpcy52YWx1ZSkge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICAgIGhhc1ZhbHVlQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsdWVDaGFuZ2VkKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWVDaGFuZ2UoKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZGVsZXRlZCBpdGVtIGZyb20gbGlzdC5cbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKF9pdGVtID0+IHtcbiAgICAgIHJldHVybiBfaXRlbS5pZCAhPT0gaXRlbS5pZDtcbiAgICB9KTtcblxuICAgIC8vIFJlZnJlc2ggaXRlbXMgb24gcGFyZW50IGNvbXBvbmVudC5cbiAgICB0aGlzLml0ZW1zQ2hhbmdlLmVtaXQoaXRlbXMpO1xuXG4gICAgLy8gUmVmcmVzaCBsaXN0LlxuICAgIHRoaXMuX3NldEl0ZW1zKGl0ZW1zKTtcblxuICAgIHRoaXMub25JdGVtc0NoYW5nZS5lbWl0KHtcbiAgICAgIGNvbXBvbmVudDogdGhpc1xuICAgIH0pO1xuXG4gICAgLy8gQ2xvc2UgYW55IHJ1bm5pbmcgc3Vic2NyaXB0aW9uLlxuICAgIGlmICh0aGlzLl9kZWxldGVJdGVtT2JzZXJ2YWJsZSkge1xuICAgICAgdGhpcy5fZGVsZXRlSXRlbU9ic2VydmFibGUudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgLy8gQ29tcGxldGUgY2FsbGJhY2sgaXNuJ3QgZmlyZWQgZm9yIHNvbWUgcmVhc29uLFxuICAgICAgLy8gc28gdW5zdWJzY3JpYmUgaW4gYm90aCBzdWNjZXNzIGFuZCBmYWlsIGNhc2VzLlxuICAgICAgc2VsZi5fZGVsZXRlSXRlbU9ic2VydmFibGUgPSBzZWxmLm9uSXRlbXNDaGFuZ2UuYXNPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgc2VsZi5fZGVsZXRlSXRlbU9ic2VydmFibGUudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICBzZWxmLl9kZWxldGVJdGVtT2JzZXJ2YWJsZS51bnN1YnNjcmliZSgpO1xuICAgICAgICByZWplY3QoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBhbnkgaXRlbSBoYXMgYmVlbiBzZWxlY3RlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaGFzdmFsdWUpLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGJvb2xlYW4gZGV0ZXJtaW5pbmcgd2hldGhlciBhbnkgaXRlbSBoYXMgYmVlbiBzZWxlY3RlZC5cbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgaGFzVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlSXRlbXMubGVuZ3RoICE9PSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWVJdGVtcy5sZW5ndGggIT09IDAgJiYgIXRoaXMuX2lzTnVsbE9yV2hpdGVTcGFjZSh0aGlzLl92YWx1ZUl0ZW1zWzBdKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgTW9kYWwuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29wZW4pLlxuICAgKlxuICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBNb2RhbCBoYXMgYmVlbiBvcGVuZWQuXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIG9wZW4oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgaWYgKCFzZWxmLl9pc0VuYWJsZWQgfHwgc2VsZi5faXNPcGVuZWQpIHtcbiAgICAgICAgcmVqZWN0KCdJb25pY1NlbGVjdGFibGUgaXMgZGlzYWJsZWQgb3IgYWxyZWFkeSBvcGVuZWQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5fZmlsdGVySXRlbXMoKTtcbiAgICAgIHNlbGYuX2lzT3BlbmVkID0gdHJ1ZTtcblxuICAgICAgY29uc3QgbW9kYWxPcHRpb25zOiBNb2RhbE9wdGlvbnMgPSB7XG4gICAgICAgIGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlTW9kYWxDb21wb25lbnQsXG4gICAgICAgIGNvbXBvbmVudFByb3BzOiB7IHNlbGVjdENvbXBvbmVudDogc2VsZiB9LFxuICAgICAgICBiYWNrZHJvcERpc21pc3M6IHNlbGYuX3Nob3VsZEJhY2tkcm9wQ2xvc2VcbiAgICAgIH07XG5cbiAgICAgIGlmIChzZWxmLm1vZGFsQ3NzQ2xhc3MpIHtcbiAgICAgICAgbW9kYWxPcHRpb25zLmNzc0NsYXNzID0gc2VsZi5tb2RhbENzc0NsYXNzO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi5tb2RhbEVudGVyQW5pbWF0aW9uKSB7XG4gICAgICAgIG1vZGFsT3B0aW9ucy5lbnRlckFuaW1hdGlvbiA9IHNlbGYubW9kYWxFbnRlckFuaW1hdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGYubW9kYWxMZWF2ZUFuaW1hdGlvbikge1xuICAgICAgICBtb2RhbE9wdGlvbnMubGVhdmVBbmltYXRpb24gPSBzZWxmLm1vZGFsTGVhdmVBbmltYXRpb247XG4gICAgICB9XG5cbiAgICAgIHNlbGYuX21vZGFsQ29udHJvbGxlci5jcmVhdGUobW9kYWxPcHRpb25zKS50aGVuKG1vZGFsID0+IHtcbiAgICAgICAgc2VsZi5fbW9kYWwgPSBtb2RhbDtcbiAgICAgICAgbW9kYWwucHJlc2VudCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIC8vIFNldCBmb2N1cyBhZnRlciBNb2RhbCBoYXMgb3BlbmVkIHRvIGF2b2lkIGZsaWNrZXJpbmcgb2YgZm9jdXMgaGlnaGxpZ2h0aW5nXG4gICAgICAgICAgLy8gYmVmb3JlIE1vZGFsIG9wZW5pbmcuXG4gICAgICAgICAgc2VsZi5fc2V0SW9uSXRlbUhhc0ZvY3VzKHRydWUpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbW9kYWwub25XaWxsRGlzbWlzcygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHNlbGYuX3NldElvbkl0ZW1IYXNGb2N1cyhmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1vZGFsLm9uRGlkRGlzbWlzcygpLnRoZW4oZXZlbnQgPT4ge1xuICAgICAgICAgIHNlbGYuX2lzT3BlbmVkID0gZmFsc2U7XG4gICAgICAgICAgc2VsZi5faXRlbXNUb0NvbmZpcm0gPSBbXTtcblxuICAgICAgICAgIC8vIENsb3NlZCBieSBjbGlja2luZyBvbiBiYWNrZHJvcCBvdXRzaWRlIG1vZGFsLlxuICAgICAgICAgIGlmIChldmVudC5yb2xlID09PSAnYmFja2Ryb3AnKSB7XG4gICAgICAgICAgICBzZWxmLm9uQ2xvc2UuZW1pdCh7XG4gICAgICAgICAgICAgIGNvbXBvbmVudDogc2VsZlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBNb2RhbC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jY2xvc2UpLlxuICAgKlxuICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBNb2RhbCBoYXMgYmVlbiBjbG9zZWQuXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGlmICghc2VsZi5faXNFbmFibGVkIHx8ICFzZWxmLl9pc09wZW5lZCkge1xuICAgICAgICByZWplY3QoJ0lvbmljU2VsZWN0YWJsZSBpcyBkaXNhYmxlZCBvciBhbHJlYWR5IGNsb3NlZC4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnByb3BhZ2F0ZU9uVG91Y2hlZCgpO1xuICAgICAgc2VsZi5faXNPcGVuZWQgPSBmYWxzZTtcbiAgICAgIHNlbGYuX2l0ZW1Ub0FkZCA9IG51bGw7XG4gICAgICBzZWxmLl9tb2RhbC5kaXNtaXNzKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHNlbGYuX3NldElvbkl0ZW1IYXNGb2N1cyhmYWxzZSk7XG4gICAgICAgIHNlbGYuaGlkZUFkZEl0ZW1UZW1wbGF0ZSgpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdmFsdWUuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2NsZWFyKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuaXNNdWx0aXBsZSA/IFtdIDogbnVsbDtcbiAgICB0aGlzLl9pdGVtc1RvQ29uZmlybSA9IFtdO1xuICAgIHRoaXMucHJvcGFnYXRlT25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlybXMgc2VsZWN0ZWQgaXRlbXMgYnkgdXBkYXRpbmcgdmFsdWUuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2NvbmZpcm0pLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBjb25maXJtKCkge1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIHRoaXMuX2RvU2VsZWN0KHRoaXMuX3NlbGVjdGVkSXRlbXMpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5oYXNDb25maXJtQnV0dG9uIHx8IHRoaXMuZm9vdGVyVGVtcGxhdGUpIHtcbiAgICAgIHRoaXMuX2RvU2VsZWN0KHRoaXMuX3NlbGVjdGVkSXRlbXNbMF0gfHwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgb3IgZGVzZWxlY3RzIGFsbCBvciBzcGVjaWZpYyBpdGVtcy5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jdG9nZ2xlaXRlbXMpLlxuICAgKlxuICAgKiBAcGFyYW0gaXNTZWxlY3QgRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNlbGVjdCBvciBkZXNlbGVjdCBpdGVtcy5cbiAgICogQHBhcmFtIFtpdGVtc10gSXRlbXMgdG8gdG9nZ2xlLiBJZiBpdGVtcyBhcmUgbm90IHNldCBhbGwgaXRlbXMgd2lsbCBiZSB0b2dnbGVkLlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICB0b2dnbGVJdGVtcyhpc1NlbGVjdDogYm9vbGVhbiwgaXRlbXM/OiBhbnlbXSkge1xuICAgIGlmIChpc1NlbGVjdCkge1xuICAgICAgY29uc3QgaGFzSXRlbXMgPSBpdGVtcyAmJiBpdGVtcy5sZW5ndGg7XG4gICAgICBsZXQgaXRlbXNUb1RvZ2dsZSA9IHRoaXMuX2dyb3Vwcy5yZWR1Y2UoKGFsbEl0ZW1zLCBncm91cCkgPT4ge1xuICAgICAgICByZXR1cm4gYWxsSXRlbXMuY29uY2F0KGdyb3VwLml0ZW1zKTtcbiAgICAgIH0sIFtdKTtcblxuICAgICAgLy8gRG9uJ3QgYWxsb3cgdG8gc2VsZWN0IGFsbCBpdGVtcyBpbiBzaW5nbGUgbW9kZS5cbiAgICAgIGlmICghdGhpcy5pc011bHRpcGxlICYmICFoYXNJdGVtcykge1xuICAgICAgICBpdGVtc1RvVG9nZ2xlID0gW107XG4gICAgICB9XG5cbiAgICAgIC8vIFRvZ2dsZSBzcGVjaWZpYyBpdGVtcy5cbiAgICAgIGlmIChoYXNJdGVtcykge1xuICAgICAgICBpdGVtc1RvVG9nZ2xlID0gaXRlbXNUb1RvZ2dsZS5maWx0ZXIoaXRlbVRvVG9nZ2xlID0+IHtcbiAgICAgICAgICByZXR1cm4gaXRlbXMuZmluZChpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRJdGVtVmFsdWUoaXRlbVRvVG9nZ2xlKSA9PT0gdGhpcy5fZ2V0SXRlbVZhbHVlKGl0ZW0pO1xuICAgICAgICAgIH0pICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRha2UgdGhlIGZpcnN0IGl0ZW0gZm9yIHNpbmdsZSBtb2RlLlxuICAgICAgICBpZiAoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgICAgIGl0ZW1zVG9Ub2dnbGUuc3BsaWNlKDAsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGl0ZW1zVG9Ub2dnbGUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgdGhpcy5fYWRkU2VsZWN0ZWRJdGVtKGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRJdGVtc1RvQ29uZmlybSh0aGlzLl9zZWxlY3RlZEl0ZW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGxzIHRvIHRoZSB0b3Agb2YgTW9kYWwgY29udGVudC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2Nyb2xsdG90b3ApLlxuICAgKlxuICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzY3JvbGwgaGFzIGJlZW4gY29tcGxldGVkLlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBzY3JvbGxUb1RvcCgpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGlmICghc2VsZi5faXNPcGVuZWQpIHtcbiAgICAgICAgcmVqZWN0KCdJb25pY1NlbGVjdGFibGUgY29udGVudCBjYW5ub3QgYmUgc2Nyb2xsZWQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5fbW9kYWxDb21wb25lbnQuX2NvbnRlbnQuc2Nyb2xsVG9Ub3AoKS50aGVuKCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xscyB0byB0aGUgYm90dG9tIG9mIE1vZGFsIGNvbnRlbnQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3Njcm9sbHRvYm90dG9tKS5cbiAgICpcbiAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc2Nyb2xsIGhhcyBiZWVuIGNvbXBsZXRlZC5cbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgc2Nyb2xsVG9Cb3R0b20oKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBpZiAoIXNlbGYuX2lzT3BlbmVkKSB7XG4gICAgICAgIHJlamVjdCgnSW9uaWNTZWxlY3RhYmxlIGNvbnRlbnQgY2Fubm90IGJlIHNjcm9sbGVkLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYuX21vZGFsQ29tcG9uZW50Ll9jb250ZW50LnNjcm9sbFRvQm90dG9tKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBzZWFyY2ggcHJvY2VzcyBieSBzaG93aW5nIExvYWRpbmcgc3Bpbm5lci5cbiAgICogVXNlIGl0IHRvZ2V0aGVyIHdpdGggYG9uU2VhcmNoYCBldmVudCB0byBpbmRpY2F0ZSBzZWFyY2ggc3RhcnQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3N0YXJ0c2VhcmNoKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgc3RhcnRTZWFyY2goKSB7XG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dMb2FkaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogRW5kcyBzZWFyY2ggcHJvY2VzcyBieSBoaWRpbmcgTG9hZGluZyBzcGlubmVyIGFuZCByZWZyZXNoaW5nIGl0ZW1zLlxuICAgKiBVc2UgaXQgdG9nZXRoZXIgd2l0aCBgb25TZWFyY2hgIGV2ZW50IHRvIGluZGljYXRlIHNlYXJjaCBlbmQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2VuZHNlYXJjaCkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGVuZFNlYXJjaCgpIHtcbiAgICBpZiAoIXRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcblxuICAgIC8vIFdoZW4gaW5zaWRlIElvbmljIE1vZGFsIGFuZCBvblNlYXJjaCBldmVudCBpcyB1c2VkLFxuICAgIC8vIG5nRG9DaGVjaygpIGRvZXNuJ3Qgd29yayBhcyBfaXRlbXNEaWZmZXIgZmFpbHMgdG8gZGV0ZWN0IGNoYW5nZXMuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvaXNzdWVzLzQ0LlxuICAgIC8vIFJlZnJlc2ggaXRlbXMgbWFudWFsbHkuXG4gICAgdGhpcy5fc2V0SXRlbXModGhpcy5pdGVtcyk7XG4gICAgdGhpcy5fZW1pdE9uU2VhcmNoU3VjY2Vzc09yRmFpbCh0aGlzLl9oYXNGaWx0ZXJlZEl0ZW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIGluZmluaXRlIHNjcm9sbC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jZW5hYmxlaW5maW5pdGVzY3JvbGwpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBlbmFibGVJbmZpbml0ZVNjcm9sbCgpIHtcbiAgICBpZiAoIXRoaXMuX2hhc0luZmluaXRlU2Nyb2xsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kYWxDb21wb25lbnQuX2luZmluaXRlU2Nyb2xsLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgaW5maW5pdGUgc2Nyb2xsLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNkaXNhYmxlaW5maW5pdGVzY3JvbGwpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBkaXNhYmxlSW5maW5pdGVTY3JvbGwoKSB7XG4gICAgaWYgKCF0aGlzLl9oYXNJbmZpbml0ZVNjcm9sbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX21vZGFsQ29tcG9uZW50Ll9pbmZpbml0ZVNjcm9sbC5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRW5kcyBpbmZpbml0ZSBzY3JvbGwuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2VuZGluZmluaXRlc2Nyb2xsKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgZW5kSW5maW5pdGVTY3JvbGwoKSB7XG4gICAgaWYgKCF0aGlzLl9oYXNJbmZpbml0ZVNjcm9sbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX21vZGFsQ29tcG9uZW50Ll9pbmZpbml0ZVNjcm9sbC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX3NldEl0ZW1zKHRoaXMuaXRlbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIHNlYXJjaCBvZiBpdGVtcy5cbiAgICogKipOb3RlKio6IGBjYW5TZWFyY2hgIGhhcyB0byBiZSBlbmFibGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNzZWFyY2gpLlxuICAgKlxuICAgKiBAcGFyYW0gdGV4dCBUZXh0IHRvIHNlYXJjaCBpdGVtcyBieS5cbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgc2VhcmNoKHRleHQ6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5faXNFbmFibGVkIHx8ICF0aGlzLl9pc09wZW5lZCB8fCAhdGhpcy5jYW5TZWFyY2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9zZWFyY2hUZXh0ID0gdGV4dDtcbiAgICB0aGlzLl9zZXRIYXNTZWFyY2hUZXh0KCk7XG4gICAgdGhpcy5fZmlsdGVySXRlbXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBMb2FkaW5nIHNwaW5uZXIuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3Nob3dsb2FkaW5nKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgc2hvd0xvYWRpbmcoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9pc1NlYXJjaGluZyA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgTG9hZGluZyBzcGlubmVyLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNoaWRlbG9hZGluZykuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGhpZGVMb2FkaW5nKCkge1xuICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faXNTZWFyY2hpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBgaW9uaWNTZWxlY3RhYmxlQWRkSXRlbVRlbXBsYXRlYC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2hvd2FkZGl0ZW10ZW1wbGF0ZSkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIHNob3dBZGRJdGVtVGVtcGxhdGUoKSB7XG4gICAgdGhpcy5fdG9nZ2xlQWRkSXRlbVRlbXBsYXRlKHRydWUpO1xuXG4gICAgLy8gUG9zaXRpb24gdGhlIHRlbXBsYXRlIG9ubHkgd2hlbiBpdCBzaG91cyB1cC5cbiAgICB0aGlzLl9wb3NpdGlvbkFkZEl0ZW1UZW1wbGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIGBpb25pY1NlbGVjdGFibGVBZGRJdGVtVGVtcGxhdGVgLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNoaWRlYWRkaXRlbXRlbXBsYXRlKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgaGlkZUFkZEl0ZW1UZW1wbGF0ZSgpIHtcbiAgICAvLyBDbGVhbiBpdGVtIHRvIGFkZCBhcyBpdCdzIG5vIGxvbmdlciBuZWVkZWQgb25jZSBBZGQgSXRlbSBNb2RhbCBoYXMgYmVlbiBjbG9zZWQuXG4gICAgdGhpcy5faXRlbVRvQWRkID0gbnVsbDtcbiAgICB0aGlzLl90b2dnbGVBZGRJdGVtVGVtcGxhdGUoZmFsc2UpO1xuICB9XG59XG4iXX0=