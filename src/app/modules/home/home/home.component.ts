import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showModal: boolean = false;

  constructor(
    private viewportScroller : ViewportScroller

  ) { }

  ngOnInit() {
  }

  onMenu() {
    this.showModal = !this.showModal;
  }

  onMenuHome(){
    this.showModal = !this.showModal;

    document.getElementById("home").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  onMenuAboutMe(){
    this.showModal = !this.showModal;

    document.getElementById("about-me").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  onMenuStack(){
    this.showModal = !this.showModal;

    document.getElementById("stack").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  onMenuPortfolio(){
    this.showModal = !this.showModal;

    document.getElementById("portfolio").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  onMenuContact(){
    this.showModal = !this.showModal;

    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

}
