import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeService } from './type.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private typeService: TypeService) { }

  getAdditionalData(): Observable<any> {
    // Mengembalikan Observable dari pemanggilan metode getData pada typeService.
    // Metode getData ini mengirimkan permintaan GET ke endpoint 'login'.
    // Endpoint ini digunakan untuk mengambil data tambahan yang terkait dengan login.
    return this.typeService.getData('login');
}


login(data: any): Observable<any> {
  // Mengembalikan Observable dari pemanggilan metode postData pada typeService.
  // Metode postData ini mengirimkan permintaan POST ke endpoint 'login'.
  // Data yang dikirimkan dalam permintaan POST adalah parameter 'data', yang mungkin berisi informasi login pengguna seperti username dan password.
  return this.typeService.postData('login', data);
}

}
