class IOven {
    onOven():void;
    offOven():void;
    bake(item:string):void;
}

class GasOven implements  IOven{
private _isOn : boolean = false ;
    public onOven() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //insert fart humor here
        this._isOn = true;
    }

    public offOven() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    }


    /**
     *
     * @param item
     */
    public bake(item : string)
    {
        if(this._isOn) {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else
        {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!");//insert fart humor here
        }
    }

}

class ElectricOven implements IOven{
    private _isOn : boolean = false ;
    public onOven() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE POWER  IS ON!</p>";
        }, 3000);
        console.log("THE POWER IS ON!"); //insert fart humor here
        this._isOn = true;
    }

    public offOven() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" :  THE POWER OFF!</p><hr>";
        }, 5000);
        console.log("THE POWER IS OFF!"); //insert fart humor here
        this._isOn = false;
    }

    /**
     *
     * @param item
     */
    public bake(item : string)
    {
        if(this._isOn) {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else
        {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is power!</p>";
            }, 3000);
            console.log("there is no gas!");//insert fart humor here
        }
    }
}
// @ts-ignore
class Restaurant {

    private _name : string;
    private _oven : IOven;

    constructor(name : string, oven : IOven) {
        this._name = name;
        this._oven = oven;
    }

    public Cook(item : string) {
        this._oven.onOven();
        this._oven.bake(item);
        this._oven.offOven();
    }
}

/*

let bakery = new Restaurant("Bakery");
bakery.Cook("cookies");

//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
 */
// @ts-ignore
let bakery = new Restaurant("Bakery", new ElectricOven());
bakery.Cook("cookies");

// @ts-ignore
let crepery = new Restaurant("Crepery", new GasOven());
crepery.Cook("crepes");

