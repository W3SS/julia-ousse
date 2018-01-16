import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  imageUrls = [
      [
        {
        url: '../../../assets/images/portfolio/p_1.jpg',
        originalSize: {
          width: 566,
          height: 708
        }
      },
      {
        url: '../../../assets/images/portfolio/p_2.jpg',
        originalSize: {
          width: 737,
          height: 922
        }
      },
      {
        url: '../../../assets/images/portfolio/p_3.jpg',
        originalSize: {
          width: 567,
          height: 740
        }
      },
      {
        url: '../../../assets/images/portfolio/p_4.jpg',
        originalSize: {
          width: 662,
          height: 507
        }
      }
      ],
      [{
        url: '../../../assets/images/portfolio/p_5.jpg',
        originalSize: {
          width: 736,
          height: 1106
        }
      },
      {
        url: '../../../assets/images/portfolio/p_6.jpg',
        originalSize: {
          width: 567,
          height: 854
        }
      },
      {
        url: '../../../assets/images/portfolio/p_7.jpg',
        originalSize: {
          width: 569,
          height: 687
        }
      },
      {
        url: '../../../assets/images/portfolio/p_8.jpg',
        originalSize: {
          width: 769,
          height: 1004
        }
      }
      ]
  ];
  constructor() { }

}
