import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ViewDataService } from '../view-data.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
constructor(private fb: FormBuilder,private backendservice:ViewDataService){}

DiaryEntryForm = this.fb.group({start: [''],  end: [''],title: [''],description: ['']})

      OnSubmit() {
      console.log(this.DiaryEntryForm.value);
      this.backendservice.inserteventedata(this. DiaryEntryForm.value)
        }

      ngOnInit():void {}
}
