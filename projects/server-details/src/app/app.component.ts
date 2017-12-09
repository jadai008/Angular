import { Component } from '@angular/core';
import { Server } from './models/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  allServers: Server[] = [];

  newServerAdded(newServer:Server) {
    this.allServers.push(newServer);
  }
}
