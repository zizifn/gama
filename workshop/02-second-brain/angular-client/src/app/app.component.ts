import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private httpClient: HttpClient) {}
  callHelloAPI() {
    this.httpClient.get('/api/hello').subscribe((data) => {
      console.log(data);
    });
  }
  title = 'angular-client';
}
