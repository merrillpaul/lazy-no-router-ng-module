import { NgModule, Component, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'second-comp',
  template: `
      <h2>Lazy loaded SECOND PDB {{ counter }}</h2>
      <button (click)="increment()">Increment</button>
  `
})
export class SecondComponent {
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
export class SecondPdbModule { 
  static entry = SecondComponent

  getRootPdbComponent(): Type<SecondComponent> {
    return SecondComponent
  }
}
