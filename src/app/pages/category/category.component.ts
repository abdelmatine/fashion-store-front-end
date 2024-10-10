import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: true,  // Standalone component
  imports: [CommonModule],  // Import CommonModule directly here
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
