import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
    selector: 'my-p',
    template: '<p>test test test</p>',
    styles: [':host { position: relative }'],
    providers: [ SpinnerService ]
})
export class PComponent {
    
    constructor (private spinnerService: SpinnerService) {
        setTimeout(() => { spinnerService.errorSpinnerService(true); }, 3000);
    }
}
