import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-telecom',
  templateUrl: './telecom.component.html',
  styleUrls: ['./telecom.component.scss']
})
export class TelecomComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
    });
  }
}
