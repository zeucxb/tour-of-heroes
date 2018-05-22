import { Injectable } from '@angular/core';
import { append } from 'ramda';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages = append(message, this.messages);
  }

  clear() {
    this.messages = [];
  }
}
