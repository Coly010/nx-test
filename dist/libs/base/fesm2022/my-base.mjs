import * as i0 from '@angular/core';
import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class BaseService {
    constructor() {
        this._assetsUrlRoot = '';
    }
    get assetsUrlRoot() {
        return this._assetsUrlRoot;
    }
    changeAssetsSource(prefix) {
        this._assetsUrlRoot = prefix.endsWith('/') ? prefix : prefix + '/';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: BaseService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: BaseService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: BaseService, decorators: [{
            type: Injectable
        }] });

class BaseModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: BaseModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.1", ngImport: i0, type: BaseModule, imports: [CommonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: BaseModule, providers: [BaseService], imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: BaseModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    providers: [BaseService],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BaseModule, BaseService };
//# sourceMappingURL=my-base.mjs.map
