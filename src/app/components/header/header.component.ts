import { Component, OnInit } from '@angular/core';
import { UiService } from '../../service/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = 'Task List';
  showAddTask: boolean = true;
  subscription?: Subscription;

  constructor(
    private uiService: UiService,
    private router: Router
  ) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  hasRouter(router: string){
    return this.router.url === router;
  }

}
