import { NgModule, Component, Type } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'first-comp',
  template: `
      <h2>Lazy loaded First PDB {{ counter }}</h2>
      <button (click)="increment()">Increment</button>
  `
})
export class FirstComponent {
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
export class FirstPdbModule { 
  static entry = FirstComponent

  getRootPdbComponent(): Type<FirstComponent> {
    return FirstComponent
  }
}
