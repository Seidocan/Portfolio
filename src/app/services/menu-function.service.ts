import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuFunctionService {

  constructor() { }

  menuHidden = true;

  toggleMenu() {
   this.menuHidden = !this.menuHidden;
}

}