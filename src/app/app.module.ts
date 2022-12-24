import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryComponent } from './diary/diary.component';
import { DiarydataComponent } from './diarydata/diarydata.component';
import { EditdiaryComponent } from './editdiary/editdiary.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DeletediaryComponent } from './deletediary/deletediary.component';



@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    DiarydataComponent,
    EditdiaryComponent,
    HomepageComponent,
    DeletediaryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
