import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'my-complex-select',
    templateUrl: 'app/dashboard/complex-select.component.html',
    styleUrls: [ 'app/dashboard/complex-select.component.css' ]
})
export class ComplexSelectComponent {

    @ContentChild(TemplateRef) innerTemplate: TemplateRef;
    
    public items: Array<string> = [ "item1", "item2", "item3", "item4" ];
    
    constructor () {
        
    }
}
