import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }
  hero = 'Thor';
  ngOnInit() {
  }


  pdb = ""

  @ViewChild('lazyContainer', { read: ViewContainerRef }) 
  container: ViewContainerRef;

  public loadLazy() {
    console.log('Load lazy');
  }
}
