import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    HeroComponent,
    ServicesComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    ServicesComponent,
    AboutComponent
  ]
})
export class FeaturesModule { }
