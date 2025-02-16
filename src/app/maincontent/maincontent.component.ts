import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { MenuComponent } from "../menu/menu.component";
import { LandingpageComponent } from "../landingpage/landingpage.component";
import { AboutmeComponent } from "../aboutme/aboutme.component";
import { MyskillsComponent } from "../myskills/myskills.component";
import { MyprojectsComponent } from "../myprojects/myprojects.component";
import { ReferencesComponent } from "../references/references.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [LandingpageComponent, AboutmeComponent, MyskillsComponent, MyprojectsComponent, ReferencesComponent, ContactComponent],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss'
})
export class MaincontentComponent {

}
