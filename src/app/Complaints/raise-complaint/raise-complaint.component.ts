import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raise-complaint',
  templateUrl: './raise-complaint.component.html',
  styleUrls: ['./raise-complaint.component.scss']
})
export class RaiseComplaintComponent implements OnInit {
  selectedSection = 'option1';

  constructor() { }

  ngOnInit(): void {
  }

}
