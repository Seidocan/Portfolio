import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})

export class AboutmeComponent {

  onMouseOver() {
    const arrow = document.getElementById('aboutAnimationDiv');
    if (arrow) arrow.classList.add('hovered');
  }
}