
import React from 'react';
import {View, StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TimePicker from './scrollPicker';


const setTimerWidthHeight = wp(75);
const pickerWidth = wp(12);
const borderWidth = 25;


// --------------------------------------------------------------------------
// ----------- Seperator Component view -----------
// --------------------------------------------------------------------------
const SeperatorComponent = ({seperatorComponent, seperatorContainerStyle={}}) => {
    return (
        <View style={[{alignItems: 'center', justifyContent: 'center', width: wp(2.2)}, {...seperatorContainerStyle}]}>
            {seperatorComponent()}
        </View>
    )
}


// --------------------------------------------------------------------------
// ----------- Main Time duration select section starts  -----------
// --------------------------------------------------------------------------
const RNDateTimeSelector = ({dataSet, onValueChange, seperatorComponent, seperatorContainerStyle={}, containerStyle={}}) => {


   const checkForCurrectIndex = (key, index)=>{
       if(dataSet.data[key] && dataSet.data[key].length > 0){
            let arrLength = dataSet.data[key].length;
            if(parseInt(index) >= 0 && parseInt(index) < arrLength){
                return true;
            }else{
                return false; 
            }
       }else{
            return false;
       }        
   } 


   const setInitialValueToState = (key, index)=>{
       if(checkForCurrectIndex(key, index)){
            return dataSet.data[key][index].value;
       }else{
            return '00';
       }
   }


  const [firstColumnValue, setHours] = React.useState(setInitialValueToState('firstColumn', dataSet.initials[0]));
  const [secondColumnValue, setMinutes] = React.useState(setInitialValueToState('secondColumn', dataSet.initials[1]));
  const [thirdColumnValue, setSeconds] = React.useState(setInitialValueToState('thirdColumn', dataSet.initials[2]));


  const [returnData, setReturnData] = React.useState([
    {index: dataSet.initials[0], value: firstColumnValue},
    {index: dataSet.initials[1], value: secondColumnValue},
    {index: dataSet.initials[2], value: thirdColumnValue},
  ]);


const returnValue = (data, column)=>{

    if(column === 1){
        let d = returnData;
        d[0] = data;
        setReturnData([...d]);
        onValueChange([...d]);
    }else if(column === 2){
        let d = returnData;
        d[1] = data;
        setReturnData([...d]);
        onValueChange([...d]);
    }else if(column === 3){
        let d = returnData;
        d[2] = data;
        setReturnData([...d]);
        onValueChange([...d]);
    }

}



  return (
          <View style={[styles.mainContainer, {...containerStyle}]}>

              <View style={{width: pickerWidth}}>
                  <TimePicker 
                  pickerData={dataSet.data && dataSet.data.firstColumn ? dataSet.data.firstColumn : []} 
                  selectedIndex={checkForCurrectIndex('firstColumn', dataSet.initials[0]) ? dataSet.initials[0] : 0} setStateMethod={returnValue} column={1}/>
              </View>

              <SeperatorComponent seperatorComponent={seperatorComponent} seperatorContainerStyle={seperatorContainerStyle}/>

              <View style={{width: pickerWidth}}>
                  <TimePicker pickerData={dataSet.data && dataSet.data.secondColumn ? dataSet.data.secondColumn : []} selectedIndex={checkForCurrectIndex('secondColumn', dataSet.initials[1]) ? dataSet.initials[1] : 0} setStateMethod={returnValue} column={2}/>
              </View>

              <SeperatorComponent seperatorComponent={seperatorComponent} seperatorContainerStyle={seperatorContainerStyle}/>

              <View style={{width: pickerWidth}}>
                  <TimePicker pickerData={dataSet.data && dataSet.data.thirdColumn ? dataSet.data.thirdColumn : []} selectedIndex={checkForCurrectIndex('thirdColumn', dataSet.initials[2]) ? dataSet.initials[2] : 0} setStateMethod={returnValue} column={3}/>
              </View>
          </View>
  )

}
// --------------------------------------------------------------------------
// ----------- Main Time duration select section ends  -----------
// --------------------------------------------------------------------------




const styles = StyleSheet.create({
    mainContainer: {
        width: setTimerWidthHeight, height: setTimerWidthHeight, flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderWidth: borderWidth, 
        borderColor: '#1a1a1a', 
        borderRadius: setTimerWidthHeight/2,
        alignSelf: 'center', 
    }
  });


export default RNDateTimeSelector;
