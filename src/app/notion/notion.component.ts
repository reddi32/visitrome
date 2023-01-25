import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notion',
  templateUrl: './notion.component.html',
  styleUrls: ['./notion.component.css']
})
export class NotionComponent implements OnInit {

  notionData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    const url = 'https://www.notion.so/visitromeblog/Blog-visitrome-4da6ebe88b164d678100e6a6526204fe';
    const token = 'secret_rJjRwvQQq2KvuEFPWvlyiWTiH0eklJMSpd2DlJW3ku4';
    this.http.get(url, { headers: { 'Authorization': `Bearer ${token}` }})
    .subscribe((response) => {
        console.log(response);
    });
    console.log(url);
}

}
