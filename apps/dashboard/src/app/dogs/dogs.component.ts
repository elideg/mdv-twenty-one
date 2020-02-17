
import { DogsFacade } from './../../../../../libs/core-state/src/lib/dogs/dogs.facade';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Dog } from '@mdv-twenty-one/core-data';
import { FormGroup, FormGroupDirective, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdv-twenty-one-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  form: FormGroup;
  selectedDog$: Observable<Dog> = this.dogsFacade.selectedDog$;
  dogs$: Observable<Dog[]> = this.dogsFacade.allDogs$;

  constructor(
      private fb: FormBuilder,
      private dogsFacade: DogsFacade
  ) { }

  ngOnInit() {
      this.initForm();
      this.dogsFacade.loadDogs();
      this.selectDog({ id: null } as Dog);
  }

  selectDog(dog: Dog) {
      this.form.patchValue(dog);
      this.dogsFacade.selectDog(dog.id);
  }

  cancel() {
      this.selectDog({ id: null } as Dog);
      this.form.reset();
  }

  saveDog(formDirective: FormGroupDirective) {
      if (this.form.invalid) return;
      if (this.form.value.id) {
          this.dogsFacade.updateDog(this.form.value);
          this.selectDog({ id: null } as Dog);
      } else {
          this.dogsFacade.createDog(this.form.value);
          this.selectDog({ id: null } as Dog);
      }
  }

  deleteDog(dog: Dog) {
      this.dogsFacade.deleteDog(dog);
  }

  initForm() {
      this.form = this.fb.group({
          id: [''],
          name: ['', Validators.compose([Validators.required])],
          temperament: ['', Validators.compose([Validators.required])],
          life_span: ['', Validators.compose([Validators.required])]
      })
  }

}
