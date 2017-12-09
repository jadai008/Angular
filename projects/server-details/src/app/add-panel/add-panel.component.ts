import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Server } from '../models/server.model';
@Component({
  selector: 'add-panel',
  templateUrl: './add-panel.component.html',
  styleUrls: ['./add-panel.component.css']
})
export class AddPanelComponent implements OnInit {

  @Output() serverAdded = new EventEmitter<Server>();
  serverName: string;
  description: string;
  content: string;

  constructor() { }

  ngOnInit() {
  }

  onServerAdd() {
    this.serverAdded.emit(new Server(this.serverName, this.content, this.description))
  }

}
