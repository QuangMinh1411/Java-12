package vn.techmaster.customerinfo.repository;

import org.springframework.stereotype.Repository;
import vn.techmaster.customerinfo.mapper.CustomerMapper;
import vn.techmaster.customerinfo.model.Customer;
import vn.techmaster.customerinfo.model.CustomerPoJo;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Repository
public class CustomerRepository {
    private List<Customer> customers = new ArrayList<>();

    public CustomerRepository() {
        customers.add(new Customer("Tom","tom@yahoo.com",12324L));
        customers.add(new Customer("John","john@yahoo.com",12395L));
        customers.add(new Customer("Mary","mary@yahoo.com",22327L));
    }
    public List<Customer> getAll(){
        return customers;
    }
    public Customer findById(Integer id){
        return customers.stream().filter(c->c.getId()==id).findFirst().orElse(null);
    }

    public Customer findByEmail(String email){
        return customers.stream().filter(c->c.getEmail()==email).findFirst().orElse(null);
    }

    public Customer update(Integer id, CustomerPoJo pojo){
        Customer update_customer = CustomerMapper.INSTANCE.pojoToCustomer(pojo);
        update_customer.setId(id);
        customers= customers.stream().map(c->{
            if(c.getId()==id) return update_customer;
            else return c;
        }).collect(Collectors.toList());
        return update_customer;
    }
    public Customer save(CustomerPoJo pojo){
        Customer customer = CustomerMapper.INSTANCE.pojoToCustomer(pojo);
        customers.add(customer);
        return customer;
    }
    public Customer delete(Integer id){
        Optional<Customer> customer = customers.stream().filter(c->c.getId()==id).findFirst();
        if(customer.isPresent()){
            customers.remove(customer.get());
            return customer.get();
        }
        return null;
    }
}
