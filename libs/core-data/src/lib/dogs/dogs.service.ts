import { Dog } from './dog';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { of } from 'rxjs';

import * as uuid from 'uuid/v1';

const BASE_URL = 'https://api.thedogapi.com/v1'

@Injectable({
  providedIn: 'root'
})
export class DogsService {
model = 'breeds?limit=20&page=6'

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  create(dog: Dog) {
    return of(({ id: uuid(), ...dog}));
  }

  delete(dog: Dog) {
    return this.httpClient.delete(this.getUrlForId(dog.id));
  }

  update(dog: Dog) {
    return this.httpClient.put(this.getUrlForId(dog.id), dog);
  }
}
