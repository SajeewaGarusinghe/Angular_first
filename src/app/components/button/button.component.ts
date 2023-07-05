import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input()
  text!: String;
  @Input()
  color!: String;
  @Output() btnClick = new EventEmitter();
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onClick(): void {
    this.btnClick.emit();
  }



}
