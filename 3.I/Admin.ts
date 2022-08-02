import {IUserAuthPass} from "./IUserAuthPass";

//admin cannot use google or facebook token
export class Admin implements IUserAuthPass {
    private _password : string = 'admin';
    checkPassword(password: string): boolean {
        return (password === this._password);
    }
    resetPassword() {
        // @ts-ignore
        this._password = prompt('What is your new password?');
    }
}
