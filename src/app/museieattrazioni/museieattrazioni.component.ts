import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulsecondService } from '../services/contentfulsecond.service';
import { Meta } from '@angular/platform-browser';
import { query } from '@angular/animations';
import { attraction } from 'src/environments/environment';


@Component({
  selector: 'app-museieattrazioni',
  templateUrl: './museieattrazioni.component.html',
  styleUrls: ['./museieattrazioni.component.css']
})
export class AttrazioniComponent implements OnInit{

  attrazioniSelected = false;
  piazzeSelected = false;
  museiSelected = false;
  parchiSelected = false;
  sitoarcheologicoSelected = false;

  categories = ['Attrazioni', 'Piazza', 'Museo', 'Parco', 'Sito archeologico'];
  selectedCategory: string | undefined;

  loadedArticlesCount: number = 200; // Numero iniziale di articoli caricati
  //articlesPerPage: number = 9; // Numero di articoli da caricare ogni volta
  //totalArticles: any;
  
  total?: any;

  itemsPerPage = attraction.limit;
  currentPage = 1;


  paginatedData() {
    const start = (this.currentPage - 1) * (this.itemsPerPage);
    this.attractionPosts$ = this.contentfulsecondService.getAllEntriesAttraction(start);
  
    const promise = new Promise((resolve, reject) => {
      this.attractionPosts$?.subscribe({
        next: value => {
          this.total = value.total;
         // console.log(this.total);
          resolve(this.total); // Risolve la promise con il valore di myString
        },
        error: err => {
        //  console.error('Observable emitted an error: ' + err);
          reject(err); // Rejetti la promise in caso di errore
        },
        complete: () =>{
          //console.log('Observable emitted the complete notification')
        } 
      });
    });

    // Utilizza la promise per ottenere il valore fuori dalla subscribe
    promise.then(valueOutsideSubscribe => {
   //   console.log('Value outside subscribe: ' + valueOutsideSubscribe);
      this.total = valueOutsideSubscribe;
    //  console.log("ciao", this.total);
    });
    return this.attractionPosts$;
  }
  changePage(page: number) {
    this.currentPage = page;

    this.paginatedData();
  }
  /*
  loadMoreArticles() {
    this.loadedArticlesCount += this.articlesPerPage;
  }*/
  

  onCheckboxChange(category: string) {
    if (this.selectedCategory === category) {
      this.selectedCategory = undefined;
    } else {
      this.selectedCategory = category;
    }
  }

  deselectOthers(selected: string) {
    const selectedCategory = selected;
    if (selectedCategory === 'attrazioniSelected') {
      this.piazzeSelected = false;
      this.museiSelected = false;
      this.parchiSelected = false;
      this.sitoarcheologicoSelected = false;
    }
    if (selectedCategory === 'piazzeSelected') {
      this.attrazioniSelected = false;
      this.museiSelected = false;
      this.parchiSelected = false;
      this.sitoarcheologicoSelected = false;
    }
    if (selectedCategory === 'museiSelected') {
      this.attrazioniSelected = false;
      this.piazzeSelected = false;
      this.parchiSelected = false;
      this.sitoarcheologicoSelected = false;
    }
    if (selectedCategory === 'parchiSelected') {
      this.attrazioniSelected = false;
      this.piazzeSelected = false;
      this.museiSelected = false;
      this.sitoarcheologicoSelected = false;
    }
    if (selectedCategory === 'sitoarcheologicoSelected') {
      this.attrazioniSelected = false;
      this.piazzeSelected = false;
      this.museiSelected = false;
      this.parchiSelected = false;
    }
  }

  constructor(private contentfulsecondService: ContentfulsecondService, private route: ActivatedRoute, private meta: Meta) {
   /* this.attractionPosts$ = this.contentfulsecondService.getAllEntriesAttraction();
  
    const promise = new Promise((resolve, reject) => {
      this.attractionPosts$?.subscribe({
        next: value => {
          this.total = value.total;
          console.log(this.total);
          resolve(this.total); // Risolve la promise con il valore di myString
        },
        error: err => {
          console.error('Observable emitted an error: ' + err);
          reject(err); // Rejetti la promise in caso di errore
        },
        complete: () => console.log('Observable emitted the complete notification')
      });
    });
    
    // Utilizza la promise per ottenere il valore fuori dalla subscribe
    promise.then(valueOutsideSubscribe => {
      console.log('Value outside subscribe: ' + valueOutsideSubscribe);
      this.total = valueOutsideSubscribe;
      console.log("ciao", this.total);
    });*/
    this.paginatedData();
    

  }

  attractionPosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    
  /* Imposta il numero totale di articoli
  this.attractionPosts$.subscribe(posts => {
    this.totalArticles = posts.items.length;
  });*/

    this.route.params.subscribe(
      params => {
        const id = params['id'];
      }
    )

    this.meta.addTag({
      name: 'description',
      content: 'Scopri le principali attrazioni e i musei di Roma nella nostra guida online. Dalle antiche rovine ai capolavori artistici, \
                trova le principali attrazioni turistiche della Città Eterna. Leggi la nostra guida e scopri i tesori culturali di Roma, \
                tra musei, monumenti e molto altro.'
    });
  }


}
