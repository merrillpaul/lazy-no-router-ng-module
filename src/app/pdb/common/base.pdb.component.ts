export abstract class BasePdbEntryComponent {

    private _question: any; // will be real class

    private _model: any; // will be real class

    private _battery: any; // will be real battery class

    public set battery(battery: any) {
        this._battery = battery;
    }

    public get battery() : any {
        return this._battery;
    }


    public set question(question: any) {
        this._question = question;
    }

    public get question() : any {
        return this._question;
    }

    public set model(model: any) {
        this._model = model;
    }

    public get model() : any {
        return this._model;
    }
}