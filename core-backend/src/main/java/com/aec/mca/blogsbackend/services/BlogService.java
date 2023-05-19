package com.aec.mca.blogsbackend.services;

import com.aec.mca.blogsbackend.models.Blog;
import com.aec.mca.blogsbackend.repositories.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BlogService {

    @Autowired
    BlogRepository blogRepository;

    public Blog create(Blog blog){
        return blogRepository.save(blog);
    }

    public Blog update(String id, Blog blog){
        if(blogRepository.existsById(id)){
            Blog toUpdate = blogRepository.findById(id).get();
            toUpdate.setAuthor(blog.getAuthor());
            toUpdate.setContent(blog.getContent());
            toUpdate.setTitle(blog.getTitle());
            return blogRepository.save(toUpdate);
        }else
            throw new RuntimeException("Not found");
    }

    public Blog getOneById(String id){
//       return blogRepository.findById(id)
//               .orElseThrow(()-> new RuntimeException("Not found"));
        Optional<Blog> optionalBlog = blogRepository.findById(id);
        if(optionalBlog.isPresent())
            return optionalBlog.get();
        else
            return null;
    }

    public List<Blog> getAll(){
        return blogRepository.findAll();
    }

    public void delete(String id){
        blogRepository.delete(this.getOneById(id));
    }
}
