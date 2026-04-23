import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-features',
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
  standalone: true
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      title: 'Rápido e Eficiente',
      description: 'Desenvolvido com as tecnologias mais modernas para performance máxima.',
      icon: '⚡'
    },
    {
      title: 'Fácil de Usar',
      description: 'Interface intuitiva que qualquer um pode usar sem complicações.',
      icon: '🎯'
    },
    {
      title: 'Seguro',
      description: 'Protegemos seus dados com os melhores padrões de segurança.',
      icon: '🔒'
    },
    {
      title: 'Suporte 24/7',
      description: 'Estamos sempre aqui para ajudá-lo quando você precisar.',
      icon: '💬'
    }
  ];
}
