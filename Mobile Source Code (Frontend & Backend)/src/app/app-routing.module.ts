import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'edit', loadChildren: './edit/edit.module#EditPageModule' },
  { path: 'edit/:nama', loadChildren: './edit/edit.module#EditPageModule' },
  { path: 'manual', loadChildren: './manual/manual.module#ManualPageModule' },
  { path: 'notif', loadChildren: './notif/notif.module#NotifPageModule' },
  { path: 'create', loadChildren: './create/create.module#CreatePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
