import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {DictionaryPageComponent} from "./dictionary-page/dictionary-page.component";
import {AuthGuard} from "./auth.guard";
import {DictionaryDetailComponent} from "./dictionary-detail/dictionary-detail.component";

const routes: Routes = [
  {
    path: 'dictionary',
    component: DictionaryPageComponent,
    children: [
      {
        path: ':key',
        component: DictionaryDetailComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
