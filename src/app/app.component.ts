import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { WebcallService } from './webcall.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig]
})
export class AppComponent {
  title = 'Another';
  feedback = [];
  constructor(private webService: WebcallService) {
  }
  showCarousal = false;
  index: number;



  carousalHide() {
    this.showCarousal = false;
  }

  display(x: any) {
    this.showCarousal = true;
  }

  setIndex(i: number ) {
    this.index = i;
  }

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.webService.getData().subscribe(data => {this.feedback = data.groups;
                                                 console.log(this.feedback);
    }
    );


  }
}
