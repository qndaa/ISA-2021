package com.example.backend.model.reservation;

import com.example.backend.enums.StatusOfReservation;
import com.example.backend.model.DefaultModel;
import com.example.backend.model.user.User;
import lombok.Data;

import javax.persistence.*;

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

    @ManyToOne
    @JoinColumn(name="reservation_entyty_id")
    private ReservationEntity reservation;
}
