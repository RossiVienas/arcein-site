import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { NewsComponent } from './components/news/news.component';
import { MonitoringComponent } from './components/monitoring/monitoring.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GreetingComponent,
    NewsComponent,
    MonitoringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
