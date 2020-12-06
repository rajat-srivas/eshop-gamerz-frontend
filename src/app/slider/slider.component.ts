import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setInterval(this.sliderActivate, 3000);
  }
  sliderActivate() {
    const sliderImages = document.querySelectorAll('.slider__contain');
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling) {
      current.nextElementSibling.classList.add('current');
    }
    else{
      sliderImages[0].classList.add('current');
    }
  }
}
