import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class YellowHeaderComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
YellowHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'yellow-header',
                template: "<div>\n  <h1><ng-content></ng-content></h1>\n</div>",
                styles: ["div{background:#ff0;padding:15px;width:100%;color:#fff;font-size:24px;font-family:Arial,Helvetica,sans-serif}h1{margin:0;padding:0}"]
            }] }
];
/** @nocollapse */
YellowHeaderComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class BlueHeaderComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
BlueHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'blue-header',
                template: "<div>\n  <h1><ng-content></ng-content></h1>\n</div>",
                styles: ["div{background:#00f;padding:15px;width:100%;color:#fff;font-size:24px;font-family:Arial,Helvetica,sans-serif}h1{margin:0;padding:0}"]
            }] }
];
/** @nocollapse */
BlueHeaderComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class RedHeaderComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
RedHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'red-header',
                template: "<div>\n  <h1><ng-content></ng-content></h1>\n</div>",
                styles: ["div{background:red;padding:15px;width:100%;color:#fff;font-size:24px;font-family:Arial,Helvetica,sans-serif}h1{margin:0;padding:0}"]
            }] }
];
/** @nocollapse */
RedHeaderComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class HeaderModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { HeaderModule, BlueHeaderComponent as ɵa, RedHeaderComponent as ɵb, YellowHeaderComponent as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWNvbXBvbmVudHMuanMubWFwIiwic291cmNlcyI6WyJuZzovL2hlYWRlci1jb21wb25lbnRzL3NyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzL3llbGxvdy1oZWFkZXIveWVsbG93LWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL2hlYWRlci1jb21wb25lbnRzL3NyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2JsdWUtaGVhZGVyL2JsdWUtaGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vaGVhZGVyLWNvbXBvbmVudHMvc3JjL2FwcC9tb2R1bGVzL2NvbXBvbmVudHMvcmVkLWhlYWRlci9yZWQtaGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vaGVhZGVyLWNvbXBvbmVudHMvc3JjL2FwcC9tb2R1bGVzL2hlYWRlci9oZWFkZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3llbGxvdy1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4veWVsbG93LWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3llbGxvdy1oZWFkZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFllbGxvd0hlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdibHVlLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9ibHVlLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2JsdWUtaGVhZGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCbHVlSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JlZC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVkLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlZC1oZWFkZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlZEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBZZWxsb3dIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuLy4uL2NvbXBvbmVudHMveWVsbG93LWhlYWRlci95ZWxsb3ctaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCbHVlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi8uLi9jb21wb25lbnRzL2JsdWUtaGVhZGVyL2JsdWUtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZWRIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuLy4uL2NvbXBvbmVudHMvcmVkLWhlYWRlci9yZWQtaGVhZGVyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCbHVlSGVhZGVyQ29tcG9uZW50LFxuICAgIFJlZEhlYWRlckNvbXBvbmVudCxcbiAgICBZZWxsb3dIZWFkZXJDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEJsdWVIZWFkZXJDb21wb25lbnQsXG4gICAgUmVkSGVhZGVyQ29tcG9uZW50LFxuICAgIFllbGxvd0hlYWRlckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlck1vZHVsZSB7IH0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBU0UsaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QiwrREFBNkM7O2FBRTlDOzs7Ozs7Ozs7QUNORDtJQVNFLGlCQUFpQjs7OztJQUVqQixRQUFRO0tBQ1A7OztZQVZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsK0RBQTJDOzthQUU1Qzs7Ozs7Ozs7O0FDTkQ7SUFTRSxpQkFBaUI7Ozs7SUFFakIsUUFBUTtLQUNQOzs7WUFWRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLCtEQUEwQzs7YUFFM0M7Ozs7Ozs7OztBQ05EOzs7WUFTQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLG1CQUFtQjtvQkFDbkIsa0JBQWtCO29CQUNsQixxQkFBcUI7aUJBQ3RCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxtQkFBbUI7b0JBQ25CLGtCQUFrQjtvQkFDbEIscUJBQXFCO2lCQUN0QjthQUNGOzs7Ozs7Ozs7Ozs7Ozs7In0=