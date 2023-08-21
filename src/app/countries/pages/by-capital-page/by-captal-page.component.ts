import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-captal-page',
  templateUrl: './by-captal-page.component.html',
  styles: [
  ]
})
export class ByCaptalPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService ){}

  searchByCapital(term: string): void{

    this.countriesService.searchCapital(term)
      .subscribe(countries => {
        this.countries = countries;
      });

    console.log('Desde ByCapitalPage');
    console.log({term});
  }

}
