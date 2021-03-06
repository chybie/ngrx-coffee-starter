import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { CoffeeService } from './services/coffee.service';

import { AppComponent } from './app.component';
import { ListPageComponent, CartPageComponent } from './containers';
import { HeaderComponent, PayComponent } from './components';
import { SharedModule } from './modules/shared';

const CONTAINERS = [ListPageComponent, CartPageComponent];
const COMPONENTS = [HeaderComponent, PayComponent];

@NgModule({
  declarations: [
    AppComponent,
    ...CONTAINERS,
    ...COMPONENTS,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    SharedModule,
    AppRoutingModule,
  ],
  providers: [CoffeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
