import React, { useState } from 'react'
import { TouchableOpacity, View, Image, StyleSheet, Text } from 'react-native'
import PopUp from './PopUp'

const HomePage = () => {
    const [visible, setVisible] = useState(false)

    const handleClick = () => {
        setVisible(true)
    }

    return (
        <View style={styles.container}>
            <PopUp visible = {visible} setVisible = {setVisible}/>
            <Image source = {require("../assets/bell-icon.jpg")} style = {styles.img} />
            <TouchableOpacity style = {styles.button} onPress={handleClick}>
                <Text style = {styles.hintText}>Click Here</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 280,
        marginTop: 15,
        height: 250,
        marginBottom: 15,
    },
    button: {
        width: 180,
        height: 50,
        backgroundColor: '#71a832',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
 
    },
    hintText: {
        color : '#FFF',
        fontSize: 15,
    },
    container: {
        width :'100%',
        alignItems: 'center',
        display: 'flex',
    }
})
export default HomePage