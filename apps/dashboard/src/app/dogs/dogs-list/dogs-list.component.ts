import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Dog } from '@mdv-twenty-one/core-data';

@Component({
  selector: 'mdv-twenty-one-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent implements OnInit {
  @Input() dogs: Dog[];
  @Output() selected = new EventEmitter;
  @Output() deleted = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  select(dog: Dog) {
    this.selected.emit(dog);
  }

  delete(dog: Dog) {
    this.deleted.emit(dog);
  }
}
