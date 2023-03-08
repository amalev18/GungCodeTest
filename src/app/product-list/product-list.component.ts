import { Component, Input, NgModule, OnInit } from '@angular/core';

import { NewProduct, ProductService } from '../product.service';
import {Category, CategoryService} from '../category.service';
import { FilterByPipe } from '../Pipes/filter.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private service: CategoryService){}
  
  
  categories: Category[] = [];
  productNames: string[] =[];
  
  getCategories(): void{
  }
  ngOnInit(): void{
    this.service.getCategories().subscribe(categories => {
      categories.children.forEach(category => {
        category.children.forEach(subcategory => {
          subcategory.children.forEach(product => {
            if(!product.id.startsWith('s')){
              this.productNames.push(product.name)
            }
          })
        })
      })
    }

    );
  }
 
  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/