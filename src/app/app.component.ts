import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppTooltipDirective } from './custom-directives/app-tooltip/app-tooltip.directive';
import { CenterDialogComponent } from './components/dialogs/center-dialog-component/center-dialog-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppTooltipDirective, CenterDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'toolTipDirectiveApp';
}
