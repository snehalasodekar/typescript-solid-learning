
export interface IUserAuthFb {
    setFacebookToken(token : string):void;
    getFacebookLogin(token : string) : boolean;
}