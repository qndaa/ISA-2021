package com.example.backend.web.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
@Getter
@Setter
@NoArgsConstructor
public class ReportResponse {
    Date startDate;
    Date endDate;
    double income;
    double percentage;
}
