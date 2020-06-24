import { Component, OnInit, Input } from '@angular/core';
import Category from 'src/app/models/category.model';

@Component({
  selector: 'app-category-header',
  templateUrl: './category-header.component.html',
  styleUrls: ['./category-header.component.scss']
})
export class CategoryHeaderComponent implements OnInit {

  constructor() { }

  @Input() category: Category;

  ngOnInit(): void {

  }

}
