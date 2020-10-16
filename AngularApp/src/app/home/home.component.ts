import { Item } from '../item';
import { ItemService } from '../item.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ItemSer : ItemService) { }

  ngOnInit() {
    this.getItems();
  }
  items : Item;
  getItems(){
    this.ItemSer.getItems().subscribe((res)=>{
      this.items = res;
  });
  }

  deleteItem(id){
    this.ItemSer.deleteItem(id)
      .subscribe(()=>{
        this.getItems();
      });
  }
}
