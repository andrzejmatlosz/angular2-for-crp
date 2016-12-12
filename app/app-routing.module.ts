import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { DetailsContainerComponent } from './details/detailsContainer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedDataExampleComponent } from './sharedDataExample/sharedDataExample.component';
import { ViewChildExampleParentComponent } from './viewChildExample/viewChildExampleParent/viewChildExampleParent.component';
import { PipeExampleComponent } from './pipeExample/pipeExample.component';
import { DirectiveExampleComponent } from './directiveExample/directiveExample.component';
import { HttpExampleComponent } from './httpExample/httpExample.component';
import { LifecycleHooksExampleComponent } from './lifecycleHooksExample/lifecycleHooksExample.component';
import { FormsComponent } from './forms/forms.component';

const appRoutes: Routes = [
  { path: 'details', component: DetailsContainerComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sharedData', component: SharedDataExampleComponent },
  { path: 'viewChild', component: ViewChildExampleParentComponent },
  { path: 'pipe', component: PipeExampleComponent },
  { path: 'directive', component: DirectiveExampleComponent },
  { path: 'http', component: HttpExampleComponent },
  { path: 'lifecycleHooks', component: LifecycleHooksExampleComponent },
  { path: 'forms', component: FormsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
//   providers: [ Router ]
})
export class AppRoutingModule {}
