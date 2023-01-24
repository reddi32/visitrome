export class FirstCard {
  img: string;
  title: string;
  paragraph: string;
  link: string;

  constructor(img: string, title: string, paragraph: string, link: string) {
    this.img = img;
    this.title = title;
    this.paragraph = paragraph;
    this.link = link;
  }

  get imgFirstCard(): string {
    return this.img;
  }
  set imgFirstCard(img: string){
    this.img = img;
  }

  get titleFirstCard(): string {
    return this.title;
  }
  set titleFirstCard(title: string) {
    this.title = title;
  }

  get paragraphFirstCard(): string {
    return this.paragraph;
  }
  set paragraphFirstCard(paragraph: string) {
    this.paragraph = paragraph;
  }

  get linkFirstCard(): string {
    return this.link;
  }
  set linkFirstCard(link: string) {
    this.link = this.link;
  }
}
