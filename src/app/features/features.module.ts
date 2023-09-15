import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [
    HeroComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    ServicesComponent
  ]
})
export class FeaturesModule { }
