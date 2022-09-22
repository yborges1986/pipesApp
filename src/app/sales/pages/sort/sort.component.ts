import { Component, OnInit } from '@angular/core';
import { Colors, Hero } from '../../interfaces/sales.interface';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css'],
})
export class SortComponent implements OnInit {
  sortBy: string = '';
  inUpperCase: boolean = true;
  heroes: Hero[] = [
    { name: 'superman', fly: true, color: Colors.azul },
    { name: 'batman', fly: false, color: Colors.negro },
    { name: 'green lantern', fly: true, color: Colors.verde },
    { name: 'daredevils', fly: false, color: Colors.rojo },
  ];
  constructor() {}

  ngOnInit(): void {}

  changeCase() {
    this.inUpperCase = !this.inUpperCase;
  }
  changeSort(sortField: string) {
    this.sortBy = sortField;
  }
}
