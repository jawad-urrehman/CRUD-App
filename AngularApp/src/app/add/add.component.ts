import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service'
import { Item } from '../item'
import { Http } from '@angular/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
image:String
pic:string
item = new Item();
    constructor(private ItemSer : ItemService, private http:Http,public route:ActivatedRoute,
      public router:Router) { }
  
    ngOnInit() {
    }
  takeimage(event){
    if(event.target.files.length > 0){
      const file = event.srcElement.files[0].name;
      this.image = file;
      this.pic = event.target.files[0];
    }
  }
  upladImang(){
    const formData = new FormData();
    formData.append('file', this.pic);
  
    this.http.post('http://localhost:3000/file', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
  
  
  
  addItem(){
    
    this.item.image = this.image;
    this.item.image2 = this.item.category+'.jpg' 
      this.ItemSer.addItem(this.item).subscribe(()=>{
        this.router.navigate(['/home'])
        console.log(this.item)     
      })
  }
  
  goBack(){
    this.router.navigate(['/home'])
  }
  
}
