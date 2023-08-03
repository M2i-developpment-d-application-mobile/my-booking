import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage  {

newOffer!:Place;

  constructor( private service:PlacesService, private router:Router,private navCtr: NavController) { }


  // handleImage(event: Event) {
  //   const target = event.target as HTMLInputElement;
  //   if (target.files) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(target.files[0]);
  //     reader.onload = () => {
  //       this.newOffer.imageUrl = reader.result as string;
  //     };
  //   }
  // }
  onSubmit(){
    // this.service.set(this.newOffer);
    //  this.navCtr.pop();

  }

    }


