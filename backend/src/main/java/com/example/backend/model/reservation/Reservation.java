package com.example.backend.model.reservation;

import com.example.backend.enums.StatusOfReservation;
import com.example.backend.model.DefaultModel;
import com.example.backend.model.user.User;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "reservations")
public class Reservation extends DefaultModel {

    @OneToOne
    @JoinColumn(name = "term_id", referencedColumnName = "id")
    private Term term;
    private Double price;
    private StatusOfReservation statusOfReservation;
    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
}
