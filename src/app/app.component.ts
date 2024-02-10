import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'binding';

  clase_toggle:string='';
  isDisabled:boolean=true;
  claseBinding:boolean=false;
  multiplesClasesString:string="";
  var1:boolean=false;
  var2:boolean=true;
}
