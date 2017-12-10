import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact.model';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'add-edit-contact',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  addMode: boolean = false;

  selectedContact: Contact;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.selectedContact = this.contactsService.getContacts()[0];
  }

}
