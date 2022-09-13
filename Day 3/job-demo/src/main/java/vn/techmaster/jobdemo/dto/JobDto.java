package vn.techmaster.jobdemo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class JobDto {
    private String title;
    private String description;
    private String location;
    private int min_salary;
    private int max_salary;
    private String email_to;
}
