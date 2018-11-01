import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { RestaurantsService } from './../restaurants/restaurants.service';
import { Restaurant } from './../restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'  
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restaurantsService: RestaurantsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.activatedRoute.snapshot.params['id'])
      .subscribe(restaurantReturn => this.restaurant = restaurantReturn)
  }

}
