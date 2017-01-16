import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SpinnerService {
    private spinnerServiceSource = new Subject<string>();
    private spinnerServiceErrorSource = new Subject<string>();

    constructor() {
        console.log('create spinner service');
    }

    getSpinnerService() {
        return this.spinnerServiceSource.asObservable();
    }
    
    getErrorSpinnerService() {
        return this.spinnerServiceErrorSource.asObservable();
    }

    informSpinnerService(value: boolean) {
        this.spinnerServiceSource.next(value);
    }
    
    errorSpinnerService(value: boolean) {
        this.spinnerServiceErrorSource.next(value);
    }
}