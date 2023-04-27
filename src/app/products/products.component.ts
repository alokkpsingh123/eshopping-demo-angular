import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
    products = [
      {id: 1, name: "Minimalists Analog Watch" , price:'109',color:'black', available:'Available', image : '/assets/product1.jpeg'},
      {id: 2, name: "Hisense Ultra HD Smart TV" , price:'3339',color:'black', available:'Available', image : '/assets/product2.jpeg'},
      {id: 3, name: "Apple iPhone 12" , price:'1855',color:'black', available:'Not Available', image : '/assets/product3.jpeg'},
      {id: 4, name: "LG Fully Automatic Washing Machine" , price:'1765',color:'white', available:'Available', image : '/assets/product4.jpeg'},
      {id: 5, name: "LG Refrigerator with Door Cooling" , price:'2815',color:'white', available:'Not Available', image : '/assets/product5.jpeg'},
      {id: 6, name: "DELL Inspiron one 27 Ryzen 7" , price:'2145',color:'white', available:'Available', image : '/assets/product6.jpeg'},
    ];
}
