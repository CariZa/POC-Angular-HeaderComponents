import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var YellowHeaderComponent = /** @class */ (function () {
    function YellowHeaderComponent() {
    }
    /**
     * @return {?}
     */
    YellowHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    YellowHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'yellow-header',
                    template: "<div>\n  <h1><ng-content></ng-content></h1>\n</div>",
                    styles: ["div{background:#ff0;padding:15px;width:100%;color:#fff;font-size:24px;font-family:Arial,Helvetica,sans-serif}h1{margin:0;padding:0}"]
                }] }
    ];
    /** @nocollapse */
    YellowHeaderComponent.ctorParameters = function () { return []; };
    return YellowHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BlueHeaderComponent = /** @class */ (function () {
    function BlueHeaderComponent() {
    }
    /**
     * @return {?}
     */
    BlueHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BlueHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'blue-header',
                    template: "<div>\n  <h1><ng-content></ng-content></h1>\n</div>",
                    styles: ["div{background:#00f;padding:15px;width:100%;color:#fff;font-size:24px;font-family:Arial,Helvetica,sans-serif}h1{margin:0;padding:0}"]
                }] }
    ];
    /** @nocollapse */
    BlueHeaderComponent.ctorParameters = function () { return []; };
    return BlueHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RedHeaderComponent = /** @class */ (function () {
    function RedHeaderComponent() {
    }
    /**
     * @return {?}
     */
    RedHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    RedHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'red-header',
                    template: "<div>\n  <h1><ng-content></ng-content></h1>\n</div>",
                    styles: ["div{background:red;padding:15px;width:100%;color:#fff;font-size:24px;font-family:Arial,Helvetica,sans-serif}h1{margin:0;padding:0}"]
                }] }
    ];
    /** @nocollapse */
    RedHeaderComponent.ctorParameters = function () { return []; };
    return RedHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        BlueHeaderComponent,
                        RedHeaderComponent,
                        YellowHeaderComponent
                    ],
                    exports: [
                        BlueHeaderComponent,
                        RedHeaderComponent,
                        YellowHeaderComponent
                    ]
                },] }
    ];
    return HeaderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { HeaderModule, BlueHeaderComponent as ɵa, RedHeaderComponent as ɵb, YellowHeaderComponent as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWNvbXBvbmVudHMuanMubWFwIiwic291cmNlcyI6WyJuZzovL2hlYWRlci1jb21wb25lbnRzL3NyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzL3llbGxvdy1oZWFkZXIveWVsbG93LWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL2hlYWRlci1jb21wb25lbnRzL3NyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2JsdWUtaGVhZGVyL2JsdWUtaGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vaGVhZGVyLWNvbXBvbmVudHMvc3JjL2FwcC9tb2R1bGVzL2NvbXBvbmVudHMvcmVkLWhlYWRlci9yZWQtaGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vaGVhZGVyLWNvbXBvbmVudHMvc3JjL2FwcC9tb2R1bGVzL2hlYWRlci9oZWFkZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3llbGxvdy1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4veWVsbG93LWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3llbGxvdy1oZWFkZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFllbGxvd0hlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdibHVlLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9ibHVlLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2JsdWUtaGVhZGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCbHVlSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JlZC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVkLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlZC1oZWFkZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlZEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBZZWxsb3dIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuLy4uL2NvbXBvbmVudHMveWVsbG93LWhlYWRlci95ZWxsb3ctaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCbHVlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi8uLi9jb21wb25lbnRzL2JsdWUtaGVhZGVyL2JsdWUtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZWRIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuLy4uL2NvbXBvbmVudHMvcmVkLWhlYWRlci9yZWQtaGVhZGVyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCbHVlSGVhZGVyQ29tcG9uZW50LFxuICAgIFJlZEhlYWRlckNvbXBvbmVudCxcbiAgICBZZWxsb3dIZWFkZXJDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEJsdWVIZWFkZXJDb21wb25lbnQsXG4gICAgUmVkSGVhZGVyQ29tcG9uZW50LFxuICAgIFllbGxvd0hlYWRlckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlck1vZHVsZSB7IH0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBU0U7S0FBaUI7Ozs7SUFFakIsd0NBQVE7OztJQUFSO0tBQ0M7O2dCQVZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsK0RBQTZDOztpQkFFOUM7Ozs7Z0NBTkQ7Ozs7Ozs7QUNBQTtJQVNFO0tBQWlCOzs7O0lBRWpCLHNDQUFROzs7SUFBUjtLQUNDOztnQkFWRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLCtEQUEyQzs7aUJBRTVDOzs7OzhCQU5EOzs7Ozs7O0FDQUE7SUFTRTtLQUFpQjs7OztJQUVqQixxQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBVkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QiwrREFBMEM7O2lCQUUzQzs7Ozs2QkFORDs7Ozs7OztBQ0FBOzs7O2dCQVNDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLHFCQUFxQjtxQkFDdEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3dCQUNsQixxQkFBcUI7cUJBQ3RCO2lCQUNGOzt1QkF2QkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==