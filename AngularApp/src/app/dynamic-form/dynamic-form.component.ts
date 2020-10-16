import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  count:number 
  myForm:FormGroup
  
  constructor(private fb:FormBuilder) { }

  
  ngOnInit() {
    this.myForm = this.fb.group({
      formArray: this.fb.array([]) 
    })
    
  }   
getCount(){
  
  this.generateForm(this.count)
}
  intializeForm(){
    return this.fb.group({
      name:[],
      age:[],
      seats:[]
    });
  }

  get formaArray(){
    return this.myForm.get('formArray') as FormArray;
  }
  
  generateForm(number){
    for(var i =0;i<number;i++){
    this.formaArray.push(this.intializeForm());
  }
  }


}
