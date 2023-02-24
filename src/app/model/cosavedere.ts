export class Cosavedere {
  img: string;

  constructor(img: string) {
    this.img = img;
  }

  get imgCosavedere(): string {
    return this.img;
  }
  set imgCosavedere(img: string){
    this.img = img;
  }
}
