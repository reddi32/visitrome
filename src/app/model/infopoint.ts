export class InfoPoint {
  title: string;
  titoloOrari: string;
  orari: string;
  img: string;
  via: string;
  link: string;

  constructor(title: string, titoloOrari: string, orari: string, img: string, via: string, link: string) {
    this.title = title;
    this.titoloOrari = titoloOrari;
    this.orari = orari;
    this.img = img;
    this.via = via;
    this.link = link;
  }

  get titleInfoPoint(): string {
    return this.title;
  }
  set titleInfoPoint(title: string) {
    this.title = title;
  }

  get titoloOrariInfoPoint(): string {
    return this.titoloOrari;
  }
  set titoloOrariInfoPoint(titoloOrari: string) {
    this.titoloOrari = titoloOrari;
  }

  get orariInfoPoint(): string {
    return this.orari;
  }
  set orariInfoPoint(orari: string) {
    this.orari = orari;
  }

  get imgInfoPoint(): string {
    return this.img;
  }
  set imgInfoPoint(img: string) {
    this.img = img;
  }

  get viaInfoPoint(): string {
    return this.via;
  }
  set viaInfoPoint(via: string) {
    this.via = via;
  }

  get linkInfoPoint(): string {
    return this.link;
  }
  set linkInfoPoint(link: string) {
    this.link = link;
  }
}
