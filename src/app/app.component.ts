import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterTabsService, Tab } from './modules/commons/services/router-tabs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  // navLinks: any[];
  // activeLinkIndex = -1;

  constructor(private router: Router,
    private routerTabService: RouterTabsService) {
    // this.navLinks = [
    //   {
    //     label: 'First',
    //     link: './vista',
    //     index: 0
    //   }, {
    //     label: 'Second',
    //     link: './tcm',
    //     index: 1
    //   }
    // ];
  }

  ngOnInit(): void {
    // this.router.events.subscribe((res) => {
    //   this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    // });
  }
}
