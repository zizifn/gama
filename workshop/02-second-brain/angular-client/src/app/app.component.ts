import { JsonPipe } from '@angular/common';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, NgxJsonViewerModule],
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

  search(event: SubmitEvent) {
    console.log(event);
    // get value from submit base on id
    const data = new FormData(event.target as HTMLFormElement);
    const search = data.get('search');
    this.httpClient
      .post('/api/docs/search', {
        search: search,
      })
      .subscribe((data) => {
        this.data = data;
        console.log(data);
      });
    event.preventDefault();
  }

  index(event: SubmitEvent) {
    console.log(event);
    // get value from submit base on id
    const data = new FormData(event.target as HTMLFormElement);
    const url = data.get('url');
    this.httpClient
      .post('/api/docs/create', {
        webLink: url,
      })
      .subscribe((data) => {
        console.log(data);
      });
    event.preventDefault();
  }

  chat(event: SubmitEvent) {
    console.log(event);
    // get value from submit base on id
    const data = new FormData(event.target as HTMLFormElement);
    const chat = data.get('chat');
    this.httpClient
      .post('/api/chat', {
        input: chat,
      })
      .subscribe((data) => {
        console.log(data);
      });
    event.preventDefault();
  }

  title = 'angular-client';
  data: any;
}
