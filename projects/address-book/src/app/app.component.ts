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

  selectedIndex: number;

  selectedContact: Contact;

  addMode: boolean = true;

  constructor(private contactsService: ContactsService) {}

  contacts: Contact[];

  ngOnInit(): void {
    this.contacts = this.contactsService.getContacts();
  }

  onContactSelected(event: Event, idx: number) {
    this.selectedIndex = idx;
    this.selectedContact = this.contacts[this.selectedIndex]
    this.addMode = false;
  }

  onAddContact() {
    this.addMode = true;
    this.selectedContact = null;
    this.selectedIndex = -1;
  }
}
