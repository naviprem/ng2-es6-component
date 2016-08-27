
import { NgModule } from "@angular/core";
import { CommonModule }        from '@angular/common';
import { StateListComponent } from "./state-list.component.js";

export class StateListModule {
        constructor() {}
    }

StateListModule.annotations = [
    new NgModule({
        imports: [ CommonModule ],
        declarations: [ StateListComponent ],
        exports: [ StateListComponent ]
    })
];


