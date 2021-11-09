import axios from "axios";

class Requests {
    
   async getPosts (){
       const response= await axios.get('https://starforum.herokuapp.com/api/v1/posts')
       console.log(response.data)
    //    const idArr:string[]=[] 
    //   for (const item of response.data) {
    //        idArr.push(item._id)
    //    }
    //    console.log (idArr) 
       return response.data
    }

    // addNewPost(title:string, body:string,parent:string){
    //     axios.post('https://starforum.herokuapp.com/api/v1/posts', {title,body,parent})
    // }

    async getPostByID(id:string){
        const response =await axios.get(`https://starforum.herokuapp.com/api/v1/posts/${id}`)
        console.log(response.data)
        return response.data
    }

    async getPostsNumber(){
        const response= await axios.get('https://starforum.herokuapp.com/api/v1/posts-number')
        console.log(response.data)
    }

    addUser(name:string, pass:string){//WRONG FORMAT
        const body={
            username:name,
            password:pass
        }
     
        axios.post('https://starforum.herokuapp.com/api/v1/users',body)
    }

    async getToken(){//401 ERR 
        const response =await axios.get(`https://starforum.herokuapp.com/api/v1/token`)
        console.log(response)
        return response
    }

    async getUserByUsername(username:string){
        const response =await axios.get(`https://starforum.herokuapp.com/api/v1/users/${username}`)
        console.log(response.data)
        return response.data
    }

    async getUserByUsernameReaction(username:string){
        const response =await axios.get(`https://starforum.herokuapp.com/api/v1/users/${username}/reactions`)
        console.log(response.data)
        return response.data
    }

    async getUserIconByUsername(username:string){
        const response =await axios.get(`https://starforum.herokuapp.com/api/v1/users/${username}/icon`)
        console.log(response.data)
        return response.data
    }
    

}
export default Requests