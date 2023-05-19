package com.aec.mca.blogsbackend.models;


import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;

import java.util.Date;
@Entity
@Table(name = "blogs")
public class Blog {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    private String id;

    @Column(name = "title")
    private String title;

    @Column(name = "content", length = 10000)
    private String content;

    @Column(name = "author")
    private String author;

    @Column(name = "date")
    private Date date;

    public Blog() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
