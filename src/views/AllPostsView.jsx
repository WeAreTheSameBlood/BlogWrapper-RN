import React, { useCallback, useEffect, useState } from "react";
import { 
    View, 
    Text,
    Image,
    StyleSheet, 
    TextInput, 
    Alert, 
    TouchableOpacity, 
    ImageBackground, 
    SafeAreaView,
    FlatList
} from "react-native"
import { HStack, Spacer, VStack } from "./auxiliary"
import { FactAboutDogView } from "./FactAboutDogView";

export const AllPostsView = () => {

    const [dogFacts, setDogFacts ] = useState([
        {id: 1, title: "Dogs are the most popular pet on the planet!", 
        text: "A third of ALL households around the world have a dog. These playful, friendly, loyal animals make great companions, but they can also be fierce and tough protectors, or intelligent helpers."},
        {id: 2, title: "They evolved from a now-extinct species of wolf.", 
        text: "Dogs were the first animal domesticated (tamed) by humans, over 20,000 years ago! As they evolved from wolves, their skulls, teeth and paws shrank, and they became more docile and obedient."},
        {id: 3, title: "They can learn over 100 words and gestures!", 
        text: "Dogs are thought to be as smart as two-year-old children (and much easier to train!), so many owners teach them commands and tricks."},
        {id: 4, title: "Dog noses are at least 40x more sensitive than ours!",
        text: "Many dogs are trained to work as guide dogs, helping blind people get around safely. Others are assistance dogs, who keep their owners calm and safe, while some brave hounds are search and rescue dogs, who help human rescuers save people from danger."},
        {id: 5, title: "They only sweat from their paws, and have to cool down by panting.",
        text: "The sweat is much oilier than humans’, and it contains lots of chemicals that only other dogs can detect. Weirdly, it also makes many dog paws smell of cheesy crisps!"},
        {id: 6, title: "They can be right or left-pawed!",
        text: "Like humans, most dogs have a dominant hand – or in their case, paw! To figure out which one it is, you can conduct a simple science experiment…\nWatch a dog moving from standing still to walking forwards. Do they start walking with their left leg, or their right? Watch several times, noting down the starting leg each time, and see if there’s a pattern. Many dogs will often lead with the same leg – their dominant one!"},
        {id: 7, title: "The Ancient Egyptians saw dogs as god-like!",
        text: "Ancient breeds like the Saluki lived in the lavish palaces of Egyptian royalty! The pampered pooches had their own servants, were decked out in jewelled collars, and ate only the finest meats."},
    ])

    const removeFact = id => {
        Alert.alert("Deleted gods fact",
        "Fact: \"" + dogFacts[id-1].title + "\"was deleted!")
        setDogFacts(prev => prev.filter(fact => fact.id !== id))
      }

    const keyExtractor = useCallback(
        (fact) => fact.id.toString(),
        []
        );

    const renderItem = useCallback(
        ({item}) => <FactAboutDogView fact={item} onRemove={removeFact}/>,
        []
    );

    return(
        <VStack>
            <HStack>
                <Text style={styles.textHeader}>Facts about dogs</Text>
                <Spacer/>
            </HStack>

            <FlatList
            // optimization param: getItemLayout , onEndReached , onEndReachedThreshold
            keyExtractor={keyExtractor}
            data={dogFacts}
            renderItem={renderItem}
            />
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