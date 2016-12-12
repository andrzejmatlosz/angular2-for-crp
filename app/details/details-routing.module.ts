import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsContainerComponent } from './detailsContainer.component';
import { DetailsAuthorComponent } from './detailsAuthor/detailsAuthor.component';
import { DetailsVersionComponent } from './detailsVersion/detailsVersion.component';

const detailsRoutes: Routes = [
  { 
    path: '',
    component: DetailsContainerComponent,
    children: [
      { path: 'author',  component: DetailsAuthorComponent },
      { path: 'version', component: DetailsVersionComponent }
    ]
  } 
];

@NgModule({
  imports: [
    RouterModule.forChild(detailsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DetailsRoutingModule { }