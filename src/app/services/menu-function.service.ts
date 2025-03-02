import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuFunctionService {

  constructor() { }

  menuHidden = true;
  currentIcon = '../../../assets/icons/burger_menu.png';

  /**
  * Toggles the visibility of the menu by changing the state of `menuHidden` and updating the icon.
  */
  toggleMenu() {
    this.menuHidden = !this.menuHidden;
    this.updateIcon();
  }

  /**
  * Closes the menu by setting `menuHidden` to true and updating the icon.
  */
  closeMenu() {
    this.menuHidden = true;
    this.updateIcon();
  }


  /**
  * Updates the icon based on the current visibility of the menu.
  * If the menu is hidden, it sets the icon to the burger menu, otherwise it sets the icon to the close (X) menu.
  */
  private updateIcon() {
    if (this.menuHidden) {
      this.currentIcon = '../../../assets/icons/burger_menu.png';
    } else {
      this.currentIcon = '../../../assets/icons/menuX.png';
    }
  }
}