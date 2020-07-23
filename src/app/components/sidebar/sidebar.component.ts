import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  message:string;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.sharedMessage.subscribe(message => this.message = message)
  }
  SetCategory(category:string) {
    this.sharedService.nextMessage(category)
  }

}
