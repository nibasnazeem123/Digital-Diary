import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ViewDataService } from '../view-data.service';

@Component({
  selector: 'app-editdiary',
  templateUrl: './editdiary.component.html',
  styleUrls: ['./editdiary.component.scss']
})
export class EditdiaryComponent implements OnInit{
  did: any;
  public Coursedataarray: any;
  EditCourseForm: FormGroup;

  constructor(private route:ActivatedRoute,private Fb:FormBuilder,private backendService:ViewDataService){

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.did = params.get('did')
      })
      this.EditCourseForm = this.Fb.group({
      did: [''],
      Date: [''], 
      Entry: ['']
      })
  }



ngOnInit(): void{
  this.backendService.getcoursebaseid(this.did).subscribe((data: any) => {
    this.Coursedataarray = data;
    this.EditCourseForm.setValue({
      did: data.did,
      Date: data.date,
      Entry: data.entry

    });
    //this.EditCourseForm.patchValue(this.Coursedataarray)
    });
    }


    onSubmit() {
      this.backendService.Updatecoursedata(this.EditCourseForm.value)

      console.log(this.EditCourseForm.value)
      }
}
