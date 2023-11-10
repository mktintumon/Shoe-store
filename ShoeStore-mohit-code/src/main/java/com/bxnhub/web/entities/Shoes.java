package com.bxnhub.web.entities;


import jakarta.persistence.*;

@Entity
@Table(name="shoes")
public class Shoes {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer id;

        private String title;
        private String description;
        private Double price;
        private String imageURL;
        
        public Shoes() {
        }

        public Shoes(String title, String description, Double price, String imageURL) {
            this.title = title;
            this.description = description;
            this.price = price;
            this.imageURL = imageURL;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public Double getPrice() {
            return price;
        }

        public void setPrice(Double price) {
            this.price = price;
        }

        public String getImageURL() {
            return imageURL;
        }

        public void setImageURL(String imageURL) {
            this.imageURL = imageURL;
        }

        public Integer getId() {
            return id;
        }

        public void setId(Integer id) {
            this.id = id;
        }
}
