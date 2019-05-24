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
export class IonicSelectableComponent {
    /**
     * @param {?} _modalController
     * @param {?} _platform
     * @param {?} ionItem
     * @param {?} _iterableDiffers
     * @param {?} _element
     * @param {?} _renderer
     */
    constructor(_modalController, _platform, ionItem, _iterableDiffers, _element, _renderer) {
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
        this.virtualScrollHeaderFn = () => {
            return null;
        };
        this.propagateOnChange = (_) => { };
        this.propagateOnTouched = () => { };
        if (!this.items || !this.items.length) {
            this.items = [];
        }
        this._itemsDiffer = this._iterableDiffers.find(this.items).create();
    }
    /**
     * @return {?}
     */
    get _isMultipleCssClass() {
        return this.isMultiple;
    }
    /**
     * @return {?}
     */
    get _hasValueCssClass() {
        return this.hasValue();
    }
    /**
     * @return {?}
     */
    get _hasPlaceholderCssClass() {
        return this._hasPlaceholder;
    }
    /**
     * @return {?}
     */
    get _hasIonLabelCssClass() {
        return this._hasIonLabel;
    }
    /**
     * @return {?}
     */
    get _hasDefaultIonLabelCssClass() {
        return this._ionLabelPosition === 'default';
    }
    /**
     * @return {?}
     */
    get _hasFixedIonLabelCssClass() {
        return this._ionLabelPosition === 'fixed';
    }
    /**
     * @return {?}
     */
    get _hasStackedIonLabelCssClass() {
        return this._ionLabelPosition === 'stacked';
    }
    /**
     * @return {?}
     */
    get _hasFloatingIonLabelCssClass() {
        return this._ionLabelPosition === 'floating';
    }
    /**
     * @return {?}
     */
    get _hasInfiniteScroll() {
        return this.isEnabled && this._modalComponent &&
            this._modalComponent._infiniteScroll ? true : false;
    }
    /**
     * @return {?}
     */
    get _shouldStoreItemValue() {
        return this.shouldStoreItemValue && this._hasObjects;
    }
    /**
     * Text of [Ionic Label](https://ionicframework.com/docs/api/label).
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#label).
     *
     * \@readonly
     * \@default null
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get label() {
        return this._label;
    }
    /**
     * Text that the user has typed in Searchbar.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchtext).
     *
     * \@readonly
     * \@default ''
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get searchText() {
        return this._searchText;
    }
    /**
     * @param {?} searchText
     * @return {?}
     */
    set searchText(searchText) {
        this._searchText = searchText;
        this._setHasSearchText();
    }
    /**
     * Determines whether search is running.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#issearching).
     *
     * \@default false
     * \@readonly
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get isSearching() {
        return this._isSearching;
    }
    /**
     * Determines whether user has typed anything in Searchbar.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hassearchtext).
     *
     * \@default false
     * \@readonly
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get hasSearchText() {
        return this._hasSearchText;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
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
    }
    /**
     * Determines whether the component is enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isenabled).
     *
     * \@default true
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get isEnabled() {
        return this._isEnabled;
    }
    /**
     * @param {?} isEnabled
     * @return {?}
     */
    set isEnabled(isEnabled) {
        this._isEnabled = !!isEnabled;
        this.enableIonItem(this._isEnabled);
    }
    /**
     * Determines whether Modal should be closed when backdrop is clicked.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldbackdropclose).
     *
     * \@default true
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get shouldBackdropClose() {
        return this._shouldBackdropClose;
    }
    /**
     * @param {?} shouldBackdropClose
     * @return {?}
     */
    set shouldBackdropClose(shouldBackdropClose) {
        this._shouldBackdropClose = !!shouldBackdropClose;
    }
    /**
     * Determines whether Modal is opened.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isopened).
     *
     * \@default false
     * \@readonly
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get isOpened() {
        return this._isOpened;
    }
    /**
     * Determines whether Confirm button is visible for single selection.
     * By default Confirm button is visible only for multiple selection.
     * **Note**: It is always true for multiple selection and cannot be changed.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasconfirmbutton).
     *
     * \@default true
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get hasConfirmButton() {
        return this._hasConfirmButton;
    }
    /**
     * @param {?} hasConfirmButton
     * @return {?}
     */
    set hasConfirmButton(hasConfirmButton) {
        this._hasConfirmButton = !!hasConfirmButton;
        this._countFooterButtons();
    }
    /**
     * Determines whether `onSearch` event is enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isonsearchenabled).
     *
     * \@default true
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get isOnSearchEnabled() {
        return this._isOnSearchEnabled;
    }
    /**
     * @param {?} isOnSearchEnabled
     * @return {?}
     */
    set isOnSearchEnabled(isOnSearchEnabled) {
        this._isOnSearchEnabled = !!isOnSearchEnabled;
    }
    /**
     * Determines whether to show Clear button.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#canclear).
     *
     * \@default false
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get canClear() {
        return this._canClear;
    }
    /**
     * @param {?} canClear
     * @return {?}
     */
    set canClear(canClear) {
        this._canClear = !!canClear;
        this._countFooterButtons();
    }
    /**
     * Determines whether multiple items can be selected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#ismultiple).
     *
     * \@default false
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get isMultiple() {
        return this._isMultiple;
    }
    /**
     * @param {?} isMultiple
     * @return {?}
     */
    set isMultiple(isMultiple) {
        this._isMultiple = !!isMultiple;
        this._countFooterButtons();
    }
    /**
     * A list of items that are selected and awaiting confirmation by user, when he has clicked Confirm button.
     * After the user has clicked Confirm button items to confirm are cleared.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemstoconfirm).
     *
     * \@default []
     * \@readonly
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get itemsToConfirm() {
        return this._itemsToConfirm;
    }
    /**
     * Determines whether to allow adding items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#canadditem).
     *
     * \@default false
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get canAddItem() {
        return this._canAddItem;
    }
    /**
     * @param {?} canAddItem
     * @return {?}
     */
    set canAddItem(canAddItem) {
        this._canAddItem = !!canAddItem;
        this._countFooterButtons();
    }
    /**
     * @return {?}
     */
    initFocus() { }
    /**
     * @param {?} isEnabled
     * @return {?}
     */
    enableIonItem(isEnabled) {
        if (!this.ionItem) {
            return;
        }
        this.ionItem.disabled = !isEnabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _isNullOrWhiteSpace(value) {
        if (value === null || value === undefined) {
            return true;
        }
        // Convert value to string in case if it's not.
        return value.toString().replace(/\s/g, '').length < 1;
    }
    /**
     * @return {?}
     */
    _setHasSearchText() {
        this._hasSearchText = !this._isNullOrWhiteSpace(this._searchText);
    }
    /**
     * @return {?}
     */
    _hasOnSearch() {
        return this.isOnSearchEnabled && this.onSearch.observers.length > 0;
    }
    /**
     * @return {?}
     */
    _hasOnSaveItem() {
        return this.canSaveItem && this.onSaveItem.observers.length > 0;
    }
    /**
     * @return {?}
     */
    _hasOnAddItem() {
        return this.canAddItem && this.onAddItem.observers.length > 0;
    }
    /**
     * @return {?}
     */
    _hasOnDeleteItem() {
        return this.canDeleteItem && this.onDeleteItem.observers.length > 0;
    }
    /**
     * @return {?}
     */
    _emitValueChange() {
        this.propagateOnChange(this.value);
        this.onChange.emit({
            component: this,
            value: this.value
        });
    }
    /**
     * @return {?}
     */
    _emitSearch() {
        if (!this.canSearch) {
            return;
        }
        this.onSearch.emit({
            component: this,
            text: this._searchText
        });
    }
    /**
     * @param {?} item
     * @param {?} isSelected
     * @return {?}
     */
    _emitOnSelect(item, isSelected) {
        this.onSelect.emit({
            component: this,
            item: item,
            isSelected: isSelected
        });
    }
    /**
     * @param {?} items
     * @return {?}
     */
    _emitOnClear(items) {
        this.onClear.emit({
            component: this,
            items: items
        });
    }
    /**
     * @param {?} isSuccess
     * @return {?}
     */
    _emitOnSearchSuccessOrFail(isSuccess) {
        const /** @type {?} */ eventData = {
            component: this,
            text: this._searchText
        };
        if (isSuccess) {
            this.onSearchSuccess.emit(eventData);
        }
        else {
            this.onSearchFail.emit(eventData);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _formatItem(item) {
        if (this._isNullOrWhiteSpace(item)) {
            return null;
        }
        return this.itemTextField ? item[this.itemTextField] : item.toString();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _formatValueItem(item) {
        if (this._shouldStoreItemValue) {
            // Get item text from the list as we store it's value only.
            const /** @type {?} */ selectedItem = this.items.find(_item => {
                return _item[this.itemValueField] === item;
            });
            return this._formatItem(selectedItem);
        }
        else {
            return this._formatItem(item);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _getItemValue(item) {
        if (!this._hasObjects) {
            return item;
        }
        return item[this.itemValueField];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _getStoredItemValue(item) {
        if (!this._hasObjects) {
            return item;
        }
        return this._shouldStoreItemValue ? item : item[this.itemValueField];
    }
    /**
     * @return {?}
     */
    _onSearchbarClear() {
        // Ionic Searchbar doesn't clear bind with ngModel value.
        // Do it ourselves.
        this._searchText = '';
    }
    /**
     * @return {?}
     */
    _filterItems() {
        this._setHasSearchText();
        if (this._hasOnSearch()) {
            // Delegate filtering to the event.
            this._emitSearch();
        }
        else {
            // Default filtering.
            let /** @type {?} */ groups = [];
            if (!this._searchText || !this._searchText.trim()) {
                groups = this._groups;
            }
            else {
                const /** @type {?} */ filterText = this._searchText.trim().toLowerCase();
                this._groups.forEach(group => {
                    const /** @type {?} */ items = group.items.filter(item => {
                        const /** @type {?} */ itemText = (this.itemTextField ?
                            item[this.itemTextField] : item).toString().toLowerCase();
                        return itemText.indexOf(filterText) !== -1;
                    });
                    if (items.length) {
                        groups.push({
                            value: group.value,
                            text: group.text,
                            items: items
                        });
                    }
                });
                // No items found.
                if (!groups.length) {
                    groups.push({
                        items: []
                    });
                }
            }
            this._filteredGroups = groups;
            this._hasFilteredItems = !this._areGroupsEmpty(groups);
            this._emitOnSearchSuccessOrFail(this._hasFilteredItems);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _isItemDisabled(item) {
        if (!this.disabledItems) {
            return;
        }
        return this.disabledItems.some(_item => {
            return this._getItemValue(_item) === this._getItemValue(item);
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _isItemSelected(item) {
        return this._selectedItems.find(selectedItem => {
            return this._getItemValue(item) === this._getStoredItemValue(selectedItem);
        }) !== undefined;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _addSelectedItem(item) {
        if (this._shouldStoreItemValue) {
            this._selectedItems.push(this._getItemValue(item));
        }
        else {
            this._selectedItems.push(item);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _deleteSelectedItem(item) {
        let /** @type {?} */ itemToDeleteIndex;
        this._selectedItems.forEach((selectedItem, itemIndex) => {
            if (this._getItemValue(item) ===
                this._getStoredItemValue(selectedItem)) {
                itemToDeleteIndex = itemIndex;
            }
        });
        this._selectedItems.splice(itemToDeleteIndex, 1);
    }
    /**
     * @return {?}
     */
    _click() {
        if (!this.isEnabled) {
            return;
        }
        this._label = this._getLabelText();
        this.open().then(() => {
            this.onOpen.emit({
                component: this
            });
        });
    }
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    _saveItem(event, item) {
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
    }
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    _deleteItemClick(event, item) {
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
    }
    /**
     * @return {?}
     */
    _addItemClick() {
        if (this._hasOnAddItem()) {
            this.onAddItem.emit({
                component: this
            });
        }
        else {
            this.showAddItemTemplate();
        }
    }
    /**
     * @return {?}
     */
    _positionAddItemTemplate() {
        // Wait for the template to render.
        setTimeout(() => {
            const /** @type {?} */ footer = this._modalComponent._element.nativeElement
                .querySelector('.ionic-selectable-add-item-template ion-footer');
            this._addItemTemplateFooterHeight = footer ? `calc(100% - ${footer.offsetHeight}px)` : '100%';
        }, 100);
    }
    /**
     * @return {?}
     */
    _close() {
        this.close().then(() => {
            this.onClose.emit({
                component: this
            });
        });
        if (!this._hasOnSearch()) {
            this._searchText = '';
            this._setHasSearchText();
        }
    }
    /**
     * @return {?}
     */
    _clear() {
        const /** @type {?} */ selectedItems = this._selectedItems;
        this.clear();
        this._emitValueChange();
        this._emitOnClear(selectedItems);
        this.close().then(() => {
            this.onClose.emit({
                component: this
            });
        });
    }
    /**
     * @return {?}
     */
    _getMoreItems() {
        this.onInfiniteScroll.emit({
            component: this,
            text: this._searchText
        });
    }
    /**
     * @param {?} items
     * @return {?}
     */
    _setItemsToConfirm(items) {
        // Return a copy of original array, so it couldn't be changed from outside.
        this._itemsToConfirm = [].concat(items);
    }
    /**
     * @param {?} selectedItem
     * @return {?}
     */
    _doSelect(selectedItem) {
        this.value = selectedItem;
        this._emitValueChange();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _select(item) {
        const /** @type {?} */ isItemSelected = this._isItemSelected(item);
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
    }
    /**
     * @return {?}
     */
    _confirm() {
        this.confirm();
        this._close();
    }
    /**
     * @return {?}
     */
    _getLabelText() {
        return this._ionLabelElement ? this._ionLabelElement.textContent : null;
    }
    /**
     * @param {?} groups
     * @return {?}
     */
    _areGroupsEmpty(groups) {
        return groups.length === 0 || groups.every(group => {
            return !group.items || group.items.length === 0;
        });
    }
    /**
     * @return {?}
     */
    _countFooterButtons() {
        let /** @type {?} */ footerButtonsCount = 0;
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
    }
    /**
     * @param {?} items
     * @return {?}
     */
    _setItems(items) {
        // It's important to have an empty starting group with empty items (groups[0].items),
        // because we bind to it when using VirtualScroll.
        // See https://github.com/eakoriakin/ionic-selectable/issues/70.
        let /** @type {?} */ groups = [{
                items: items || []
            }];
        if (items && items.length) {
            if (this._hasGroups) {
                groups = [];
                items.forEach(item => {
                    const /** @type {?} */ groupValue = this._getPropertyValue(item, this.groupValueField), /** @type {?} */
                    group = groups.find(_group => _group.value === groupValue);
                    if (group) {
                        group.items.push(item);
                    }
                    else {
                        groups.push({
                            value: groupValue,
                            text: this._getPropertyValue(item, this.groupTextField),
                            items: [item]
                        });
                    }
                });
            }
        }
        this._groups = groups;
        this._filteredGroups = this._groups;
        this._hasFilteredItems = !this._areGroupsEmpty(this._filteredGroups);
    }
    /**
     * @param {?} object
     * @param {?} property
     * @return {?}
     */
    _getPropertyValue(object, property) {
        if (!property) {
            return null;
        }
        return property.split('.').reduce((_object, _property) => {
            return _object ? _object[_property] : null;
        }, object);
    }
    /**
     * @param {?} hasFocus
     * @return {?}
     */
    _setIonItemHasFocus(hasFocus) {
        if (!this.ionItem) {
            return;
        }
        // Apply focus CSS class for proper stylying of ion-item/ion-label.
        this._setIonItemCssClass('item-has-focus', hasFocus);
    }
    /**
     * @return {?}
     */
    _setIonItemHasValue() {
        if (!this.ionItem) {
            return;
        }
        // Apply value CSS class for proper stylying of ion-item/ion-label.
        this._setIonItemCssClass('item-has-value', this.hasValue());
    }
    /**
     * @return {?}
     */
    _setHasPlaceholder() {
        this._hasPlaceholder = !this.hasValue() &&
            (!this._isNullOrWhiteSpace(this.placeholder) || this.placeholderTemplate) ?
            true : false;
    }
    /**
     * @param {?} cssClass
     * @param {?} shouldAdd
     * @return {?}
     */
    _setIonItemCssClass(cssClass, shouldAdd) {
        if (!this._ionItemElement) {
            return;
        }
        this._renderer.setElementClass(this._ionItemElement, cssClass, shouldAdd);
    }
    /**
     * @param {?} isVisible
     * @return {?}
     */
    _toggleAddItemTemplate(isVisible) {
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * @param {?} method
     * @return {?}
     */
    registerOnChange(method) {
        this.propagateOnChange = method;
    }
    /**
     * @param {?} method
     * @return {?}
     */
    registerOnTouched(method) {
        this.propagateOnTouched = method;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.isEnabled = !isDisabled;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        const /** @type {?} */ itemsChanges = this._itemsDiffer.diff(this.items);
        if (itemsChanges) {
            this._setItems(this.items);
            this.value = this.value;
            this.onItemsChange.emit({
                component: this
            });
        }
    }
    /**
     * Adds item.
     * **Note**: If you want an item to be added to the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#additem).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} item Item to add.
     * @return {?} Promise that resolves when item has been added.
     */
    addItem(item) {
        const /** @type {?} */ self = this;
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
            self._addItemObservable = self.onItemsChange.asObservable().subscribe(() => {
                self._addItemObservable.unsubscribe();
                resolve();
            }, () => {
                self._addItemObservable.unsubscribe();
                reject();
            });
        });
    }
    /**
     * Deletes item.
     * **Note**: If you want an item to be deleted from the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#deleteitem).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} item Item to delete.
     * @return {?} Promise that resolves when item has been deleted.
     */
    deleteItem(item) {
        const /** @type {?} */ self = this;
        let /** @type {?} */ hasValueChanged = false;
        // Remove deleted item from selected items.
        if (this._selectedItems) {
            this._selectedItems = this._selectedItems.filter(_item => {
                return this._getItemValue(item) !== this._getStoredItemValue(_item);
            });
        }
        // Remove deleted item from value.
        if (this.value) {
            if (this.isMultiple) {
                const /** @type {?} */ values = this.value.filter(value => {
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
        const /** @type {?} */ items = this.items.filter(_item => {
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
            self._deleteItemObservable = self.onItemsChange.asObservable().subscribe(() => {
                self._deleteItemObservable.unsubscribe();
                resolve();
            }, () => {
                self._deleteItemObservable.unsubscribe();
                reject();
            });
        });
    }
    /**
     * Determines whether any item has been selected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvalue).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} A boolean determining whether any item has been selected.
     */
    hasValue() {
        if (this.isMultiple) {
            return this._valueItems.length !== 0;
        }
        else {
            return this._valueItems.length !== 0 && !this._isNullOrWhiteSpace(this._valueItems[0]);
        }
    }
    /**
     * Opens Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#open).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when Modal has been opened.
     */
    open() {
        const /** @type {?} */ self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isEnabled || self._isOpened) {
                reject('IonicSelectable is disabled or already opened.');
                return;
            }
            self._filterItems();
            self._isOpened = true;
            const /** @type {?} */ modalOptions = {
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
            self._modalController.create(modalOptions).then(modal => {
                self._modal = modal;
                modal.present().then(() => {
                    // Set focus after Modal has opened to avoid flickering of focus highlighting
                    // before Modal opening.
                    self._setIonItemHasFocus(true);
                    resolve();
                });
                modal.onWillDismiss().then(() => {
                    self._setIonItemHasFocus(false);
                });
                modal.onDidDismiss().then(event => {
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
    }
    /**
     * Closes Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#close).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when Modal has been closed.
     */
    close() {
        const /** @type {?} */ self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isEnabled || !self._isOpened) {
                reject('IonicSelectable is disabled or already closed.');
                return;
            }
            self.propagateOnTouched();
            self._isOpened = false;
            self._itemToAdd = null;
            self._modal.dismiss().then(() => {
                self._setIonItemHasFocus(false);
                self.hideAddItemTemplate();
                resolve();
            });
        });
    }
    /**
     * Clears value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#clear).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    clear() {
        this.value = this.isMultiple ? [] : null;
        this._itemsToConfirm = [];
        this.propagateOnChange(this.value);
    }
    /**
     * Confirms selected items by updating value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirm).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    confirm() {
        if (this.isMultiple) {
            this._doSelect(this._selectedItems);
        }
        else if (this.hasConfirmButton || this.footerTemplate) {
            this._doSelect(this._selectedItems[0] || null);
        }
    }
    /**
     * Selects or deselects all or specific items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#toggleitems).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} isSelect Determines whether to select or deselect items.
     * @param {?=} items
     * @return {?}
     */
    toggleItems(isSelect, items) {
        if (isSelect) {
            const /** @type {?} */ hasItems = items && items.length;
            let /** @type {?} */ itemsToToggle = this._groups.reduce((allItems, group) => {
                return allItems.concat(group.items);
            }, []);
            // Don't allow to select all items in single mode.
            if (!this.isMultiple && !hasItems) {
                itemsToToggle = [];
            }
            // Toggle specific items.
            if (hasItems) {
                itemsToToggle = itemsToToggle.filter(itemToToggle => {
                    return items.find(item => {
                        return this._getItemValue(itemToToggle) === this._getItemValue(item);
                    }) !== undefined;
                });
                // Take the first item for single mode.
                if (!this.isMultiple) {
                    itemsToToggle.splice(0, 1);
                }
            }
            itemsToToggle.forEach(item => {
                this._addSelectedItem(item);
            });
        }
        else {
            this._selectedItems = [];
        }
        this._setItemsToConfirm(this._selectedItems);
    }
    /**
     * Scrolls to the top of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltotop).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when scroll has been completed.
     */
    scrollToTop() {
        const /** @type {?} */ self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isOpened) {
                reject('IonicSelectable content cannot be scrolled.');
                return;
            }
            self._modalComponent._content.scrollToTop().then(() => {
                resolve();
            });
        });
    }
    /**
     * Scrolls to the bottom of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltobottom).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when scroll has been completed.
     */
    scrollToBottom() {
        const /** @type {?} */ self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isOpened) {
                reject('IonicSelectable content cannot be scrolled.');
                return;
            }
            self._modalComponent._content.scrollToBottom().then(() => {
                resolve();
            });
        });
    }
    /**
     * Starts search process by showing Loading spinner.
     * Use it together with `onSearch` event to indicate search start.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#startsearch).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    startSearch() {
        if (!this._isEnabled) {
            return;
        }
        this.showLoading();
    }
    /**
     * Ends search process by hiding Loading spinner and refreshing items.
     * Use it together with `onSearch` event to indicate search end.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endsearch).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    endSearch() {
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
    }
    /**
     * Enables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#enableinfinitescroll).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    enableInfiniteScroll() {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.disabled = false;
    }
    /**
     * Disables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#disableinfinitescroll).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    disableInfiniteScroll() {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.disabled = true;
    }
    /**
     * Ends infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endinfinitescroll).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    endInfiniteScroll() {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.complete();
        this._setItems(this.items);
    }
    /**
     * Triggers search of items.
     * **Note**: `canSearch` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#search).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} text Text to search items by.
     * @return {?}
     */
    search(text) {
        if (!this._isEnabled || !this._isOpened || !this.canSearch) {
            return;
        }
        this._searchText = text;
        this._setHasSearchText();
        this._filterItems();
    }
    /**
     * Shows Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showloading).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    showLoading() {
        if (!this._isEnabled) {
            return;
        }
        this._isSearching = true;
    }
    /**
     * Hides Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideloading).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    hideLoading() {
        if (!this._isEnabled) {
            return;
        }
        this._isSearching = false;
    }
    /**
     * Shows `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showadditemtemplate).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    showAddItemTemplate() {
        this._toggleAddItemTemplate(true);
        // Position the template only when it shous up.
        this._positionAddItemTemplate();
    }
    /**
     * Hides `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideadditemtemplate).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    hideAddItemTemplate() {
        // Clean item to add as it's no longer needed once Add Item Modal has been closed.
        this._itemToAdd = null;
        this._toggleAddItemTemplate(false);
    }
}
IonicSelectableComponent.decorators = [
    { type: Component, args: [{
                selector: 'ionic-selectable',
                template: "<div class=\"ionic-selectable-inner\">\n  <div class=\"ionic-selectable-value\">\n    <div *ngIf=\"valueTemplate && _valueItems.length && isMultiple\"\n      [ngTemplateOutlet]=\"valueTemplate\"\n      [ngTemplateOutletContext]=\"{ value: _valueItems }\">\n    </div>\n    <div class=\"ionic-selectable-value-item\"\n      *ngIf=\"valueTemplate && _valueItems.length && !isMultiple\">\n      <div [ngTemplateOutlet]=\"valueTemplate\"\n        [ngTemplateOutletContext]=\"{ value: _valueItems[0] }\">\n      </div>\n    </div>\n    <span *ngIf=\"!valueTemplate && _valueItems.length\">\n      <div class=\"ionic-selectable-value-item\"\n        *ngFor=\"let valueItem of _valueItems\">\n        {{_formatValueItem(valueItem)}}\n      </div>\n    </span>\n    <div *ngIf=\"_hasPlaceholder && placeholderTemplate\"\n      class=\"ionic-selectable-value-item\">\n      <div [ngTemplateOutlet]=\"placeholderTemplate\">\n      </div>\n    </div>\n    <div class=\"ionic-selectable-value-item\"\n      *ngIf=\"_hasPlaceholder && !placeholderTemplate\">\n      {{placeholder}}\n    </div>\n    <!-- Fix icon allignment when there's no value or placeholder. -->\n    <span *ngIf=\"!_valueItems.length && !_hasPlaceholder\">&nbsp;</span>\n  </div>\n  <div class=\"ionic-selectable-icon\">\n    <div class=\"ionic-selectable-icon-inner\"></div>\n  </div>\n  <!-- Need to be type=\"button\" otherwise click event triggers form ngSubmit. -->\n  <button class=\"ionic-selectable-cover\" [disabled]=\"!isEnabled\"\n    (click)=\"_click()\" type=\"button\">\n  </button>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => IonicSelectableComponent),
                        multi: true
                    }],
                styles: [".item-ionic-selectable .item-inner .input-wrapper{align-items:normal}.item-ionic-selectable ion-label{flex:1;max-width:initial}.ionic-selectable{display:block;max-width:45%}.ionic-selectable-inner{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:flex-end}.ionic-selectable-has-placeholder .ionic-selectable-value-item{color:var(--placeholder-color,#999)}.ionic-selectable-value{flex:1;padding-top:13px;padding-bottom:13px;overflow:hidden}.ionic-selectable-value-item{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.ionic-selectable-value-item:not(:last-child){margin-bottom:5px}.ionic-selectable-icon{position:relative;width:20px}.ionic-selectable-icon-inner{position:absolute;top:20px;left:5px;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;pointer-events:none;color:var(--icon-color,#999)}.ionic-selectable-ios .ionic-selectable-value{padding-top:11px;padding-bottom:11px}.ionic-selectable-ios .ionic-selectable-icon-inner{top:19px}.ionic-selectable-spinner{position:fixed;bottom:0;top:0;left:0;right:0;z-index:1}.ionic-selectable-spinner-background{top:0;bottom:0;left:0;right:0;position:absolute;background-color:#000;opacity:.05}.ionic-selectable-spinner ion-spinner{position:absolute;top:50%;left:50%;z-index:10;margin-top:-14px;margin-left:-14px}.ionic-selectable-cover{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0}.ionic-selectable-add-item-template{position:fixed;bottom:0;left:0;right:0;background-color:#fff}.ionic-selectable-add-item-template-inner{overflow-y:auto}.ionic-selectable-add-item-template-inner>ion-footer{bottom:0;position:absolute}.ionic-selectable:not(.ionic-selectable-has-label){max-width:100%;width:100%}.ionic-selectable:not(.ionic-selectable-has-label)-value-item{text-align:right}.ionic-selectable-label-floating,.ionic-selectable-label-stacked{-ms-grid-row-align:stretch;align-self:stretch;max-width:100%;padding-left:0;padding-top:8px;padding-bottom:8px}.ionic-selectable-label-floating .ionic-selectable-value,.ionic-selectable-label-stacked .ionic-selectable-value{padding-top:0;padding-bottom:0;min-height:19px}.ionic-selectable-label-floating .ionic-selectable-icon-inner,.ionic-selectable-label-stacked .ionic-selectable-icon-inner{top:7px}.ionic-selectable-label-floating.ionic-selectable-ios .ionic-selectable-value,.ionic-selectable-label-stacked.ionic-selectable-ios .ionic-selectable-value{padding-top:0;padding-bottom:0;min-height:20px}.ionic-selectable-label-floating.ionic-selectable-ios .ionic-selectable-icon-inner,.ionic-selectable-label-stacked.ionic-selectable-ios .ionic-selectable-icon-inner{top:8px}.ionic-selectable-label-default .ionic-selectable-value,.ionic-selectable-label-fixed .ionic-selectable-value{padding-left:var(--padding-start,16px)}.ionic-selectable-label-fixed:not(.ionic-selectable-has-value) .ionic-selectable-value{padding-left:calc(var(--padding-start,$padding) + 11px)}.ionic-selectable-modal .ionic-selectable-group ion-item-divider{padding-right:16px}.ionic-selectable-modal .ionic-selectable-item-button{margin-left:8px;margin-right:8px}.ionic-selectable-modal-ios .ionic-selectable-message{padding:8px}.ionic-selectable-modal-ios .ionic-selectable-group ion-item-divider{padding-right:8px}.ionic-selectable-modal-md .ionic-selectable-message{padding:8px 12px}.ionic-selectable-modal.ionic-selectable-modal-can-clear.ionic-selectable-modal-is-multiple .footer .col:first-child{padding-right:8px}.ionic-selectable-modal.ionic-selectable-modal-can-clear.ionic-selectable-modal-is-multiple .footer .col:last-child{padding-left:8px}.ionic-selectable-modal.ionic-selectable-modal-is-add-item-template-visible>.content>.scroll-content,.ionic-selectable-modal.ionic-selectable-modal-is-searching .scroll-content{overflow-y:hidden}"]
            }] }
];
/** @nocollapse */
IonicSelectableComponent.ctorParameters = () => [
    { type: ModalController, },
    { type: Platform, },
    { type: IonItem, decorators: [{ type: Optional },] },
    { type: IterableDiffers, },
    { type: ElementRef, },
    { type: Renderer, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc2VsZWN0YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYy1zZWxlY3RhYmxlLyIsInNvdXJjZXMiOlsic3JjL2FwcC9jb21wb25lbnRzL2lvbmljLXNlbGVjdGFibGUvaW9uaWMtc2VsZWN0YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsc0JBQXNCO0FBQ2hPLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUI7QUFDekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLHVCQUF1QjtBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLG9CQUFvQjtBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWE7QUFDcEMsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLHVEQUF1RDtBQUN6RyxPQUFPLEVBQUUsMkNBQTJDLEVBQUUsMkRBQTJEO0FBQ2pILE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxxREFBcUQ7QUFDdEcsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLHdEQUF3RDtBQUMzRyxPQUFPLEVBQUUscUNBQXFDLEVBQUUsb0RBQW9EO0FBQ3BHLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxxREFBcUQ7QUFDdEcsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLHVEQUF1RDtBQUN6RyxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsd0RBQXdEO0FBQzNHLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxtREFBbUQ7QUFDbEcsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLHNEQUFzRDtBQUN4RyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsMkNBQTJDO0FBQ25GLE9BQU8sRUFBRSwyQ0FBMkMsRUFBRSwwREFBMEQ7QUFDaEgsT0FBTyxFQUFFLDBDQUEwQyxFQUFFLDBEQUEwRDtBQUMvRyxPQUFPLEVBQUUscUNBQXFDLEVBQUUsb0RBQW9EO0FBQ3BHLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxvREFBb0Q7QUFhcEcsTUFBTTs7Ozs7Ozs7O0lBNHZCSixZQUNVLGtCQUNBLFdBQ1ksU0FDWixrQkFDQSxVQUNBO1FBTEEscUJBQWdCLEdBQWhCLGdCQUFnQjtRQUNoQixjQUFTLEdBQVQsU0FBUztRQUNHLFlBQU8sR0FBUCxPQUFPO1FBQ25CLHFCQUFnQixHQUFoQixnQkFBZ0I7UUFDaEIsYUFBUSxHQUFSLFFBQVE7UUFDUixjQUFTLEdBQVQsU0FBUzt5QkFod0JQLElBQUk7a0NBcUNhLElBQUk7MEJBQ1osSUFBSTtvQ0FDTSxJQUFJO3lCQUNmLEtBQUs7c0JBQ0gsSUFBSTt5QkFJTixLQUFLO2lDQUNHLEtBQUs7MkJBQ1gsS0FBSzsyQkFDTCxLQUFLOzZCQUdnQixJQUFJLFlBQVksRUFBRTs0QkFHdEMsS0FBSztpQ0FDcUQsSUFBSTtzQkFDNUQsSUFBSTsyQkFRUixFQUFFOzJCQUNULEVBQUU7OEJBQ0MsS0FBSzt1QkFDTCxFQUFFOytCQUNNLEVBQUU7OEJBQ0gsRUFBRTsrQkFFRCxFQUFFO3lDQUlDLEtBQUs7Z0NBQ2QsSUFBSTswQkFDTCxJQUFJO21DQUNBLENBQUM7aUNBQ0gsS0FBSzs7Ozs7Ozs7cUJBcUZWLEVBQUU7MkJBRWdCLElBQUksWUFBWSxFQUFFOzs7Ozs7Ozs2QkEwQzNCLElBQUk7Ozs7Ozs7O21DQVVZLElBQUk7Ozs7Ozs7O21DQVVKLElBQUk7Ozs7Ozs7O3NDQXNCbkIsSUFBSTs7Ozs7Ozs7OzhCQTZCSixJQUFJOzs7Ozs7Ozs7NkJBV0wsSUFBSTs7Ozs7Ozs7OzsrQkFZRixJQUFJOzs7Ozs7Ozs7OEJBV0wsSUFBSTs7Ozs7Ozs7eUJBVWpCLEtBQUs7Ozs7Ozs7OztpQ0EyQ0csS0FBSzs7Ozs7Ozs7O2dDQVdOLEtBQUs7Ozs7Ozs7OzZDQVVRLE1BQU07Ozs7Ozs7O2lDQVVsQixRQUFROzs7Ozs7OzsyQkFVTixJQUFJOzs7Ozs7Ozs4QkEwQlQsaUJBQWlCOzs7Ozs7OzsrQkFVaEIsT0FBTzs7Ozs7Ozs7NkJBVVQsS0FBSzs7Ozs7Ozs7aUNBVUQsSUFBSTs7Ozs7Ozs7OytCQVdOLFFBQVE7Ozs7Ozs7O29DQVVILEtBQUs7Ozs7Ozs7OzJCQVVOLElBQUk7Ozs7Ozs7OzBCQVVMLElBQUk7Ozs7Ozs7OytCQVVQLE9BQU87Ozs7Ozs7OzRCQVVWLE9BQU87Ozs7Ozs7d0JBU3dELElBQUksWUFBWSxFQUFFOzs7Ozs7Ozt3QkFVaEIsSUFBSSxZQUFZLEVBQUU7Ozs7Ozs7NEJBU2QsSUFBSSxZQUFZLEVBQUU7Ozs7Ozs7K0JBU2YsSUFBSSxZQUFZLEVBQUU7Ozs7Ozs7O2dDQVVqQixJQUFJLFlBQVksRUFBRTs7Ozs7OztzQkFTMUMsSUFBSSxZQUFZLEVBQUU7Ozs7Ozs7dUJBU2pCLElBQUksWUFBWSxFQUFFOzs7Ozs7O3dCQVNlLElBQUksWUFBWSxFQUFFOzs7Ozs7O3VCQVNyQyxJQUFJLFlBQVksRUFBRTs7Ozs7Ozs7OEJBdUJ4RSxHQUFHOzs7Ozs7Ozs2QkFVTCxFQUFFOzs7Ozs7Ozs7b0NBV0YsS0FBSzs7Ozs7Ozs7MkJBVWQsS0FBSzs7Ozs7Ozs7NkJBVUgsS0FBSzs7Ozs7Ozs7OzBCQTJCMEQsSUFBSSxZQUFZLEVBQUU7Ozs7Ozs7OzRCQVVoQixJQUFJLFlBQVksRUFBRTs7Ozs7Ozs7O3lCQVdoQyxJQUFJLFlBQVksRUFBRTs7Ozs7OztxQ0F1QzdELEdBQUcsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQztTQUNiO2lDQXllMkIsQ0FBQyxDQUFNLEVBQUUsRUFBRSxJQUFJO2tDQUNkLEdBQUcsRUFBRSxJQUFJO1FBaGVwQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUNyRTs7OztRQWp3QkcsbUJBQW1CO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQzs7Ozs7UUFHckIsaUJBQWlCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOzs7OztRQUdyQix1QkFBdUI7UUFDekIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDOzs7OztRQUcxQixvQkFBb0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDOzs7OztRQUd2QiwyQkFBMkI7UUFDN0IsT0FBTyxJQUFJLENBQUMsaUJBQWlCLEtBQUssU0FBUyxDQUFDOzs7OztRQUcxQyx5QkFBeUI7UUFDM0IsT0FBTyxJQUFJLENBQUMsaUJBQWlCLEtBQUssT0FBTyxDQUFDOzs7OztRQUd4QywyQkFBMkI7UUFDN0IsT0FBTyxJQUFJLENBQUMsaUJBQWlCLEtBQUssU0FBUyxDQUFDOzs7OztRQUcxQyw0QkFBNEI7UUFDOUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLEtBQUssVUFBVSxDQUFDOzs7OztRQXNCbkMsa0JBQWtCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsZUFBZTtZQUMzQyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Ozs7O0lBRXhELElBQUkscUJBQXFCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7S0FDdEQ7Ozs7Ozs7Ozs7SUEwQkQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3BCOzs7Ozs7Ozs7O0lBVUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3pCOzs7OztJQUNELElBQUksVUFBVSxDQUFDLFVBQWtCO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQzFCOzs7Ozs7Ozs7O0lBVUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQzFCOzs7Ozs7Ozs7O0lBVUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0tBQzVCOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3BCOzs7OztJQUNELElBQUksS0FBSyxDQUFDLEtBQVU7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7O1FBR3BCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUN6QixLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNyRDtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM5QjtTQUNGO1FBRUQsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7S0FDM0I7Ozs7Ozs7OztRQXVCRyxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDOzs7Ozs7SUFFekIsSUFBSSxTQUFTLENBQUMsU0FBa0I7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3JDOzs7Ozs7Ozs7UUFVRyxtQkFBbUI7UUFDckIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7Ozs7OztJQUVuQyxJQUFJLG1CQUFtQixDQUFDLG1CQUE0QjtRQUNsRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO0tBQ25EOzs7Ozs7Ozs7O0lBd0NELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN2Qjs7Ozs7Ozs7Ozs7UUFzQkcsZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDOzs7Ozs7SUFFaEMsSUFBSSxnQkFBZ0IsQ0FBQyxnQkFBeUI7UUFDNUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM1QyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztLQUM1Qjs7Ozs7Ozs7O1FBaUVHLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQzs7Ozs7O0lBRWpDLElBQUksaUJBQWlCLENBQUMsaUJBQTBCO1FBQzlDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsaUJBQWlCLENBQUM7S0FDL0M7Ozs7Ozs7OztRQVdHLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7Ozs7OztJQUV4QixJQUFJLFFBQVEsQ0FBQyxRQUFpQjtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7S0FDNUI7Ozs7Ozs7OztRQThERyxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDOzs7Ozs7SUFFMUIsSUFBSSxVQUFVLENBQUMsVUFBbUI7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0tBQzVCOzs7Ozs7Ozs7OztJQW1NRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0tBQzdCOzs7Ozs7Ozs7UUE2REcsVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQzs7Ozs7O0lBRTFCLElBQUksVUFBVSxDQUFDLFVBQW1CO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUNoQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztLQUM1Qjs7OztJQTBGRCxTQUFTLE1BQU07Ozs7O0lBRWYsYUFBYSxDQUFDLFNBQWtCO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsU0FBUyxDQUFDO0tBQ3BDOzs7OztJQUVELG1CQUFtQixDQUFDLEtBQVU7UUFDNUIsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUM7U0FDYjs7UUFHRCxPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7S0FDdkQ7Ozs7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUNuRTs7OztJQUVELFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0tBQ3JFOzs7O0lBRUQsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0tBQ2pFOzs7O0lBRUQsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0tBQy9EOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7S0FDckU7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2pCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2pCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ3ZCLENBQUMsQ0FBQztLQUNKOzs7Ozs7SUFFRCxhQUFhLENBQUMsSUFBUyxFQUFFLFVBQW1CO1FBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2pCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsSUFBSSxFQUFFLElBQUk7WUFDVixVQUFVLEVBQUUsVUFBVTtTQUN2QixDQUFDLENBQUM7S0FDSjs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBWTtRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNoQixTQUFTLEVBQUUsSUFBSTtZQUNmLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBRUQsMEJBQTBCLENBQUMsU0FBa0I7UUFDM0MsdUJBQU0sU0FBUyxHQUFHO1lBQ2hCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ3ZCLENBQUM7UUFFRixJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNuQztLQUNGOzs7OztJQUVELFdBQVcsQ0FBQyxJQUFTO1FBQ25CLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUN4RTs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxJQUFTO1FBQ3hCLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFOztZQUU5Qix1QkFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzNDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxJQUFJLENBQUM7YUFDNUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3ZDO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7S0FDRjs7Ozs7SUFFRCxhQUFhLENBQUMsSUFBUztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQ2xDOzs7OztJQUVELG1CQUFtQixDQUFDLElBQVM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDdEU7Ozs7SUFFRCxpQkFBaUI7OztRQUdmLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0tBQ3ZCOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXpCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFOztZQUV2QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7YUFBTTs7WUFFTCxxQkFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBRWhCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDakQsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDdkI7aUJBQU07Z0JBQ0wsdUJBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBRXpELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUMzQix1QkFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQ3RDLHVCQUFNLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzs0QkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBQzVELE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztxQkFDNUMsQ0FBQyxDQUFDO29CQUVILElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTt3QkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQzs0QkFDVixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7NEJBQ2xCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTs0QkFDaEIsS0FBSyxFQUFFLEtBQUs7eUJBQ2IsQ0FBQyxDQUFDO3FCQUNKO2lCQUNGLENBQUMsQ0FBQzs7Z0JBR0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7b0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUM7d0JBQ1YsS0FBSyxFQUFFLEVBQUU7cUJBQ1YsQ0FBQyxDQUFDO2lCQUNKO2FBQ0Y7WUFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztZQUM5QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUN6RDtLQUNGOzs7OztJQUVELGVBQWUsQ0FBQyxJQUFTO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZCLE9BQU87U0FDUjtRQUVELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0QsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBRUQsZUFBZSxDQUFDLElBQVM7UUFDdkIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUM3QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzVFLENBQUMsS0FBSyxTQUFTLENBQUM7S0FDbEI7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsSUFBUztRQUN4QixJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDcEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO0tBQ0Y7Ozs7O0lBRUQsbUJBQW1CLENBQUMsSUFBUztRQUMzQixxQkFBSSxpQkFBaUIsQ0FBQztRQUV0QixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsRUFBRTtZQUN0RCxJQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO2dCQUN4QixJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLEVBQ3RDO2dCQUNBLGlCQUFpQixHQUFHLFNBQVMsQ0FBQzthQUMvQjtTQUNGLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ2xEOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNmLFNBQVMsRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQztTQUNKLENBQUMsQ0FBQztLQUNKOzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBWSxFQUFFLElBQVM7UUFDL0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUNuQixTQUFTLEVBQUUsSUFBSTtnQkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVU7YUFDdEIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzVCO0tBQ0Y7Ozs7OztJQUVELGdCQUFnQixDQUFDLEtBQVksRUFBRSxJQUFTO1FBQ3RDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUV2QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFOztZQUUzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDckIsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVO2FBQ3RCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNsQztLQUNGOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUNsQixTQUFTLEVBQUUsSUFBSTthQUNoQixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDNUI7S0FDRjs7OztJQUVELHdCQUF3Qjs7UUFFdEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLHVCQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxhQUFhO2lCQUN2RCxhQUFhLENBQUMsZ0RBQWdELENBQUMsQ0FBQztZQUVuRSxJQUFJLENBQUMsNEJBQTRCLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxlQUFlLE1BQU0sQ0FBQyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQy9GLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDVDs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDaEIsU0FBUyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtLQUNGOzs7O0lBRUQsTUFBTTtRQUNKLHVCQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRTFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLFNBQVMsRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQztTQUNKLENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7WUFDekIsU0FBUyxFQUFFLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDdkIsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBRUQsa0JBQWtCLENBQUMsS0FBWTs7UUFFN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pDOzs7OztJQUVELFNBQVMsQ0FBQyxZQUFpQjtRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztLQUN6Qjs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBUztRQUNmLHVCQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLGNBQWMsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM3QjtZQUVELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7OztZQUk3QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFOzs7Z0JBR2hELElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO2dCQUV6QixJQUFJLGNBQWMsRUFBRTtvQkFDbEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNoQztxQkFBTTtvQkFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzdCO2dCQUVELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7OztnQkFJN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUMzQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsY0FBYyxFQUFFO29CQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztvQkFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDOztvQkFHNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBRS9CLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO3dCQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztxQkFDMUM7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDdEI7aUJBQ0Y7Z0JBRUQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2Y7U0FDRjtLQUNGOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUNmOzs7O0lBRU8sYUFBYTtRQUNuQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOzs7Ozs7SUFHbEUsZUFBZSxDQUFDLE1BQU07UUFDNUIsT0FBTyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pELE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztTQUNqRCxDQUFDLENBQUM7Ozs7O0lBR0csbUJBQW1CO1FBQ3pCLHFCQUFJLGtCQUFrQixHQUFHLENBQUMsQ0FBQztRQUUzQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsa0JBQWtCLEVBQUUsQ0FBQztTQUN0QjtRQUVELElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDN0Msa0JBQWtCLEVBQUUsQ0FBQztTQUN0QjtRQUVELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixrQkFBa0IsRUFBRSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGtCQUFrQixDQUFDOzs7Ozs7SUFHeEMsU0FBUyxDQUFDLEtBQVk7Ozs7UUFJNUIscUJBQUksTUFBTSxHQUFVLENBQUM7Z0JBQ25CLEtBQUssRUFBRSxLQUFLLElBQUksRUFBRTthQUNuQixDQUFDLENBQUM7UUFFSCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ3pCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFFWixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNuQix1QkFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDO29CQUNuRSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssVUFBVSxDQUFDLENBQUM7b0JBRTdELElBQUksS0FBSyxFQUFFO3dCQUNULEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUN4Qjt5QkFBTTt3QkFDTCxNQUFNLENBQUMsSUFBSSxDQUFDOzRCQUNWLEtBQUssRUFBRSxVQUFVOzRCQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDOzRCQUN2RCxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUJBQ2QsQ0FBQyxDQUFDO3FCQUNKO2lCQUNGLENBQUMsQ0FBQzthQUNKO1NBQ0Y7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Ozs7Ozs7SUFHL0QsaUJBQWlCLENBQUMsTUFBVyxFQUFFLFFBQWdCO1FBQ3JELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRTtZQUN2RCxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7U0FDNUMsRUFBRSxNQUFNLENBQUMsQ0FBQzs7Ozs7O0lBR0wsbUJBQW1CLENBQUMsUUFBaUI7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsT0FBTztTQUNSOztRQUdELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQzs7Ozs7SUFHL0MsbUJBQW1CO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU87U0FDUjs7UUFHRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Ozs7O0lBR3RELGtCQUFrQjtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNyQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1lBQzNFLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDOzs7Ozs7O0lBTVQsbUJBQW1CLENBQUMsUUFBZ0IsRUFBRSxTQUFrQjtRQUM5RCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQzs7Ozs7O0lBR3BFLHNCQUFzQixDQUFDLFNBQWtCOzs7O1FBSS9DLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLE9BQU87U0FDUjs7O1FBSUQsSUFBSSxDQUFDLHlCQUF5QixHQUFHLFNBQVMsQ0FBQztRQUMzQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxTQUFTLENBQUM7Ozs7OztJQUlyQyxVQUFVLENBQUMsS0FBVTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUNwQjs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxNQUFXO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUM7S0FDakM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsTUFBa0I7UUFDbEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQztLQUNsQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsVUFBVSxDQUFDO0tBQzlCOzs7O0lBR0QsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7OztRQUdsRSxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUU5RixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUV4RCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFFeEUsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO29CQUN6QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxTQUFTLENBQUM7aUJBQ3RGO2FBQ0Y7U0FDRjtRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3BDOzs7O0lBRUQsU0FBUztRQUNQLHVCQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFeEQsSUFBSSxZQUFZLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBRXhCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO2dCQUN0QixTQUFTLEVBQUUsSUFBSTthQUNoQixDQUFDLENBQUM7U0FDSjtLQUNGOzs7Ozs7Ozs7O0lBV0QsT0FBTyxDQUFDLElBQVM7UUFDZix1QkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDOzs7OztRQU1sQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7UUFHekIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRSxNQUFNOzs7WUFHMUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDekUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN0QyxPQUFPLEVBQUUsQ0FBQzthQUNYLEVBQUUsR0FBRyxFQUFFO2dCQUNOLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDdEMsTUFBTSxFQUFFLENBQUM7YUFDVixDQUFDLENBQUM7U0FDSixDQUFDLENBQUM7S0FDSjs7Ozs7Ozs7OztJQVdELFVBQVUsQ0FBQyxJQUFTO1FBQ2xCLHVCQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIscUJBQUksZUFBZSxHQUFHLEtBQUssQ0FBQzs7UUFHNUIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDckUsQ0FBQyxDQUFDO1NBQ0o7O1FBR0QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQix1QkFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3ZDLE9BQU8sS0FBSyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDO2lCQUM3QixDQUFDLENBQUM7Z0JBRUgsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO29CQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztvQkFDcEIsZUFBZSxHQUFHLElBQUksQ0FBQztpQkFDeEI7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDbEIsZUFBZSxHQUFHLElBQUksQ0FBQztpQkFDeEI7YUFDRjtTQUNGO1FBRUQsSUFBSSxlQUFlLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7O1FBR0QsdUJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3RDLE9BQU8sS0FBSyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDO1NBQzdCLENBQUMsQ0FBQzs7UUFHSCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7UUFHN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztZQUN0QixTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFDLENBQUM7O1FBR0gsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDOUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzFDO1FBRUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRSxNQUFNOzs7WUFHMUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDNUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN6QyxPQUFPLEVBQUUsQ0FBQzthQUNYLEVBQUUsR0FBRyxFQUFFO2dCQUNOLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDekMsTUFBTSxFQUFFLENBQUM7YUFDVixDQUFDLENBQUM7U0FDSixDQUFDLENBQUM7S0FDSjs7Ozs7Ozs7SUFTRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEY7S0FDRjs7Ozs7Ozs7SUFTRCxJQUFJO1FBQ0YsdUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDdEMsTUFBTSxDQUFDLGdEQUFnRCxDQUFDLENBQUM7Z0JBQ3pELE9BQU87YUFDUjtZQUVELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUV0Qix1QkFBTSxZQUFZLEdBQWlCO2dCQUNqQyxTQUFTLEVBQUUsNkJBQTZCO2dCQUN4QyxjQUFjLEVBQUUsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFO2dCQUN6QyxlQUFlLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjthQUMzQyxDQUFDO1lBRUYsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixZQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7YUFDNUM7WUFFRCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtnQkFDNUIsWUFBWSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7YUFDeEQ7WUFFRCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtnQkFDNUIsWUFBWSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7YUFDeEQ7WUFFRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDdEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFOzs7b0JBR3hCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDL0IsT0FBTyxFQUFFLENBQUM7aUJBQ1gsQ0FBQyxDQUFDO2dCQUVILEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUM5QixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2pDLENBQUMsQ0FBQztnQkFFSCxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7O29CQUcxQixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO3dCQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzs0QkFDaEIsU0FBUyxFQUFFLElBQUk7eUJBQ2hCLENBQUMsQ0FBQztxQkFDSjtpQkFDRixDQUFDLENBQUM7YUFDSixDQUFDLENBQUM7U0FDSixDQUFDLENBQUM7S0FDSjs7Ozs7Ozs7SUFTRCxLQUFLO1FBQ0gsdUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUN2QyxNQUFNLENBQUMsZ0RBQWdELENBQUMsQ0FBQztnQkFDekQsT0FBTzthQUNSO1lBRUQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUM5QixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUMzQixPQUFPLEVBQUUsQ0FBQzthQUNYLENBQUMsQ0FBQztTQUNKLENBQUMsQ0FBQztLQUNKOzs7Ozs7OztJQVFELEtBQUs7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEM7Ozs7Ozs7O0lBUUQsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNyQzthQUFNLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1NBQ2hEO0tBQ0Y7Ozs7Ozs7Ozs7SUFVRCxXQUFXLENBQUMsUUFBaUIsRUFBRSxLQUFhO1FBQzFDLElBQUksUUFBUSxFQUFFO1lBQ1osdUJBQU0sUUFBUSxHQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3ZDLHFCQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDMUQsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztZQUdQLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQyxhQUFhLEdBQUcsRUFBRSxDQUFDO2FBQ3BCOztZQUdELElBQUksUUFBUSxFQUFFO2dCQUNaLGFBQWEsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUNsRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQ3ZCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUN0RSxDQUFDLEtBQUssU0FBUyxDQUFDO2lCQUNsQixDQUFDLENBQUM7O2dCQUdILElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNwQixhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDNUI7YUFDRjtZQUVELGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM3QixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7U0FDMUI7UUFFRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQzlDOzs7Ozs7OztJQVNELFdBQVc7UUFDVCx1QkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWxCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTTtZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbkIsTUFBTSxDQUFDLDZDQUE2QyxDQUFDLENBQUM7Z0JBQ3RELE9BQU87YUFDUjtZQUVELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3BELE9BQU8sRUFBRSxDQUFDO2FBQ1gsQ0FBQyxDQUFDO1NBQ0osQ0FBQyxDQUFDO0tBQ0o7Ozs7Ozs7O0lBU0QsY0FBYztRQUNaLHVCQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFFbEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRSxNQUFNO1lBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNuQixNQUFNLENBQUMsNkNBQTZDLENBQUMsQ0FBQztnQkFDdEQsT0FBTzthQUNSO1lBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDdkQsT0FBTyxFQUFFLENBQUM7YUFDWCxDQUFDLENBQUM7U0FDSixDQUFDLENBQUM7S0FDSjs7Ozs7Ozs7O0lBU0QsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQjs7Ozs7Ozs7O0lBU0QsU0FBUztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7Ozs7UUFNbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0tBQ3pEOzs7Ozs7OztJQVFELG9CQUFvQjtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7S0FDdkQ7Ozs7Ozs7O0lBUUQscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDNUIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztLQUN0RDs7Ozs7Ozs7SUFRRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzVCOzs7Ozs7Ozs7O0lBVUQsTUFBTSxDQUFDLElBQVk7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUMxRCxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDckI7Ozs7Ozs7O0lBUUQsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0tBQzFCOzs7Ozs7OztJQVFELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztLQUMzQjs7Ozs7Ozs7SUFRRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDOztRQUdsQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztLQUNqQzs7Ozs7Ozs7SUFRRCxtQkFBbUI7O1FBRWpCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwQzs7O1lBbHlERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsd2lEQUFnRDtnQkFFaEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDO3dCQUNWLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsd0JBQXdCLENBQUM7d0JBQ3ZELEtBQUssRUFBRSxJQUFJO3FCQUNaLENBQUM7O2FBQ0g7Ozs7WUE3QmlCLGVBQWU7WUFBRSxRQUFRO1lBQWxDLE9BQU8sdUJBNnhCWCxRQUFRO1lBL3hCd0csZUFBZTtZQUF6RixVQUFVO1lBQTJHLFFBQVE7OzswQkFpQ3JLLFdBQVcsU0FBQyx3QkFBd0I7dUJBRXBDLFdBQVcsU0FBQyw0QkFBNEI7c0JBRXhDLFdBQVcsU0FBQywyQkFBMkI7b0NBRXZDLFdBQVcsU0FBQyxvQ0FBb0M7a0NBSWhELFdBQVcsU0FBQyxrQ0FBa0M7d0NBSTlDLFdBQVcsU0FBQyx3Q0FBd0M7cUNBSXBELFdBQVcsU0FBQyxrQ0FBa0M7NENBSTlDLFdBQVcsU0FBQyxzQ0FBc0M7MENBSWxELFdBQVcsU0FBQyxvQ0FBb0M7NENBSWhELFdBQVcsU0FBQyxzQ0FBc0M7NkNBSWxELFdBQVcsU0FBQyx1Q0FBdUM7c0JBa0luRCxLQUFLOzRCQUVMLE1BQU07MEJBVU4sV0FBVyxTQUFDLG1DQUFtQyxjQUMvQyxLQUFLLFNBQUMsV0FBVztvQ0FnQmpCLEtBQUssU0FBQyxxQkFBcUI7OEJBZTNCLEtBQUs7b0NBVUwsS0FBSztvQ0FVTCxLQUFLO3VDQXNCTCxLQUFLO2lDQVlMLEtBQUssU0FBQyxrQkFBa0I7K0JBaUJ4QixLQUFLOzhCQVdMLEtBQUs7Z0NBWUwsS0FBSzsrQkFXTCxLQUFLOzBCQVVMLEtBQUs7a0NBVUwsS0FBSyxTQUFDLG1CQUFtQjt5QkFlekIsV0FBVyxTQUFDLGtDQUFrQyxjQUM5QyxLQUFLLFNBQUMsVUFBVTtrQ0FpQmhCLEtBQUs7aUNBV0wsS0FBSzs4Q0FVTCxLQUFLO2tDQVVMLEtBQUs7NEJBVUwsS0FBSzsyQkFVTCxLQUFLLFNBQUMsWUFBWTsrQkFnQmxCLEtBQUs7Z0NBVUwsS0FBSzs4QkFVTCxLQUFLO2tDQVVMLEtBQUs7Z0NBV0wsS0FBSztxQ0FVTCxLQUFLOzRCQVVMLEtBQUs7MkJBVUwsS0FBSztnQ0FVTCxLQUFLOzZCQVVMLEtBQUs7eUJBU0wsTUFBTTt5QkFVTixNQUFNOzZCQVNOLE1BQU07Z0NBU04sTUFBTTtpQ0FVTixNQUFNO3VCQVNOLE1BQU07d0JBU04sTUFBTTt5QkFTTixNQUFNO3dCQVNOLE1BQU07K0JBdUJOLEtBQUs7OEJBVUwsS0FBSztxQ0FXTCxLQUFLOzRCQVVMLEtBQUs7OEJBVUwsS0FBSzsyQkFVTCxLQUFLLFNBQUMsWUFBWTsyQkFpQmxCLE1BQU07NkJBVU4sTUFBTTswQkFXTixNQUFNOzhCQUdOLFlBQVksU0FBQyxxQ0FBcUMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7NkJBRXpFLFlBQVksU0FBQyxvQ0FBb0MsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0NBRXhFLFlBQVksU0FBQyx1Q0FBdUMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7OEJBRTNFLFlBQVksU0FBQyxxQ0FBcUMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7b0NBRXpFLFlBQVksU0FBQywyQ0FBMkMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0NBRS9FLFlBQVksU0FBQyx1Q0FBdUMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7OEJBRTNFLFlBQVksU0FBQyxxQ0FBcUMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7aUNBRXpFLFlBQVksU0FBQyx3Q0FBd0MsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7b0NBRTVFLFlBQVksU0FBQywyQ0FBMkMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7bUNBRS9FLFlBQVksU0FBQywwQ0FBMEMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0NBRTlFLFlBQVksU0FBQyx1Q0FBdUMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7K0JBRTNFLFlBQVksU0FBQyxzQ0FBc0MsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7K0JBRzFFLFlBQVksU0FBQyxzQ0FBc0MsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7aUNBRTFFLFlBQVksU0FBQyx3Q0FBd0MsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7c0NBUzVFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG5pbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRG9DaGVjaywgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBIb3N0QmluZGluZywgSW5wdXQsIEl0ZXJhYmxlRGlmZmVyLCBJdGVyYWJsZURpZmZlcnMsIE9uSW5pdCwgT3B0aW9uYWwsIE91dHB1dCwgUmVuZGVyZXIsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW9uSXRlbSwgTW9kYWxDb250cm9sbGVyLCBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IEFuaW1hdGlvbkJ1aWxkZXIsIE1vZGFsT3B0aW9ucyB9IGZyb20gJ0Bpb25pYy9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlQWRkSXRlbVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWFkZC1pdGVtLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVDbG9zZUJ1dHRvblRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWNsb3NlLWJ1dHRvbi10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtZm9vdGVyLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVHcm91cEVuZFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWdyb3VwLWVuZC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlR3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1ncm91cC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtaGVhZGVyLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVJdGVtRW5kVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtaXRlbS1lbmQtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZUl0ZW1JY29uVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtaXRlbS1pY29uLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVJdGVtVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtaXRlbS10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlTWVzc2FnZVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLW1lc3NhZ2UtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVQbGFjZWhvbGRlclRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLXBsYWNlaG9sZGVyLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVTZWFyY2hGYWlsVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtc2VhcmNoLWZhaWwtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZVRpdGxlVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtdGl0bGUtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZVZhbHVlVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtdmFsdWUtdGVtcGxhdGUuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW9uaWMtc2VsZWN0YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pb25pYy1zZWxlY3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW9uaWMtc2VsZWN0YWJsZS5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxuICB9XVxufSlcbmV4cG9ydCBjbGFzcyBJb25pY1NlbGVjdGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBEb0NoZWNrIHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlJylcbiAgX2Nzc0NsYXNzID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLWlvcycpXG4gIF9pc0lvczogYm9vbGVhbjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLW1kJylcbiAgX2lzTUQ6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1pcy1tdWx0aXBsZScpXG4gIGdldCBfaXNNdWx0aXBsZUNzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzTXVsdGlwbGU7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLWhhcy12YWx1ZScpXG4gIGdldCBfaGFzVmFsdWVDc3NDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5oYXNWYWx1ZSgpO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1oYXMtcGxhY2Vob2xkZXInKVxuICBnZXQgX2hhc1BsYWNlaG9sZGVyQ3NzQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc1BsYWNlaG9sZGVyO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1oYXMtbGFiZWwnKVxuICBnZXQgX2hhc0lvbkxhYmVsQ3NzQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0lvbkxhYmVsO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1sYWJlbC1kZWZhdWx0JylcbiAgZ2V0IF9oYXNEZWZhdWx0SW9uTGFiZWxDc3NDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW9uTGFiZWxQb3NpdGlvbiA9PT0gJ2RlZmF1bHQnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1sYWJlbC1maXhlZCcpXG4gIGdldCBfaGFzRml4ZWRJb25MYWJlbENzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pb25MYWJlbFBvc2l0aW9uID09PSAnZml4ZWQnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1sYWJlbC1zdGFja2VkJylcbiAgZ2V0IF9oYXNTdGFja2VkSW9uTGFiZWxDc3NDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW9uTGFiZWxQb3NpdGlvbiA9PT0gJ3N0YWNrZWQnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1sYWJlbC1mbG9hdGluZycpXG4gIGdldCBfaGFzRmxvYXRpbmdJb25MYWJlbENzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pb25MYWJlbFBvc2l0aW9uID09PSAnZmxvYXRpbmcnO1xuICB9XG4gIHByaXZhdGUgX2lzT25TZWFyY2hFbmFibGVkID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfaXNFbmFibGVkID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfc2hvdWxkQmFja2Ryb3BDbG9zZSA9IHRydWU7XG4gIHByaXZhdGUgX2lzT3BlbmVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3ZhbHVlOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIF9tb2RhbDogSFRNTElvbk1vZGFsRWxlbWVudDtcbiAgcHJpdmF0ZSBfaXRlbXNEaWZmZXI6IEl0ZXJhYmxlRGlmZmVyPGFueT47XG4gIHByaXZhdGUgX2hhc09iamVjdHM6IGJvb2xlYW47XG4gIHByaXZhdGUgX2NhbkNsZWFyID0gZmFsc2U7XG4gIHByaXZhdGUgX2hhc0NvbmZpcm1CdXR0b24gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaXNNdWx0aXBsZSA9IGZhbHNlO1xuICBwcml2YXRlIF9jYW5BZGRJdGVtID0gZmFsc2U7XG4gIHByaXZhdGUgX2FkZEl0ZW1PYnNlcnZhYmxlOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2RlbGV0ZUl0ZW1PYnNlcnZhYmxlOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgb25JdGVtc0NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHByaXZhdGUgX2lvbkl0ZW1FbGVtZW50OiBhbnk7XG4gIHByaXZhdGUgX2lvbkxhYmVsRWxlbWVudDogYW55O1xuICBwcml2YXRlIF9oYXNJb25MYWJlbCA9IGZhbHNlO1xuICBwcml2YXRlIF9pb25MYWJlbFBvc2l0aW9uOiAnZml4ZWQnIHwgJ3N0YWNrZWQnIHwgJ2Zsb2F0aW5nJyB8ICdkZWZhdWx0JyB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9sYWJlbDogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBnZXQgX2hhc0luZmluaXRlU2Nyb2xsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzRW5hYmxlZCAmJiB0aGlzLl9tb2RhbENvbXBvbmVudCAmJlxuICAgICAgdGhpcy5fbW9kYWxDb21wb25lbnQuX2luZmluaXRlU2Nyb2xsID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG4gIGdldCBfc2hvdWxkU3RvcmVJdGVtVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hvdWxkU3RvcmVJdGVtVmFsdWUgJiYgdGhpcy5faGFzT2JqZWN0cztcbiAgfVxuICBfdmFsdWVJdGVtczogYW55W10gPSBbXTtcbiAgX3NlYXJjaFRleHQgPSAnJztcbiAgX2hhc1NlYXJjaFRleHQgPSBmYWxzZTtcbiAgX2dyb3VwczogYW55W10gPSBbXTtcbiAgX2l0ZW1zVG9Db25maXJtOiBhbnlbXSA9IFtdO1xuICBfc2VsZWN0ZWRJdGVtczogYW55W10gPSBbXTtcbiAgX21vZGFsQ29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVNb2RhbENvbXBvbmVudDtcbiAgX2ZpbHRlcmVkR3JvdXBzOiBhbnlbXSA9IFtdO1xuICBfaGFzR3JvdXBzOiBib29sZWFuO1xuICBfaXNTZWFyY2hpbmc6IGJvb2xlYW47XG4gIF9oYXNQbGFjZWhvbGRlcjogYm9vbGVhbjtcbiAgX2lzQWRkSXRlbVRlbXBsYXRlVmlzaWJsZSA9IGZhbHNlO1xuICBfaXNGb290ZXJWaXNpYmxlID0gdHJ1ZTtcbiAgX2l0ZW1Ub0FkZDogYW55ID0gbnVsbDtcbiAgX2Zvb3RlckJ1dHRvbnNDb3VudCA9IDA7XG4gIF9oYXNGaWx0ZXJlZEl0ZW1zID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRleHQgb2YgW0lvbmljIExhYmVsXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2FwaS9sYWJlbCkuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2xhYmVsKS5cbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgZ2V0IGxhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIFRleHQgdGhhdCB0aGUgdXNlciBoYXMgdHlwZWQgaW4gU2VhcmNoYmFyLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNzZWFyY2h0ZXh0KS5cbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqIEBkZWZhdWx0ICcnXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGdldCBzZWFyY2hUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFRleHQ7XG4gIH1cbiAgc2V0IHNlYXJjaFRleHQoc2VhcmNoVGV4dDogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XG4gICAgdGhpcy5fc2V0SGFzU2VhcmNoVGV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBzZWFyY2ggaXMgcnVubmluZy5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaXNzZWFyY2hpbmcpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAcmVhZG9ubHlcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgZ2V0IGlzU2VhcmNoaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1NlYXJjaGluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdXNlciBoYXMgdHlwZWQgYW55dGhpbmcgaW4gU2VhcmNoYmFyLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNoYXNzZWFyY2h0ZXh0KS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQHJlYWRvbmx5XG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGdldCBoYXNTZWFyY2hUZXh0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oYXNTZWFyY2hUZXh0O1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcblxuICAgIC8vIFNldCB2YWx1ZSBpdGVtcy5cbiAgICB0aGlzLl92YWx1ZUl0ZW1zLnNwbGljZSgwLCB0aGlzLl92YWx1ZUl0ZW1zLmxlbmd0aCk7XG5cbiAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHRoaXMuX3ZhbHVlSXRlbXMsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLl9pc051bGxPcldoaXRlU3BhY2UodmFsdWUpKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlSXRlbXMucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0SW9uSXRlbUhhc1ZhbHVlKCk7XG4gICAgdGhpcy5fc2V0SGFzUGxhY2Vob2xkZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGxpc3Qgb2YgaXRlbXMuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2l0ZW1zKS5cbiAgICpcbiAgICogQGRlZmF1bHQgW11cbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgaXRlbXM6IGFueVtdID0gW107XG4gIEBPdXRwdXQoKVxuICBpdGVtc0NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0aGUgY29tcG9uZW50IGlzIGVuYWJsZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2lzZW5hYmxlZCkuXG4gICAqXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLWlzLWVuYWJsZWQnKVxuICBASW5wdXQoJ2lzRW5hYmxlZCcpXG4gIGdldCBpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRW5hYmxlZDtcbiAgfVxuICBzZXQgaXNFbmFibGVkKGlzRW5hYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9ICEhaXNFbmFibGVkO1xuICAgIHRoaXMuZW5hYmxlSW9uSXRlbSh0aGlzLl9pc0VuYWJsZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBNb2RhbCBzaG91bGQgYmUgY2xvc2VkIHdoZW4gYmFja2Ryb3AgaXMgY2xpY2tlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2hvdWxkYmFja2Ryb3BjbG9zZSkuXG4gICAqXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCdzaG91bGRCYWNrZHJvcENsb3NlJylcbiAgZ2V0IHNob3VsZEJhY2tkcm9wQ2xvc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3VsZEJhY2tkcm9wQ2xvc2U7XG4gIH1cbiAgc2V0IHNob3VsZEJhY2tkcm9wQ2xvc2Uoc2hvdWxkQmFja2Ryb3BDbG9zZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3VsZEJhY2tkcm9wQ2xvc2UgPSAhIXNob3VsZEJhY2tkcm9wQ2xvc2U7XG4gIH1cblxuICAvKipcbiAgICogTW9kYWwgQ1NTIGNsYXNzLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNtb2RhbGNzc2NsYXNzKS5cbiAgICpcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RhbENzc0NsYXNzOiBzdHJpbmcgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBNb2RhbCBlbnRlciBhbmltYXRpb24uXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI21vZGFsZW50ZXJhbmltYXRpb24pLlxuICAgKlxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsRW50ZXJBbmltYXRpb246IEFuaW1hdGlvbkJ1aWxkZXIgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBNb2RhbCBsZWF2ZSBhbmltYXRpb24uXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI21vZGFsbGVhdmVhbmltYXRpb24pLlxuICAgKlxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsTGVhdmVBbmltYXRpb246IEFuaW1hdGlvbkJ1aWxkZXIgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgTW9kYWwgaXMgb3BlbmVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNpc29wZW5lZCkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEByZWFkb25seVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBnZXQgaXNPcGVuZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzT3BlbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBDb25maXJtIGJ1dHRvbiBpcyBlbmFibGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNpc2NvbmZpcm1idXR0b25lbmFibGVkKS5cbiAgICpcbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBpc0NvbmZpcm1CdXR0b25FbmFibGVkID0gdHJ1ZTtcblxuICAvKipcbiAqIERldGVybWluZXMgd2hldGhlciBDb25maXJtIGJ1dHRvbiBpcyB2aXNpYmxlIGZvciBzaW5nbGUgc2VsZWN0aW9uLlxuICogQnkgZGVmYXVsdCBDb25maXJtIGJ1dHRvbiBpcyB2aXNpYmxlIG9ubHkgZm9yIG11bHRpcGxlIHNlbGVjdGlvbi5cbiAqICoqTm90ZSoqOiBJdCBpcyBhbHdheXMgdHJ1ZSBmb3IgbXVsdGlwbGUgc2VsZWN0aW9uIGFuZCBjYW5ub3QgYmUgY2hhbmdlZC5cbiAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2hhc2NvbmZpcm1idXR0b24pLlxuICpcbiAqIEBkZWZhdWx0IHRydWVcbiAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAqL1xuICBASW5wdXQoJ2hhc0NvbmZpcm1CdXR0b24nKVxuICBnZXQgaGFzQ29uZmlybUJ1dHRvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGFzQ29uZmlybUJ1dHRvbjtcbiAgfVxuICBzZXQgaGFzQ29uZmlybUJ1dHRvbihoYXNDb25maXJtQnV0dG9uOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGFzQ29uZmlybUJ1dHRvbiA9ICEhaGFzQ29uZmlybUJ1dHRvbjtcbiAgICB0aGlzLl9jb3VudEZvb3RlckJ1dHRvbnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVtIHByb3BlcnR5IHRvIHVzZSBhcyBhIHVuaXF1ZSBpZGVudGlmaWVyLCBlLmcsIGAnaWQnYC5cbiAgICogKipOb3RlKio6IGBpdGVtc2Agc2hvdWxkIGJlIGFuIG9iamVjdCBhcnJheS5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaXRlbXZhbHVlZmllbGQpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGl0ZW1WYWx1ZUZpZWxkOiBzdHJpbmcgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBJdGVtIHByb3BlcnR5IHRvIGRpc3BsYXksIGUuZywgYCduYW1lJ2AuXG4gICAqICoqTm90ZSoqOiBgaXRlbXNgIHNob3VsZCBiZSBhbiBvYmplY3QgYXJyYXkuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2l0ZW10ZXh0ZmllbGQpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBpdGVtVGV4dEZpZWxkOiBzdHJpbmcgPSBudWxsO1xuXG4gIC8qKlxuICAgKlxuICAgKiBHcm91cCBwcm9wZXJ0eSB0byB1c2UgYXMgYSB1bmlxdWUgaWRlbnRpZmllciB0byBncm91cCBpdGVtcywgZS5nLiBgJ2NvdW50cnkuaWQnYC5cbiAgICogKipOb3RlKio6IGBpdGVtc2Agc2hvdWxkIGJlIGFuIG9iamVjdCBhcnJheS5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jZ3JvdXB2YWx1ZWZpZWxkKS5cbiAgICpcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBncm91cFZhbHVlRmllbGQ6IHN0cmluZyA9IG51bGw7XG5cbiAgLyoqXG4qIEdyb3VwIHByb3BlcnR5IHRvIGRpc3BsYXksIGUuZy4gYCdjb3VudHJ5Lm5hbWUnYC5cbiogKipOb3RlKio6IGBpdGVtc2Agc2hvdWxkIGJlIGFuIG9iamVjdCBhcnJheS5cbiogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jZ3JvdXB0ZXh0ZmllbGQpLlxuKlxuKiBAZGVmYXVsdCBudWxsXG4qIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiovXG4gIEBJbnB1dCgpXG4gIGdyb3VwVGV4dEZpZWxkOiBzdHJpbmcgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gc2hvdyBTZWFyY2hiYXIuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2NhbnNlYXJjaCkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGNhblNlYXJjaCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgYG9uU2VhcmNoYCBldmVudCBpcyBlbmFibGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNpc29uc2VhcmNoZW5hYmxlZCkuXG4gICAqXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCdpc09uU2VhcmNoRW5hYmxlZCcpXG4gIGdldCBpc09uU2VhcmNoRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNPblNlYXJjaEVuYWJsZWQ7XG4gIH1cbiAgc2V0IGlzT25TZWFyY2hFbmFibGVkKGlzT25TZWFyY2hFbmFibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNPblNlYXJjaEVuYWJsZWQgPSAhIWlzT25TZWFyY2hFbmFibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0byBzaG93IENsZWFyIGJ1dHRvbi5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jY2FuY2xlYXIpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtY2FuLWNsZWFyJylcbiAgQElucHV0KCdjYW5DbGVhcicpXG4gIGdldCBjYW5DbGVhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2FuQ2xlYXI7XG4gIH1cbiAgc2V0IGNhbkNsZWFyKGNhbkNsZWFyOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY2FuQ2xlYXIgPSAhIWNhbkNsZWFyO1xuICAgIHRoaXMuX2NvdW50Rm9vdGVyQnV0dG9ucygpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBJb25pYyBbSW5maW5pdGVTY3JvbGxdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvYXBpL2NvbXBvbmVudHMvaW5maW5pdGUtc2Nyb2xsL0luZmluaXRlU2Nyb2xsLykgaXMgZW5hYmxlZC5cbiAgICogKipOb3RlKio6IEluZmluaXRlIHNjcm9sbCBjYW5ub3QgYmUgdXNlZCB0b2dldGhlciB3aXRoIHZpcnR1YWwgc2Nyb2xsLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNoYXNpbmZpbml0ZXNjcm9sbCkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGhhc0luZmluaXRlU2Nyb2xsID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBJb25pYyBbVmlydHVhbFNjcm9sbF0oaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9hcGkvY29tcG9uZW50cy92aXJ0dWFsLXNjcm9sbC9WaXJ0dWFsU2Nyb2xsLykgaXMgZW5hYmxlZC5cbiAgICogKipOb3RlKio6IFZpcnR1YWwgc2Nyb2xsIGNhbm5vdCBiZSB1c2VkIHRvZ2V0aGVyIHdpdGggaW5maW5pdGUgc2Nyb2xsLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNoYXN2aXJ0dWFsc2Nyb2xsKS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgaGFzVmlydHVhbFNjcm9sbCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBTZWUgSW9uaWMgVmlydHVhbFNjcm9sbCBbYXBwcm94SXRlbUhlaWdodF0oaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9hcGkvY29tcG9uZW50cy92aXJ0dWFsLXNjcm9sbC9WaXJ0dWFsU2Nyb2xsLykuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3ZpcnR1YWxzY3JvbGxhcHByb3hpdGVtaGVpZ2h0KS5cbiAgICpcbiAgICogQGRlZmF1bHQgJzQwcHgnXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHZpcnR1YWxTY3JvbGxBcHByb3hJdGVtSGVpZ2h0ID0gJzQwcHgnO1xuXG4gIC8qKlxuICAgKiBBIHBsYWNlaG9sZGVyIGZvciBTZWFyY2hiYXIuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3NlYXJjaHBsYWNlaG9sZGVyKS5cbiAgICpcbiAgICogQGRlZmF1bHQgJ1NlYXJjaCdcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc2VhcmNoUGxhY2Vob2xkZXIgPSAnU2VhcmNoJztcblxuICAvKipcbiAgICogQSBwbGFjZWhvbGRlci5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jcGxhY2Vob2xkZXIpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgbXVsdGlwbGUgaXRlbXMgY2FuIGJlIHNlbGVjdGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNpc211bHRpcGxlKS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCdpc011bHRpcGxlJylcbiAgZ2V0IGlzTXVsdGlwbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzTXVsdGlwbGU7XG4gIH1cbiAgc2V0IGlzTXVsdGlwbGUoaXNNdWx0aXBsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzTXVsdGlwbGUgPSAhIWlzTXVsdGlwbGU7XG4gICAgdGhpcy5fY291bnRGb290ZXJCdXR0b25zKCk7XG4gIH1cblxuICAvKipcbiAgICogVGV4dCB0byBkaXNwbGF5IHdoZW4gbm8gaXRlbXMgaGF2ZSBiZWVuIGZvdW5kIGR1cmluZyBzZWFyY2guXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3NlYXJjaGZhaWx0ZXh0KS5cbiAgICpcbiAgICogQGRlZmF1bHQgJ05vIGl0ZW1zIGZvdW5kLidcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc2VhcmNoRmFpbFRleHQgPSAnTm8gaXRlbXMgZm91bmQuJztcblxuICAvKipcbiAgICogQ2xlYXIgYnV0dG9uIHRleHQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2NsZWFyYnV0dG9udGV4dCkuXG4gICAqXG4gICAqIEBkZWZhdWx0ICdDbGVhcidcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgY2xlYXJCdXR0b25UZXh0ID0gJ0NsZWFyJztcblxuICAvKipcbiAgICogQWRkIGJ1dHRvbiB0ZXh0LlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNhZGRidXR0b250ZXh0KS5cbiAgICpcbiAgICogQGRlZmF1bHQgJ0FkZCdcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgYWRkQnV0dG9uVGV4dCA9ICdBZGQnO1xuXG4gIC8qKlxuICAgKiBDb25maXJtIGJ1dHRvbiB0ZXh0LlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNjb25maXJtYnV0dG9udGV4dCkuXG4gICAqXG4gICAqIEBkZWZhdWx0ICdPSydcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgY29uZmlybUJ1dHRvblRleHQgPSAnT0snO1xuXG4gIC8qKlxuICAgKiBDbG9zZSBidXR0b24gdGV4dC5cbiAgICogVGhlIGZpZWxkIGlzIG9ubHkgYXBwbGljYWJsZSB0byAqKmlPUyoqIHBsYXRmb3JtLCBvbiAqKkFuZHJvaWQqKiBvbmx5IENyb3NzIGljb24gaXMgZGlzcGxheWVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNjbG9zZWJ1dHRvbnRleHQpLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnQ2FuY2VsJ1xuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBjbG9zZUJ1dHRvblRleHQgPSAnQ2FuY2VsJztcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIFNlYXJjaGJhciBzaG91bGQgcmVjZWl2ZSBmb2N1cyB3aGVuIE1vZGFsIGlzIG9wZW5lZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2hvdWxkZm9jdXNzZWFyY2hiYXIpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBzaG91bGRGb2N1c1NlYXJjaGJhciA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBIZWFkZXIgY29sb3IuIFtJb25pYyBjb2xvcnNdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9hZHZhbmNlZCNjb2xvcnMpIGFyZSBzdXBwb3J0ZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2hlYWRlcmNvbG9yKS5cbiAgICpcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBoZWFkZXJDb2xvcjogc3RyaW5nID0gbnVsbDtcblxuICAvKipcbiAgICogR3JvdXAgY29sb3IuIFtJb25pYyBjb2xvcnNdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9hZHZhbmNlZCNjb2xvcnMpIGFyZSBzdXBwb3J0ZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2dyb3VwY29sb3IpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdyb3VwQ29sb3I6IHN0cmluZyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIENsb3NlIGJ1dHRvbiBzbG90LiBbSW9uaWMgc2xvdHNdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvYXBpL2J1dHRvbnMpIGFyZSBzdXBwb3J0ZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2Nsb3NlYnV0dG9uc2xvdCkuXG4gICAqXG4gICAqIEBkZWZhdWx0ICdzdGFydCdcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgY2xvc2VCdXR0b25TbG90ID0gJ3N0YXJ0JztcblxuICAvKipcbiAgICogSXRlbSBpY29uIHNsb3QuIFtJb25pYyBzbG90c10oaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9hcGkvaXRlbSkgYXJlIHN1cHBvcnRlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaXRlbWljb25zbG90KS5cbiAgICpcbiAgICogQGRlZmF1bHQgJ3N0YXJ0J1xuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBpdGVtSWNvblNsb3QgPSAnc3RhcnQnO1xuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGl0ZW0vcyBoYXMgYmVlbiBzZWxlY3RlZCBhbmQgTW9kYWwgY2xvc2VkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbmNoYW5nZSkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQsIHZhbHVlOiBhbnkgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHVzZXIgaXMgdHlwaW5nIGluIFNlYXJjaGJhci5cbiAgICogKipOb3RlKio6IGBjYW5TZWFyY2hgIGFuZCBgaXNPblNlYXJjaEVuYWJsZWRgIGhhcyB0byBiZSBlbmFibGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbnNlYXJjaCkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvblNlYXJjaDogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQsIHRleHQ6IHN0cmluZyB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBubyBpdGVtcyBoYXZlIGJlZW4gZm91bmQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29uc2VhcmNoZmFpbCkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvblNlYXJjaEZhaWw6IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50LCB0ZXh0OiBzdHJpbmcgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gc29tZSBpdGVtcyBoYXZlIGJlZW4gZm91bmQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29uc2VhcmNoc3VjY2VzcykuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvblNlYXJjaFN1Y2Nlc3M6IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50LCB0ZXh0OiBzdHJpbmcgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHVzZXIgaGFzIHNjcm9sbGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXG4gICAqICoqTm90ZSoqOiBgaGFzSW5maW5pdGVTY3JvbGxgIGhhcyB0byBiZSBlbmFibGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbmluZmluaXRlc2Nyb2xsKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uSW5maW5pdGVTY3JvbGw6IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50LCB0ZXh0OiBzdHJpbmcgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gTW9kYWwgaGFzIGJlZW4gb3BlbmVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbm9wZW4pLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgb25PcGVuOiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBNb2RhbCBoYXMgYmVlbiBjbG9zZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29uY2xvc2UpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgb25DbG9zZTogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYW4gaXRlbSBoYXMgYmVlbiBzZWxlY3RlZCBvciB1bnNlbGVjdGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbnNlbGVjdCkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvblNlbGVjdDogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQsIGl0ZW06IGFueSwgaXNTZWxlY3RlZDogYm9vbGVhbiB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBDbGVhciBidXR0b24gaGFzIGJlZW4gY2xpY2tlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jb25jbGVhcikuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvbkNsZWFyOiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCwgaXRlbXM6IGFueVtdIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBBIGxpc3Qgb2YgaXRlbXMgdGhhdCBhcmUgc2VsZWN0ZWQgYW5kIGF3YWl0aW5nIGNvbmZpcm1hdGlvbiBieSB1c2VyLCB3aGVuIGhlIGhhcyBjbGlja2VkIENvbmZpcm0gYnV0dG9uLlxuICAgKiBBZnRlciB0aGUgdXNlciBoYXMgY2xpY2tlZCBDb25maXJtIGJ1dHRvbiBpdGVtcyB0byBjb25maXJtIGFyZSBjbGVhcmVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNpdGVtc3RvY29uZmlybSkuXG4gICAqXG4gICAqIEBkZWZhdWx0IFtdXG4gICAqIEByZWFkb25seVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBnZXQgaXRlbXNUb0NvbmZpcm0oKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtc1RvQ29uZmlybTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIb3cgbG9uZywgaW4gbWlsbGlzZWNvbmRzLCB0byB3YWl0IHRvIGZpbHRlciBpdGVtcyBvciB0byB0cmlnZ2VyIGBvblNlYXJjaGAgZXZlbnQgYWZ0ZXIgZWFjaCBrZXlzdHJva2UuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3NlYXJjaGRlYm91bmNlKS5cbiAgICpcbiAgICogQGRlZmF1bHQgMjUwXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNlYXJjaERlYm91bmNlOiBOdW1iZXIgPSAyNTA7XG5cbiAgLyoqXG4gICAqIEEgbGlzdCBvZiBpdGVtcyB0byBkaXNhYmxlLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNkaXNhYmxlZGl0ZW1zKS5cbiAgICpcbiAgICogQGRlZmF1bHQgW11cbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgZGlzYWJsZWRJdGVtczogYW55W10gPSBbXTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGl0ZW0gdmFsdWUgb25seSBzaG91bGQgYmUgc3RvcmVkIGluIGBuZ01vZGVsYCwgbm90IHRoZSBlbnRpcmUgaXRlbS5cbiAgICogKipOb3RlKio6IEl0ZW0gdmFsdWUgaXMgZGVmaW5lZCBieSBgaXRlbVZhbHVlRmllbGRgLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNzaG91bGRzdG9yZWl0ZW12YWx1ZSkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNob3VsZFN0b3JlSXRlbVZhbHVlID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0byBhbGxvdyBlZGl0aW5nIGl0ZW1zLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNjYW5zYXZlaXRlbSkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGNhblNhdmVJdGVtID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0byBhbGxvdyBkZWxldGluZyBpdGVtcy5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jY2FuZGVsZXRlaXRlbSkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGNhbkRlbGV0ZUl0ZW0gPSBmYWxzZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGFsbG93IGFkZGluZyBpdGVtcy5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jY2FuYWRkaXRlbSkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgnY2FuQWRkSXRlbScpXG4gIGdldCBjYW5BZGRJdGVtKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jYW5BZGRJdGVtO1xuICB9XG4gIHNldCBjYW5BZGRJdGVtKGNhbkFkZEl0ZW06IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jYW5BZGRJdGVtID0gISFjYW5BZGRJdGVtO1xuICAgIHRoaXMuX2NvdW50Rm9vdGVyQnV0dG9ucygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gRWRpdCBpdGVtIGJ1dHRvbiBoYXMgYmVlbiBjbGlja2VkLlxuICAgKiBXaGVuIHRoZSBidXR0b24gaGFzIGJlZW4gY2xpY2tlZCBgaW9uaWNTZWxlY3RhYmxlQWRkSXRlbVRlbXBsYXRlYCB3aWxsIGJlIHNob3duLiBVc2UgdGhlIHRlbXBsYXRlIHRvIGNyZWF0ZSBhIGZvcm0gdG8gZWRpdCBpdGVtLlxuICAgKiAqKk5vdGUqKjogYGNhblNhdmVJdGVtYCBoYXMgdG8gYmUgZW5hYmxlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jb25zYXZlaXRlbSkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvblNhdmVJdGVtOiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCwgaXRlbTogYW55IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIERlbGV0ZSBpdGVtIGJ1dHRvbiBoYXMgYmVlbiBjbGlja2VkLlxuICAgKiAqKk5vdGUqKjogYGNhbkRlbGV0ZUl0ZW1gIGhhcyB0byBiZSBlbmFibGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbmRlbGV0ZWl0ZW0pLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgb25EZWxldGVJdGVtOiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCwgaXRlbTogYW55IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIEFkZCBpdGVtIGJ1dHRvbiBoYXMgYmVlbiBjbGlja2VkLlxuICAgKiBXaGVuIHRoZSBidXR0b24gaGFzIGJlZW4gY2xpY2tlZCBgaW9uaWNTZWxlY3RhYmxlQWRkSXRlbVRlbXBsYXRlYCB3aWxsIGJlIHNob3duLiBVc2UgdGhlIHRlbXBsYXRlIHRvIGNyZWF0ZSBhIGZvcm0gdG8gYWRkIGl0ZW0uXG4gICAqICoqTm90ZSoqOiBgY2FuQWRkSXRlbWAgaGFzIHRvIGJlIGVuYWJsZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29uYWRkaXRlbSkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvbkFkZEl0ZW06IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlVmFsdWVUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICB2YWx1ZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZUl0ZW1UZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBpdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlSXRlbUVuZFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGl0ZW1FbmRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVUaXRsZVRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIHRpdGxlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlUGxhY2Vob2xkZXJUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBwbGFjZWhvbGRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZU1lc3NhZ2VUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBtZXNzYWdlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlR3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBncm91cFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZUdyb3VwRW5kVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgZ3JvdXBFbmRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVDbG9zZUJ1dHRvblRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGNsb3NlQnV0dG9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlU2VhcmNoRmFpbFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIHNlYXJjaEZhaWxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVBZGRJdGVtVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgYWRkSXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZUZvb3RlclRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGZvb3RlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBfYWRkSXRlbVRlbXBsYXRlRm9vdGVySGVpZ2h0OiBzdHJpbmc7XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlSXRlbUljb25UZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBpdGVtSWNvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBTZWUgSW9uaWMgVmlydHVhbFNjcm9sbCBbaGVhZGVyRm5dKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvYXBpL2NvbXBvbmVudHMvdmlydHVhbC1zY3JvbGwvVmlydHVhbFNjcm9sbC8pLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiN2aXJ0dWFsc2Nyb2xsaGVhZGVyZm4pLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICB2aXJ0dWFsU2Nyb2xsSGVhZGVyRm4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9tb2RhbENvbnRyb2xsZXI6IE1vZGFsQ29udHJvbGxlcixcbiAgICBwcml2YXRlIF9wbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBpb25JdGVtOiBJb25JdGVtLFxuICAgIHByaXZhdGUgX2l0ZXJhYmxlRGlmZmVyczogSXRlcmFibGVEaWZmZXJzLFxuICAgIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyXG4gICkge1xuICAgIGlmICghdGhpcy5pdGVtcyB8fCAhdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLl9pdGVtc0RpZmZlciA9IHRoaXMuX2l0ZXJhYmxlRGlmZmVycy5maW5kKHRoaXMuaXRlbXMpLmNyZWF0ZSgpO1xuICB9XG5cbiAgaW5pdEZvY3VzKCkgeyB9XG5cbiAgZW5hYmxlSW9uSXRlbShpc0VuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoIXRoaXMuaW9uSXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaW9uSXRlbS5kaXNhYmxlZCA9ICFpc0VuYWJsZWQ7XG4gIH1cblxuICBfaXNOdWxsT3JXaGl0ZVNwYWNlKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gQ29udmVydCB2YWx1ZSB0byBzdHJpbmcgaW4gY2FzZSBpZiBpdCdzIG5vdC5cbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9cXHMvZywgJycpLmxlbmd0aCA8IDE7XG4gIH1cblxuICBfc2V0SGFzU2VhcmNoVGV4dCgpIHtcbiAgICB0aGlzLl9oYXNTZWFyY2hUZXh0ID0gIXRoaXMuX2lzTnVsbE9yV2hpdGVTcGFjZSh0aGlzLl9zZWFyY2hUZXh0KTtcbiAgfVxuXG4gIF9oYXNPblNlYXJjaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc09uU2VhcmNoRW5hYmxlZCAmJiB0aGlzLm9uU2VhcmNoLm9ic2VydmVycy5sZW5ndGggPiAwO1xuICB9XG5cbiAgX2hhc09uU2F2ZUl0ZW0oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2FuU2F2ZUl0ZW0gJiYgdGhpcy5vblNhdmVJdGVtLm9ic2VydmVycy5sZW5ndGggPiAwO1xuICB9XG5cbiAgX2hhc09uQWRkSXRlbSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jYW5BZGRJdGVtICYmIHRoaXMub25BZGRJdGVtLm9ic2VydmVycy5sZW5ndGggPiAwO1xuICB9XG5cbiAgX2hhc09uRGVsZXRlSXRlbSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jYW5EZWxldGVJdGVtICYmIHRoaXMub25EZWxldGVJdGVtLm9ic2VydmVycy5sZW5ndGggPiAwO1xuICB9XG5cbiAgX2VtaXRWYWx1ZUNoYW5nZSgpIHtcbiAgICB0aGlzLnByb3BhZ2F0ZU9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuXG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICBfZW1pdFNlYXJjaCgpIHtcbiAgICBpZiAoIXRoaXMuY2FuU2VhcmNoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vblNlYXJjaC5lbWl0KHtcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIHRleHQ6IHRoaXMuX3NlYXJjaFRleHRcbiAgICB9KTtcbiAgfVxuXG4gIF9lbWl0T25TZWxlY3QoaXRlbTogYW55LCBpc1NlbGVjdGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHtcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICBpc1NlbGVjdGVkOiBpc1NlbGVjdGVkXG4gICAgfSk7XG4gIH1cblxuICBfZW1pdE9uQ2xlYXIoaXRlbXM6IGFueVtdKSB7XG4gICAgdGhpcy5vbkNsZWFyLmVtaXQoe1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgaXRlbXM6IGl0ZW1zXG4gICAgfSk7XG4gIH1cblxuICBfZW1pdE9uU2VhcmNoU3VjY2Vzc09yRmFpbChpc1N1Y2Nlc3M6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBldmVudERhdGEgPSB7XG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICB0ZXh0OiB0aGlzLl9zZWFyY2hUZXh0XG4gICAgfTtcblxuICAgIGlmIChpc1N1Y2Nlc3MpIHtcbiAgICAgIHRoaXMub25TZWFyY2hTdWNjZXNzLmVtaXQoZXZlbnREYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vblNlYXJjaEZhaWwuZW1pdChldmVudERhdGEpO1xuICAgIH1cbiAgfVxuXG4gIF9mb3JtYXRJdGVtKGl0ZW06IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuX2lzTnVsbE9yV2hpdGVTcGFjZShpdGVtKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaXRlbVRleHRGaWVsZCA/IGl0ZW1bdGhpcy5pdGVtVGV4dEZpZWxkXSA6IGl0ZW0udG9TdHJpbmcoKTtcbiAgfVxuXG4gIF9mb3JtYXRWYWx1ZUl0ZW0oaXRlbTogYW55KTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5fc2hvdWxkU3RvcmVJdGVtVmFsdWUpIHtcbiAgICAgIC8vIEdldCBpdGVtIHRleHQgZnJvbSB0aGUgbGlzdCBhcyB3ZSBzdG9yZSBpdCdzIHZhbHVlIG9ubHkuXG4gICAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSB0aGlzLml0ZW1zLmZpbmQoX2l0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gX2l0ZW1bdGhpcy5pdGVtVmFsdWVGaWVsZF0gPT09IGl0ZW07XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdEl0ZW0oc2VsZWN0ZWRJdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdEl0ZW0oaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgX2dldEl0ZW1WYWx1ZShpdGVtOiBhbnkpOiBhbnkge1xuICAgIGlmICghdGhpcy5faGFzT2JqZWN0cykge1xuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1bdGhpcy5pdGVtVmFsdWVGaWVsZF07XG4gIH1cblxuICBfZ2V0U3RvcmVkSXRlbVZhbHVlKGl0ZW06IGFueSk6IGFueSB7XG4gICAgaWYgKCF0aGlzLl9oYXNPYmplY3RzKSB7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc2hvdWxkU3RvcmVJdGVtVmFsdWUgPyBpdGVtIDogaXRlbVt0aGlzLml0ZW1WYWx1ZUZpZWxkXTtcbiAgfVxuXG4gIF9vblNlYXJjaGJhckNsZWFyKCkge1xuICAgIC8vIElvbmljIFNlYXJjaGJhciBkb2Vzbid0IGNsZWFyIGJpbmQgd2l0aCBuZ01vZGVsIHZhbHVlLlxuICAgIC8vIERvIGl0IG91cnNlbHZlcy5cbiAgICB0aGlzLl9zZWFyY2hUZXh0ID0gJyc7XG4gIH1cblxuICBfZmlsdGVySXRlbXMoKSB7XG4gICAgdGhpcy5fc2V0SGFzU2VhcmNoVGV4dCgpO1xuXG4gICAgaWYgKHRoaXMuX2hhc09uU2VhcmNoKCkpIHtcbiAgICAgIC8vIERlbGVnYXRlIGZpbHRlcmluZyB0byB0aGUgZXZlbnQuXG4gICAgICB0aGlzLl9lbWl0U2VhcmNoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlZmF1bHQgZmlsdGVyaW5nLlxuICAgICAgbGV0IGdyb3VwcyA9IFtdO1xuXG4gICAgICBpZiAoIXRoaXMuX3NlYXJjaFRleHQgfHwgIXRoaXMuX3NlYXJjaFRleHQudHJpbSgpKSB7XG4gICAgICAgIGdyb3VwcyA9IHRoaXMuX2dyb3VwcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbHRlclRleHQgPSB0aGlzLl9zZWFyY2hUZXh0LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIHRoaXMuX2dyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtcyA9IGdyb3VwLml0ZW1zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1UZXh0ID0gKHRoaXMuaXRlbVRleHRGaWVsZCA/XG4gICAgICAgICAgICAgIGl0ZW1bdGhpcy5pdGVtVGV4dEZpZWxkXSA6IGl0ZW0pLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtVGV4dC5pbmRleE9mKGZpbHRlclRleHQpICE9PSAtMTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGdyb3Vwcy5wdXNoKHtcbiAgICAgICAgICAgICAgdmFsdWU6IGdyb3VwLnZhbHVlLFxuICAgICAgICAgICAgICB0ZXh0OiBncm91cC50ZXh0LFxuICAgICAgICAgICAgICBpdGVtczogaXRlbXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTm8gaXRlbXMgZm91bmQuXG4gICAgICAgIGlmICghZ3JvdXBzLmxlbmd0aCkge1xuICAgICAgICAgIGdyb3Vwcy5wdXNoKHtcbiAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2ZpbHRlcmVkR3JvdXBzID0gZ3JvdXBzO1xuICAgICAgdGhpcy5faGFzRmlsdGVyZWRJdGVtcyA9ICF0aGlzLl9hcmVHcm91cHNFbXB0eShncm91cHMpO1xuICAgICAgdGhpcy5fZW1pdE9uU2VhcmNoU3VjY2Vzc09yRmFpbCh0aGlzLl9oYXNGaWx0ZXJlZEl0ZW1zKTtcbiAgICB9XG4gIH1cblxuICBfaXNJdGVtRGlzYWJsZWQoaXRlbTogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkSXRlbXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZEl0ZW1zLnNvbWUoX2l0ZW0gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldEl0ZW1WYWx1ZShfaXRlbSkgPT09IHRoaXMuX2dldEl0ZW1WYWx1ZShpdGVtKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9pc0l0ZW1TZWxlY3RlZChpdGVtOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJdGVtcy5maW5kKHNlbGVjdGVkSXRlbSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0SXRlbVZhbHVlKGl0ZW0pID09PSB0aGlzLl9nZXRTdG9yZWRJdGVtVmFsdWUoc2VsZWN0ZWRJdGVtKTtcbiAgICB9KSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgX2FkZFNlbGVjdGVkSXRlbShpdGVtOiBhbnkpIHtcbiAgICBpZiAodGhpcy5fc2hvdWxkU3RvcmVJdGVtVmFsdWUpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMucHVzaCh0aGlzLl9nZXRJdGVtVmFsdWUoaXRlbSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgX2RlbGV0ZVNlbGVjdGVkSXRlbShpdGVtOiBhbnkpIHtcbiAgICBsZXQgaXRlbVRvRGVsZXRlSW5kZXg7XG5cbiAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zLmZvckVhY2goKHNlbGVjdGVkSXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX2dldEl0ZW1WYWx1ZShpdGVtKSA9PT1cbiAgICAgICAgdGhpcy5fZ2V0U3RvcmVkSXRlbVZhbHVlKHNlbGVjdGVkSXRlbSlcbiAgICAgICkge1xuICAgICAgICBpdGVtVG9EZWxldGVJbmRleCA9IGl0ZW1JbmRleDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMuc3BsaWNlKGl0ZW1Ub0RlbGV0ZUluZGV4LCAxKTtcbiAgfVxuXG4gIF9jbGljaygpIHtcbiAgICBpZiAoIXRoaXMuaXNFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbGFiZWwgPSB0aGlzLl9nZXRMYWJlbFRleHQoKTtcbiAgICB0aGlzLm9wZW4oKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMub25PcGVuLmVtaXQoe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgX3NhdmVJdGVtKGV2ZW50OiBFdmVudCwgaXRlbTogYW55KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5faXRlbVRvQWRkID0gaXRlbTtcblxuICAgIGlmICh0aGlzLl9oYXNPblNhdmVJdGVtKCkpIHtcbiAgICAgIHRoaXMub25TYXZlSXRlbS5lbWl0KHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICBpdGVtOiB0aGlzLl9pdGVtVG9BZGRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dBZGRJdGVtVGVtcGxhdGUoKTtcbiAgICB9XG4gIH1cblxuICBfZGVsZXRlSXRlbUNsaWNrKGV2ZW50OiBFdmVudCwgaXRlbTogYW55KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5faXRlbVRvQWRkID0gaXRlbTtcblxuICAgIGlmICh0aGlzLl9oYXNPbkRlbGV0ZUl0ZW0oKSkge1xuICAgICAgLy8gRGVsZWdhdGUgbG9naWMgdG8gZXZlbnQuXG4gICAgICB0aGlzLm9uRGVsZXRlSXRlbS5lbWl0KHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICBpdGVtOiB0aGlzLl9pdGVtVG9BZGRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlbGV0ZUl0ZW0odGhpcy5faXRlbVRvQWRkKTtcbiAgICB9XG4gIH1cblxuICBfYWRkSXRlbUNsaWNrKCkge1xuICAgIGlmICh0aGlzLl9oYXNPbkFkZEl0ZW0oKSkge1xuICAgICAgdGhpcy5vbkFkZEl0ZW0uZW1pdCh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpc1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd0FkZEl0ZW1UZW1wbGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIF9wb3NpdGlvbkFkZEl0ZW1UZW1wbGF0ZSgpIHtcbiAgICAvLyBXYWl0IGZvciB0aGUgdGVtcGxhdGUgdG8gcmVuZGVyLlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZm9vdGVyID0gdGhpcy5fbW9kYWxDb21wb25lbnQuX2VsZW1lbnQubmF0aXZlRWxlbWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcignLmlvbmljLXNlbGVjdGFibGUtYWRkLWl0ZW0tdGVtcGxhdGUgaW9uLWZvb3RlcicpO1xuXG4gICAgICB0aGlzLl9hZGRJdGVtVGVtcGxhdGVGb290ZXJIZWlnaHQgPSBmb290ZXIgPyBgY2FsYygxMDAlIC0gJHtmb290ZXIub2Zmc2V0SGVpZ2h0fXB4KWAgOiAnMTAwJSc7XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIF9jbG9zZSgpIHtcbiAgICB0aGlzLmNsb3NlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLm9uQ2xvc2UuZW1pdCh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpc1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAoIXRoaXMuX2hhc09uU2VhcmNoKCkpIHtcbiAgICAgIHRoaXMuX3NlYXJjaFRleHQgPSAnJztcbiAgICAgIHRoaXMuX3NldEhhc1NlYXJjaFRleHQoKTtcbiAgICB9XG4gIH1cblxuICBfY2xlYXIoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IHRoaXMuX3NlbGVjdGVkSXRlbXM7XG5cbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgdGhpcy5fZW1pdFZhbHVlQ2hhbmdlKCk7XG4gICAgdGhpcy5fZW1pdE9uQ2xlYXIoc2VsZWN0ZWRJdGVtcyk7XG4gICAgdGhpcy5jbG9zZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5vbkNsb3NlLmVtaXQoe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgX2dldE1vcmVJdGVtcygpIHtcbiAgICB0aGlzLm9uSW5maW5pdGVTY3JvbGwuZW1pdCh7XG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICB0ZXh0OiB0aGlzLl9zZWFyY2hUZXh0XG4gICAgfSk7XG4gIH1cblxuICBfc2V0SXRlbXNUb0NvbmZpcm0oaXRlbXM6IGFueVtdKSB7XG4gICAgLy8gUmV0dXJuIGEgY29weSBvZiBvcmlnaW5hbCBhcnJheSwgc28gaXQgY291bGRuJ3QgYmUgY2hhbmdlZCBmcm9tIG91dHNpZGUuXG4gICAgdGhpcy5faXRlbXNUb0NvbmZpcm0gPSBbXS5jb25jYXQoaXRlbXMpO1xuICB9XG5cbiAgX2RvU2VsZWN0KHNlbGVjdGVkSXRlbTogYW55KSB7XG4gICAgdGhpcy52YWx1ZSA9IHNlbGVjdGVkSXRlbTtcbiAgICB0aGlzLl9lbWl0VmFsdWVDaGFuZ2UoKTtcbiAgfVxuXG4gIF9zZWxlY3QoaXRlbTogYW55KSB7XG4gICAgY29uc3QgaXNJdGVtU2VsZWN0ZWQgPSB0aGlzLl9pc0l0ZW1TZWxlY3RlZChpdGVtKTtcblxuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIGlmIChpc0l0ZW1TZWxlY3RlZCkge1xuICAgICAgICB0aGlzLl9kZWxldGVTZWxlY3RlZEl0ZW0oaXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9hZGRTZWxlY3RlZEl0ZW0oaXRlbSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NldEl0ZW1zVG9Db25maXJtKHRoaXMuX3NlbGVjdGVkSXRlbXMpO1xuXG4gICAgICAvLyBFbWl0IG9uU2VsZWN0IGV2ZW50IGFmdGVyIHNldHRpbmcgaXRlbXMgdG8gY29uZmlybSBzbyB0aGV5IGNvdWxkIGJlIHVzZWRcbiAgICAgIC8vIGluc2lkZSB0aGUgZXZlbnQuXG4gICAgICB0aGlzLl9lbWl0T25TZWxlY3QoaXRlbSwgIWlzSXRlbVNlbGVjdGVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuaGFzQ29uZmlybUJ1dHRvbiB8fCB0aGlzLmZvb3RlclRlbXBsYXRlKSB7XG4gICAgICAgIC8vIERvbid0IGNsb3NlIE1vZGFsIGFuZCBrZWVwIHRyYWNrIG9uIGl0ZW1zIHRvIGNvbmZpcm0uXG4gICAgICAgIC8vIFdoZW4gZm9vdGVyIHRlbXBsYXRlIGlzIHVzZWQgaXQncyB1cCB0byBkZXZlbG9wZXIgdG8gY2xvc2UgTW9kYWwuXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMgPSBbXTtcblxuICAgICAgICBpZiAoaXNJdGVtU2VsZWN0ZWQpIHtcbiAgICAgICAgICB0aGlzLl9kZWxldGVTZWxlY3RlZEl0ZW0oaXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fYWRkU2VsZWN0ZWRJdGVtKGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2V0SXRlbXNUb0NvbmZpcm0odGhpcy5fc2VsZWN0ZWRJdGVtcyk7XG5cbiAgICAgICAgLy8gRW1pdCBvblNlbGVjdCBldmVudCBhZnRlciBzZXR0aW5nIGl0ZW1zIHRvIGNvbmZpcm0gc28gdGhleSBjb3VsZCBiZSB1c2VkXG4gICAgICAgIC8vIGluc2lkZSB0aGUgZXZlbnQuXG4gICAgICAgIHRoaXMuX2VtaXRPblNlbGVjdChpdGVtLCAhaXNJdGVtU2VsZWN0ZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFpc0l0ZW1TZWxlY3RlZCkge1xuICAgICAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICAgICAgICB0aGlzLl9hZGRTZWxlY3RlZEl0ZW0oaXRlbSk7XG5cbiAgICAgICAgICAvLyBFbWl0IG9uU2VsZWN0IGJlZm9yZSBvbkNoYW5nZS5cbiAgICAgICAgICB0aGlzLl9lbWl0T25TZWxlY3QoaXRlbSwgdHJ1ZSk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fc2hvdWxkU3RvcmVJdGVtVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RvU2VsZWN0KHRoaXMuX2dldEl0ZW1WYWx1ZShpdGVtKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2RvU2VsZWN0KGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2Nsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2NvbmZpcm0oKSB7XG4gICAgdGhpcy5jb25maXJtKCk7XG4gICAgdGhpcy5fY2xvc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldExhYmVsVGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pb25MYWJlbEVsZW1lbnQgPyB0aGlzLl9pb25MYWJlbEVsZW1lbnQudGV4dENvbnRlbnQgOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXJlR3JvdXBzRW1wdHkoZ3JvdXBzKSB7XG4gICAgcmV0dXJuIGdyb3Vwcy5sZW5ndGggPT09IDAgfHwgZ3JvdXBzLmV2ZXJ5KGdyb3VwID0+IHtcbiAgICAgIHJldHVybiAhZ3JvdXAuaXRlbXMgfHwgZ3JvdXAuaXRlbXMubGVuZ3RoID09PSAwO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY291bnRGb290ZXJCdXR0b25zKCkge1xuICAgIGxldCBmb290ZXJCdXR0b25zQ291bnQgPSAwO1xuXG4gICAgaWYgKHRoaXMuY2FuQ2xlYXIpIHtcbiAgICAgIGZvb3RlckJ1dHRvbnNDb3VudCsrO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUgfHwgdGhpcy5faGFzQ29uZmlybUJ1dHRvbikge1xuICAgICAgZm9vdGVyQnV0dG9uc0NvdW50Kys7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2FuQWRkSXRlbSkge1xuICAgICAgZm9vdGVyQnV0dG9uc0NvdW50Kys7XG4gICAgfVxuXG4gICAgdGhpcy5fZm9vdGVyQnV0dG9uc0NvdW50ID0gZm9vdGVyQnV0dG9uc0NvdW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SXRlbXMoaXRlbXM6IGFueVtdKSB7XG4gICAgLy8gSXQncyBpbXBvcnRhbnQgdG8gaGF2ZSBhbiBlbXB0eSBzdGFydGluZyBncm91cCB3aXRoIGVtcHR5IGl0ZW1zIChncm91cHNbMF0uaXRlbXMpLFxuICAgIC8vIGJlY2F1c2Ugd2UgYmluZCB0byBpdCB3aGVuIHVzaW5nIFZpcnR1YWxTY3JvbGwuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvaXNzdWVzLzcwLlxuICAgIGxldCBncm91cHM6IGFueVtdID0gW3tcbiAgICAgIGl0ZW1zOiBpdGVtcyB8fCBbXVxuICAgIH1dO1xuXG4gICAgaWYgKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMuX2hhc0dyb3Vwcykge1xuICAgICAgICBncm91cHMgPSBbXTtcblxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGNvbnN0IGdyb3VwVmFsdWUgPSB0aGlzLl9nZXRQcm9wZXJ0eVZhbHVlKGl0ZW0sIHRoaXMuZ3JvdXBWYWx1ZUZpZWxkKSxcbiAgICAgICAgICAgIGdyb3VwID0gZ3JvdXBzLmZpbmQoX2dyb3VwID0+IF9ncm91cC52YWx1ZSA9PT0gZ3JvdXBWYWx1ZSk7XG5cbiAgICAgICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgICAgIGdyb3VwLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdyb3Vwcy5wdXNoKHtcbiAgICAgICAgICAgICAgdmFsdWU6IGdyb3VwVmFsdWUsXG4gICAgICAgICAgICAgIHRleHQ6IHRoaXMuX2dldFByb3BlcnR5VmFsdWUoaXRlbSwgdGhpcy5ncm91cFRleHRGaWVsZCksXG4gICAgICAgICAgICAgIGl0ZW1zOiBbaXRlbV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fZ3JvdXBzID0gZ3JvdXBzO1xuICAgIHRoaXMuX2ZpbHRlcmVkR3JvdXBzID0gdGhpcy5fZ3JvdXBzO1xuICAgIHRoaXMuX2hhc0ZpbHRlcmVkSXRlbXMgPSAhdGhpcy5fYXJlR3JvdXBzRW1wdHkodGhpcy5fZmlsdGVyZWRHcm91cHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UHJvcGVydHlWYWx1ZShvYmplY3Q6IGFueSwgcHJvcGVydHk6IHN0cmluZyk6IGFueSB7XG4gICAgaWYgKCFwcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5LnNwbGl0KCcuJykucmVkdWNlKChfb2JqZWN0LCBfcHJvcGVydHkpID0+IHtcbiAgICAgIHJldHVybiBfb2JqZWN0ID8gX29iamVjdFtfcHJvcGVydHldIDogbnVsbDtcbiAgICB9LCBvYmplY3QpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SW9uSXRlbUhhc0ZvY3VzKGhhc0ZvY3VzOiBib29sZWFuKSB7XG4gICAgaWYgKCF0aGlzLmlvbkl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBcHBseSBmb2N1cyBDU1MgY2xhc3MgZm9yIHByb3BlciBzdHlseWluZyBvZiBpb24taXRlbS9pb24tbGFiZWwuXG4gICAgdGhpcy5fc2V0SW9uSXRlbUNzc0NsYXNzKCdpdGVtLWhhcy1mb2N1cycsIGhhc0ZvY3VzKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldElvbkl0ZW1IYXNWYWx1ZSgpIHtcbiAgICBpZiAoIXRoaXMuaW9uSXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHZhbHVlIENTUyBjbGFzcyBmb3IgcHJvcGVyIHN0eWx5aW5nIG9mIGlvbi1pdGVtL2lvbi1sYWJlbC5cbiAgICB0aGlzLl9zZXRJb25JdGVtQ3NzQ2xhc3MoJ2l0ZW0taGFzLXZhbHVlJywgdGhpcy5oYXNWYWx1ZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldEhhc1BsYWNlaG9sZGVyKCkge1xuICAgIHRoaXMuX2hhc1BsYWNlaG9sZGVyID0gIXRoaXMuaGFzVmFsdWUoKSAmJlxuICAgICAgKCF0aGlzLl9pc051bGxPcldoaXRlU3BhY2UodGhpcy5wbGFjZWhvbGRlcikgfHwgdGhpcy5wbGFjZWhvbGRlclRlbXBsYXRlKSA/XG4gICAgICB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHByb3BhZ2F0ZU9uQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xuICBwcml2YXRlIHByb3BhZ2F0ZU9uVG91Y2hlZCA9ICgpID0+IHsgfTtcblxuICBwcml2YXRlIF9zZXRJb25JdGVtQ3NzQ2xhc3MoY3NzQ2xhc3M6IHN0cmluZywgc2hvdWxkQWRkOiBib29sZWFuKSB7XG4gICAgaWYgKCF0aGlzLl9pb25JdGVtRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLl9pb25JdGVtRWxlbWVudCwgY3NzQ2xhc3MsIHNob3VsZEFkZCk7XG4gIH1cblxuICBwcml2YXRlIF90b2dnbGVBZGRJdGVtVGVtcGxhdGUoaXNWaXNpYmxlOiBib29sZWFuKSB7XG4gICAgLy8gSXQgc2hvdWxkIGJlIHBvc3NpYmxlIHRvIHNob3cvaGlkZSB0aGUgdGVtcGxhdGUgcmVnYXJkbGVzc1xuICAgIC8vIGNhbkFkZEl0ZW0gb3IgY2FuU2F2ZUl0ZW0gcGFyYW1ldGVycywgc28gd2UgY291bGQgaW1wbGVtZW50IHNvbWVcbiAgICAvLyBjdXN0b20gYmVoYXZpb3IuIEUuZy4gYWRkaW5nIGl0ZW0gd2hlbiBzZWFyY2ggZmFpbHMgdXNpbmcgb25TZWFyY2hGYWlsIGV2ZW50LlxuICAgIGlmICghdGhpcy5hZGRJdGVtVGVtcGxhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUbyBtYWtlIFNhdmVJdGVtVGVtcGxhdGUgdmlzaWJsZSB3ZSBqdXN0IHBvc2l0aW9uIGl0IG92ZXIgbGlzdCB1c2luZyBDU1MuXG4gICAgLy8gV2UgZG9uJ3QgaGlkZSBsaXN0IHdpdGggKm5nSWYgb3IgW2hpZGRlbl0gdG8gcHJldmVudCBpdHMgc2Nyb2xsIHBvc2l0aW9uLlxuICAgIHRoaXMuX2lzQWRkSXRlbVRlbXBsYXRlVmlzaWJsZSA9IGlzVmlzaWJsZTtcbiAgICB0aGlzLl9pc0Zvb3RlclZpc2libGUgPSAhaXNWaXNpYmxlO1xuICB9XG5cbiAgLyogQ29udHJvbFZhbHVlQWNjZXNzb3IgKi9cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShtZXRob2Q6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucHJvcGFnYXRlT25DaGFuZ2UgPSBtZXRob2Q7XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChtZXRob2Q6ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLnByb3BhZ2F0ZU9uVG91Y2hlZCA9IG1ldGhvZDtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuaXNFbmFibGVkID0gIWlzRGlzYWJsZWQ7XG4gIH1cbiAgLyogLkNvbnRyb2xWYWx1ZUFjY2Vzc29yICovXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5faXNJb3MgPSB0aGlzLl9wbGF0Zm9ybS5pcygnaW9zJyk7XG4gICAgdGhpcy5faXNNRCA9ICF0aGlzLl9pc0lvcztcbiAgICB0aGlzLl9oYXNPYmplY3RzID0gIXRoaXMuX2lzTnVsbE9yV2hpdGVTcGFjZSh0aGlzLml0ZW1WYWx1ZUZpZWxkKTtcbiAgICAvLyBHcm91cGluZyBpcyBzdXBwb3J0ZWQgZm9yIG9iamVjdHMgb25seS5cbiAgICAvLyBJb25pYyBWaXJ0dWFsU2Nyb2xsIGhhcyBpdCdzIG93biBpbXBsZW1lbnRhdGlvbiBvZiBncm91cGluZy5cbiAgICB0aGlzLl9oYXNHcm91cHMgPSBCb29sZWFuKHRoaXMuX2hhc09iamVjdHMgJiYgdGhpcy5ncm91cFZhbHVlRmllbGQgJiYgIXRoaXMuaGFzVmlydHVhbFNjcm9sbCk7XG5cbiAgICBpZiAodGhpcy5pb25JdGVtKSB7XG4gICAgICB0aGlzLl9pb25JdGVtRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jbG9zZXN0KCdpb24taXRlbScpO1xuICAgICAgdGhpcy5fc2V0SW9uSXRlbUNzc0NsYXNzKCdpdGVtLWludGVyYWN0aXZlJywgdHJ1ZSk7XG4gICAgICB0aGlzLl9zZXRJb25JdGVtQ3NzQ2xhc3MoJ2l0ZW0taW9uaWMtc2VsZWN0YWJsZScsIHRydWUpO1xuXG4gICAgICBpZiAodGhpcy5faW9uSXRlbUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5faW9uTGFiZWxFbGVtZW50ID0gdGhpcy5faW9uSXRlbUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW9uLWxhYmVsJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2lvbkxhYmVsRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuX2hhc0lvbkxhYmVsID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLl9pb25MYWJlbFBvc2l0aW9uID0gdGhpcy5faW9uTGFiZWxFbGVtZW50LmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSB8fCAnZGVmYXVsdCc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVuYWJsZUlvbkl0ZW0odGhpcy5pc0VuYWJsZWQpO1xuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGNvbnN0IGl0ZW1zQ2hhbmdlcyA9IHRoaXMuX2l0ZW1zRGlmZmVyLmRpZmYodGhpcy5pdGVtcyk7XG5cbiAgICBpZiAoaXRlbXNDaGFuZ2VzKSB7XG4gICAgICB0aGlzLl9zZXRJdGVtcyh0aGlzLml0ZW1zKTtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlO1xuXG4gICAgICB0aGlzLm9uSXRlbXNDaGFuZ2UuZW1pdCh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpc1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgaXRlbS5cbiAgICogKipOb3RlKio6IElmIHlvdSB3YW50IGFuIGl0ZW0gdG8gYmUgYWRkZWQgdG8gdGhlIG9yaWdpbmFsIGFycmF5IGFzIHdlbGwgdXNlIHR3by13YXkgZGF0YSBiaW5kaW5nIHN5bnRheCBvbiBgWyhpdGVtcyldYCBmaWVsZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jYWRkaXRlbSkuXG4gICAqXG4gICAqIEBwYXJhbSBpdGVtIEl0ZW0gdG8gYWRkLlxuICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBpdGVtIGhhcyBiZWVuIGFkZGVkLlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBhZGRJdGVtKGl0ZW06IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBBZGRpbmcgaXRlbSB0cmlnZ2VycyBvbkl0ZW1zQ2hhbmdlLlxuICAgIC8vIFJldHVybiBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIG9uSXRlbXNDaGFuZ2UgZmluaXNoZXMuXG4gICAgLy8gV2UgbmVlZCBhIHByb21pc2Ugb3IgdXNlciBjb3VsZCBkbyBzb21ldGhpbmcgYWZ0ZXIgaXRlbSBoYXMgYmVlbiBhZGRlZCxcbiAgICAvLyBlLmcuIHVzZSBzZWFyY2goKSBtZXRob2QgdG8gZmluZCB0aGUgYWRkZWQgaXRlbS5cbiAgICB0aGlzLml0ZW1zLnVuc2hpZnQoaXRlbSk7XG5cbiAgICAvLyBDbG9zZSBhbnkgcnVubmluZyBzdWJzY3JpcHRpb24uXG4gICAgaWYgKHRoaXMuX2FkZEl0ZW1PYnNlcnZhYmxlKSB7XG4gICAgICB0aGlzLl9hZGRJdGVtT2JzZXJ2YWJsZS51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAvLyBDb21wbGV0ZSBjYWxsYmFjayBpc24ndCBmaXJlZCBmb3Igc29tZSByZWFzb24sXG4gICAgICAvLyBzbyB1bnN1YnNjcmliZSBpbiBib3RoIHN1Y2Nlc3MgYW5kIGZhaWwgY2FzZXMuXG4gICAgICBzZWxmLl9hZGRJdGVtT2JzZXJ2YWJsZSA9IHNlbGYub25JdGVtc0NoYW5nZS5hc09ic2VydmFibGUoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBzZWxmLl9hZGRJdGVtT2JzZXJ2YWJsZS51bnN1YnNjcmliZSgpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHNlbGYuX2FkZEl0ZW1PYnNlcnZhYmxlLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHJlamVjdCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAqIERlbGV0ZXMgaXRlbS5cbiAqICoqTm90ZSoqOiBJZiB5b3Ugd2FudCBhbiBpdGVtIHRvIGJlIGRlbGV0ZWQgZnJvbSB0aGUgb3JpZ2luYWwgYXJyYXkgYXMgd2VsbCB1c2UgdHdvLXdheSBkYXRhIGJpbmRpbmcgc3ludGF4IG9uIGBbKGl0ZW1zKV1gIGZpZWxkLlxuICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jZGVsZXRlaXRlbSkuXG4gKlxuICogQHBhcmFtIGl0ZW0gSXRlbSB0byBkZWxldGUuXG4gKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBpdGVtIGhhcyBiZWVuIGRlbGV0ZWQuXG4gKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gKi9cbiAgZGVsZXRlSXRlbShpdGVtOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBoYXNWYWx1ZUNoYW5nZWQgPSBmYWxzZTtcblxuICAgIC8vIFJlbW92ZSBkZWxldGVkIGl0ZW0gZnJvbSBzZWxlY3RlZCBpdGVtcy5cbiAgICBpZiAodGhpcy5fc2VsZWN0ZWRJdGVtcykge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtcyA9IHRoaXMuX3NlbGVjdGVkSXRlbXMuZmlsdGVyKF9pdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldEl0ZW1WYWx1ZShpdGVtKSAhPT0gdGhpcy5fZ2V0U3RvcmVkSXRlbVZhbHVlKF9pdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBkZWxldGVkIGl0ZW0gZnJvbSB2YWx1ZS5cbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlLmZpbHRlcih2YWx1ZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLmlkICE9PSBpdGVtLmlkO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCAhPT0gdGhpcy52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWVzO1xuICAgICAgICAgIGhhc1ZhbHVlQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpdGVtID09PSB0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgICAgaGFzVmFsdWVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWx1ZUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZUNoYW5nZSgpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBkZWxldGVkIGl0ZW0gZnJvbSBsaXN0LlxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoX2l0ZW0gPT4ge1xuICAgICAgcmV0dXJuIF9pdGVtLmlkICE9PSBpdGVtLmlkO1xuICAgIH0pO1xuXG4gICAgLy8gUmVmcmVzaCBpdGVtcyBvbiBwYXJlbnQgY29tcG9uZW50LlxuICAgIHRoaXMuaXRlbXNDaGFuZ2UuZW1pdChpdGVtcyk7XG5cbiAgICAvLyBSZWZyZXNoIGxpc3QuXG4gICAgdGhpcy5fc2V0SXRlbXMoaXRlbXMpO1xuXG4gICAgdGhpcy5vbkl0ZW1zQ2hhbmdlLmVtaXQoe1xuICAgICAgY29tcG9uZW50OiB0aGlzXG4gICAgfSk7XG5cbiAgICAvLyBDbG9zZSBhbnkgcnVubmluZyBzdWJzY3JpcHRpb24uXG4gICAgaWYgKHRoaXMuX2RlbGV0ZUl0ZW1PYnNlcnZhYmxlKSB7XG4gICAgICB0aGlzLl9kZWxldGVJdGVtT2JzZXJ2YWJsZS51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAvLyBDb21wbGV0ZSBjYWxsYmFjayBpc24ndCBmaXJlZCBmb3Igc29tZSByZWFzb24sXG4gICAgICAvLyBzbyB1bnN1YnNjcmliZSBpbiBib3RoIHN1Y2Nlc3MgYW5kIGZhaWwgY2FzZXMuXG4gICAgICBzZWxmLl9kZWxldGVJdGVtT2JzZXJ2YWJsZSA9IHNlbGYub25JdGVtc0NoYW5nZS5hc09ic2VydmFibGUoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBzZWxmLl9kZWxldGVJdGVtT2JzZXJ2YWJsZS51bnN1YnNjcmliZSgpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHNlbGYuX2RlbGV0ZUl0ZW1PYnNlcnZhYmxlLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHJlamVjdCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGFueSBpdGVtIGhhcyBiZWVuIHNlbGVjdGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNoYXN2YWx1ZSkuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgYm9vbGVhbiBkZXRlcm1pbmluZyB3aGV0aGVyIGFueSBpdGVtIGhhcyBiZWVuIHNlbGVjdGVkLlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBoYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWVJdGVtcy5sZW5ndGggIT09IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZUl0ZW1zLmxlbmd0aCAhPT0gMCAmJiAhdGhpcy5faXNOdWxsT3JXaGl0ZVNwYWNlKHRoaXMuX3ZhbHVlSXRlbXNbMF0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBNb2RhbC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jb3BlbikuXG4gICAqXG4gICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIE1vZGFsIGhhcyBiZWVuIG9wZW5lZC5cbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgb3BlbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBpZiAoIXNlbGYuX2lzRW5hYmxlZCB8fCBzZWxmLl9pc09wZW5lZCkge1xuICAgICAgICByZWplY3QoJ0lvbmljU2VsZWN0YWJsZSBpcyBkaXNhYmxlZCBvciBhbHJlYWR5IG9wZW5lZC4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLl9maWx0ZXJJdGVtcygpO1xuICAgICAgc2VsZi5faXNPcGVuZWQgPSB0cnVlO1xuXG4gICAgICBjb25zdCBtb2RhbE9wdGlvbnM6IE1vZGFsT3B0aW9ucyA9IHtcbiAgICAgICAgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVNb2RhbENvbXBvbmVudCxcbiAgICAgICAgY29tcG9uZW50UHJvcHM6IHsgc2VsZWN0Q29tcG9uZW50OiBzZWxmIH0sXG4gICAgICAgIGJhY2tkcm9wRGlzbWlzczogc2VsZi5fc2hvdWxkQmFja2Ryb3BDbG9zZVxuICAgICAgfTtcblxuICAgICAgaWYgKHNlbGYubW9kYWxDc3NDbGFzcykge1xuICAgICAgICBtb2RhbE9wdGlvbnMuY3NzQ2xhc3MgPSBzZWxmLm1vZGFsQ3NzQ2xhc3M7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLm1vZGFsRW50ZXJBbmltYXRpb24pIHtcbiAgICAgICAgbW9kYWxPcHRpb25zLmVudGVyQW5pbWF0aW9uID0gc2VsZi5tb2RhbEVudGVyQW5pbWF0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi5tb2RhbExlYXZlQW5pbWF0aW9uKSB7XG4gICAgICAgIG1vZGFsT3B0aW9ucy5sZWF2ZUFuaW1hdGlvbiA9IHNlbGYubW9kYWxMZWF2ZUFuaW1hdGlvbjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5fbW9kYWxDb250cm9sbGVyLmNyZWF0ZShtb2RhbE9wdGlvbnMpLnRoZW4obW9kYWwgPT4ge1xuICAgICAgICBzZWxmLl9tb2RhbCA9IG1vZGFsO1xuICAgICAgICBtb2RhbC5wcmVzZW50KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgLy8gU2V0IGZvY3VzIGFmdGVyIE1vZGFsIGhhcyBvcGVuZWQgdG8gYXZvaWQgZmxpY2tlcmluZyBvZiBmb2N1cyBoaWdobGlnaHRpbmdcbiAgICAgICAgICAvLyBiZWZvcmUgTW9kYWwgb3BlbmluZy5cbiAgICAgICAgICBzZWxmLl9zZXRJb25JdGVtSGFzRm9jdXModHJ1ZSk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtb2RhbC5vbldpbGxEaXNtaXNzKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgc2VsZi5fc2V0SW9uSXRlbUhhc0ZvY3VzKGZhbHNlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbW9kYWwub25EaWREaXNtaXNzKCkudGhlbihldmVudCA9PiB7XG4gICAgICAgICAgc2VsZi5faXNPcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgICBzZWxmLl9pdGVtc1RvQ29uZmlybSA9IFtdO1xuXG4gICAgICAgICAgLy8gQ2xvc2VkIGJ5IGNsaWNraW5nIG9uIGJhY2tkcm9wIG91dHNpZGUgbW9kYWwuXG4gICAgICAgICAgaWYgKGV2ZW50LnJvbGUgPT09ICdiYWNrZHJvcCcpIHtcbiAgICAgICAgICAgIHNlbGYub25DbG9zZS5lbWl0KHtcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBzZWxmXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIE1vZGFsLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNjbG9zZSkuXG4gICAqXG4gICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIE1vZGFsIGhhcyBiZWVuIGNsb3NlZC5cbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgY2xvc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgaWYgKCFzZWxmLl9pc0VuYWJsZWQgfHwgIXNlbGYuX2lzT3BlbmVkKSB7XG4gICAgICAgIHJlamVjdCgnSW9uaWNTZWxlY3RhYmxlIGlzIGRpc2FibGVkIG9yIGFscmVhZHkgY2xvc2VkLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYucHJvcGFnYXRlT25Ub3VjaGVkKCk7XG4gICAgICBzZWxmLl9pc09wZW5lZCA9IGZhbHNlO1xuICAgICAgc2VsZi5faXRlbVRvQWRkID0gbnVsbDtcbiAgICAgIHNlbGYuX21vZGFsLmRpc21pc3MoKS50aGVuKCgpID0+IHtcbiAgICAgICAgc2VsZi5fc2V0SW9uSXRlbUhhc0ZvY3VzKGZhbHNlKTtcbiAgICAgICAgc2VsZi5oaWRlQWRkSXRlbVRlbXBsYXRlKCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyB2YWx1ZS5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jY2xlYXIpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBjbGVhcigpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5pc011bHRpcGxlID8gW10gOiBudWxsO1xuICAgIHRoaXMuX2l0ZW1zVG9Db25maXJtID0gW107XG4gICAgdGhpcy5wcm9wYWdhdGVPbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maXJtcyBzZWxlY3RlZCBpdGVtcyBieSB1cGRhdGluZyB2YWx1ZS5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jY29uZmlybSkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGNvbmZpcm0oKSB7XG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgdGhpcy5fZG9TZWxlY3QodGhpcy5fc2VsZWN0ZWRJdGVtcyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmhhc0NvbmZpcm1CdXR0b24gfHwgdGhpcy5mb290ZXJUZW1wbGF0ZSkge1xuICAgICAgdGhpcy5fZG9TZWxlY3QodGhpcy5fc2VsZWN0ZWRJdGVtc1swXSB8fCBudWxsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0cyBvciBkZXNlbGVjdHMgYWxsIG9yIHNwZWNpZmljIGl0ZW1zLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiN0b2dnbGVpdGVtcykuXG4gICAqXG4gICAqIEBwYXJhbSBpc1NlbGVjdCBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gc2VsZWN0IG9yIGRlc2VsZWN0IGl0ZW1zLlxuICAgKiBAcGFyYW0gW2l0ZW1zXSBJdGVtcyB0byB0b2dnbGUuIElmIGl0ZW1zIGFyZSBub3Qgc2V0IGFsbCBpdGVtcyB3aWxsIGJlIHRvZ2dsZWQuXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIHRvZ2dsZUl0ZW1zKGlzU2VsZWN0OiBib29sZWFuLCBpdGVtcz86IGFueVtdKSB7XG4gICAgaWYgKGlzU2VsZWN0KSB7XG4gICAgICBjb25zdCBoYXNJdGVtcyA9IGl0ZW1zICYmIGl0ZW1zLmxlbmd0aDtcbiAgICAgIGxldCBpdGVtc1RvVG9nZ2xlID0gdGhpcy5fZ3JvdXBzLnJlZHVjZSgoYWxsSXRlbXMsIGdyb3VwKSA9PiB7XG4gICAgICAgIHJldHVybiBhbGxJdGVtcy5jb25jYXQoZ3JvdXAuaXRlbXMpO1xuICAgICAgfSwgW10pO1xuXG4gICAgICAvLyBEb24ndCBhbGxvdyB0byBzZWxlY3QgYWxsIGl0ZW1zIGluIHNpbmdsZSBtb2RlLlxuICAgICAgaWYgKCF0aGlzLmlzTXVsdGlwbGUgJiYgIWhhc0l0ZW1zKSB7XG4gICAgICAgIGl0ZW1zVG9Ub2dnbGUgPSBbXTtcbiAgICAgIH1cblxuICAgICAgLy8gVG9nZ2xlIHNwZWNpZmljIGl0ZW1zLlxuICAgICAgaWYgKGhhc0l0ZW1zKSB7XG4gICAgICAgIGl0ZW1zVG9Ub2dnbGUgPSBpdGVtc1RvVG9nZ2xlLmZpbHRlcihpdGVtVG9Ub2dnbGUgPT4ge1xuICAgICAgICAgIHJldHVybiBpdGVtcy5maW5kKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEl0ZW1WYWx1ZShpdGVtVG9Ub2dnbGUpID09PSB0aGlzLl9nZXRJdGVtVmFsdWUoaXRlbSk7XG4gICAgICAgICAgfSkgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVGFrZSB0aGUgZmlyc3QgaXRlbSBmb3Igc2luZ2xlIG1vZGUuXG4gICAgICAgIGlmICghdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICAgICAgaXRlbXNUb1RvZ2dsZS5zcGxpY2UoMCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaXRlbXNUb1RvZ2dsZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICB0aGlzLl9hZGRTZWxlY3RlZEl0ZW0oaXRlbSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuX3NldEl0ZW1zVG9Db25maXJtKHRoaXMuX3NlbGVjdGVkSXRlbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjcm9sbHMgdG8gdGhlIHRvcCBvZiBNb2RhbCBjb250ZW50LlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNzY3JvbGx0b3RvcCkuXG4gICAqXG4gICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNjcm9sbCBoYXMgYmVlbiBjb21wbGV0ZWQuXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIHNjcm9sbFRvVG9wKCk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgaWYgKCFzZWxmLl9pc09wZW5lZCkge1xuICAgICAgICByZWplY3QoJ0lvbmljU2VsZWN0YWJsZSBjb250ZW50IGNhbm5vdCBiZSBzY3JvbGxlZC4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLl9tb2RhbENvbXBvbmVudC5fY29udGVudC5zY3JvbGxUb1RvcCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGxzIHRvIHRoZSBib3R0b20gb2YgTW9kYWwgY29udGVudC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2Nyb2xsdG9ib3R0b20pLlxuICAgKlxuICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzY3JvbGwgaGFzIGJlZW4gY29tcGxldGVkLlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBzY3JvbGxUb0JvdHRvbSgpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGlmICghc2VsZi5faXNPcGVuZWQpIHtcbiAgICAgICAgcmVqZWN0KCdJb25pY1NlbGVjdGFibGUgY29udGVudCBjYW5ub3QgYmUgc2Nyb2xsZWQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5fbW9kYWxDb21wb25lbnQuX2NvbnRlbnQuc2Nyb2xsVG9Cb3R0b20oKS50aGVuKCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHNlYXJjaCBwcm9jZXNzIGJ5IHNob3dpbmcgTG9hZGluZyBzcGlubmVyLlxuICAgKiBVc2UgaXQgdG9nZXRoZXIgd2l0aCBgb25TZWFyY2hgIGV2ZW50IHRvIGluZGljYXRlIHNlYXJjaCBzdGFydC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc3RhcnRzZWFyY2gpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBzdGFydFNlYXJjaCgpIHtcbiAgICBpZiAoIXRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd0xvYWRpbmcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmRzIHNlYXJjaCBwcm9jZXNzIGJ5IGhpZGluZyBMb2FkaW5nIHNwaW5uZXIgYW5kIHJlZnJlc2hpbmcgaXRlbXMuXG4gICAqIFVzZSBpdCB0b2dldGhlciB3aXRoIGBvblNlYXJjaGAgZXZlbnQgdG8gaW5kaWNhdGUgc2VhcmNoIGVuZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jZW5kc2VhcmNoKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgZW5kU2VhcmNoKCkge1xuICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5oaWRlTG9hZGluZygpO1xuXG4gICAgLy8gV2hlbiBpbnNpZGUgSW9uaWMgTW9kYWwgYW5kIG9uU2VhcmNoIGV2ZW50IGlzIHVzZWQsXG4gICAgLy8gbmdEb0NoZWNrKCkgZG9lc24ndCB3b3JrIGFzIF9pdGVtc0RpZmZlciBmYWlscyB0byBkZXRlY3QgY2hhbmdlcy5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS9pc3N1ZXMvNDQuXG4gICAgLy8gUmVmcmVzaCBpdGVtcyBtYW51YWxseS5cbiAgICB0aGlzLl9zZXRJdGVtcyh0aGlzLml0ZW1zKTtcbiAgICB0aGlzLl9lbWl0T25TZWFyY2hTdWNjZXNzT3JGYWlsKHRoaXMuX2hhc0ZpbHRlcmVkSXRlbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgaW5maW5pdGUgc2Nyb2xsLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNlbmFibGVpbmZpbml0ZXNjcm9sbCkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGVuYWJsZUluZmluaXRlU2Nyb2xsKCkge1xuICAgIGlmICghdGhpcy5faGFzSW5maW5pdGVTY3JvbGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2RhbENvbXBvbmVudC5faW5maW5pdGVTY3JvbGwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyBpbmZpbml0ZSBzY3JvbGwuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2Rpc2FibGVpbmZpbml0ZXNjcm9sbCkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGRpc2FibGVJbmZpbml0ZVNjcm9sbCgpIHtcbiAgICBpZiAoIXRoaXMuX2hhc0luZmluaXRlU2Nyb2xsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kYWxDb21wb25lbnQuX2luZmluaXRlU2Nyb2xsLmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmRzIGluZmluaXRlIHNjcm9sbC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jZW5kaW5maW5pdGVzY3JvbGwpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBlbmRJbmZpbml0ZVNjcm9sbCgpIHtcbiAgICBpZiAoIXRoaXMuX2hhc0luZmluaXRlU2Nyb2xsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kYWxDb21wb25lbnQuX2luZmluaXRlU2Nyb2xsLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fc2V0SXRlbXModGhpcy5pdGVtcyk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcnMgc2VhcmNoIG9mIGl0ZW1zLlxuICAgKiAqKk5vdGUqKjogYGNhblNlYXJjaGAgaGFzIHRvIGJlIGVuYWJsZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3NlYXJjaCkuXG4gICAqXG4gICAqIEBwYXJhbSB0ZXh0IFRleHQgdG8gc2VhcmNoIGl0ZW1zIGJ5LlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBzZWFyY2godGV4dDogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQgfHwgIXRoaXMuX2lzT3BlbmVkIHx8ICF0aGlzLmNhblNlYXJjaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3NlYXJjaFRleHQgPSB0ZXh0O1xuICAgIHRoaXMuX3NldEhhc1NlYXJjaFRleHQoKTtcbiAgICB0aGlzLl9maWx0ZXJJdGVtcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIExvYWRpbmcgc3Bpbm5lci5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2hvd2xvYWRpbmcpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBzaG93TG9hZGluZygpIHtcbiAgICBpZiAoIXRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyBMb2FkaW5nIHNwaW5uZXIuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2hpZGVsb2FkaW5nKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgaGlkZUxvYWRpbmcoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9pc1NlYXJjaGluZyA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIGBpb25pY1NlbGVjdGFibGVBZGRJdGVtVGVtcGxhdGVgLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNzaG93YWRkaXRlbXRlbXBsYXRlKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgc2hvd0FkZEl0ZW1UZW1wbGF0ZSgpIHtcbiAgICB0aGlzLl90b2dnbGVBZGRJdGVtVGVtcGxhdGUodHJ1ZSk7XG5cbiAgICAvLyBQb3NpdGlvbiB0aGUgdGVtcGxhdGUgb25seSB3aGVuIGl0IHNob3VzIHVwLlxuICAgIHRoaXMuX3Bvc2l0aW9uQWRkSXRlbVRlbXBsYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgYGlvbmljU2VsZWN0YWJsZUFkZEl0ZW1UZW1wbGF0ZWAuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2hpZGVhZGRpdGVtdGVtcGxhdGUpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBoaWRlQWRkSXRlbVRlbXBsYXRlKCkge1xuICAgIC8vIENsZWFuIGl0ZW0gdG8gYWRkIGFzIGl0J3Mgbm8gbG9uZ2VyIG5lZWRlZCBvbmNlIEFkZCBJdGVtIE1vZGFsIGhhcyBiZWVuIGNsb3NlZC5cbiAgICB0aGlzLl9pdGVtVG9BZGQgPSBudWxsO1xuICAgIHRoaXMuX3RvZ2dsZUFkZEl0ZW1UZW1wbGF0ZShmYWxzZSk7XG4gIH1cbn1cbiJdfQ==