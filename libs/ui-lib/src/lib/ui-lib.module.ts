import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../../material/src/lib/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WildCardComponent } from './wildcard/wildcard.component';

@NgModule({
  declarations: [LoginComponent, ToolbarComponent, WildCardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
    ],
  exports: [LoginComponent, ToolbarComponent, WildCardComponent]
})
export class UiLibModule {}
