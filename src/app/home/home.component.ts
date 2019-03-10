import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
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
  public selectedCharacter$: BehaviorSubject<Character>;
  public characterList: Character[] = characterList;

  constructor() {
    this.selectedCharacter$ = new BehaviorSubject<Character>(this.characterList[0]);
  }

  ngOnInit() {
  }

  public selectCharacter(selectedIndex: number): void {
    if (selectedIndex >= 0 && selectedIndex < this.characterList.length) {
      this.selectedCharacter$.next(this.characterList[selectedIndex]);
    }
  }
}
