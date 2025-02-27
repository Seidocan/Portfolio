import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})

export class AboutmeComponent {

  /**
   * The function adds the "hovered" class to the element with the ID "aboutAnimationDiv" when the mouse hovers over it.
   */
  onMouseOver() {
    const arrow = document.getElementById('aboutAnimationDiv');
    if (arrow) arrow.classList.add('hovered');
  }
}