import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule.forRoot(),
    SharedModule
  ],
  declarations: [HeroesComponent],
  exports: [
    HeroesComponent
  ]
})
export class HeroesModule { }
