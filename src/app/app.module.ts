import { MbscModule } from '@mobiscroll/angular';
import { DatePipe } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryComponent } from './diary/diary.component';
import { DiarydataComponent } from './diarydata/diarydata.component';
import { EditdiaryComponent } from './editdiary/editdiary.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DeletediaryComponent } from './deletediary/deletediary.component';
import { CalenderComponent } from './calender/calender.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventComponent } from './event/event.component';
import { BlogComponent } from './blog/blog.component';
import { BloginputComponent } from './bloginput/bloginput.component';
import { QuotegeneratorComponent } from './quotegenerator/quotegenerator.component';
import { WeatherComponent } from './weather/weather.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { VieweventComponent } from './viewevent/viewevent.component';



@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    DiarydataComponent,
    EditdiaryComponent,
    HomepageComponent,
    DeletediaryComponent,
    CalenderComponent,
    EventComponent,
    BlogComponent,
    BloginputComponent,
    QuotegeneratorComponent,
    WeatherComponent,
    CalculatorComponent,
    VieweventComponent,



  ],
  imports: [
    MbscModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CalendarModule,
    FullCalendarModule,
    HttpClientJsonpModule,

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
