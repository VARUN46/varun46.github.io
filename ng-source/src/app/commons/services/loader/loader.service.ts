import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  SHOW_LOADER: boolean = true;
  constructor() { }
}
