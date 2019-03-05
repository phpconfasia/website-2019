import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Character} from './character';
import {characterList} from './character-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public chosenCharacter$: BehaviorSubject<Character>;

  constructor() {
    this.chosenCharacter$ = new BehaviorSubject<Character>(characterList[0]);
  }

  ngOnInit() {
  }

  public selectCharacter(selectedIndex: number): void {
    if(selectedIndex >= 0 && selectedIndex < characterList.length) {
      this.chosenCharacter$.next(characterList[selectedIndex]);
    }
  }
}
