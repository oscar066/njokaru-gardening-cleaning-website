import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    FooterComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
  ],
  exports: [
    FooterComponent,
    ContactComponent
  ]
})

export class SharedModule { }
