import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DreamsFactory } from '../../../factories/DreamFactory';


@Component({
    selector: 'dream-add',
    templateUrl: 'dream_add.html'
})
export class DreamAdd {
    menuOption: string = 'configuraciones';
    dreams: any;
    private loadProgress: Number = 100;
    constructor(public navCtrl: NavController, public dreamFactory: DreamsFactory) { }

    getColorByTransaction() {
        return this.menuOption;
    }

    ionViewDidLoad() {
        this.dreams = this.dreamFactory.getDreams();
        console.log("se cargan los sueños");
        console.log(this.dreams);
    }
}