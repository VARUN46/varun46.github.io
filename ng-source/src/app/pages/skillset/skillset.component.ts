import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/commons/services/loader/loader.service';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit,AfterViewInit {

  constructor(private loader:LoaderService) { }
  ngAfterViewInit(): void {
    this.loader.SHOW_LOADER = false;
  }

  ngOnInit(): void {
  }

}
