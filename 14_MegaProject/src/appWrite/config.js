import config from "./config";
import {Client, Database , ID, Query, Storage} from "appwrite";

export class Service{
    client = new Client();
    database;
    bucket;
    constructor() {
        this.client
            .setEndpoint(config.appwriteEndpoint)
            .setProject(config.appwriteProjectId);
        this.database = new Database(this.client);
        this.bucket = new Storage(this.client);
    }


    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.database.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
            
        } catch (error) {
            console.log(error);
        }
    }


    async updatePost(slug, {title, content, featuredImage, status}){
        return await this.database.updateDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status
            }
        );

    }
    catch (error) {
                console.log(error);
            }



            async deletePost(slug){ 
                try {
                     await this.database.deleteDocument(
                        config.appwriteDatabaseId,
                        config.appwriteCollectionId,
                        slug
                    
                    )
                    return true
                    
                } catch (error) {
                    console.log(error);
                    return false
                }
            }

            async getPost(slug){
                try {
                    return await this.database.getDocument(
                        config.appwriteDatabaseId,
                        config.appwriteCollectionId,
                        slug
                    )
                } catch (error) {
                    console.log(error);
                    return false
                }
    

    }

    async getPosts(queries = [Query.equal('status', 'active')]) {
        try{
            return await this.database.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )


        }
        catch (error) {
            console.log(error);
            return false
        }
    }
}


const service = new Service();

export default Service;