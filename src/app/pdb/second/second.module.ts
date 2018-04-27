import { NgModule, Component, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasePdbEntryComponent } from '../common/base.pdb.component';
import { BasePdbModule } from '../common/base.pdb.module';

@Component({
  selector: 'second-comp',
  template: `
      <h2>Lazy loaded SECOND PDB {{ counter }}</h2>
      <button (click)="increment()">Increment</button>
  `
})
export class SecondComponent extends BasePdbEntryComponent {
  counter = 1;

  increment() {
      this.counter++;
  }
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SecondComponent],
  entryComponents: [SecondComponent]
})
export class SecondPdbModule extends BasePdbModule { 
  
  public getPdbEntryComponent() {
    return SecondComponent;
  }
}
