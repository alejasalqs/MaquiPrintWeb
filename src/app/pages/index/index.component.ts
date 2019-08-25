import { Component, OnInit } from '@angular/core';
import { InfoPaginaServiceService } from '../../service/info-pagina-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public infoPaginaService: InfoPaginaServiceService) { }

  ngOnInit() {
  }

}
