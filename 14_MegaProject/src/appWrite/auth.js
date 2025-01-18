import config from "./config";
import {Client, Account , ID} from "appwrite";

export class AuthService {
    Client = new Client();
    account;

    constructor() {
        this.Client
            .setEndpoint(config.appwriteEndpoint)
            .setProject(config.appwriteProjectId)
            this.account = new Account(this.Client);
    }

    async CreateAccount({email,password,name}) {
        

            const userAccount = await this.account.create( ID.unique, email, password, name)

            if(userAccount) {
                return this.Login({email,password});


            }
            else{
                return userAccount;
            }
            
        
        
    }

    async Login({email,password}) {
        return await this.account.createEmailSession(email,password);
    }
}


const authService = new AuthService();

export default authService

 