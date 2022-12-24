import { Component } from '@angular/core';
import { ViewDataService } from '../view-data.service';

@Component({
  selector: 'app-diarydata',
  templateUrl: './diarydata.component.html',
  styleUrls: ['./diarydata.component.scss']
})
export class DiarydataComponent {
constructor(private backendservice:ViewDataService){}
Dataarray: any[]=[];
ngOnInit()
{
  this.backendservice.getdata().subscribe((res) => {
          this.Dataarray = res;})
}
}
