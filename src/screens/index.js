import {Navigation} from 'react-native-navigation';


import TopicsList from './TopicsList';
import PostsList from './PostsList';


export function registerScreens(store) {
    Navigation.registerComponent('TopicsList', () => TopicsList);
    Navigation.registerComponent('PostsList', () => PostsList);
}