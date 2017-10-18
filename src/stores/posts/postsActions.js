import * as store from './postsStore';
import * as redditService from '../../services/reddit';


export function setLoading(isLoading) {
    store.setters.setLoading(isLoading);
}

export async function fetchPosts(topicUrl) {
    console.log("fetch posts action")
    setLoading(true);
    const posts = await redditService.getPosts(topicUrl);
    console.log("posts", posts);
    store.setters.setPosts(posts);
    setLoading(false);
}
