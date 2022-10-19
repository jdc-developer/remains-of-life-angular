import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileMenuService {

  private static instance: MobileMenuService | null = null;
  public isMobileMenuOpen: boolean = false;
  public closeMobileMenuEvent: EventEmitter<any> = new EventEmitter();

  constructor() {
    return MobileMenuService.instance = MobileMenuService.instance || this;
  }

  public static getInstance() {
    if (this.instance == null) {
      this.instance = new MobileMenuService();
    }
    return this.instance;
  }
}
