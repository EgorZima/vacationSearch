import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { FlightsComponent } from './components/flights/flights.component';
import { PreviousComponent } from './components/previous/previous.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    HotelsComponent,
    FlightsComponent,
    PreviousComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
            { path: 'flights', component: FlightsComponent},
            { path: 'hotels', component: HotelsComponent},
            { path: 'cars', component: CarsComponent},
            { path: '', redirectTo: 'flights', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
