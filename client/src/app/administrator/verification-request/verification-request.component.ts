import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-verification-request',
  templateUrl: './verification-request.component.html',
  styleUrls: ['./verification-request.component.css']
})
export class VerificationRequestComponent implements OnInit {
  unverifiedUsers: any;
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getUnverified().subscribe(res => {
      this.unverifiedUsers = res;
    })
  }

  onAcceptClick = (id:string) => {
    this.adminService.verifyAccount(id).subscribe(res => {
      alert("User's verification request is accepted!");
    })
  }

}
