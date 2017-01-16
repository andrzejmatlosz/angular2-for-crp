import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
    selector: 'my-div',
    template: '<div>test test test</div>',
    styles: [':host { position: relative }'],
    providers: [ SpinnerService ]
})
export class DivComponent {
    
    constructor (private spinnerService: SpinnerService) {
        setTimeout(() => { spinnerService.informSpinnerService(false); }, 6000);
    }
}
