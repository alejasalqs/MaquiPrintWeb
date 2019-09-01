import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemsInterface } from '../interfaces/Items.Interface';

@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {

  Items: ItemsInterface[] = [];

  constructor(private http: HttpClient) {
    this.cargarItems();
   }

   private cargarItems() {
    this.http.get('https://maquidb.firebaseio.com/productos_idx.json')
      .subscribe( (items: ItemsInterface[]) => {
        console.log(items);
        this.Items = items;
      });
  }


  public getProducto( id: string ) {
    return this.http.get(`https://maquidb.firebaseio.com/productos/${ id }.json`);
  }

}
