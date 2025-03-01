import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuFunctionService {

  constructor() { }

  menuHidden = true;
  currentIcon = '../../../assets/icons/burger_menu.png';

/**
 * The function toggles the visibility of the menu by switching the menuHidden state between true and false.
 */
  toggleMenu() {
   this.menuHidden = !this.menuHidden;
}

/**
 * The function hides the menu by setting menuHidden to true.
 */
closeMenu() {
  this.menuHidden = true;
}

}