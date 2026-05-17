import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [],
  templateUrl: './terminal.component.html',
  styles: [
    `
      .terminal-body {
        min-height: 220px;
      }
      .typed-cursor {
        color: #4ade80;
        font-weight: 100;
      }
    `,
  ],
})
export class TerminalComponent implements AfterViewInit, OnDestroy {
  @ViewChild('typedTarget') typedTarget!: ElementRef;

  private typed!: Typed;

  ngAfterViewInit(): void {
    this.typed = new Typed(this.typedTarget.nativeElement, {
      strings: [
        `<span class="text-secondary-fixed-dim">$</span> git push origin main\n<span class="text-on-surface-variant text-sm">Enumerating objects: done.</span>\n\n<span class="text-secondary-fixed-dim">$</span> initiating CI/CD pipeline (YAML)...\n<span class="text-on-surface-variant text-sm">Parsing workflow file... done.</span>\n\n<span class="text-secondary-fixed-dim">$</span> running automated unit tests...\n<span class="text-green-400 font-semibold">[PASS] All 42 tests passed.</span>\n\n<span class="text-secondary-fixed-dim">$</span> provisioning cloud infrastructure via Terraform...\n<span class="text-on-surface-variant text-sm">Apply complete! Resources: 6 added.</span>\n\n<span class="text-secondary-fixed-dim">$</span> deploying scalable backend to AWS...\n<span class="text-green-400 font-semibold">✔ deployment successful. Hello, World!</span>`,
      ],
      typeSpeed: 40,
      backSpeed: 0,
      backDelay: 4000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '█',
      contentType: 'html',
    });
  }

  ngOnDestroy(): void {
    this.typed?.destroy();
  }
}
