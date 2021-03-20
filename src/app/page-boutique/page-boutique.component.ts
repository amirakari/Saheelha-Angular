import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-boutique',
  templateUrl: './page-boutique.component.html',
  styleUrls: ['./page-boutique.component.css']
})
export class PageBoutiqueComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
  gotodetails(){
    const link = ['detailProduit'];
    this.router.navigate(link);
  }

}
