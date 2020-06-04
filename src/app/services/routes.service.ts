import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RoutesService {
  private routesSource = new BehaviorSubject([]);
  currentRoutes = this.routesSource.asObservable();

  constructor() {}

  changeRoutes(routes: []) {
    this.routesSource.next(routes);
  }
}
