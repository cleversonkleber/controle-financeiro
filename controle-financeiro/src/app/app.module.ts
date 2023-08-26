import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyPageComponent } from './componets/body-page/body-page.component';
import { FooterPageComponent } from './componets/footer-page/footer-page.component';
import { HeaderPageComponent } from './componets/header-page/header-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyPageComponent,
    FooterPageComponent,
    HeaderPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
