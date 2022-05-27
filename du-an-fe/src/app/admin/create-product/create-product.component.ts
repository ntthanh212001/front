import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/product';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  product: Products = new Products();

  constructor(private ProSr: ApiService, private router: Router) { }

  ngOnInit(): void {
  }
  saveProduct(){
    this.ProSr.createProduct(this.product).subscribe( data =>{
      console.log(data);
      this.goToProduct();
    },
    error => console.log(error));
  }

  goToProduct(){
    this.router.navigate(['/list-product']);
  }
  onSubmit(){
    console.log(this.product);
    this.saveProduct();
  }

}
