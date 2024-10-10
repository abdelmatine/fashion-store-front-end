import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  standalone: true,  // Standalone component
  imports: [CommonModule],  // Import CommonModule directly here
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
