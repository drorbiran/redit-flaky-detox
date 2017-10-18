import React, { PureComponent } from 'react'
import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import { connect } from 'remx';

import * as store from '../stores/topics/topicsStore';
import * as actions from '../stores/topics/topicsActions';

class TopicsList extends PureComponent {

    componentDidMount(){
        actions.fetchTopics();
    }

    showPostsScreen = (selectedTopicUrl) => {
        this.props.navigator.push({
            screen: 'PostsList',
            title: 'Posts',
            passProps: {selectedTopicUrl}
        })
    };

    _keyExtractor = (item, index) => item.url;

    _showPosts({url}) {
        console.log(`${url} was pressed`);
        this.showPostsScreen(url);
    };

    _renderItem = ({item, index}) => {
        console.log("index", index);
        return (
            <TouchableOpacity
                testID={`category${index}`}
                onPress={this._showPosts.bind(this, item)}>
                <Text>
                    {item.display_name}
                </Text>
            </TouchableOpacity>
        )
    };

    renderLoader() {
        if (this.props.isLoading) {
            return <Text testID="loader">loading</Text>
        }
    }

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

    renderList= () => {
        if(!this.props.isLoading)
        return (
            <FlatList
            data={this.props.topics}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            ItemSeparatorComponent={this.renderSeparator}
        />
        );
    }

    render() {
        return (
            <View testID='categoryList'>
                {this.renderLoader()}
                {this.renderList()}
            </View>
        );
    }
}

function mapStateToProps() {
    return {
        isLoading: store.getters.isLoading(),
        topics: store.getters.getTopics()
};
}

export default connect(mapStateToProps)(TopicsList);