import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cookbook';
  featureLoaded = 'recipe';

  onNavigate(feature: string) {
    this.featureLoaded = feature;
  }
}
