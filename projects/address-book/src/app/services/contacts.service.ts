import { Contact } from "../model/contact.model";
import { EventEmitter } from "@angular/core";



export class ContactsService {

    contactAdded: EventEmitter<number> = new EventEmitter<number>();

    contacts: Contact[] = [
        new Contact('Adithi Hariharan', '+919620222706', 'jadai008@gmail.com', 'assets/images/contact_img.png'),
        new Contact('Hariharan', '+919620222706', 'jadai008@gmail.com', 'assets/images/contact_img.png'),
        new Contact('Usha', '+919986130812', 'ushaananthswamy@gmail.com', 'assets/images/contact_img.png')
    ];

    getContacts () {
        return this.contacts.slice();
    }

    add(contact: Contact) {
        this.contacts.push(contact);
        this.contactAdded.emit(this.contacts.length);
    }

}