import { Component } from '@angular/core';
import { MenuComponent } from '../../menu/menu.component';
import { MenuFunctionService } from '../../services/menu-function.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  menuStatus = false;
  currentIcon = '../../../assets/icons/burger_menu.png';

  constructor(public mainservice: MenuFunctionService) { }

  toggleMenu() {
    this.mainservice.toggleMenu();
  }

  closeMenu() {
    this.mainservice.closeMenu();
  }
  }
