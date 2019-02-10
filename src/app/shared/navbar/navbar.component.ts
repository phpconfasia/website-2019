import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {first} from 'rxjs/operators';
import {NavbarUrl} from './navbar-url';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  public burgerOpened$: BehaviorSubject<boolean>;
  public navbarUrls: NavbarUrl[];

  constructor() {
    this.burgerOpened$ = new BehaviorSubject<boolean>(false);

    this.navbarUrls = [
      {
        name: 'Home',
        url: '/'
      }
    ];
  }

  ngOnInit() {
  }

  public toggleBurger(): void {
    this.burgerOpened$
      .pipe(first())
      .subscribe((isBurgerOpen: boolean) => {
        if (isBurgerOpen) {
          this.closeBurger();
        } else {
          this.openBurger();
        }
      });
  }

  private openBurger(): void {
    this.burgerOpened$.next(true);
  }

  private closeBurger(): void {
    this.burgerOpened$.next(false);
  }
}
