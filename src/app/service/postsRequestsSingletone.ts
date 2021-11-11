import axios from "axios";
class PostRequests {
    private static instance: PostRequests;

    private constructor() { }

    public static getInstance(): PostRequests {
        if (!PostRequests.instance) {
            PostRequests.instance = new PostRequests();
        }
        return PostRequests.instance;
    }
    
    addNewPost(title:string, body:string,parent:string){
        const datas ={
            title: title,
            body: body,
            parent: parent
          }
        axios.post('https://starforum.herokuapp.com/api/v1/posts', datas)
    }

    async getPosts (){
        const response= await axios.get('https://starforum.herokuapp.com/api/v1/posts')
        console.log(response.data)
        return response.data
    }

    async getPostByID(id:string){
        const response =await axios.get(`https://starforum.herokuapp.com/api/v1/posts/${id}`)
        console.log(response.data)
        return response.data
    }

    async getPostsNumber(){
        const response= await axios.get('https://starforum.herokuapp.com/api/v1/posts-number')
        console.log(response.data)
        return response.data
    }

    upvotePost(id:string){
        axios.post(`https://starforum.herokuapp.com/api/v1/posts/${id}/upvote`)
        return 
    }

    downvotePost(id:string){
        axios.post(`https://starforum.herokuapp.com/api/v1/posts/${id}/downvote`)
        return 
    }
    
    removeReaction(id:string){
        axios.post(`https://starforum.herokuapp.com/api/v1/posts/${id}/remove-reaction`)
        return 
    }
}
const postsRequest = PostRequests.getInstance()
 export default postsRequest