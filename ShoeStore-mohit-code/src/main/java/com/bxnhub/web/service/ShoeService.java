package com.bxnhub.web.service;

import com.bxnhub.web.Repository.ShoesRepo;
import com.bxnhub.web.entities.Shoes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShoeService {
    @Autowired
    ShoesRepo shoesRepo;
    public Shoes createShoes(Shoes shoes){
       Shoes result =  shoesRepo.save(shoes);
       return result;
    }
    public List<Shoes> getAllShoes(){
        List<Shoes> list = (List<Shoes>)this.shoesRepo.findAll();
        return list;
    }
    public Shoes getShoeById(int id) {
        Shoes shoe = null;
        try {
            shoe = this.shoesRepo.findById(id);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        return shoe;
    }
    public void deleteShoe(int id) {

        shoesRepo.deleteById(id);
    }
    public void updateShoes(Shoes shoe , Integer id){
        shoe.setId(id);
        shoesRepo.save(shoe);
    }
}
