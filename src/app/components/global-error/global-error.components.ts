import { Component, OnInit} from "@angular/core";
import {ErrorServices} from "../../services/error.services";

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.components.html',
  styleUrls: ['./global-error.components.scss']
})

export class GlobalErrorComponents implements OnInit {
  constructor(public errorService: ErrorServices) {
  }
   ngOnInit() {
   }
}
