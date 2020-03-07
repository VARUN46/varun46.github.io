import { Component, OnInit } from '@angular/core';
import { techStack } from 'src/app/entities/techStack';
import { TechStackService } from 'src/app/services/tech-stack.service';

@Component({
  selector: 'app-technologies-list',
  templateUrl: './technologies-list.component.html',
  styleUrls: ['./technologies-list.component.css']
})
export class TechnologiesListComponent implements OnInit {

  public techStackList: techStack[];

  constructor(private svc:TechStackService) { }

  ngOnInit(): void {
    this.techStackList = this.svc.getTechnologyStack();
  }

}
