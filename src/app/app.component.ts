import { Component } from '@angular/core';

import { MobileMenuService } from './shared/services/mobile-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private mobileMenuService: MobileMenuService;

  constructor() {
    this.mobileMenuService = MobileMenuService.getInstance();
  }

  checkMobileNavbar(event: any): void {
    const windowWidth = window.innerWidth;
    const target = event.target;

    if(windowWidth <= 768 && !target.classList.contains('mobile-menu') && !target.classList.contains('mobile-menu-icon')
      && this.mobileMenuService.isMobileMenuOpen) {
      this.mobileMenuService.isMobileMenuOpen = false;
      this.mobileMenuService.closeMobileMenuEvent.emit();
    }
  }

  onActivate(event: any) {
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
 }

}
