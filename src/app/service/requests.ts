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

    addNewPost(title:string, body:string,parent:string){
        const header ={
            title: title,
            body: body,
            parent: parent
          }
        axios.post('https://starforum.herokuapp.com/api/v1/posts', header)
    }

    async getPostByID(id:string){
        const response =await axios.get(`https://starforum.herokuapp.com/api/v1/posts/${id}`)
        console.log(response.data)
        return response.data
    }

    async getPostsNumber(){
        const response= await axios.get('https://starforum.herokuapp.com/api/v1/posts-number')
        console.log(response.data)
    }

   async addUser(name:string, pass:string){// Ошибка 400 - пользователь уже существует, из-за двойного запроса

        const params={}
        const data={
            username:name,
            password:pass
        }
     
       await axios.post('https://starforum.herokuapp.com/api/v1/users', data, params)
    }

    async getToken(username:string){//Ошибка 401 - неавторизирован либо обект, не уверен является ли он нужным нам токеном
        const response =await axios.get(`https://starforum.herokuapp.com/api/v1/token/${username}`)
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

    loginUser(name:string, pass:string){// Похоже работает, но вывести статус пользователя в консоль не получилось
        const data={
            username:name,
            password:pass
        }
        axios.post('https://starforum.herokuapp.com/api/v1/login',data)
    }
    
}
export default Requests