
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ScrollPicker from 'react-native-picker-scrollview';

const borderWidth = 25;
const setTimerWidthHeight = wp(75);
const selectedItemTextSize = 38;
const wrapperHeight = setTimerWidthHeight-(borderWidth*2);
const wrapperColor="rgba(0,0,0,0)";
const highlightColor="rgba(0,0,0,0.9)";
const itemHeight = 45;


// --------------------------------------------------------------------------
// ----------- renderer text component for the digits to show  -----------
// --------------------------------------------------------------------------
const RenderItem = ({
    isSelected, 
    currentIndex, 
    data, 
    textStyle={
        fontSize: selectedItemTextSize,
        fontFamily: null
    },
    textColor={
        primary: 'rgba(0,0,0,1.0)',
        secondary: 'rgba(0,0,0,0.5)',
        other: 'rgba(0,0,0,0.15)',
    }
}) => {
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', height: 60, width: 70}}>
            <Text 
            style={[{alignSelf: 'center', textAlign: 'center', fontSize: isSelected ? textStyle.fontSize : (parseInt(data.index) == parseInt(currentIndex)+1 || parseInt(data.index) == parseInt(currentIndex)-1) ? textStyle.fontSize-5 : textStyle.fontSize-13, color: isSelected ? textColor.primary : (parseInt(data.index) == parseInt(currentIndex)+1 || parseInt(data.index) == parseInt(currentIndex)-1) ? textColor.secondary : textColor.other}, {fontFamily: textStyle.fontFamily ? textStyle.fontFamily : null}]}>
                {data.value}
            </Text>
        </View>
    )
}


// --------------------------------------------------------------------------
// ----------- Main single time scroll picker component section starts  -----------
// --------------------------------------------------------------------------
const TimePicker = ({pickerData, setStateMethod, selectedIndex, column, scrollPickerOptions={}, textStyle={}, textColor={}}) => {

   const [currentIndex, setcurrentIndex] = useState(selectedIndex);

  return (
        <ScrollPicker
                    dataSource={pickerData}                    
                    renderItem={(data, index, isSelected) => <RenderItem isSelected={isSelected} currentIndex={currentIndex} data={data} key={index} textStyle={textStyle} textColor={textColor}/>}

                    onValueChange={(data, selectedIdx) => {
                        setcurrentIndex(selectedIdx);
                        setStateMethod({value: data.value, index: selectedIdx}, column);
                    }}

                    selectedIndex={selectedIndex}
                    itemHeight={
                        (scrollPickerOptions && scrollPickerOptions.itemHeight) ? scrollPickerOptions.itemHeight : itemHeight
                    }
                    wrapperHeight={
                        (scrollPickerOptions && scrollPickerOptions.wrapperHeight) ? scrollPickerOptions.wrapperHeight :  wrapperHeight
                    }
                    wrapperColor={
                        (scrollPickerOptions && scrollPickerOptions.wrapperColor) ? scrollPickerOptions.wrapperColor : wrapperColor
                    }
                    highlightColor={
                        (scrollPickerOptions && scrollPickerOptions.highlightColor) ? scrollPickerOptions.highlightColor : highlightColor
                    }
        />
  )

}
// --------------------------------------------------------------------------
// ----------- Main single time scroll picker component section ends  -----------
// --------------------------------------------------------------------------


export default TimePicker;