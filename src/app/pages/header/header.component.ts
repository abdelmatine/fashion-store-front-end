import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIcon } from "@ionic/angular/standalone";
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  standalone: true,  // Standalone component
  imports: [IonIcon, CommonModule],  // Import CommonModule directly here
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent{

  constructor() { }

  isNavActive: boolean = false;   // Controls the visibility of the navigation
  isOverlayActive: boolean = false;   // Controls the visibility of the overlay
  isHeaderSticky: boolean = false;  // Controls the "sticky" header when scrolling

  // Toggle the navigation menu and overlay
  toggleNav() {
    this.isNavActive = !this.isNavActive;
    this.isOverlayActive = !this.isOverlayActive;
  }

  // Listen to scroll events to add "active" class to header when scrolling down
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isHeaderSticky = window.scrollY >= 200;
  }

}
