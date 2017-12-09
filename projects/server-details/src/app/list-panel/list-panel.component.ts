import { Component, OnInit, Input } from '@angular/core';
import { Server } from '../models/server.model';

@Component({
  selector: 'list-panel',
  templateUrl: './list-panel.component.html',
  styleUrls: ['./list-panel.component.css']
})
export class ListPanelComponent implements OnInit {

  @Input() servers: Server[] = [];

  constructor() { }

  ngOnInit() {
  }

}
