import {IUserAuthFb} from "./IUserAuthFb";
import {IUserAuthGoogle} from "./IUSerAuthGoogle";
import {IUserAuthPass} from "./IUserAuthPass";

export class User implements IUserAuthFb,IUserAuthGoogle,IUserAuthPass {
    private _password : string = 'user';
    private _facebookToken : string | undefined;
    private _googleToken : string | undefined;

    //Interesting detail here: while I did not define a return type or param type, any deviation from the interface will give you an error.
    // Test it out by uncommenting the code below.
    checkGoogleLogin(token : string) {
        // return "this will not work";
        return (token === this._googleToken);
    }

    setGoogleToken(token : string) {
        this._googleToken = token;
    }

    getFacebookLogin(token: string) {
        return (token === this._facebookToken);
    }

    setFacebookToken(token : string) {
        this._facebookToken = token;
    }

    checkPassword(password: string) : boolean {
        return (password === this._password);
    }

    resetPassword() :void {
        // @ts-ignore
        this._password = prompt('What is your new password?');
    }
}
