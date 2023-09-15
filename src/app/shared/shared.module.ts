import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    FooterComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    ContactComponent
  ]
})
export class SharedModule { }
