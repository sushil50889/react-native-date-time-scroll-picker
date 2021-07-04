
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ScrollPicker from 'react-native-picker-scrollview';

const borderWidth = 25;
const setTimerWidthHeight = wp(75);
const selectedItemTextSize = 38;
const nonSelectedItemTextSize = 33;
const farItemTextSize = 25;
const wrapperHeight = setTimerWidthHeight-(borderWidth*2);
const wrapperColor="rgba(0,0,0,0)";
const highlightColor="rgba(0,0,0,0)";


// --------------------------------------------------------------------------
// ----------- renderer text component for the digits to show  -----------
// --------------------------------------------------------------------------
const RenderItem = ({isSelected, currentIndex, data}) => {
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', height: 60}}>
            <Text style={{alignSelf: 'center', textAlign: 'center', fontSize: isSelected ? selectedItemTextSize : (parseInt(data.index) == parseInt(currentIndex)+1 || parseInt(data.index) == parseInt(currentIndex)-1) ? nonSelectedItemTextSize : farItemTextSize, color: isSelected ? 'rgba(0,0,0,1)' : (parseInt(data.index) == parseInt(currentIndex)+1 || parseInt(data.index) == parseInt(currentIndex)-1) ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.15)'}}>
                {data.value.toString().length == 2 ? data.value : `0${data.value}`}
            </Text>
        </View>
    )
}


// --------------------------------------------------------------------------
// ----------- Main single time scroll picker component section starts  -----------
// --------------------------------------------------------------------------
const TimePicker = ({pickerData, setStateMethod, selectedIndex, column}) => {

   const [currentIndex, setcurrentIndex] = useState(selectedIndex);

  return (
        <ScrollPicker
                    dataSource={pickerData}                    
                    renderItem={(data, index, isSelected) => <RenderItem isSelected={isSelected} currentIndex={currentIndex} data={data} key={index}/>}

                    onValueChange={(data, selectedIdx) => {
                        setcurrentIndex(selectedIdx);
                        setStateMethod({value: data.value, index: selectedIdx}, column);
                    }}

                    selectedIndex={selectedIndex}
                    itemHeight={45}
                    wrapperHeight={wrapperHeight}
                    wrapperColor={wrapperColor}
                    highlightColor={highlightColor}
        />
  )

}
// --------------------------------------------------------------------------
// ----------- Main single time scroll picker component section ends  -----------
// --------------------------------------------------------------------------


export default TimePicker;
