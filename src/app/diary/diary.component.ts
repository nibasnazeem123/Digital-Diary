import { DatePipe } from '@angular/common';
import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ViewDataService } from '../view-data.service';


@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {
  name = 'Angular ' + VERSION.major;


  currdate: any;
  constructor(public datepipe: DatePipe,private fb: FormBuilder,private backendservice:ViewDataService){


    let currentDateTime =this.datepipe.transform((new Date), 'EEEE, MMMM d, y');
    this.currdate=currentDateTime;
    //console.log(currentDateTime);
  }
  DiaryEntryForm = this.fb.group({Date: [''],  Entry: ['']})

      OnSubmit() {
      console.log(this.DiaryEntryForm.value);
      this.backendservice.insertcoursedata(this. DiaryEntryForm.value)
        }

      ngOnInit():void {}

}
