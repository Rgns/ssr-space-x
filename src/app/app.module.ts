import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MissionComponent} from './mission/mission.component';
import {SpaceCardComponent} from './mission/space-card.component';
import {SpaceFilterComponent} from './mission/space-filter.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MissionService} from './mission/mission.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MissionComponent,
    SpaceCardComponent,
    SpaceFilterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MissionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
