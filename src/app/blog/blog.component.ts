import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';
import { Meta } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private contentfulService: ContentfulService, private route: ActivatedRoute, private meta: Meta) { 

    this.paginatedData();
  }

  blogPosts$ : Observable<any> | undefined;

  loadedArticlesCount: number = 200; // Numero iniziale di articoli caricati
  total?: any;
  itemsPerPage = environment.limit;
  currentPage = 1;

  paginatedData() {
    const start = (this.currentPage - 1) * (this.itemsPerPage);
    this.blogPosts$ = this.contentfulService.getAllEntries(start);
  
    const promise = new Promise((resolve, reject) => {
      this.blogPosts$?.subscribe({
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
    return this.blogPosts$;
  }
  changePage(page: number) {
    this.currentPage = page;

    this.paginatedData();
  }

  ngOnInit(): void {
    //this.blogPosts$ = this.contentfulService.getAllEntries();

    this.route.params.subscribe(
      params => {
        const id = params['id'];

        //this.blogPosts$ = this.contentfulService.getEntryById(id);
      }
    );
    
    this.meta.addTag({
      name: 'description',
      content: 'Scopri le ultime notizie sulla città di Roma nel nostro blog dedicato. Resta aggiornato su eventi, cultura, gastronomia e molto altro ancora. \
                Leggi le nostre notizie e approfondimenti sulla Città Eterna e non perderti nulla di quello che Roma ha da offrire.'
    });
    
  }

}
