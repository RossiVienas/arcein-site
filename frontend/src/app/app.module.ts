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
import {SignUpComponent} from "./components/sign-up/sign-up.component";
// import { DonatsComponent } from './pages/donate/donats.component';
import { PrivateOfficeComponent } from './pages/private-office/private-office.component';
import { StartGameComponent } from './pages/start-game/start-game.component';
import { DonateComponent } from './pages/donate/donate.component';
import { AboutComponent } from './pages/about/about.component';

const appRoutes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'Donate', component: DonateComponent},
  { path: 'News', component: NewsComponent},
  { path: 'StartGame', component: StartGameComponent},
  { path: 'PrivateOffice', component: PrivateOfficeComponent},
  { path: 'About', component: AboutComponent},
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
    SignUpComponent,
    PrivateOfficeComponent,
    StartGameComponent,
    DonateComponent,
    AboutComponent,
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
