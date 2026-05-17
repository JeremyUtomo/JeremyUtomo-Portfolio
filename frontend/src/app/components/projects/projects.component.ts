import { Component } from '@angular/core';

export interface Project {
  title: string;
  role: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Cloud Integration & Multi-Repo CI/CD Architecture',
      role: 'Cloud & DevOps Engineer',
      description:
        'Integrated AWS S3 buckets into an existing full-stack application for scalable storage. Conducted hands-on research on Kubernetes (K8s) container orchestration and successfully implemented CI/CD pipelines to integrate external repositories within a complex multi-repo architecture.',
      tags: ['AWS S3', 'Kubernetes', 'Spring Boot', 'Angular', 'CI/CD'],
      featured: true,
    },
    {
      title: 'Graduation Internship: Humanoid Robot Control App (Unitree G1)',
      role: 'Mobile & Systems Developer',
      description:
        'Developed a mobile application to control and interface with the Unitree G1 humanoid robot. Handled complex system communications and real-time data processing using .NET Blazor and Python within a ROS2 environment.',
      tags: ['.NET Blazor', 'Python', 'ROS2'],
    },
    {
      title: 'Internship: MedTech App with CI/CD & Automated Testing',
      role: 'Frontend & DevOps Developer',
      description:
        'Frontend application development for connecting to a Continuous Glucose Monitor via Bluetooth (BLE). Built a custom native Flutter plugin and set up a robust CI/CD pipeline for automated unit testing to ensure high-quality, reliable code.',
      tags: ['Flutter', 'Swift', 'Kotlin', 'CI/CD'],
    },
    {
      title: 'Robotics Minor: Autonomous Object Manipulation',
      role: 'Robotics Software Engineer',
      description:
        'Programmed a Unitree G1 humanoid robot to operate autonomously. Engineered the logic for the robot to independently detect, pick up, transport, and place objects (bottles), demonstrating strong problem-solving skills in complex environments.',
      tags: ['Python', 'ROS2'],
    },
    {
      title: 'Full-Stack Trauma Therapy Platform (SPINE NGO)',
      role: 'Full Stack Developer',
      description:
        'Built a full-stack web application to digitize a paper-based trauma therapy method. Engineered a secure backend login system, automated email services, and comprehensive code testing (Agile/Scrum), enabling therapists to guide multiple clients efficiently and remotely.',
      tags: ['Java Spring Boot', 'Angular', 'PostgreSQL'],
    },
  ];

  get featuredProject(): Project {
    return this.projects[0];
  }

  get regularProjects(): Project[] {
    return this.projects.slice(1);
  }
}
