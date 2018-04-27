import { NgModule, SystemJsNgModuleLoader } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRoutes, Route } from '@angular/router';
import { PdbLoaderService } from './pdb.loader.service';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [],
  providers: [
    SystemJsNgModuleLoader,
    provideRoutes([
      {
        loadChildren: './first/first.module#FirstPdbModule'
      },
      {
        loadChildren: './second/second.module#SecondPdbModule'
      }
    ]
    //MOD_ROUTES
    ),
    PdbLoaderService
  ]
})
export class PdbModule { }

export { PdbLoaderService }