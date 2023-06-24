import React, { useCallback, useEffect, useState } from "react";
import { 
    View, 
    Text,
    StyleSheet, 
    Alert, 
    FlatList,
    ActivityIndicator,
    RefreshControl
} from "react-native"
import { HStack, Spacer, VStack } from "./auxiliary"
import { OneCommonPostView } from "./OneCommonPostView";
import { getAllPosts } from "../services/ApiManager";

const postsModel = {
    pagination: {
        skip: 0,
        limit: 0,
        total: 0
    },
    data: []
  }

export const AllPostsView = () => {

    const [posts, setPosts] = useState(postsModel);
    const [isLoading, setIsLoading] = useState(true);

     const fetchData = async () => {
        setPosts( await getAllPosts())
    }


    useEffect( () => {
        setIsLoading(true);
        fetchData();
        setIsLoading(false);
    // console.log('Posts: ' + posts.data);

    }, [])

    const removeFact = id => {

        Alert.alert("Deleted post?",
        "Post was deleted!")
        // setDogFacts(prev => prev.filter(fact => fact.id !== id))
      }

    const keyExtractor = useCallback(
        (post) => post._id.toString(),
        []
        );

    const renderItem = useCallback(
        ({item}) => <OneCommonPostView post={item} onRemove={removeFact}/>,
        []
    );

    if (isLoading) {
        return (
            <View style={{flex:1, alignContent: 'center', justifyContent: 'center'}}>
                <ActivityIndicator size='large'/>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 18,
                    color: 'white'
                    }}>Loading posts...</Text>
            </View>
        )
    }

    return(
        <VStack>
            <HStack>
                <Text style={styles.textHeader}>Posts of society</Text>
                <Spacer/>
            </HStack>

                {posts && (
                    <FlatList
                    // optimization param: getItemLayout , onEndReached , onEndReachedThreshold
                    refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchData}/>}
                    keyExtractor={keyExtractor}
                    data={posts.data}
                    renderItem={renderItem}
                    />
                )}
        </VStack>
    )
}

const styles = StyleSheet.create({
    textHeader: {
        textAlign: 'left',
        padding: 5,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        paddingVertical: 10
    }, 
  });