import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PdbLoaderService } from '../pdb/pdb.module';

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
    this.loaderService.loadIntoContainer(this.container, 'first');
  }
}
