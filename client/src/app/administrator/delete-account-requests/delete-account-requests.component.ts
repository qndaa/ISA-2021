import { Component, OnInit } from '@angular/core';
import { DeleteRequestModel } from 'src/app/model/DeleteRequestModel';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-delete-account-requests',
  templateUrl: './delete-account-requests.component.html',
  styleUrls: ['./delete-account-requests.component.css'],
})
export class DeleteAccountRequestsComponent implements OnInit {
  deleteRequests: any;
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAllDeleteRequests().subscribe((res) => {
      this.deleteRequests = res;
    });
  }

  onAcceptClick = (id: string) => {
    const model = new DeleteRequestModel();
    model.deleteRequestId = id;
    this.adminService.verifyAccount(id).subscribe(res => {
      alert("User's verification request is accepted!");
      window.location.href = '';
    })
  }
  onDeclineClick = (id: string) => {
    const model = new DeleteRequestModel();
    model.deleteRequestId = id;
    this.adminService.declineAccount(id).subscribe(res => {
      alert("User's verification request is declined!");
      window.location.href = '';
    });
  }
}
