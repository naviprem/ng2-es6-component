import { Component, OnInit } from "@angular/core";
import style from "./state-list.scss";
import template from "./state-list.html";
import { StateListService } from "./state-list.service.js";


export class StateListComponent {
    constructor (stateListService) {
        this.stateListService = stateListService;
    }

    static get parameters() {
        return [[StateListService]];
    }

    ngOnInit() {
        var that = this;
        this.stateListService.getStatesSlowly()
            .then((states) => { that.items = states; console.log(that.items);})
            .catch((err) => { console.error("error", err); });
    }

    //This add function is here to demonstrate Unit testing capabilities of this stack
    add(a, b) { return a + b;}
}

StateListComponent.annotations = [
    new Component({
        selector: 'state-list',
        template: template,
        styles: [ style ],
        providers: [ StateListService ]
    })
];
