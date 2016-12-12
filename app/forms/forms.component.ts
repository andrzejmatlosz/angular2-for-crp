import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-forms',
    templateUrl: 'app/forms/forms.component.html',
    styleUrls: [ 'app/forms/forms.component.css' ]
})
export class FormsComponent implements OnInit {
    public errorMessage: string;

    constructor (
    ) {

    }

    ngOnInit () { 
    }
}
