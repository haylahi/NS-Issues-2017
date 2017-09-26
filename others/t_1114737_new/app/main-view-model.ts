import { Observable } from 'data/observable';

export class HelloWorldModel extends Observable {

    private _isItemVisible: boolean;
    public items: Array<any>

    constructor() {
        super();

        this.items = [1, 1, 2, 3, 5, 8, 13, 21, 64];
    }

    get isItemVisible(): boolean {
        return this._isItemVisible;
    }

    set isItemVisible(value: boolean) {
        if (this._isItemVisible !== value) {
            this._isItemVisible = value;
            this.notifyPropertyChange('isItemVisible', value)
        }
    }

    public toggleVisibility() {
        this.isItemVisible = !this.isItemVisible;
    }
}