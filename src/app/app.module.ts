import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CitiesComponent } from './components/cities/cities.component';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { AppMaterialModule } from './modules/app-material/app-material.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CitiesComponent,
    GridViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
