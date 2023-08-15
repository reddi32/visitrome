export class Itinerari {
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

    get imgItinerari(): string {
        return this.img;
    }
    set imgItinerari(img: string) {
        this.img = img;
    }
    get titoloItinerari(): string {
        return this.titolo;
    }
    set titoloItinerari(titolo: string) {
        this.titolo = titolo;
    }

    get testoItinerari(): string {
        return this.testo;
    }
    set testoItinerari(testo: string) {
        this.testo = testo;
    }

    get testo2Itinerari(): string {
        return this.testo2;
    }
    set testo2Itinerari(testo2: string) {
        this.testo2 = testo2;
    }
}
