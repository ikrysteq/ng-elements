import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// directives
import { EqualValidator } from './equal-validator.directive';

@NgModule({
  declarations: [
    EqualValidator,
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
