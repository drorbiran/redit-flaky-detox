import React, { PureComponent } from 'react'
import {Text,View,FlatList,TouchableOpacity} from 'react-native';
import { connect } from 'remx';

import * as store from '../stores/posts/postsStore';
import * as actions from '../stores/posts/postsActions';


class PostsList extends PureComponent {

    componentDidMount(){
        actions.fetchPosts(this.props.selectedTopicUrl);
    }

    _keyExtractor = (item, index) => item.url;

    renderLoader() {
        if (this.props.isLoading) {
            return <Text>loading</Text>
        }
    }

    _renderItem = ({item, index}) => (
        <TouchableOpacity
            testID={`post${index}`}>
            <Text>{item.title}</Text>
        </TouchableOpacity>
    );

    renderSeparator = () => {
        return (
            <View
                style={{
                      height: 1,
                      width: "100%",
                      backgroundColor: "#CED0CE",
                    }}
            />
        );
    };

    render() {
        return (
            <View>
                {this.renderLoader()}
                <FlatList
                    testID="postList"
                    data={this.props.posts}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: store.getters.getPosts()
    };
}

export default connect(mapStateToProps)(PostsList);