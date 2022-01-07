import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
      padding: 30,
      paddingTop:40,
      flex: 1,
      backgroundColor: '#382C30'
    },
    centerModal:{
      justifyContent: 'center',
      alignItems:'center',
      flex:1,
      backgroundColor:'rgba(52, 52, 52, 0.8)'
    },
    modalContainer:{
      backgroundColor:'white',
      alignContent:'center',
      height: 300,
      overflow:'hidden',
      width:'80%',
      borderRadius:20
    },
    modalImage:{
      backgroundColor: '#6D803A',
      flex: 0.4,
      overflow:'hidden'
    },
    bgImage:{
      flex: 1,
      justifyContent:'center',
      height:300,
      width:'100%'
    },
    modalContent:{
      padding: 15,
      paddingLeft:30,
      paddingRight:30,
      flex:0.6,
      justifyContent:'space-around'
    },
    modalHeader:{
      color: '#382C30',
      fontSize: 25,
      fontFamily: "Poppins-SemiBold"
    },
    modalText:{
      color: '#382C30',
      fontSize: 12,
      fontFamily: "Poppins-Regular",
      paddingBottom: 5
    },
    modalButton:{
      color:"#6D803A",
      padding:5,
      fontSize: 15,
      fontFamily: "Poppins-SemiBold",
      alignSelf:"flex-end",
    },
    resultHeader: {
      color: '#DDD4C7',
      fontSize: 35,
      fontFamily: "Poppins-SemiBold"
    },
    listContainer: {
      paddingEnd: 20,
      paddingTop: 10,
      marginBottom: 30
    },
    listItem: {
      padding: 10, 
      paddingLeft: 30,
      color: '#DDD4C7',
      fontSize: 20,
      fontFamily: "Poppins-Regular"
    },
    closedButton: {
      width: '117%',
      left:0,
      bottom:0,
      position:'absolute',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      justifyContent:'center',
      alignItems:'center',
      zIndex: 1,
      height: 25,
      backgroundColor:'white',
    },
    closedIcon: {
      backgroundColor: '#DBDBDB',
      flex:0.15,
      width: 100,
    },
    calculateContainer: {
      flex: 1,
      justifyContent:'space-evenly',
      alignItems: 'center'
    },
    calculateHeader: {
      fontFamily: "Poppins-Bold",
      fontSize: 25,
      color:"black"
    },
    servingsContainer: {
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    },
    calculateServings: {
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignItems:'center',
      marginLeft:20,
      borderRadius:15,
      backgroundColor: '#6D803A',
      width: 80,
      height:35
    },
    calculateText: {
      fontFamily: "Poppins-SemiBold",
      fontSize:17,
      color:'black',
      textAlign:'center'
    },
    servingsInput: {
      backgroundColor:'white',
      borderRadius:12,
      width:25,
      height:25
    },
    buttonText: {
        color: 'white',
        textAlignVertical: 'center'
    },
    inputRecipe: {
      height: 150,
      width: 325,
      backgroundColor: '#E6E5E6',
      borderRadius: 10,
      textAlignVertical: 'top',
      fontFamily: "Poppins-Regular",
      padding:10
    },
    calculateButton: {
      borderRadius: 20,
      backgroundColor: '#6D803A', 
      height: 37,
      width: 325,
      justifyContent:'center',
    },
  
  })

  export { styles }