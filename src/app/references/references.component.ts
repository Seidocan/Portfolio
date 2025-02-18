import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})

export class ReferencesComponent {

  onMouseOver() {
    const arrow = document.getElementById('refAnimationDiv');
    if (arrow) arrow.classList.add('hovered');
  }

}
