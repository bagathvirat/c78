import React, {Component} from 'react'
import {
 View,
 Text,
 TextInput,
 KeyboardAvoidingView,
 StyleSheet,
 TouchableOpacity,
 Alert} 
from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from  '../components/MyHeader'
export default class BookRequestScreen extends Component{
    construct(){
     super();
     this.state = {
         userId:firebase.auth().currentuser.email,
         bookName:"",
         reasonToRequest:""
         
     }   
    }
    createUniqueId(){
     return Math.random().toString(36).substring 

    }
   addRequest =  (bookName,reasonToRequest)=>{
       var userId = this.state.userId
       var randomRequestId = this.createUniqueId()
       db.collection('requsted_books').add({
           user_id
       })
   }

}


