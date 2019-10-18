import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-page1',
  templateUrl: './vista-page1.component.html',
  styleUrls: ['./vista-page1.component.css']
})
export class VistaPage1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(page) {
    this.router.navigate([page]);
  }

}
