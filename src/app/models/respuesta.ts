import { Book } from "./book";

export class Respuesta {
    constructor(public codigo: number, public erro: boolean, public mensaje: string,
        public data: Book[]){
        

    }
}
