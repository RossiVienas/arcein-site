import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { NewsComponent } from './components/news/news.component';
import { MonitoringComponent } from './components/monitoring/monitoring.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MonitoringOnlineComponent } from './components/monitoring-online/monitoring-online.component';
import {Routes, RouterModule} from "@angular/router";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { IndexComponent } from './pages/index/index.component';

const appRoutes: Routes = [
  { path: '', component: IndexComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GreetingComponent,
    NewsComponent,
    MonitoringComponent,
    ContactsComponent,
    MonitoringOnlineComponent,
    NotFoundComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
