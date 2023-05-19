import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { BlogsApiService } from 'src/app/services/blogs-api.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  blogForm!: FormGroup;
  editMode: boolean = false;
  editBlog: Blog | undefined;
  private id: any;
  constructor(private formBuilder: FormBuilder,
     private blogApiService: BlogsApiService,
     private router: Router,
     private route: ActivatedRoute) { 
     
  }

  ngOnInit(): void {
    this.blogForm = this.formBuilder.group({
      title: [''],
      author: [''],
      content: ['']
    });
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.editMode = true;
        this.id = params['id'];
        this.loadBlogFromApi();
      }
    });
  }

  loadBlogFromApi(){
    this.blogApiService.getById(this.id).subscribe((response)=>{
      console.log(response);
      this.editBlog = JSON.parse(JSON.stringify(response));
      
      this.editMode = true;
      this.blogForm.patchValue({
        title: this.editBlog?.title,
        author: this.editBlog?.author,
        content: this.editBlog?.content
      });

    });
  }
  create(){
    if(this.editMode){
      this.update();
    }else{
      const blog: Blog = this.blogForm.value;
      blog.date = new Date;
      this.blogApiService.createBlog(blog).subscribe((response)=>{
        console.log(response);
        this.router.navigate(['/home']);
      });
    }
    
    
  }
  update(){
    const blog: Blog = this.blogForm.value;
    console.log(blog);
    blog.id = this.editBlog?.id;
    this.blogApiService.update(blog).subscribe((response)=>{
      console.log(response);
      this.router.navigate(['/home']);
    })
  }

}
