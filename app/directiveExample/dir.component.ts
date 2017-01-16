import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
    selector: 'my-dir',
    template: '<div>test test test</div>',
    styles: [':host { position: relative }'],
    providers: [ SpinnerService ]
})
export class DirComponent {
    
    constructor (private spinnerService: SpinnerService) {
        setTimeout(() => { spinnerService.informSpinnerService(false); }, 6000);
    }
}
