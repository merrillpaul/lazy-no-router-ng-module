import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreService } from './services/core-service';
import { CoreComponent } from './components/core.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CoreComponent
  ],
  declarations: [
    CoreComponent
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if(parentModule) {
      throw new Error('Already loaded the CoreModule')
    }
  }

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        CoreService
      ]
    };
  }
}
