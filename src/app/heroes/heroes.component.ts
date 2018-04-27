import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PdbLoaderService } from '../pdb/pdb.module';
import { BasePdbEntryComponent } from '../pdb/common/base.pdb.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(
    private loaderService: PdbLoaderService
  ) { }
  hero = 'Thor';
  ngOnInit() {
  }


  pdb = ""

  @ViewChild('lazyContainer', { read: ViewContainerRef }) 
  container: ViewContainerRef;

  public async loadLazy() {
    console.log('Load lazy');
    const entryComponent: BasePdbEntryComponent = await this.loaderService.loadIntoContainer(this.container, this.pdb);
    entryComponent.question = { id: `QID_${Date.now()}`, title: `Question ${Math.random()* 100}`};
  }
}
