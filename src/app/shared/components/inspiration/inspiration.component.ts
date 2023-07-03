import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss']
})
export class InspirationComponent implements OnInit {

  iconsListArray: Array<any> = [
    {
      link : "javascript:;",
      icon: `<i class="fa-brands fa-apple fa-3x"></i>`
    },
    {
      link : "javascript:;",
      icon: `<i class="fa-brands fa-windows fa-3x"></i>`
    },
    {
      link : "javascript:;",
      icon: `<i class="fa-brands fa-android fa-3x"></i>`
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
