import { Injectable } from '@angular/core';
import {LEADERS} from "../shared/leaders";
import {Leader} from '../shared/leader';

@Injectable()
export class LeaderService {
  getLeaders(): Leader[]{
    return LEADERS;

  }
  @Injectable()
  getLeader(id:number):Leader{
    return LEADERS.filter((leader)=>(leader.id === id))[0];
  }
  getFeaturedDish():Leader{
    return LEADERS.filter((leader)=> leader.featured)[0];
  }
  constructor() { }

}
