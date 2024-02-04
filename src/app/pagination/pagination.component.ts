import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit,AfterViewInit{
  @Input() totalItems: any;
  @Input() currentPage: any;
  @Input() itemsPerPage: any;
  totalPages = 0;

  constructor() {
    if (this.totalItems) {
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      alert(this.totalPages);
    } 
  }
  ngOnInit(): void {
    console.log("ngOnInit ",this.totalItems)
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit ",this.totalItems)

    if (this.totalItems) {
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      alert(this.totalPages);
    } 
  }

}
