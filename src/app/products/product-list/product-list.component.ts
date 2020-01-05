import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[];

  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((data) => {         
      this.products = data.products;
    })
  }

  showDetail(product) {
    let id = product.id;
    // this.productService.getProduct(id).subscribe((data)=> {
      
    // });
    this.productService.setProductDetail(product);
    this.router.navigate(['/products', id]);
  }

}