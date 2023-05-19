import { Injectable} from '@angular/core';
import { Blog } from '../models/blog';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BlogsApiService {
  blogsList: Blog[] = [
    { id: '1', title: 'First Blog Post', author: 'John Doe', content: "A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.", date: new Date()},
    { id: '2', title: 'Second Blog Post', author: 'Jane Smith', content: "A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.", date: new Date()},
    { id: '3', title: 'Third Blog Post', author: 'Pranjal Das', content: "A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.", date: new Date()},
    { id: '4', title: 'Fourth Blog Post', author: 'Pranjal Das', content: "A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.", date: new Date()}
  ];

  private readonly commonUrl : string;
  private readonly resourceName: string = "/blog/"
  
  constructor(private http: HttpClient) { 
    this.commonUrl = environment.appUrl;
  }

  getAllBlogs(){
    return this.http.get(this.commonUrl + this.resourceName);
  }
  getById(id: string){
    return this.http.get(this.commonUrl+this.resourceName+id);
  }

  createBlog(blog: Blog): Observable<Blog> {
    return this.http.post<any>(this.commonUrl + this.resourceName, blog);
  }

  deleteBlog(blog: any): Observable<Object>{
   return this.http.delete(this.commonUrl+this.resourceName+blog.id);
  }
  update(updatedBlog: Blog): Observable<Blog> {
    return this.http.put<any>(this.commonUrl + this.resourceName + updatedBlog.id, updatedBlog);
  }
}
