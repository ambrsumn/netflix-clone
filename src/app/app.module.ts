import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './pipes/safe.pipe';
import { BannerMovieDetailComponent } from './modals/banner-movie-detail/banner-movie-detail.component';

// const routes: Routes = [
//   { path: '', component: AuthenticationComponent },
//   { path: 'login', component: AuthenticationComponent },
//   { path: 'Home', component: HomeComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HomeComponent,
    SafePipe,
    BannerMovieDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
