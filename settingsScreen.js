import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import {myHeader} from '../components/MyHeader'
import { SnapshotViewIOS } from 'react-native';

export default class SettingScreen extends Component{
    constructor(){
        super()
        this.state={
            emailId:'',
            firstName:'',
            lastName:'',
            contactNumber:'',
            address:'',
            docId:'',
        }
    }
    getUserDetails=()=>{
        var email=firebase.auth().currentUser.email
        db.collection('users')
        .where("email_Id"==email).get().then(Snapshot=>{
            var data=doc.data()
            this.setState({
                emailId:data.emailId,
                firstName:data.firstName,
                lastName:data.lastName,
                contactNumber:data.contactNumer,
                address:data.address,
                docId:data.docId,
            })
        })
    }
    componentDidMount(){
        this.getUserDetails()
    }
    updateUserDetails=()=>{
        db.collection('users').doc(this.state.docId).update({
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            contactNumber:this.state.contactNumber,
            address: this.state.address
        })
        Alert.alert('Successfully Updated!🙂')
    }
render(){
    return(
        <View style={styles.container}>
                <myHeader title="Settings"
                    navigation={this.props.navigation}/>
                    <TextInput>
                    <View style={styles.Input}>
                        Placeholder={"First Name"}
                        maxLength={15}
                        onChangeText={(text)=>{
                            this.setState({
                                firstName: text
                            })
                        }}
                    </View>
                    Value={this.state.firstName}
                    </TextInput>
                    <TextInput>
                    <View style={styles.Input}>
                        Placeholder={"Last Name"}
                        maxLength={15}
                        onChangeText={(text)=>{
                            this.setState({
                                lastName: text
                            })
                        }}
                    </View>
                    Value={this.state.lastName}
                    </TextInput>
                    <TextInput>
                    <View style={styles.Input}>
                        Placeholder={"Contact Number"}
                        maxLength={11}
                        onChangeText={(text)=>{
                            this.setState({
                                contactNumber: text
                            })
                        }}
                    </View>
                    Value={this.state.contactNumber}
                    </TextInput>
                    <TextInput>
                    <View style={styles.Input}>
                        Placeholder={"Address"}
                        multiline={true}
                        onChangeText={(text)=>{
                            this.setState({
                                address: text
                            })
                        }}
                    </View>
                    Value={this.state.address}
                    </TextInput>

                    <TouchableOpacity style={styles.button} onPress={()=>{
                        this.updateUserDetails()
                    }}>
                        <Text>Save</Text>
                    </TouchableOpacity>
            <Text>
                Settings
            </Text>
        </View>
    )
}
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    Input:{
        width:"75%",
        height:40,
        borderWidth:4,
        borderRadius:6,
        borderColor:"black",
        marginTop:30,
        padding:10,
        alignSelf:'center'
    },
    button:{
        width:"75%",
        height:40,
        borderWidth:4,
        borderRadius:6,
        borderColor:"black",
        backgroundColor:"lightgreen",
        marginTop:30,
        padding:10,
        alignSelf:'center'
    }
})