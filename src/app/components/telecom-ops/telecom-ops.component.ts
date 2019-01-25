import { Component, OnInit } from '@angular/core';
import { Telecom } from '../../models/Telecom';
import { TelecomService } from 'src/app/services/telecom.service';

@Component({
  selector: 'app-telecom-ops',
  templateUrl: './telecom-ops.component.html',
  styleUrls: ['./telecom-ops.component.scss']
})
export class TelecomOpsComponent implements OnInit {
  telecomOps: Telecom[];
  constructor(private telecomService: TelecomService) {}

  ngOnInit() {
    this.telecomService.getTelecoms().subscribe(telecom => {
      console.log(telecom);
    });
  }
}
