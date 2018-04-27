import { BasePdbEntryComponent } from "./base.pdb.component";
import { Type } from "@angular/core";

export abstract class BasePdbModule {
    abstract getPdbEntryComponent() : Type<BasePdbEntryComponent>;
}