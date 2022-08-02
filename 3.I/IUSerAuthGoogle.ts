export interface IUserAuthGoogle {
    setGoogleToken(token : string):void;
    checkGoogleLogin(token : string) : boolean;
}