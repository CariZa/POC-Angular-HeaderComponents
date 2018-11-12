(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('my-component-library', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['my-component-library'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

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
                            RedHeaderComponent
                        ],
                        exports: [
                            BlueHeaderComponent,
                            RedHeaderComponent
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

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktY29tcG9uZW50LWxpYnJhcnkudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9teS1jb21wb25lbnQtbGlicmFyeS9zcmMvYXBwL21vZHVsZXMvY29tcG9uZW50cy9ibHVlLWhlYWRlci9ibHVlLWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL215LWNvbXBvbmVudC1saWJyYXJ5L3NyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzL3JlZC1oZWFkZXIvcmVkLWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL215LWNvbXBvbmVudC1saWJyYXJ5L3NyYy9hcHAvbW9kdWxlcy9oZWFkZXIvaGVhZGVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdibHVlLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9ibHVlLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2JsdWUtaGVhZGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCbHVlSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JlZC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVkLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlZC1oZWFkZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlZEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBCbHVlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi8uLi9jb21wb25lbnRzL2JsdWUtaGVhZGVyL2JsdWUtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZWRIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuLy4uL2NvbXBvbmVudHMvcmVkLWhlYWRlci9yZWQtaGVhZGVyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCbHVlSGVhZGVyQ29tcG9uZW50LFxuICAgIFJlZEhlYWRlckNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQmx1ZUhlYWRlckNvbXBvbmVudCxcbiAgICBSZWRIZWFkZXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQVNFO1NBQWlCOzs7O1FBRWpCLHNDQUFROzs7WUFBUjthQUNDOztvQkFWRkEsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxhQUFhO3dCQUN2QiwrREFBMkM7O3FCQUU1Qzs7OztrQ0FORDs7Ozs7OztBQ0FBO1FBU0U7U0FBaUI7Ozs7UUFFakIscUNBQVE7OztZQUFSO2FBQ0M7O29CQVZGQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLCtEQUEwQzs7cUJBRTNDOzs7O2lDQU5EOzs7Ozs7O0FDQUE7Ozs7b0JBUUNDLGFBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BDLG1CQUFZO3lCQUNiO3dCQUNELFlBQVksRUFBRTs0QkFDWixtQkFBbUI7NEJBQ25CLGtCQUFrQjt5QkFDbkI7d0JBQ0QsT0FBTyxFQUFFOzRCQUNQLG1CQUFtQjs0QkFDbkIsa0JBQWtCO3lCQUNuQjtxQkFDRjs7MkJBcEJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9