import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Ng5SliderModule} from 'ng5-slider';
import {TagInputModule} from 'ngx-chips';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AppComponent} from './app.component';
import {PersonComponent} from './person/person.component';
import {EnrollmentService} from './enrollment.service';
import { SliderComponent } from './slider/slider.component';
// import { NgxChipsComponent } from './ngx-chips/ngx-chips.component';



@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng5SliderModule,
    TagInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [EnrollmentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
