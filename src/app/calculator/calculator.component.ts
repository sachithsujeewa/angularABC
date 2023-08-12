import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  @Input() value1: number = 0;
  @Input() value2: number = 0;
  private total: number | undefined;

  
  @Output() totalValue: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    this.total = this.value1 + this.value2;
  }

  getTotal() {
    this.totalValue.emit(this.total);
  }

}
