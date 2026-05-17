import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  mobileMenuOpen = false;
  activeSection = 'about';

  private observer!: IntersectionObserver;

  ngOnInit(): void {
    const sections = ['about', 'stack', 'projects', 'contact'];
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  isActive(section: string): boolean {
    return this.activeSection === section;
  }
}
