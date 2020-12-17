import { Injectable } from "@angular/core";
import { Message } from "../models/message.model";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  get(): Message[] {
    return [
      { id: "1", priority: 0 },
      { id: "2", priority: 1 },
      { id: "3", priority: 2 },
    ];
  }
}
