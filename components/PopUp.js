import React from 'react'
import { Button, Modal, View, Text, StyleSheet, Vibration } from 'react-native'
import Iconmodel from 'react-native-vector-icons/Ionicons'
import { Audio } from 'expo-av'

const PopUp = ({visible, setVisible}) => {
    
    const [sound, setSound] = React.useState();
    async function PlaySound() {
        
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/mixkit-musical-alert-notification-2309.wav')
        );
        setSound(sound);

        await sound.playAsync();
    }
    return (
        <Modal transparent visible= {visible}>
            <View style = {styles.wrap}>
                <View style = {styles.notif}>
                    <View style = {styles.iconmodel}>
                        <Iconmodel name = "close" 
                        size = {25} 
                        color = "#000" 
                        style = {styles.icon}
                        onPress = {() => setVisible(false)} />
                    </View>
                    <Text style={styles.notifText}>Notification</Text>
                    <View style={styles.quest}>
                        <Text style={styles.questText}> What do you want to do?</Text>
                        <View style={styles.button}>
                            <Button title='Ringtone' color = "#71a832" onPress = {() => PlaySound()}/>
                            <Button title='Vibrate' color = "#71a832" onPress = {() => Vibration.vibrate()} />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'rgba(0,0,0,0.2)'
    },
    notif: {
        width: '80%',
        backgroundColor: '#FFF',
        alignItems: 'center',  
    },
    notifText: {
        fontSize: 20,
        fontWeight:'bold',
        marginTop: 0,
        marginBottom: 8,
    },
    quest: {
        width: '100%',
        alignItems: 'center',
    },
    questText: {
        fontSize: 13,
        color: '#6B6B6B',
        textAlign: 'center',
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width:'80%',
        marginTop: 25,
        marginBottom: 20,
    },
    iconmodel:{
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    icon:{
        margin: 10, 
    }
});

export default PopUp
