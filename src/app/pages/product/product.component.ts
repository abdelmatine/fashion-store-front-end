import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,  // Standalone component
  imports: [CommonModule],  // Import CommonModule directly here
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
