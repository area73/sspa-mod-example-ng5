import {Component} from '@angular/core';
import {fadeAnimation} from './_animations/fade.animation'

@Component({
    selector: 'example-ng5-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [fadeAnimation]
})
export class AppComponent {
    title = 'app';

    getRouterOutletState(outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }

}
