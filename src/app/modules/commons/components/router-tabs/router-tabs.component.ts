import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterTabsService, Tab } from '../../services/router-tabs.service';

@Component({
  selector: 'app-router-tabs',
  templateUrl: './router-tabs.component.html',
  styleUrls: ['./router-tabs.component.css']
})
export class RouterTabsComponent implements OnInit {

  navLinks: Tab[]; // TODO should add proper tab type
  activeLinkIndex = -1;

  constructor(private router: Router,
    private routerTabService: RouterTabsService) {
    this.navLinks = this.routerTabService.getRootTabs();
}

  ngOnInit(): void {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        if (e.urlAfterRedirects !== '/home') {
          const found = this.navLinks.find(f => (f.link === e.urlAfterRedirects));
          if (!found) {
            const t = new Tab();
            t.index = this.navLinks.length;
            t.label = e.url.replace(/\//, '');
            t.link  =  e.urlAfterRedirects;
            this.routerTabService.setTab(t);
          }
        }
      }
    });
  }

  closeTab(e, tab) {
    e.stopPropagation();
    e.preventDefault();
    const foundIndex = this.navLinks.findIndex(f => (f.link === tab.link));
    if (foundIndex > -1) {
      this.navLinks.splice(foundIndex, 1);
    }

    if (this.navLinks.length === 0) {
      this.router.navigate(['/home']);
    } else if (foundIndex > 0) {
      const ind = foundIndex - 1 === -1 ? 0 : foundIndex - 1;
      const lst = this.navLinks[ind];
      this.router.navigate([lst.link]);
    }
  }

}
