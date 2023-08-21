import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
  ) { }

  //El params es un observable razon por la cual me subscribo

    ngOnInit(): void {
      this.activatedRoute.params
        .pipe(
          switchMap(({ id }) => this.countriesService.searchCountryById(id)),
        )
        .subscribe(country => {
          if (!country) return this.router.navigateByUrl('');
          return this.country = country;
        });
    }


  // ngOnInit(): void {
  //    this.activatedRoute.params
  //      .subscribe(({ id }) => {
  //        this.countriesService.searchCountryById(id)
  //          .subscribe(country => {
  //          console.log({country});
  //        })

  //       console.log({ params: id });

  //      })

    // this.activatedRoute.params
    //   .subscribe((params) => {
    //   console.log({params: params['id']});
    // })

  // }

}
