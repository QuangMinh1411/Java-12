package vn.techmaster.jobdemo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.techmaster.jobdemo.dto.JobDto;
import vn.techmaster.jobdemo.model.Job;
import vn.techmaster.jobdemo.repository.JobRepository;

@RestController
@RequestMapping("/job")
public class JobController {
    @Autowired
    private JobRepository jobRepo;

    @GetMapping
    public ResponseEntity<?> getJobs(){
        return ResponseEntity.status(HttpStatus.OK).body(jobRepo.getAll());
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getJob(@PathVariable("id") String id){
        return ResponseEntity.status(HttpStatus.OK).body(jobRepo.getJob(id));
    }

    @PostMapping
    public ResponseEntity<?> addJob(@RequestBody JobDto dto){
        Job addJob = jobRepo.addJob(dto);
        return ResponseEntity.status(HttpStatus.OK).body(addJob);
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<?> editJob(@PathVariable("id") String id, @RequestBody JobDto dto){
        Job editJob = jobRepo.editJob(id,dto);
        return ResponseEntity.status(HttpStatus.OK).body(editJob);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteJob(@PathVariable("id") String id){
        Job deleteJob = jobRepo.delete(id);
       return ResponseEntity.status(HttpStatus.OK).body(deleteJob);
    }

}
