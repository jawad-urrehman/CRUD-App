import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service'
import { Item } from '../item'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(public itmSer : ItemService,
    public route:ActivatedRoute,
    public router:Router) { }

  ngOnInit() {
    this.getItems();
  }
  itm:Item;
  getItems(){
    var id = this.route.snapshot.params['id'];
    this.itmSer.getItem(id)
        .subscribe(res=>{
          this.itm = res;
        })
  }
  goBack(){
    this.router.navigate(['/home'])
  }

}
