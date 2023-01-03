export class romapass {
    img: string;
    titolo: string;
    testo: string;

    constructor(img: string, testo: string, titolo: string) {
        this.img = img;
        this.titolo = titolo;
        this.testo = testo;
    }

    get imgInfo(): string {
        return this.img;
    }
    set imgInfo(img: string) {
        this.img = img;
    }

    get titoloInfo(): string {
        return this.titolo;
    }
    set titoloInfo(titolo: string) {
        this.titolo = titolo;
    }

    get testoInfo(): string {
        return this.testo;
    }
    set testoInfo(testo: string) {
        this.testo = testo;
    }

}