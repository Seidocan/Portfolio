import { Component } from '@angular/core';
import { MenuFunctionService } from '../services/menu-function.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  
  constructor(public mainservice : MenuFunctionService) { }

  burgerToggle = this.mainservice.menuHidden;

  /**
   * The function hides the menu by setting menuHidden to true in mainservice.
   */
  closeMenu() {
    this.mainservice.menuHidden = true;
    this.mainservice.currentIcon = '../../../assets/icons/burger_menu.png';
  }

  email = "marco.marrocu@hotmail.de";

}