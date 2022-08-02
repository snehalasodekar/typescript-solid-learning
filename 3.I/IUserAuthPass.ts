/**
 * create an interface which only has password methods
 */
export interface IUserAuthPass {
    checkPassword(password: string): boolean;
    resetPassword(): void;
}