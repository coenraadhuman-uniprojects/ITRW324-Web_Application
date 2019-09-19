import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu: NbMenuItem[] = [
    {
      title: 'Homepage',
      icon: 'home-outline',
      link: '/pages/homepage',
      home: true,
    },
    {
      title: 'Favourite Stations',
      icon: 'star-outline',
      link: '/pages/favourite-stations',
    },
    {
      title: 'Manage Favourite Stations',
      icon: 'edit-2-outline',
      link: '/pages/manage-favourite-stations',
    },
    {
      title: 'Register New Station',
      icon: 'plus-outline',
      link: '/pages/manage-favourite-stations',
    },
    {
      title: 'Build New Station Guide',
      icon: 'file-text-outline',
      link: '/pages/manage-favourite-stations',
    },
  ];
}
