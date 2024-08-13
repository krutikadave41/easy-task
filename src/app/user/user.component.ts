import { NgFor } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CardComponent } from '../shared/card/card.component';

import { User} from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgFor, CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input()
  user!: User;

  @Input({required: true})
  selected!: boolean;

  @Output()
  select = new EventEmitter();

  // select = output<string>();
  get imagePath() {
    return 'assets/' + this.user.avatar;
  }

  onSelectUser() {
    console.log('Clicked emitted!');
    this.select.emit(this.user.id);
  }
}
