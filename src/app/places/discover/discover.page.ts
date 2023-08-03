import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[] = [];

  constructor(private service: PlacesService) { }

  ngOnInit() {
    //on peut appler places pq on a creé le methode get
    this.loadedPlaces = this.service.places;
  }

}
