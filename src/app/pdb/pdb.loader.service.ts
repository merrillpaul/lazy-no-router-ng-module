import { Injectable, SystemJsNgModuleLoader, Injector, ViewContainerRef, NgModuleFactory, NgModuleRef, ComponentRef } from "@angular/core";
import { FirstPdbModule } from "./first/first.module";
import { BasePdbEntryComponent } from "./common/base.pdb.component";

const pdbModulePathResolver = (pdb) => {
    return `./${pdb}/${pdb}.module#${pdb.charAt(0).toUpperCase()}${pdb.substr(1)}PdbModule`;
};

@Injectable()
export class PdbLoaderService {
    constructor(private loader: SystemJsNgModuleLoader, private injector: Injector) {}

    public async loadIntoContainer(container: ViewContainerRef, pdb: string): Promise<BasePdbEntryComponent> {
        const modulePath = pdbModulePathResolver(pdb);
        const moduleFactory: NgModuleFactory<any> = await this.loader.load(modulePath);
        const moduleRef: NgModuleRef<any> = moduleFactory.create(this.injector);
        const module: FirstPdbModule = moduleRef.instance;
        const entryComponent = module.getPdbEntryComponent();
        const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);

        container.clear();
        const componentRef: ComponentRef<BasePdbEntryComponent> =container.createComponent(compFactory);
        return componentRef.instance;
    }
}