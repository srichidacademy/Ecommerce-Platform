import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/commons/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  selectedCategory:string;
  products:Product[]=[
    {ProductId:1,SKU:'12345',ProductName:"Samsung", Category:'Laptop',Description:"Samsung Laptop",UnitPrice:'30000',ImageUrl:'',UnitInStock:10,DateCreated:new Date(),LastUpdated:new Date(),Active:true},
    {ProductId:2,SKU:'xyz',ProductName:"DELL", Category:'Laptop',Description:"DELL Laptop",UnitPrice:'35000',ImageUrl:'',UnitInStock:3,DateCreated:new Date(),LastUpdated:new Date(),Active:true}
  ];

  constructor(private sharedService: SharedService,private productService:ProductService) { }

  ngOnInit(): void {

    this.sharedService.sharedMessage.subscribe(message => this.selectedCategory = message)
  }

  loadAllProducts()
  {
    this.productService.getAllProducts().subscribe((data:Product[])=>{
      this.products=data;
    })
  }










  // deleteEmp(employee: Employee): void {  
  //   this.empService.deleteEmployees(employee.id)  
  //     .subscribe(data => {  
  //       this.employees = this.employees.filter(u => u !== employee);  
  //     })  
  // }  
  // editEmp(employee: Employee): void {  
  //   localStorage.removeItem('editEmpId');  
  //   localStorage.setItem('editEmpId', employee.id.toString());  
  //   this.router.navigate(['add-emp']);  
  // }  

}
