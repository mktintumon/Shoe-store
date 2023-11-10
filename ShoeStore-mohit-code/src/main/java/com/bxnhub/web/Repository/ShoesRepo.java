package com.bxnhub.web.Repository;


import com.bxnhub.web.entities.Shoes;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface ShoesRepo extends CrudRepository<Shoes,Integer> {
    public Shoes findById(int id);

}
