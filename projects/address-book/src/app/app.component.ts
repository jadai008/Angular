import { Component, OnInit } from '@angular/core';
import { Contact } from './model/contact.model';
import { ContactsService } from './services/contacts.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  
  title = 'app';

  selectedIndex: number;

  selectedContact: Contact;

  addMode: boolean = true;

  constructor(private contactsService: ContactsService) {}

  contacts: Contact[];

  onAddSub: Subscription;

  ngOnInit(): void {
    this.contacts = this.contactsService.getContacts();
    this.onAddSub = this.contactsService.contactAdded.subscribe((event: number) => {
      this.contacts = this.contactsService.getContacts();
    })
  }

  ngOnDestroy(): void {
    this.onAddSub.unsubscribe();
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
