import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  num1: number;
  num2: number;
  operator: string;
  result: number;

  constructor() {
    this.num1 = 0; // Initializing the properties in the constructor
    this.num2 = 0;
    this.result = 0;
    this.operator = '';
    
  }

  calculate() {
    switch (this.operator) {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        this.result = this.num1 / this.num2;
        break;
    }
  }
}

