import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-alive-main',
  templateUrl: './alive-main.component.html',
  styleUrls: ['./alive-main.component.scss']
})
export class AliveMainComponent implements OnInit {
  public weatherPlacesState: Observable<any>;

  constructor() {}

  ngOnInit() {}
}
