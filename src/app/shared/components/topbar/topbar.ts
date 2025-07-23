import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { Menubar } from 'primeng/menubar';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.html',
  standalone: true,
  imports: [Menubar, BadgeModule, AvatarModule, InputTextModule, Ripple, CommonModule],
  styleUrl: './topbar.css'
})
export class Topbar {
   baseClass: string = 'topbar';
  items = [ { label: 'Inventario Ferreteria' }];
}
