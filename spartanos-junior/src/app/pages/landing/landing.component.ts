import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-landing',
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    CtaComponent,
    FooterComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  standalone: true
})
export class LandingComponent {}
