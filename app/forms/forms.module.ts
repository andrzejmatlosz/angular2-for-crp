import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { FormsComponent } from './forms.component';
import { BeerFormComponent } from './beerForm.component';

@NgModule({
    imports: [ FormsModule, CommonModule ],
    declarations: [ FormsComponent, BeerFormComponent ],
    exports: [ FormsComponent ]
})
export class MyFormsModule { }