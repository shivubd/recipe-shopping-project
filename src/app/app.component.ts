import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  featureToNavigate: string = 'recipes';
  doNavigate(feature: string) {
    this.featureToNavigate = feature;
  }
}
