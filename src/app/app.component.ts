import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { MenuComponent } from "./menu/menu.component";
import { TranslateDirective, TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { TranslateService } from './services/translate.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    MenuComponent,
    TranslatePipe,
    TranslateDirective,
    TranslateModule,
    RouterModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('language') || 'de';
    this.translate.use(savedLang);
    this.translate.setDefaultLang();;
}

  title = 'Portfolio';

}
