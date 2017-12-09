import { Component, OnInit } from '@angular/core';
import { Contact } from './model/contact.model';
import { ContactsService } from './services/contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'app';

  constructor(private contactsService: ContactsService) {}

  contacts: Contact[];

  ngOnInit(): void {
    this.contacts = this.contactsService.getContacts();
  }
}
