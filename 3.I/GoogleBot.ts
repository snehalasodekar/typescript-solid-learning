import {IUserAuthGoogle} from "./IUSerAuthGoogle";

export class GoogleBot implements IUserAuthGoogle{

    private _googleToken : string | undefined;

    checkGoogleLogin(token : any) {
        // return "this will not work";
        return (token === this._googleToken);
    }

    setGoogleToken(token : string) {
        this._googleToken = token;
    }

}