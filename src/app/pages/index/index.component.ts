import { Component, OnInit } from '@angular/core';
import { InfoPaginaServiceService } from '../../service/info-pagina-service.service';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public infoPaginaService: InfoPaginaServiceService,
              private http: HttpClient) { }

  ngOnInit() {
  }

  public sendEmail() {

    var name = (document.getElementById('name') as HTMLInputElement).value;
    var email = (document.getElementById('email') as HTMLInputElement).value;
    var phone =  (document.getElementById('phone') as HTMLInputElement).value;
    var message =  (document.getElementById('message') as HTMLInputElement).value;

    const url = `https://us-central1-maquidb.cloudfunctions.net/sendMail`
    const options = { params: new HttpParams().set('email', email).set('name', name).set('phone',phone).set('message',message) }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };

   /* params.set('email', (document.getElementById('name') as HTMLInputElement).value.toString());
    params.set('name', (document.getElementById('name') as HTMLInputElement).value.toString());
    params.set('phone', (document.getElementById('phone') as HTMLInputElement).value.toString());
    params.set('message', (document.getElementById('message') as HTMLInputElement).value.toString());*/

    this.http.post(url, options, httpOptions)
              .toPromise()
              .then( res => {
                console.log(res);
              })
              .catch(err => {
                console.log(err);
              });
  }
}
