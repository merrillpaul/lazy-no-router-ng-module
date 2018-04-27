import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PdbModule } from '../pdb/pdb.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PdbModule
  ],
  exports: [
    FormsModule,
    PdbModule
  ],
  declarations: []
})
export class SharedModule { }
