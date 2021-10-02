import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/commons/services/loader/loader.service';
import { IntroComponent } from 'src/modules/info/intro/intro.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {

  constructor(private loader:LoaderService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.loader.SHOW_LOADER = false;
  }

}
