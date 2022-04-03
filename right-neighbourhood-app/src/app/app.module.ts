import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostcodeDataService } from './postcode-data.service';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { CrimeComponent } from './crime/crime.component';
import { PricesComponent } from './prices/prices.component';
import { RentsComponent } from './rents/rents.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    RestaurantsComponent,
    CrimeComponent,
    PricesComponent,
    RentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
  ],
  providers: [PostcodeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
