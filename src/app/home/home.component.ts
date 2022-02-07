import { Component, OnInit } from '@angular/core';
import {Country} from "../shared/models/country";
import {CountryService} from "../shared/services/country.service";
import {MatDialog} from "@angular/material/dialog";
import {CountryDetailsDialogComponent} from "./country-details-dialog/country-details-dialog.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countries: Country[] = [];

  // TODO: fetch data paginated
  private page = 1;
  private perPage = 10;

  dtOptions: any = {};
  loading = true;

  constructor(private countryService: CountryService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        'excel',
        'csv',
      ]
    };

    this.countryService.getCountries()
      .subscribe({
          next: res => {
            this.countries = res;
            this.loading = false;
          },
          error: err => { console.error(err);}
      });
  }

  onOpenDetails(country: Country) {
    this.dialog.open(CountryDetailsDialogComponent, {
      width: '400px',
      data: {...country},
    });
  }
}
