import { Component, OnInit } from '@angular/core';

import { SeboService } from '../services/sebo.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private _seboService: SeboService,
  ) {}


  ngOnInit() {
    this._seboService.getUserProfiles().subscribe((response: any) => {
      console.log(response);
    })
  }


}
