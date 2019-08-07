import { Component, OnInit, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers:[NgbCarouselConfig]
})
export class ProductDetailComponent implements OnInit {

  productDetails:any;
  imgageArray:string[];
  products:any;
  prodoutName:string;
  @Input() productId:string;
  @Input() indexNum:number;
  constructor(
    private productService:ProductService,
    private config: NgbCarouselConfig){
    //this config.interval control the time that each slice change
    config.interval = 1000000;
    config.wrap= true;
    config.keyboard=false;
    config.pauseOnHover = false;
    config.showNavigationArrows=true;
  }

  ngOnInit() {
    return this.productService.getProductDetails().subscribe(
      data=>{
        console.log(data);
        let eachProduct = data['groups'];
        console.log(eachProduct);
        this.products = eachProduct;
        this.productDetails = eachProduct[this.indexNum]['images'];
        this.prodoutName = eachProduct[this.indexNum]['name'];
      }
    )
  }
}
