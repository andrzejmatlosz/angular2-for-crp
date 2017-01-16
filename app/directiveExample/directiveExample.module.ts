import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { DirectiveExampleComponent } from './directiveExample.component';
import { ZoomTextDirective } from './zoomText.directive';
import { AnyDirective } from './any.directive';

import { PComponent } from './p.component';
import { DirComponent } from './dir.component';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ DirectiveExampleComponent, ZoomTextDirective, AnyDirective, PComponent, DirComponent ],
    exports: [ DirectiveExampleComponent ]
})
export class DirectiveExampleModule { }