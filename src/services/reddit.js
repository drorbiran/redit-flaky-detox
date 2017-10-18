import _ from 'lodash';

export async function getTopics() {
    const url = "https://www.reddit.com/subreddits/default.json"

    const subredditsRes = await fetch(url);
    const subredditsData = await subredditsRes.json();
    const subreddits = _.get(subredditsData,'data.children');
    const topics = _parseTopics(subreddits);
    return topics
}

export async function getPosts(topicUrl) {
    const url = `https://www.reddit.com${topicUrl}hot.json`;
    const res = await fetch(url);
    const data = await res.json();
    const postsAllData = _.get(data,'data.children');
    const posts = _parsePosts(postsAllData);
    return posts;
}

function _parseTopics(subreddits) {
    return subreddits.map((subreddit) => {
        return {
            display_name: subreddit.data.display_name,
            url: subreddit.data.url
        }
    });
}

function _parsePosts(postsAllData){
    return postsAllData.map(({data}) => {
        return {
            title: data.title,
            url: data.url
        }
    })
}