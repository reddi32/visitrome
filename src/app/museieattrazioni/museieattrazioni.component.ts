import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulsecondService } from '../services/contentfulsecond.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-museieattrazioni',
  templateUrl: './museieattrazioni.component.html',
  styleUrls: ['./museieattrazioni.component.css']
})
export class AttrazioniComponent implements OnInit {

  attrazioniSelected = false;
  piazzeSelected = false;
  museiSelected = false;
  parchiSelected = false;

  categories = ['Attrazioni', 'Piazza', 'Museo', 'Parco'];
  selectedCategory: string | undefined;

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
    }
    if (selectedCategory === 'piazzeSelected') {
      this.attrazioniSelected = false;
      this.museiSelected = false;
      this.parchiSelected = false;
    }
    if (selectedCategory === 'museiSelected') {
      this.attrazioniSelected = false;
      this.piazzeSelected = false;
      this.parchiSelected = false;
    }
    if (selectedCategory === 'parchiSelected') {
      this.attrazioniSelected = false;
      this.piazzeSelected = false;
      this.museiSelected = false;
    }
  }

  constructor(private contentfulsecondService: ContentfulsecondService, private route: ActivatedRoute, private meta: Meta) {}

  attractionPosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.attractionPosts$ = this.contentfulsecondService.getAllEntriesAttraction();

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
