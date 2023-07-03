import { Component, OnInit } from '@angular/core';
import { Iicons } from '../../models/data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  iconsListArray: Array<Iicons> = [
    {
      link : "javascript:;",
      icon: `<i class="fa-brands fa-square-facebook fa-3x"></i>`
    },
    {
      link : "javascript:;",
      icon: `<i class="fa-brands fa-square-twitter fa-3x"></i>`
    },
    {
      link : "javascript:;",
      icon: `<i class="fa-brands fa-square-google-plus fa-3x"></i>`
    },
    {
      link : "javascript:;",
      icon: `<i class="fa-brands fa-pinterest fa-3x"></i>`
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
