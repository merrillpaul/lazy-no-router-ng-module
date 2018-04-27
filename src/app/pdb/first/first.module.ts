import { NgModule, Component, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasePdbEntryComponent } from '../common/base.pdb.component';
import { BasePdbModule } from '../common/base.pdb.module';


@Component({
  selector: 'first-comp',
  template: `
      <h1> Question info {{question.id}} {{question.title}}</h1>
      <h2>Lazy loaded First PDB {{ counter }}</h2>
      <button (click)="increment()">Increment</button>
  `
})
export class FirstComponent extends BasePdbEntryComponent {
  counter = 1;

  increment() {
      this.counter++;
  }
}


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FirstComponent],
  entryComponents: [FirstComponent]
})
export class FirstPdbModule extends BasePdbModule { 
  
    public getPdbEntryComponent() {
      return FirstComponent;
    }
  
}
