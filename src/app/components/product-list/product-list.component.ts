import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  message:string;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.sharedMessage.subscribe(message => this.message = message)
  }

}
