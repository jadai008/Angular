export class Contact {
    name:string;
    phone:string;
    email:string;
    imagePath:string = 'assets/images/contact_img.png';
    gender:string;

    constructor(name:string, phone:string, email:string, imgPath: string) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.imagePath = imgPath;
    }
}