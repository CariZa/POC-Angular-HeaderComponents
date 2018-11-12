(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('header-components', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['header-components'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
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

    exports.HeaderModule = HeaderModule;
    exports.ɵa = BlueHeaderComponent;
    exports.ɵb = RedHeaderComponent;
    exports.ɵc = YellowHeaderComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWNvbXBvbmVudHMudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9oZWFkZXItY29tcG9uZW50cy9zcmMvYXBwL21vZHVsZXMvY29tcG9uZW50cy95ZWxsb3ctaGVhZGVyL3llbGxvdy1oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9oZWFkZXItY29tcG9uZW50cy9zcmMvYXBwL21vZHVsZXMvY29tcG9uZW50cy9ibHVlLWhlYWRlci9ibHVlLWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL2hlYWRlci1jb21wb25lbnRzL3NyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzL3JlZC1oZWFkZXIvcmVkLWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL2hlYWRlci1jb21wb25lbnRzL3NyYy9hcHAvbW9kdWxlcy9oZWFkZXIvaGVhZGVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd5ZWxsb3ctaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3llbGxvdy1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi95ZWxsb3ctaGVhZGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBZZWxsb3dIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmx1ZS1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYmx1ZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ibHVlLWhlYWRlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQmx1ZUhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyZWQtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZWQtaGVhZGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZWRIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgWWVsbG93SGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi8uLi9jb21wb25lbnRzL3llbGxvdy1oZWFkZXIveWVsbG93LWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmx1ZUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vLi4vY29tcG9uZW50cy9ibHVlLWhlYWRlci9ibHVlLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVkSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi8uLi9jb21wb25lbnRzL3JlZC1oZWFkZXIvcmVkLWhlYWRlci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQmx1ZUhlYWRlckNvbXBvbmVudCxcbiAgICBSZWRIZWFkZXJDb21wb25lbnQsXG4gICAgWWVsbG93SGVhZGVyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBCbHVlSGVhZGVyQ29tcG9uZW50LFxuICAgIFJlZEhlYWRlckNvbXBvbmVudCxcbiAgICBZZWxsb3dIZWFkZXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJNb2R1bGUgeyB9Il0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFTRTtTQUFpQjs7OztRQUVqQix3Q0FBUTs7O1lBQVI7YUFDQzs7b0JBVkZBLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsK0RBQTZDOztxQkFFOUM7Ozs7b0NBTkQ7Ozs7Ozs7QUNBQTtRQVNFO1NBQWlCOzs7O1FBRWpCLHNDQUFROzs7WUFBUjthQUNDOztvQkFWRkEsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxhQUFhO3dCQUN2QiwrREFBMkM7O3FCQUU1Qzs7OztrQ0FORDs7Ozs7OztBQ0FBO1FBU0U7U0FBaUI7Ozs7UUFFakIscUNBQVE7OztZQUFSO2FBQ0M7O29CQVZGQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLCtEQUEwQzs7cUJBRTNDOzs7O2lDQU5EOzs7Ozs7O0FDQUE7Ozs7b0JBU0NDLGFBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BDLG1CQUFZO3lCQUNiO3dCQUNELFlBQVksRUFBRTs0QkFDWixtQkFBbUI7NEJBQ25CLGtCQUFrQjs0QkFDbEIscUJBQXFCO3lCQUN0Qjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1AsbUJBQW1COzRCQUNuQixrQkFBa0I7NEJBQ2xCLHFCQUFxQjt5QkFDdEI7cUJBQ0Y7OzJCQXZCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=