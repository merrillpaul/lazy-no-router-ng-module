import { Injectable } from "@angular/core";

@Injectable()
export class CoreService {
    public greet(name: string) {
        return `Hello ${name}`;
    }
}