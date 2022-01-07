import React, {useState, useRef, useEffect} from 'react';
import {
  FlatList,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Modal,
  ImageBackground,
} from 'react-native';

{/* Import external stylesheet, bottom drawer, and splash screen  */}
import {styles} from './Style';
import RBSheet from 'react-native-raw-bottom-sheet';
import SplashScreen from 'react-native-splash-screen';

const NanCalculator = () => {

  {/* Closes the splash screen as soon as the app loads */}
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  {/* Declare and initialize state variables */}
  const [text, setText] = useState('');
  const [servings, setServings] = useState(1);
  const [listToggle, setToggle] = useState(null);
  const [modalToggle, setModalToggle] = useState(true);

  const fullRecipe = text.split('\n');
  const refRBSheet = useRef();

  {/* Function: Renders each list item and resizes every number */}
  const calculateRecipe = ({item}) => {
    return (
      <View>
        <Text style={styles.listItem}>
          {'\u25CF     '}

          {item
            .split(/\s+/)
            .map(word => {
              if (isNaN(word)) {
                return word;
              }
              if (word == '') {
                return '';
              } else {
                return word * servings;
              }
            })
            .join(' ')}
        </Text>
      </View>
    );
  };

  {/* Function: Displays modal */}
  const ModalDisplay = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalToggle}
        onRequestClose={() => {
          setModalToggle(!modalToggle);
        }}>
        
        <View style={styles.centerModal}>
          <View style={styles.modalContainer}>

            <View style={styles.modalImage}>
              <ImageBackground
                resizeMode="repeat"
                style={styles.bgImage}
                source={require('./android/app/src/main/assets/images/ModalBg.png')}
              />
            </View>

            <View style={styles.modalContent}>
              <Text style={styles.modalHeader}>Welcome!</Text>
              <Text style={styles.modalText}>
                Get started by entering a list of ingredients and the desired
                serving size, and press calculate.
              </Text>

              {/* Toggle button: Closes modal */}
              <TouchableOpacity onPress={() => setModalToggle(!modalToggle)}>
                <Text style={styles.modalButton}>Continue</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>

      </Modal>
    );
  };

  return (
    <View style={styles.mainContainer}>

      {/* Interactive bottom drawer for user input */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={400}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
            zIndex: 2,
          },
          container: {
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          },
          draggableIcon: {
            backgroundColor: '#DBDBDB',
            width: 100,
          },
        }}>

        {/* Drawer content */}
        <View style={styles.calculateContainer}>
          <Text style={styles.calculateHeader}>Resize Your Recipe</Text>

          <View style={styles.servingsContainer}>
            <Text style={styles.calculateText}>Serving Size:</Text>

            {/* Set serving size with increment and decrement buttons */}
            <View style={styles.calculateServings}>
              <TouchableOpacity
                onPress={() => setServings(parseInt(servings - 1))}>
                <Text style={[styles.calculateText, styles.buttonText]}>-</Text>
              </TouchableOpacity>

              <Text style={[styles.calculateText, styles.servingsInput]}>
                {servings}
              </Text>

              <TouchableOpacity
                onPress={() => setServings(parseInt(servings + 1))}>
                <Text style={[styles.calculateText, styles.buttonText]}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Multiline text input for ingredients list */}
          <TextInput
            style={styles.inputRecipe}
            placeholder="Type here to translate!"
            onChangeText={text => setText(text)}
            defaultValue={text}
            multiline
          />

          {/* Calculate button: Displays converted recipe and closes drawer */}
          <View style={styles.calculateButton}>
            <TouchableOpacity
              onPress={() => {
                setToggle(fullRecipe);
                refRBSheet.current.close();
              }}>
              <Text style={[styles.calculateText, styles.buttonText]}>
                Calculate
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </RBSheet>

      <ModalDisplay />

      {/* Converted recipe printed as a list */}
      <Text style={styles.resultHeader}>Ingredients:</Text>
      
      <FlatList
        style={styles.listContainer}
        data={listToggle}
        renderItem={calculateRecipe}
      />

      {/* Toggle button: Opens drawer */}
      <TouchableOpacity
        style={styles.closedButton}
        onPressIn={() => refRBSheet.current.open()}>
        <View style={styles.closedIcon}></View>
      </TouchableOpacity>
    </View>
  );
};

export default NanCalculator;
