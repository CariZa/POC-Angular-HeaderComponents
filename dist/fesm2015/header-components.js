import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
                    RedHeaderComponent
                ],
                exports: [
                    BlueHeaderComponent,
                    RedHeaderComponent
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

export { HeaderModule, BlueHeaderComponent as ɵa, RedHeaderComponent as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWNvbXBvbmVudHMuanMubWFwIiwic291cmNlcyI6WyJuZzovL2hlYWRlci1jb21wb25lbnRzL3NyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2JsdWUtaGVhZGVyL2JsdWUtaGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vaGVhZGVyLWNvbXBvbmVudHMvc3JjL2FwcC9tb2R1bGVzL2NvbXBvbmVudHMvcmVkLWhlYWRlci9yZWQtaGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vaGVhZGVyLWNvbXBvbmVudHMvc3JjL2FwcC9tb2R1bGVzL2hlYWRlci9oZWFkZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JsdWUtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JsdWUtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmx1ZS1oZWFkZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJsdWVIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmVkLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWQtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVkLWhlYWRlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVkSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEJsdWVIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuLy4uL2NvbXBvbmVudHMvYmx1ZS1oZWFkZXIvYmx1ZS1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFJlZEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vLi4vY29tcG9uZW50cy9yZWQtaGVhZGVyL3JlZC1oZWFkZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEJsdWVIZWFkZXJDb21wb25lbnQsXG4gICAgUmVkSGVhZGVyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBCbHVlSGVhZGVyQ29tcG9uZW50LFxuICAgIFJlZEhlYWRlckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlck1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUFTRSxpQkFBaUI7Ozs7SUFFakIsUUFBUTtLQUNQOzs7WUFWRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLCtEQUEyQzs7YUFFNUM7Ozs7Ozs7OztBQ05EO0lBU0UsaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QiwrREFBMEM7O2FBRTNDOzs7Ozs7Ozs7QUNORDs7O1lBUUMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWixtQkFBbUI7b0JBQ25CLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLG1CQUFtQjtvQkFDbkIsa0JBQWtCO2lCQUNuQjthQUNGOzs7Ozs7Ozs7Ozs7Ozs7In0=