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

  closeMenu() {
    this.mainservice.menuHidden = true;
    
  }
}