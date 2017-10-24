import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DreamsFactory } from '../../factories/DreamFactory';
import { DreamAdd } from '../dreams/add/dreamAdd';

@Component({
    selector: 'dreams',
    templateUrl: 'dreams.html'
})
export class Dreams {
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

    createDream() {
        this.navCtrl.push(DreamAdd);
    }
}