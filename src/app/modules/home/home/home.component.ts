import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showModal: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onMenu() {
    this.showModal = !this.showModal;
  }

  onMenuHome(){
    this.showModal = !this.showModal;
  }

  onMenuAboutMe(){
    this.showModal = !this.showModal;
  }

  onMenuStack(){
    this.showModal = !this.showModal;
  }

  onMenuPortfolio(){
    this.showModal = !this.showModal;
  }

  onMenuContact(){
    this.showModal = !this.showModal;
  }



}
