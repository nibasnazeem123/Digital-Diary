import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ViewDataService } from '../view-data.service';

@Component({
  selector: 'app-deletediary',
  templateUrl: './deletediary.component.html',
  styleUrls: ['./deletediary.component.scss']
})
export class DeletediaryComponent {
  did: any;
  public Coursedataarray: any;
  DeleteForm: FormGroup;


  constructor(private route:ActivatedRoute,private Fb:FormBuilder,private backendService:ViewDataService){

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.did = params.get('did')
      })
      this.DeleteForm = this.Fb.group({
      did: [''],
      Date: [''], 
      Entry: ['']
      })
  }



ngOnInit(): void{




  this.backendService.getcoursebaseid(this.did).subscribe((data: any) => {
    this.Coursedataarray = data;
    this.DeleteForm.setValue({
      did: data.did,
      Date: data.date,
      Entry: data.entry,

    });
    //this.DeleteForm.patchValue(this.Coursedataarray)
    });






    }


    onSubmit() {
      this.backendService.deletecoursedata(this.DeleteForm.value)

      console.log(this.DeleteForm.value)
      }
}
