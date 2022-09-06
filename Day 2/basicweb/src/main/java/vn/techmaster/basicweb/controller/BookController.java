package vn.techmaster.basicweb.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.techmaster.basicweb.entity.Book;

@RestController
@RequestMapping("/books")
public class BookController {
    @GetMapping(value = "/json",produces = MediaType.APPLICATION_JSON_VALUE)
    public Book bookjson(){
        return new Book("b001","De men phieu luu ky","To Hoai");
    }
    @GetMapping(value = "/xml",produces = MediaType.APPLICATION_XML_VALUE)
    public Book bookxml(){
        return new Book("b001","De men phieu luu ky","To Hoai");
    }
}
