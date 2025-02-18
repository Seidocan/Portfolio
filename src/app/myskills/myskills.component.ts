import { Component } from '@angular/core';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.scss'
})

export class MyskillsComponent {

  onMouseOver() {
    const arrow = document.getElementById('skillsAnimationDiv');
    if (arrow) arrow.classList.add('hovered');
  }
}