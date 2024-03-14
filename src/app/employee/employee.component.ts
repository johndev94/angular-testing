import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, CurrencyPipe, DecimalPipe, DatePipe],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  employee = {
    name: "Joe Bloggs",
    hours: 40,
    rate: 9.50,
    dob: new Date(),
    taxCredits: 4800, 
    creditRating: 4.9745
  }
}
