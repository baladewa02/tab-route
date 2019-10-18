import { Component, OnInit } from '@angular/core';
import { NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista-page2',
  templateUrl: './vista-page2.component.html',
  styleUrls: ['./vista-page2.component.css']
})
export class VistaPage2Component implements OnInit {

  constructor(private router: ActivatedRoute) { }
  pageTitle: string = 'Vista page 2 and router params => ';

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.pageTitle += params['pageId'];
    });
  }

}
