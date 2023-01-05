export class Taxi {
    compagnia: string;
    numeroTelefono: string;
    downloadPlayStore: string;
    downloadAppStore: string;

    constructor(compagnia: string, numeroTelefono: string, downloadPlayStore: string, downloadAppStore: string) {
        this.compagnia = compagnia;
        this.numeroTelefono = numeroTelefono;
        this.downloadPlayStore = downloadPlayStore;
        this.downloadAppStore = downloadAppStore;
    }

    get compagniaTaxi(): string {
        return this.compagnia;
    }
    set compagniaTaxi(compagnia: string) {
        this.compagnia = compagnia;
    }

    get numeroTelefonoTaxi(): string {
        return this.numeroTelefono;
    }
    set numeroTelefonoTaxi(numeroTelefono: string) {
        this.numeroTelefono = numeroTelefono;
    }

    get downloadPlayStoreTaxi(): string {
        return this.downloadPlayStore;
    }
    set downloadPlayStoreTaxi(downloadPlayStore: string) {
        this.downloadPlayStore = downloadPlayStore;
    }

    get downloadAppStoreTaxi(): string {
        return this.downloadAppStore;
    }
    set downloadAppStoreTaxi(downloadAppStore: string) {
        this.downloadAppStore = downloadAppStore;
    }    
}