class logic {
    constructor(title:string){
        this.title = title;
    }

    title:string;

    greet() : string {
        return `Hello ${this.title}`;
    }
}

export default logic;