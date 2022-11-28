import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloNameComponent } from './hello-name.component';
import { HelloWorldComponent } from './hello-world.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
