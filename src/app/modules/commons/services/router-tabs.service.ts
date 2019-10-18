import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Tab {
  label: string;
  index: number;
  link: string;
}

export class RouterTabsService {

  constructor() { }

  private _tabsToot: Tab[] = [];

  setTab(tab: Tab): void {
    this._tabsToot.push(tab);
  }

  emptyTab() {
    this._tabsToot = [];
  }

  getRootTabs(): Tab[] {
    return this._tabsToot;
  }

}
