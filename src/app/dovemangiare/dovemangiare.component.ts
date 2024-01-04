import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulsevenService } from '../services/contentfulseven.service';
import { Meta } from '@angular/platform-browser';
import { FirstCard } from '../model/firstcard';
import { Info } from '../model/info'

@Component({
  selector: 'app-dovemangiare',
  templateUrl: './dovemangiare.component.html',
  styleUrls: ['./dovemangiare.component.css']
})
export class DovemangiareComponent {

  listaInfo: Info[] = [];
  listaInfo2: Info[] = [];
  listaInfo3: Info[] = [];

  card: FirstCard[] = [];
  card2: FirstCard[] = [];
  card3: FirstCard[] =  [];

  constructor(private contentfulsevenService: ContentfulsevenService, private route: ActivatedRoute, private meta: Meta) {
    this.listaInfo.push(
      new Info ("spaghetti_mini.webp", "Roma è famosa per la sua cucina ricca, con specialità come la pasta cacio e pepe, la trippa alla romana e molto altro.", "Le specialità enogastronomiche di Roma", "Scopri di più")
    );
    this.listaInfo2.push(
      new Info ("fioriZucca_mini.webp", "Tra le specialità si trovano le filettature di baccalà, i supplì al telefono, e la pizza fritta con vari ripieni deliziosi e molto altro.", "I migliori fritti di Roma", "Scopri di più")
    );
    this.listaInfo3.push(
      new Info("Carciofo_alla_Giudea_mini.webp", "I carciofi alla romana sono un'autentica prelibatezza. Assaporarli è un'esperienza gastronomica che ti avvicinerà al cuore della cucina tradizionale romana.", "I migliori carciofi alla romana", "Scopri di più")
    );

    this.card.push(
      new FirstCard("suppli_mini.webp", "Street food a Roma", "Se sei un appassionato di street food, Roma è una città ricca di posti dove puoi assaporare autentica cucina da strada.", "Scopri di più")
    );
    this.card2.push(
      new FirstCard("ristorante_mini.webp", "La nostra selezione di ristoranti", "In cerca di un ristorante a Roma? Sei nel posto giusto. Scopri la nostra selezione.", "Scopri di più")
    );
    this.card3.push(
      new FirstCard("maritozzo_mini.webp", "Dove fermarsi per un dolce a Roma?", "Hai voglia di dolce? Scopri i gustosi dolci della tradizione romana.", "Scopri di più")
    );
  }

  dovemangiarePosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.dovemangiarePosts$ = this.contentfulsevenService.getAllEntriesDoveMangiare();

    this.route.params.subscribe(
      params => {
        const id = params['id'];
      }
    )

    this.meta.addTag({
      name: 'description',
      content: 'Scopri i migliori ristoranti e locali dove mangiare a Roma nella nostra guida online. Dalle trattorie tradizionali ai ristoranti di lusso, \
                trova il luogo perfetto per gustare la cucina locale. Leggi la nostra guida e fatti guidare alla scoperta dei migliori posti dove mangiare a Roma.'
    });
  }

}
