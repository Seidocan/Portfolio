import { Component } from '@angular/core';
import { MenuFunctionService } from '../services/menu-function.service';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    TranslateModule,
    TranslatePipe
  ],
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
    this.mainservice.closeMenu();
  }

  email = "marco.marrocu@hotmail.de";

}