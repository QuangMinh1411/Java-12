package vn.techmaster.demothymeleaf.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import vn.techmaster.demothymeleaf.model.Person;
import vn.techmaster.demothymeleaf.repository.InMemoRepo;

@Controller
public class HomeController {
    @Autowired
    private InMemoRepo repo;

    @GetMapping("/")
    public String getHome(){
        return "index";
    }

    @GetMapping("/text")
    public String demoText(Model model){
        Person person = new Person("John","USA","1979-12-24","male");
        model.addAttribute("person",person);
        model.addAttribute("message","<h1>Display <span style='color:blue'>HTML</span> inside</h1>");
        return "text";
    }

    @GetMapping("/about")
    public String getAbout() {
        return "about";
    }
    @GetMapping("/link")
    public String linkExpression(Model model) {
        model.addAttribute("dynamiclink", "products");
        return "link";
    }

    @GetMapping("/products")
    public String getProducts(Model model) {
        model.addAttribute("products", repo.getProducts());
        return "products";
    }

    @GetMapping("/switch")
    public String demoSwitch(Model model) {
        model.addAttribute("users", repo.getUsers());
        return "switch";
    }

    @GetMapping("/condition")
    public String demoCondition(Model model) {
        model.addAttribute("people", repo.getPeople());
        return "condition";
    }

    @GetMapping("/services")
    public String getService() {
        return "service";
    }

}
