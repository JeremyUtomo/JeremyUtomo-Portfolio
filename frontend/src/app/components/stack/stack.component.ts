import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';

interface Skill {
  name: string;
  level: number;
}

interface CloudTag {
  name: string;
}

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [],
  templateUrl: './stack.component.html',
  styles: [
    `
      .bar-fill {
        width: 0%;
        transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .bar-fill.animate {
        width: var(--bar-width);
      }
    `,
  ],
})
export class StackComponent implements OnInit, OnDestroy {
  languages: Skill[] = [
    { name: 'Java', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'C#', level: 75 },
  ];

  cloudTags: CloudTag[] = [
    { name: 'AWS (S3)' },
    { name: 'Kubernetes (K8s)' },
    { name: 'CI/CD (YAML)' },
    { name: 'ROS2' },
    { name: 'Git / Agile' },
  ];

  webAndDb: Skill[] = [
    { name: 'Spring Boot', level: 85 },
    { name: 'Angular', level: 80 },
    { name: 'Flutter', level: 75 },
    { name: 'PostgreSQL', level: 80 },
  ];

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.bar-fill').forEach((bar) => {
              bar.classList.add('animate');
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
