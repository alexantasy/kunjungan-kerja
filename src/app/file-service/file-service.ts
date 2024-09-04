import { Filesystem, Directory } from '@capacitor/filesystem';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private http: HttpClient) {
    // Memeriksa izin ketika layanan diinisialisasi
    this.checkPermissions().then(() => {
      console.log('Izin telah diperiksa saat inisialisasi.');
    }).catch(error => {
      console.error('Gagal memeriksa izin saat inisialisasi:', error);
    });
  }

  async downloadFile() {
    const url = '/assets/file_pendukung.pdf';

    try {
      console.log('Mengunduh file...');
      const response = await this.http.get(url, { responseType: 'blob' }).toPromise();
      if (!response) {
        throw new Error('Gagal mendapatkan response dari server.');
      }
      console.log('File berhasil diunduh.');

      console.log('Mengonversi file ke base64...');
      const base64Data = await this.convertBlobToBase64(response);
      console.log('Konversi berhasil. Data base64:', base64Data);

      console.log('Menyimpan file...');
      try {
        await Filesystem.writeFile({
          path: 'file_pendukung.pdf',
          data: base64Data,
          directory: Directory.Documents,
        });
        console.log('File berhasil disimpan.');
      } catch (error) {
        console.error('Kesalahan saat menyimpan file:', error);
      }
      console.log('Proses selesai.');
    } catch (error) {
      console.error('Kesalahan saat mengunduh file:', error);
    }
  }

  private async convertBlobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = (reader.result as string).split(',')[1];
        resolve(base64data);
      };
      reader.onerror = (error) => {
        reject('Kesalahan saat mengonversi Blob ke Base64: ' + error);
      };
      reader.readAsDataURL(blob);
    });
  }

  private async checkPermissions() {
    try {
      console.log('Memeriksa status izin penyimpanan...');

      const permissionStatus = await Filesystem.checkPermissions();

      if (permissionStatus.publicStorage !== 'granted') {
        console.log('Izin belum diberikan, meminta izin...');
        const requestResult = await Filesystem.requestPermissions();
        if (requestResult.publicStorage !== 'granted') {
          throw new Error('Izin penyimpanan tidak diberikan');
        }
        console.log('Izin penyimpanan diberikan');
      } else {
        console.log('Izin penyimpanan telah diberikan');
      }
    } catch (error) {
      console.error('Kesalahan saat memeriksa atau meminta izin:', error);
      throw error;
    }
  }
}
