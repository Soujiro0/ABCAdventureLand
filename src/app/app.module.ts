import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructionComponent } from './components/instruction/instruction.component';
import { CheckOverlayComponent } from './components/check-overlay/check-overlay.component';

@NgModule({
  declarations: [AppComponent, InstructionComponent, CheckOverlayComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
