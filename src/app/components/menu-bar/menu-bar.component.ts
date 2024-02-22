import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
})
export class MenuBarComponent {

  menuItems = [
    {name: 'Linkedin', link: 'https://www.linkedin.com/in/fabricio-joaquim'},
    {name: 'Github', link: 'https://github.com/fabricio-joaquim'},
    {name: 'Instagram', link: 'https://www.instagram.com/hiimf/'}
  ];

}
