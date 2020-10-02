import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MissionComponent} from './mission/mission.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'missions',
    pathMatch: 'full' // redirect to `first-component`
  },
  {
    path: 'missions',
    component: MissionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
