import { Component } from '@angular/core';
import { FooterComponent } from "../shared/footer/footer.component";
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [
    FooterComponent,
    TranslateModule,
    TranslatePipe
  ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  email = "marco.marrocu@hotmail.de";
}
