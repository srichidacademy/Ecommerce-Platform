import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
@Injectable()
export class SharedService {
  private message = new BehaviorSubject('Mobiles');

  sharedMessage = this.message.asObservable();
  constructor() { }

  nextMessage(message: string) {

    this.message.next(message)

  } 

}