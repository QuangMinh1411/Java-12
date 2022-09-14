package vn.techmaster.customerinfo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data

public class Customer {
    private static int count = 0;
    private int id;
    private String fullname;
    private String email;
    private long phone;

    public Customer(String fullname, String email, long phone) {
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
        this.id = ++count;
    }

    public Customer() {
        this.id = ++count;
    }
}
