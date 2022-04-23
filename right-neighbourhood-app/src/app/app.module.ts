import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostcodeDataService } from './postcode-data.service';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CrimeComponent } from './crime/crime.component';
import { PricesComponent } from './prices/prices.component';
import { RentsComponent } from './rents/rents.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    RestaurantsComponent,
    CrimeComponent,
    PricesComponent,
    RentsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  providers: [PostcodeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
