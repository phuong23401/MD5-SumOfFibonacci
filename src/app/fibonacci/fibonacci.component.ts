import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public getSum() : number{
    let sum = 0;
    let fib = [];
    fib[0] = 0;
    fib[1] = 1;
    // var inputValue = (<HTMLInputElement[]><any>document.getElementByName('input')).values;

    for (let i = 2; i < 20; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
      sum += i;
      console.log(fib[i]);
    }
    return sum;    
  }
  total : number = this.getSum();
}
