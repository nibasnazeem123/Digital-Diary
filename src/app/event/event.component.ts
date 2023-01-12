import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ViewDataService } from '../view-data.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
constructor(private fb: FormBuilder,private backendservice:ViewDataService){}
DiaryEntryForm = new FormGroup({
  start: new FormControl('', [Validators.required]),
  end: new FormControl('', [Validators.required]),
  title: new FormControl('', [Validators.required]),
  description: new FormControl(''),

});

DiaryEntryForm2 = this.fb.group({start: [''],  end: [''],title: [''],description: ['']})

      OnSubmit() {
      if(this.DiaryEntryForm.valid){
        console.log(this.DiaryEntryForm.value);
      this.backendservice.inserteventedata(this. DiaryEntryForm.value)
     }

        }

      ngOnInit():void {}
}
