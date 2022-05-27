import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/product';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  id: number = 0;
  product: Products = new Products();

  constructor(private api: ApiService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.api.getProductById(this.id).subscribe(data => {
      this.product = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.api.updateProduct(this.id, this.product).subscribe( data =>{
      this.goToEmployeeList();
    }
    ,error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/list-product']);
  }

}
