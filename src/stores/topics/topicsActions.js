import * as store from './topicsStore';
import * as redditService from '../../services/reddit';


export function setLoading(isLoading) {
    store.setters.setLoading(isLoading);
}

export async function fetchTopics() {
    setLoading(true);
    console.log("fetch topics action")
    const topics = await redditService.getTopics();
    console.log("topics", topics);
    store.setters.setTopics(topics);
    setLoading(false);
}
