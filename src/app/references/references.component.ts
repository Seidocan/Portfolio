import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})

export class ReferencesComponent {

  /**
   * The function adds the "hovered" class to the element with the ID "refAnimationDiv" when the mouse hovers over it.
   */
  onMouseOver() {
    const arrow = document.getElementById('refAnimationDiv');
    if (arrow) arrow.classList.add('hovered');
  }
}