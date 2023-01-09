import { Component } from '@angular/core';
import { ViewDataService } from '../view-data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  constructor(private backendservice:ViewDataService){}
  Dataarray: any[]=[];
  ngOnInit()
  {
   this.backendservice.getdata().subscribe((res) => {this.Dataarray = res;})
  }


}
