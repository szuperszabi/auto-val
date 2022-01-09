import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

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
    get('https://newsapi.org/v2/everything?q=automotive&from=2021-12-09&sortBy=publishedAt&language=en&apiKey=ec3d50b58d554acaa244a9e4d943749c')
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
