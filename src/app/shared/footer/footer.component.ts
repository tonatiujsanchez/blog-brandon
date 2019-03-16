import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
