import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isAdmission: boolean;
  activeElement: string;
  constructor() { }

  ngOnInit() {
  }
  permissionAdmin() {
    if(!this.isAdmission) {
      this.isAdmission = true;
    } else {
      this.isAdmission = false;
    }

  }

  actElement(name: string){
this.activeElement = name;
  }
}
