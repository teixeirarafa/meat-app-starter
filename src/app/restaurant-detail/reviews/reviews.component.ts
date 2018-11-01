import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RestaurantsService } from './../../restaurants/restaurants.service';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  getReviews: Observable<any>

  constructor(private restaurantsService: RestaurantsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getReviews = this.restaurantsService.reviewsOfRestaurant(
      this.activatedRoute.parent.snapshot.params['id']
    )
  }

}
