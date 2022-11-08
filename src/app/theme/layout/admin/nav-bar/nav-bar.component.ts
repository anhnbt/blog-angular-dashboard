import {Component, Input, OnInit} from '@angular/core';
import {ClassToggleService, HeaderComponent} from "@coreui/angular";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent extends HeaderComponent implements OnInit {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4);
  public newTasks = new Array(5);
  public newNotifications = new Array(5);

  constructor(private classToggler: ClassToggleService) {
    super();
  }

  ngOnInit(): void {
  }

}
