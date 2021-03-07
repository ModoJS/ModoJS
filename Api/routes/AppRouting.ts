import { Router } from "express";
import cardServices from "../../Services/card.services";
import movementServices from "../../Services/movement.services";
import  CardController  from "../controllers/card.controllers";
import MovementController from "../controllers/movement.controllers";
import { CardDTO } from "../DTO/card.dto";

export class AppRouting {
  constructor(private route: Router) {
    this.route = route;
    this.configure();
  }
  public configure() {
    // Add the routing classes.
    this.addRoute(new CardController(cardServices,CardDTO));
    this.addRoute(new MovementController(movementServices,CardDTO));
  }

  private addRoute(appRoute: any) {
    this.route.use(appRoute.route, appRoute.router);
  }
}