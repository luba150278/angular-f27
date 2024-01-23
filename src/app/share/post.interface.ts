export interface IAuthor{
  id: number;
  email: string;
  username: string;
}

export interface IPost {
  id: number;
  title: string;
  body: string;
  description: string;
  tagList: string[];
  author: IAuthor;

}

export interface IPosts {
  articles: IPost[];
  articlesCount: number;
}
