import { Component, EventEmitter, Output } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  collapsed = true;
  screenWidth = 0;
 

  toggleCollapse():void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav():void{
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
  datos: any;

  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarService.obtenerDatos().subscribe((datos: any) => {
      this.datos = datos;
    });
  }
  
}
