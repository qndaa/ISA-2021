import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccountRequestsComponent } from './delete-account-requests.component';

describe('DeleteAccountRequestsComponent', () => {
  let component: DeleteAccountRequestsComponent;
  let fixture: ComponentFixture<DeleteAccountRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAccountRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccountRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
