import { Component, OnInit} from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogsApiService } from 'src/app/services/blogs-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogsList: Blog[] = []
  constructor(private blogsApiService: BlogsApiService) {
    this.populateBlogs();
  }
  populateBlogs(){
    this.blogsApiService.getAllBlogs()
    .subscribe((response)=>{
      this.blogsList = JSON.parse(JSON.stringify(response));
      console.table(this.blogsList);
    })
  }
  ngOnInit(): void {
   
  }
  onBlogDeleted(blog: Blog) {
    this.blogsApiService.deleteBlog(blog).subscribe((res)=>{
      console.log(res);
      this.populateBlogs();
    });
  }


}
