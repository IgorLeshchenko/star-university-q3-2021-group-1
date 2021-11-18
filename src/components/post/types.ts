export interface IPost {
  author: string;
  body: string;
  children: IPost[];
  date: string;
  level: number;
  parent: string;
  title: string;
  upvotes: number;
  __v?: number;
  _id: string;
}

export interface StatePosts {
  posts: {
    posts: [];
  };
}

export interface Fetch {
  fetching: {
    fetching: boolean;
  };
}
