import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
    selector: 'my-directive-example',
    templateUrl: 'app/directiveExample/directiveExample.component.html',
    styleUrls: [ 'app/directiveExample/directiveExample.component.css' ],
    providers: [ SpinnerService ]
})
export class DirectiveExampleComponent {

    public isZoomEnabled: boolean= false;

    public ifCondition: boolean= false;

    public condition1: boolean= false;
    public condition2: boolean= false;
    public condition3: boolean= false;
    public conidtionsArray: Array<boolean> = [];
    
    constructor (private spinnerService: SpinnerService) {
        setTimeout(() => { spinnerService.informSpinnerService(false); }, 2000);
    }

    refreshConditionsArray() {
        this.conidtionsArray = [ this.condition1, this.condition2, this.condition3 ];
    }
}
