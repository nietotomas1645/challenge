import { Component } from '@angular/core';
import { DebtsService } from 'src/app/services/debts.service';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.css']
})
export class DebtsComponent {
  datos: any;
  isChecked: boolean = false;
  constructor(private debtsService: DebtsService) { }

  ngOnInit(): void {
    this.debtsService.obtenerDatos().subscribe((datos: any) => {
      this.datos = datos;
    });
  }

  onCheckboxChange() {
    this.isChecked = this.isChecked;
  }
}
