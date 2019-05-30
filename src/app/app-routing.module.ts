import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: './features/profiles-manager/profiles-manager.module#ProfilesManagerModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
