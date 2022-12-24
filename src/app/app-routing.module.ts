import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletediaryComponent } from './deletediary/deletediary.component';
import { DiaryComponent } from './diary/diary.component';
import { DiarydataComponent } from './diarydata/diarydata.component';
import { EditdiaryComponent } from './editdiary/editdiary.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: 'Home', component: HomepageComponent,
    children:
      [
        { path: 'digdiary', component: DiaryComponent },
        { path: 'view', component: DiarydataComponent },
        { path: 'editdiary/:did', component: EditdiaryComponent },
        {path:'delete/:did',component:DeletediaryComponent}

      ]
  },
  { path: '', redirectTo: '/Home', pathMatch: 'full' }]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
