import { Component, Input, OnInit } from "@angular/core";
import { CoreService } from "../services/core-service";

@Component({
    selector: 'app-core',
    template: `
        <h4> A core with {{name}} has been added -  {{greet}}</h4>
    `,
    styleUrls: [
        './core.component.scss'
    ]
})
export class CoreComponent implements OnInit {

        @Input() name;
        greet: string;
        constructor(private coreService: CoreService) {
            //this.name = this.coreService.greet(this.name);
        }

        ngOnInit() {
            this.greet = this.coreService.greet(this.name);
        }
        
}