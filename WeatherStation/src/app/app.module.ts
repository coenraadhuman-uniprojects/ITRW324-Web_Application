import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { PreviewComponent } from './components/preview/preview.component';
import { FetchJsonUtilities } from './common/fetch-json.utilities';
import { ReadingsPreviewService } from './services/readings-preview.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule} from '@angular/forms';
import {LastDayReadingsService} from './services/lastDayReadings.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    HomeComponent,
    AboutComponent,
    LoginScreenComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FetchJsonUtilities, ReadingsPreviewService, LastDayReadingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
