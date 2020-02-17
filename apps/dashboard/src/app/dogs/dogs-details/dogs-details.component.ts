import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Dog } from '@mdv-twenty-one/core-data';

@Component({
  selector: 'mdv-twenty-one-dogs-details',
  templateUrl: './dogs-details.component.html',
  styleUrls: ['./dogs-details.component.scss']
})
export class DogsDetailsComponent implements OnInit {
  originalName;
  currentDog: Dog

  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
  @Input() form: FormGroup;
  @Input() set dog(value) {
    if (value) this.originalName = value.name;
      this.currentDog = Object.assign({}, value)
  }

  constructor() { }

  ngOnInit() {
  }

  save(dog: Dog) {
    this.saved.emit(dog);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective)
    formDirective.resetForm()
  }
}
