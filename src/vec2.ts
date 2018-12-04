
export default class{
  constructor(private _x:number, private _y:number){}

  get modulus():number{
    return Math.sqrt(this._x*this._x + this._y*this._y);
  }
}