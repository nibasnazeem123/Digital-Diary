import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BloginputComponent } from './bloginput/bloginput.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalenderComponent } from './calender/calender.component';
import { DeletediaryComponent } from './deletediary/deletediary.component';
import { DiaryComponent } from './diary/diary.component';
import { DiarydataComponent } from './diarydata/diarydata.component';
import { EditdiaryComponent } from './editdiary/editdiary.component';
import { EventComponent } from './event/event.component';
import { HomepageComponent } from './homepage/homepage.component';
import { QuotegeneratorComponent } from './quotegenerator/quotegenerator.component';
import { VieweventComponent } from './viewevent/viewevent.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {
    path: 'Home', component: HomepageComponent,
    children:
      [
        { path: 'digdiary', component: DiaryComponent },
        { path: 'view', component: DiarydataComponent },
        { path: 'editdiary/:did', component: EditdiaryComponent },
        {path:'delete/:did',component:DeletediaryComponent},
        {path:'calender',component:CalenderComponent},
        {path:'event',component:EventComponent},
        {path:'blog',component:BlogComponent},
        {path:'bloginput',component:BloginputComponent},{path:'quotes',component:QuotegeneratorComponent},
        {path:'weather',component:WeatherComponent},
        {path:'calculator',component:CalculatorComponent},
        {path:'viewevent',component:VieweventComponent}

      ]
  },
  { path: '', redirectTo: '/Home', pathMatch: 'full' }]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
