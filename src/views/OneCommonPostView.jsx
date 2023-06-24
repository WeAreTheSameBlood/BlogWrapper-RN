import React, { useCallback, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"
import { HStack, Spacer, VStack } from "./auxiliary"

export const OneCommonPostView = ({post, onRemove}) => {

    const [onTapPost, setOnTapPost] = useState(false);


    const press = () => {
        setOnTapPost(!onTapPost)
      }

    return(
        <TouchableOpacity 
        activeOpacity={2/3}
        onPress={press}
        onLongPress={() => onRemove(post._id)}
        >
        <VStack>
            <View style={styles.factView}>
                {onTapPost ? (
                    <View>
                        <Text style={styles.titleText}>{post.title} </Text>
                        <Text style={styles.factText}>{post.description}</Text>

                        {post.image &&
                            <View style={[{alignItems: 'center', justifyContent: 'center'}]}>
                                <Image 
                                style={[{width: '100%',
                                    height: 150,
                                    resizeMode: 'center'}]}
                                source={{uri: 'https://disgustingmen.com/wp-content/uploads/2019/11/cage-best-movies-3.jpg'}}/>
                            </View>
                        }
                        <Text>Posted by: {post.postedBy}</Text>
                            <HStack>
                                <Text>Date created: {post.dateCreated.toString().split('T')[0]}</Text>
                                <Spacer/>
                                <Text>Likes: {post.likes.length}</Text>
                                {/* <Text>Date created: {post.dateCreated.toString().split('T')[0]}</Text> */}
                            </HStack>
                        </View>
                ) : (
                    <View>
                        <Text style={styles.titleText}>{post.title} </Text>
                        <Text style={styles.factText}>{post.description}</Text>
                    </View>
                )}
            </View>
        </VStack>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    factView: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 10,
        margin: 5,
        backgroundColor: 'white',
        opacity: 4/5
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    factText: {
        fontSize: 16
    }
})