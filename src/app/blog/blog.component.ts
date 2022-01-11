import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

let headers = new HttpHeaders();
headers = headers.set('x-rapidapi-host', 'newscatcher.p.rapidapi.com')
  .set('x-rapidapi-key', '4d422cca05msh0f15d5a7d5ddc2ap11aa60jsn21f75a314e58');
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  news: any;
  ngOnInit() {
    this.httpClient.
    get('https://newscatcher.p.rapidapi.com/v1/search_free?q=auto&lang=en&media=True',
      {headers})
      .subscribe(data => {
      console.log('szabi', data);
      const news0 = JSON.stringify(data);
      const news1 = JSON.parse(news0);
      if (news1.status === 'ok') {
        this.news = news1.articles;
      }
    });
  }

}
