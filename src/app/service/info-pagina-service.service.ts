import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPaginaInterface } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaServiceService {

  infoCompania: InfoPaginaInterface = {};
  infoPagina: any = {};
  cargada = false;

  constructor(private http: HttpClient) {
    this.cargarInfoCompania();
    this.cargarInfoPagina();
  }

  private cargarInfoCompania() {
    this.http.get('https://maquidb.firebaseio.com/info-compania.json').subscribe((resp: InfoPaginaInterface) => {
      this.cargada = true;
      // guardamos la respuesta
      this.infoCompania = resp;
      // console.log(resp);
    });
  }

  private cargarInfoPagina() {
    this.http.get('https://maquidb.firebaseio.com/info-pagina.json').subscribe((resp: any) => {
      this.cargada = true;
      // guardamos la respuesta
      this.infoPagina = resp;
      // console.log(resp);
    });
  }
}
