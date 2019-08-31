import { Component, OnInit } from '@angular/core';
import { ItemsServiceService } from '../../service/items-service.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(public itemsService: ItemsServiceService) { }

  ngOnInit() {
  }

}
