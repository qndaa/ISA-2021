package com.example.backend.web.dto;

import com.example.backend.enums.StatusOfReservation;
import lombok.Data;

import java.time.LocalTime;
import java.util.Date;
import java.util.UUID;

@Data
public class ReservationDTO {
    private Date startDate;
    private LocalTime startTime;
    private Date endDate;
    private LocalTime endTime;
    private Double price;
    private StatusOfReservation statusOfReservation;
    private UUID useId;
}
