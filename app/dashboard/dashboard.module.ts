import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { ComplexSelectComponent } from './complex-select.component';

@NgModule({
    imports: [ FormsModule, CommonModule ],
    declarations: [ DashboardComponent,ComplexSelectComponent ],
    exports: [ DashboardComponent ]
})
export class DashboardModule { }