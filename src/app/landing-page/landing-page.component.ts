import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  pageState="landing";
  details ="";
  products : any;
  heroImage: string;
  indexNumber=0;
  constructor(private productService: ProductService){}


  getDetails(id,index){
    this.pageState="notLanding";
    this.details= id;
    this.indexNumber=index;
  }
  getData(){
    this.productService.getProductDetails().subscribe(
      data=>{
        this.products = data['groups'];
        this.pageState="landing";
        this.heroImage = this.products[this.indexNumber]['hero']

      }
    )
  }
  
  ngOnInit() {
    
  }

}
