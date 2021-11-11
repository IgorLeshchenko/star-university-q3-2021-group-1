import axios from "axios";
class UserRequests {
    private static instance: UserRequests;

    private constructor() { }

    public static getInstance(): UserRequests {
        if (!UserRequests.instance) {
            UserRequests.instance = new UserRequests();
        }
        return UserRequests.instance;
    }
    
    async addUser(name:string, pass:string){

        const data={
            username:name,
            password:pass
        }
     
       await axios.post('https://starforum.herokuapp.com/api/v1/users', data)
    }

    loginUser(name:string, pass:string){
        const data={
            username:name,
            password:pass
        }
        axios.post('https://starforum.herokuapp.com/api/v1/login',data)
    }

    async getToken(username:string){
        const config:any ={
            crossDomain: true,
            xhrFields: {
                withCredentials: true
              }
        }
        const response =await axios.get(`https://starforum.herokuapp.com/api/v1/token/${username}`,config)
        console.log(response)
        return response
    }

    logoutUser (){
        axios.delete('https://starforum.herokuapp.com/api/v1/logout')
    }

    async getUserByUsernameReaction(username:string){
        const response =await axios.get(`https://starforum.herokuapp.com/api/v1/users/${username}/reactions`)
        console.log(response.data)
        return response.data
    }

    async getUserByUsername(username:string){
        const response =await axios.get(`https://starforum.herokuapp.com/api/v1/users/${username}`)
        console.log(response.data)
        return response.data
    }

    addUserIcon(){

    }
    
    async getUserIcon(username:string){
        const response =await axios.get(`https://starforum.herokuapp.com/api/v1/users/${username}/icon`)
        console.log(response)
        return response.data
    }
}
const userRequest = UserRequests.getInstance()
 export default userRequest