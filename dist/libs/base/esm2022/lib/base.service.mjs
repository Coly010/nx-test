import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class BaseService {
    constructor() {
        this._assetsUrlRoot = '';
    }
    get assetsUrlRoot() {
        return this._assetsUrlRoot;
    }
    changeAssetsSource(prefix) {
        this._assetsUrlRoot = prefix.endsWith('/') ? prefix : prefix + '/';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BaseService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BaseService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BaseService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9iYXNlL3NyYy9saWIvYmFzZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxXQUFXO0lBSHhCO1FBSVksbUJBQWMsR0FBRyxFQUFFLENBQUM7S0FTL0I7SUFQQyxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUVELGtCQUFrQixDQUFDLE1BQWM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDckUsQ0FBQzsrR0FUVSxXQUFXO21IQUFYLFdBQVcsY0FGWCxNQUFNOzs0RkFFTixXQUFXO2tCQUh2QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBQyxNQUFNO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOidyb290J1xufSlcbmV4cG9ydCBjbGFzcyBCYXNlU2VydmljZSB7XG4gIHByb3RlY3RlZCBfYXNzZXRzVXJsUm9vdCA9ICcnO1xuXG4gIGdldCBhc3NldHNVcmxSb290KCkge1xuICAgIHJldHVybiB0aGlzLl9hc3NldHNVcmxSb290O1xuICB9XG5cbiAgY2hhbmdlQXNzZXRzU291cmNlKHByZWZpeDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fYXNzZXRzVXJsUm9vdCA9IHByZWZpeC5lbmRzV2l0aCgnLycpID8gcHJlZml4IDogcHJlZml4ICsgJy8nO1xuICB9XG59XG4iXX0=