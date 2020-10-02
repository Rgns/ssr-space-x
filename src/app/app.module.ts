import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MissionComponent} from './mission/mission.component';
import {SpaceCardComponent} from './mission/space-card.component';
import {SpaceFilterComponent} from './mission/space-filter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MissionService} from './mission/service/mission.service';
import {HttpClientModule} from '@angular/common/http';
import {SearchPipe} from './mission/pipe/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MissionComponent,
    SpaceCardComponent,
    SpaceFilterComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [MissionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
