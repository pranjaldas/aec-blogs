package com.aec.mca.blogsbackend.controllers;

import com.aec.mca.blogsbackend.models.Blog;
import com.aec.mca.blogsbackend.services.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/blog")
@CrossOrigin(origins = "*")
public class BlogController {
    @Autowired
    BlogService blogService;

    @GetMapping("/")
    public List<Blog> getAll(){
        return blogService.getAll();
    }

    @GetMapping("/{id}")
    public Blog getById(@PathVariable(name = "id") String id){
        return blogService.getOneById(id);
    }

    @PostMapping("/")
    public Blog postBlog(@RequestBody Blog blog){
        return blogService.create(blog);
    }

    @PutMapping("/{id}")
    public Blog postBlog(@PathVariable(name = "id") String id, @RequestBody Blog blog){
        return blogService.update(id,blog);
    }

    @DeleteMapping("/{id}")
    public Object delete(@PathVariable(name = "id") String id){
        blogService.delete(id);
        Map<String, Object> response = new HashMap<>();
        response.put("result", "Deleted Successfully");
        return  response;
    }
}
