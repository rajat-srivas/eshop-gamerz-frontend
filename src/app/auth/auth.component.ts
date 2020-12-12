import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent implements OnInit {
  isLogin: boolean = false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    var queryParam = "";
    this.route.queryParams.subscribe((param) => {
      queryParam = param["type"];
      if (queryParam === "login") this.isLogin = true;
      if (queryParam === "signup") this.isLogin = false;
    });
  }
}
