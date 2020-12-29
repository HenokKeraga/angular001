import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule } from '@angular/forms';
import { MustMatchDirective } from './helper/must-match.directive';

@NgModule({
  declarations: [AppComponent, TemplateFormComponent, MustMatchDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
