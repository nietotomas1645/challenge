import { Component, OnInit } from '@angular/core';
import { TransactService } from 'src/app/services/transact.service';

@Component({
  selector: 'app-transacts',
  templateUrl: './transacts.component.html',
  styleUrls: ['./transacts.component.css']
})
export class TransactsComponent implements OnInit{

  transacts: any;
  public page!: number;
  constructor(private transactService: TransactService) { }

  ngOnInit() {
    this.transactService.getTransacts().subscribe((data: any) => {
      this.transacts = data;
    });
  }
}
