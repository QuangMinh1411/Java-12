package vn.techmaster.jobdemo.repository;

import org.springframework.stereotype.Repository;
import vn.techmaster.jobdemo.dto.JobDto;
import vn.techmaster.jobdemo.model.Job;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@Repository
public class JobRepository {
    private ConcurrentHashMap<String, Job> jobs;

    public JobRepository() {
        this.jobs = new ConcurrentHashMap<>();
        jobs.put("JOB-1",
                new Job("JOB-1","sales","Technical product",randomCity(),700,800,"job@yahoo.com"));
        jobs.put("JOB-2",
                new Job("JOB-2","accoutant","Back office",randomCity(),800,1000,"account@yahoo.com"));

    }

    public Iterable<Job> getAll(){
        return jobs.values();
    }

    public Job getJob(String id){
        return jobs.get(id);
    }

    public Job addJob(JobDto dtoJob){
        String id = UUID.randomUUID().toString();
        Job newJob = new Job(id,
                dtoJob.getTitle(),dtoJob.getDescription(),
                randomCity(),dtoJob.getMin_salary(), dtoJob.getMax_salary(),
                dtoJob.getEmail_to()
        );
        jobs.put(id,newJob);
        return newJob;
    }

    public Job editJob(String id, JobDto dto){
        Job jobEdit = new Job(id,
                dto.getTitle(),dto.getDescription(),
                randomCity(),dto.getMin_salary(), dto.getMax_salary(),
                dto.getEmail_to());
        jobs.replace(id,jobEdit);
        return jobEdit;
    }

    public Job delete(String id){
        return jobs.remove(id);
    }

    private String randomCity(){
        ArrayList<String> cities = new ArrayList<>();
        cities.add("Hanoi");
        cities.add("Haiphong");
        cities.add("Danang");
        cities.add("HCM");
        int index = (int) ((Math.random() * (cities.size()-1)));
        return cities.get(index);
    }
}
