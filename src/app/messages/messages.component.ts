import { Component, OnInit } from '@angular/core';
import { length } from 'ramda';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  length: (value: string | Array<any>) => number = length;

  constructor(public messageService: MessageService) { }
}
