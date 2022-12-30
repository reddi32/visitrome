export class Info {
    img: string;
    titolo: string;
    testo: string;
    testo2: string;

    constructor(img: string, testo: string, titolo: string, testo2: string) {
        this.img = img;
        this.titolo = titolo;
        this.testo = testo;
        this.testo2 = testo2;
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

    get testo2Info(): string {
        return this.testo2;
    }
    set testo2Info(testo2: string) {
        this.testo2 = testo2;
    }    
}