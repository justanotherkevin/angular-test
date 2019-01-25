import { Component, OnInit } from '@angular/core';
import { Telecom } from '../models/Telecom';

@Component({
  selector: 'app-telecom-ops',
  templateUrl: './telecom-ops.component.html',
  styleUrls: ['./telecom-ops.component.scss']
})
export class TelecomOpsComponent implements OnInit {
  telecomOps: Telecom[];
  constructor() {}

  ngOnInit() {
    this.telecomOps = [
      {
        id: 1,
        title: 'MTS',
        balance: 100
      },
      {
        id: 2,
        title: 'Beeline',
        balance: 100
      },
      {
        id: 3,
        title: 'Megafon',
        balance: 100
      }
    ];
  }
}
