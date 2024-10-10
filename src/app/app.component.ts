import {Component} from '@angular/core';
import {WorkbenchComponent} from '@scion/workbench';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    WorkbenchComponent,
  ],
})
export class AppComponent {
}
