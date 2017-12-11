import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Contact } from '../model/contact.model';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'add-edit-contact',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  @Input() addMode: boolean = false;

  @Input() selectedContact: Contact;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    
  }

  onSave(elName: ElementRef, elPhone: ElementRef, elEmail: ElementRef, elImgPath: ElementRef) {
    let contact = new Contact(elName.nativeElement.value, elPhone.nativeElement.value, elEmail.nativeElement.value);
    this.contactsService.add(contact);
  }

}
