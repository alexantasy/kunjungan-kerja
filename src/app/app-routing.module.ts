import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'lapor-kegiatan',
    loadChildren: () => import('./lapor-kegiatan/lapor-kegiatan.module').then( m => m.LaporKegiatanPageModule)
  },
  {
    path: 'image-modal',
    loadChildren: () => import('./image-modal/image-modal.module').then( m => m.ImageModalPageModule)
  },
  {
    path: 'kunjungan-selesai',
    loadChildren: () => import('./kunjungan-selesai/kunjungan-selesai.module').then( m => m.KunjunganSelesaiPageModule)
  },
  {
    path: 'detail-kunjungan',
    loadChildren: () => import('./detail-kunjungan/detail-kunjungan.module').then( m => m.DetailKunjunganPageModule)
  },
  {
    path: 'suara-masyarakat',
    loadChildren: () => import('./suara-masyarakat/suara-masyarakat.module').then( m => m.SuaraMasyarakatPageModule)
  },
  {
    path: 'detail-suararakyat',
    loadChildren: () => import('./detail-suararakyat/detail-suararakyat.module').then( m => m.DetailSuararakyatPageModule)
  },
  {
    path: 'laporan-presensi',
    loadChildren: () => import('./laporan-presensi/laporan-presensi.module').then( m => m.LaporanPresensiPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
