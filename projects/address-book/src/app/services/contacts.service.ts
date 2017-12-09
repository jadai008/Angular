import { Contact } from "../model/contact.model";



export class ContactsService {

    contacts: Contact[] = [
        new Contact('Adithi Hariharan', '+919620222706', 'jadai008@gmail.com'),
        new Contact('Hariharan', '+919620222706', 'jadai008@gmail.com'),
        new Contact('Usha', '+919986130812', 'ushaananthswamy@gmail.com')
    ];

    getContacts () {
        return this.contacts.slice();
    }

}