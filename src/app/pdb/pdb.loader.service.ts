import { Injectable, SystemJsNgModuleLoader, Injector, ViewContainerRef, NgModuleFactory, NgModuleRef, ComponentRef } from "@angular/core";
import { FirstPdbModule } from "./first/first.module";

@Injectable()
export class PdbLoaderService {
    constructor(private loader: SystemJsNgModuleLoader, private injector: Injector) {}

    public async loadIntoContainer(container: ViewContainerRef, pdb: string) {
        const modulePath = `./${pdb}/${pdb}.module#FirstPdbModule`;
        const moduleFactory: NgModuleFactory<any> = await this.loader.load(modulePath);
        const moduleRef: NgModuleRef<any> = moduleFactory.create(this.injector);
        const module: FirstPdbModule = moduleRef.instance;
        const entryComponent = module.getRootPdbComponent();
        const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);

        container.clear();
        const componentRef: ComponentRef<{}> =container.createComponent(compFactory);
        debugger;
        return componentRef.instance;
    }
}