//current post interface
export interface ICurrentPost {
    title: string,
    image: string,
    description: string
}
//country news interface
export interface ICountryNews {
    source: {
        id: null|string;
        name: string;
        country: string;
    };
    author: null;
    category: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

//Component Props Interface
export interface IComponentProps {
    newsObject: ICountryNews[],
    getCurrentPost?: any,
    postRouter?: any,
    currentPost?: ICurrentPost,
    route?: string,
    handleTabChange?: any,
    filterNewsByCountry?: any,
    country?: string
}