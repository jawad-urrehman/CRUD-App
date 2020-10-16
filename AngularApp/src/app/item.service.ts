import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:Http) { }

getItems= ()=>{
  return this.http.get("item").map(res => res.json());
}

addItem(emp){
  return this.http.post("item",emp).map(res => res.json());
}

getItem(id){
  return this.http.get("item/"+id).map(res=> res.json());
}

deleteItem(id){
  return this.http.delete("item/"+id).map(res => res.json());
}


}
