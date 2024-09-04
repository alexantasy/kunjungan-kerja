import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private username = 'kukerbyol4l1'; // Ganti dengan username Anda
  private password = '98d74d48f1f6fa177007b608f1535cba'; // Ganti dengan password Anda

  constructor(private http: HttpClient) { }

  //btoa fungsi encrypt
  private createAuthorizationHeader(): HttpHeaders {
    // Membuat header otorisasi menggunakan skema 'Basic'.
    // Menggabungkan username dan password dengan format 'username:password'.
    // Kemudian meng-encode hasilnya menjadi base64 menggunakan fungsi btoa().
    const authHeader = 'Basic ' + btoa(`${this.username}:${this.password}`);
    
    // Menampilkan nilai dari authHeader di konsol untuk debugging.
    console.log('authHeader');
    
    // Mengembalikan objek HttpHeaders yang berisi header 'Authorization'.
    // Header ini akan digunakan untuk mengotentikasi permintaan HTTP.
    return new HttpHeaders({ 'Authorization': authHeader });
}



  getData(endpoint: string): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<any>(`${environment.url}/${endpoint}`, { headers });
    // Membuat header otorisasi menggunakan metode createAuthorizationHeader().
    // Mengirim permintaan GET HTTP ke URL yang dikombinasikan dengan endpoint yang diberikan.
    // URL ini didapat dari environment.url, yang biasanya disimpan di file environment.ts.
    // Header otorisasi yang dibuat sebelumnya disertakan dalam permintaan.
    // Metode ini mengembalikan Observable yang akan menghasilkan respons dari server.
}


postData(endpoint: string, data: any): Observable<any> {
  const headers = this.createAuthorizationHeader();
  return this.http.post<any>(`${environment.url}/${endpoint}`, data, { headers });
  // Membuat header otorisasi menggunakan metode createAuthorizationHeader().
  // Mengirim permintaan POST HTTP ke URL yang dikombinasikan dengan endpoint yang diberikan.
  // Data yang dikirimkan dalam permintaan POST adalah parameter 'data'.
  // URL ini didapat dari environment.url, yang biasanya disimpan di file environment.ts.
  // Header otorisasi yang dibuat sebelumnya disertakan dalam permintaan.
  // Metode ini mengembalikan Observable yang akan menghasilkan respons dari server.
}

}
