import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { BlogsApiService } from 'src/app/services/blogs-api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input() blog: Blog | undefined;
  @Output() blogDeleted = new EventEmitter<Blog>();
  constructor(private blogsApiService: BlogsApiService, private router: Router) { }

  ngOnInit(): void {
  }
  deleteBlog(){
    if (window.confirm("Are you sure you want to delete ?")) {
      this.blogDeleted.emit(this.blog);
    } 
  }
  editBlog(){
    this.router.navigate(['/blog/edit',this.blog?.id])
  }

}
