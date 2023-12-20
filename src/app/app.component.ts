import { Component } from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-os-env';
  public environment = environment.environment;
  public SomeAPIKey = environment.APIKeys.SomeAPIKey;
  public SomeOtherAPIKey = environment.APIKeys.SomeOtherAPIKey;


  constructor() {
    console.log('Environment:', this.environment);
    console.log('SomeAPIKey:', this.SomeAPIKey);
    console.log('SomeOtherAPIKey:', this.SomeOtherAPIKey);
  }
}
