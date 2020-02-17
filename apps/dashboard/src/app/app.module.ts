import { UiLibModule } from './../../../../libs/ui-lib/src/lib/ui-lib.module';
import { CoreStateModule } from './../../../../libs/core-state/src/lib/core-state.module';
import { DogsDetailsComponent } from './dogs/dogs-details/dogs-details.component';
import { DogsListComponent } from './dogs/dogs-list/dogs-list.component';
import { DogsItemComponent } from './dogs/dogs-item/dogs-item.component';
import { DogsComponent } from './dogs/dogs.component';
import { RoutingModule } from './routing.module';
import { CoreDataModule } from '@mdv-twenty-one/core-data';
import { MaterialModule } from '@mdv-twenty-one/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, DogsComponent, DogsItemComponent, DogsListComponent, DogsDetailsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    UiLibModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
