import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  id: number=0;
  product: any;

  constructor( private route: ActivatedRoute, private proS: ApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.proS.getProductById(this.id).subscribe(products => {
      this.product=products;
    })
  }

}
