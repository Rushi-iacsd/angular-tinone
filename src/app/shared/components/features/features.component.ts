import { Component, OnInit } from '@angular/core';
import { IfeatureCard } from '../../models/data';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {


 featureCardsArray : Array<IfeatureCard> = [ 
  {
    icon : `<i class="fa-solid fa-wifi fa-3x"></i>`,
    title : ` fully wifi`,
   info :  ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quiexcepturi optio molestiae!.`   
  },
  {
  icon : `<i class="fa-solid fa-compass fa-3x"></i>`,
    title : ` fully compass`,
   info :  ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quiexcepturi optio molestiae!.`   
  },
  {
    icon : `  <i class="fa-solid fa-code fa-3x"></i>`,
      title : ` html & css`,
     info :  ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quiexcepturi optio molestiae!.`   
    },
    {
      icon : `  <i class="fa-solid fa-home fa-3x"></i>`,
        title : ` home`,
       info :  ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quiexcepturi optio molestiae!.`   
      },
      {
        icon : `  <i class=" fa-solid fa-regular fa-envelope fa-3x"></i>`,
          title : ` email template`,
         info :  ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quiexcepturi optio molestiae!.`   
        },
        {
          icon : `  <i class="fa-regular fa-bookmark fa-3x"></i>`,
            title : ` free to download`,
           info :  ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quiexcepturi optio molestiae!.`   
          }
 ]


  constructor() { }

  ngOnInit(): void {
  }

}
