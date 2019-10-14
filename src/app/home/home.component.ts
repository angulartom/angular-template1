import { Component, OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChildren('divs')
  divChildren: QueryList<ElementRef>;

  result: string[] = [];

  constructor() { }

  ngOnInit() {
  }
  
  getDivs() {
    console.log('HAllo');
    console.log(this.divChildren);
    this.divChildren.forEach((div: ElementRef) => this.result.push(div.nativeElement.innerHTML));
  }
}