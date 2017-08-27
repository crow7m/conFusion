import { Component, OnInit} from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import { Location } from '@angular/common';
import { Params, ActivatedRoute } from '@angular/router';




export class DishDetailComponent implements OnInit {

  dish: Dish;

  constructor(private dishservice: DishService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    console.log(id);
    this.dish = this.dishservice.getDish(id);
  }

  goBack(): void {
    this.location.back();
  }

}
