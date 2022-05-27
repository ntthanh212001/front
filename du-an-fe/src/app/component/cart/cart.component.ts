import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  total: string = "";
  constructor(private cartService : CartService) { }



  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    if(confirm("Bạn có chắc không?")){
      this.cartService.removeCartItem(item);
    }

  }
  emptycart(){
    if(confirm("Bạn có chắc không?")){
      this.cartService.removeAllCart();
    }
  }
  handleBlur(event: any): void{
    this.total = event.target.value;
    console.log(event);

  }

}
