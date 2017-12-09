export class Server {
    public name:string;
    public content: string;
    public description: string;

    constructor(name:string, content:string, desc:string) {
        this.name = name;
        this.content = content;
        this.description = desc;
    }
}