import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  id: number;

  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit() {
    this.product = JSON.parse(localStorage.getItem('selectedProduct'));    
    this.id =  parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.product);    
  }

}
