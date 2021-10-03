import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/commons/services/loader/loader.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private loader:LoaderService) { }

  ngOnInit(): void {
    this.loader.SHOW_LOADER = false;
  }

}
