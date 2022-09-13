import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class UserService {
  // a subject(active) is a special kind of observable(passive)
  activatedEmitter = new Subject<boolean>();
}
