import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsServiceService } from '../../service/items-service.service';
import { DetalleItemIterface } from '../../interfaces/detalle-producto.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  cargando = true;
  gotProducto: DetalleItemIterface;
  id: string;

  constructor(private route: ActivatedRoute,
              public itemService: ItemsServiceService) { }

  ngOnInit() {
    this.route.params
      .subscribe(parametros => {
        this.itemService.getProducto(parametros['id'])
          .subscribe((producto: DetalleItemIterface) => {
            this.id = parametros['id'];
            this.gotProducto = producto;
            this.cargando = false;
            console.log(producto);
          });
      });
  }

}
