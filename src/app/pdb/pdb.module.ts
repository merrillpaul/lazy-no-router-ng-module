import { NgModule, SystemJsNgModuleLoader } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRoutes, Route } from '@angular/router';
import { PdbLoaderService } from './pdb.loader.service';
import { PDBS } from './pdb.registry';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [],
  providers: [
    SystemJsNgModuleLoader,
    provideRoutes(PDBS),
    PdbLoaderService
  ]
})
export class PdbModule { }

export { PdbLoaderService }