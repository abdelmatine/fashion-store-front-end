import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,  // Standalone component
  imports: [CommonModule],  // Import CommonModule directly here
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
