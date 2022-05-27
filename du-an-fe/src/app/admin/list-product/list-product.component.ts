import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  public productList : any ;
  public filterCategory : any

  constructor(private api : ApiService,  private router:Router) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      console.log(this.productList)
    });
  }

  updateProduct(id: number){
    this.router.navigate(['list-product/update-product', id]);
  }

  deleteProduct(id: number){
    this.api.deleteProduct(id).subscribe( data => {
      console.log(data);
      this.ngOnInit();
    })
  }

}
