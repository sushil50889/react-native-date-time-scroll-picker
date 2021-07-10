# React Native Date Time Scroll Picker 
[![npm](https://img.shields.io/npm/v/react-native-date-time-scroll-picker.svg)](https://www.npmjs.com/package/react-native-date-time-scroll-picker) 
[![npm](https://img.shields.io/npm/dm/react-native-date-time-scroll-picker.svg)](https://www.npmjs.com/package/react-native-date-time-scroll-picker)
[![npm](https://img.shields.io/npm/l/react-native-date-time-scroll-picker.svg)](https://www.npmjs.com/package/react-native-date-time-scroll-picker)
[![install size](https://packagephobia.now.sh/badge?p=react-native-date-time-scroll-picker)](https://packagephobia.now.sh/result?p=react-native-date-time-scroll-picker)

This is a React Native Multipurpore Scroll Picker with following main features:

📱 Supporting iOS and Android <br>
🕑 Can be use as Time Picker <br>
🕑 Can be use as Date Picker <br>
🕑 Can be use as Count Down Set Timer<br>
🎨 Highly Customizable<br>

<table>
  <tr>
    <td align="center" colspan="2"><b>Android</b><br>Different Variants</td>
  </tr>

  <tr>
    <td><img src="https://res.cloudinary.com/sushilmandi/image/upload/sample-1_mshtku.jpg" alt="react-native-date-time-scroll-picker Android" height="150px" style="margin-left:10px" />
    </td>  
    <td><img src="https://res.cloudinary.com/sushilmandi/image/upload/Capture_vruv33.jpg" alt="react-native-date-time-scroll-picker Android" height="150px" style="margin-left:10px" />
    </td>  
  </tr>
  <tr>
    <td><img src="https://res.cloudinary.com/sushilmandi/image/upload/Capture121_upgkul.jpg" alt="react-native-date-time-scroll-picker Android" height="150px" style="margin-left:10px" />
    </td>  
    <td><img src="https://res.cloudinary.com/sushilmandi/image/upload/Capture_ai3rvu.jpg" alt="react-native-date-time-scroll-picker Android" height="150px" style="margin-left:10px" />
    </td>  
  </tr>
      
</table>

## Table of Contents

  - [Installation](#installation)
  - [Import](#import)
  - [Requirements](#requirements)
  - [Example](#example)
  - [License](#license)

## Installation

1. ```npm install react-native-date-time-scroll-picker```  or  ```yarn add react-native-date-time-scroll-picker```
1. `(cd ios && pod install)` (If you're using CocoaPods)
1. Rebuild the project (e.g. `react-native run-android` or `react-native run-ios`)

## Import

```jsx
import RNDateTimeSelector from "react-native-date-time-scroll-picker";
```

## Requirements

- Xcode >= 11.6
- When using React Native v0.64, `0.64.2` or later should be used.


# Example


## Example 1

```jsx
import React from 'react';
import RNDateTimeSelector from "react-native-date-time-scroll-picker";


const dataSet = {
  data: {
    firstColumn: [...Array(6).keys()].map((item, idx)=> {return {value: item, index: idx}}),
    secondColumn: [...Array(60).keys()].map((item, idx)=> {return {value: item, index: idx}}),
    thirdColumn: [...Array(60).keys()].map((item, idx)=> {return {value: item, index: idx}}),
  },
  initials: [1,2,5]  
}


const ExampleComponent = ()=> {

  return (
    <RNDateTimeSelector 
              dataSet={dataSet}
              onValueChange={(value)=>{
                console.log(' On value Change : --->  ', value);
              }}
    />
  )
}

export default ExampleComponent;

```

### Output :
<table>
  <tr>
    <td><img src="https://res.cloudinary.com/sushilmandi/image/upload/sample-1_mshtku.jpg" alt="react-native-date-time-scroll-picker Android" height="150px" style="margin-left:10px" />
    </td>    
  </tr>      
</table>


## Example 2

```jsx
import React from 'react';
import RNDateTimeSelector from "react-native-date-time-scroll-picker";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const dataSet = {
  data: {
    firstColumn: [...Array(6).keys()].map((item, idx)=> {return {value: item, index: idx}}),
    secondColumn: [...Array(60).keys()].map((item, idx)=> {return {value: item, index: idx}}),
    thirdColumn: [...Array(60).keys()].map((item, idx)=> {return {value: item, index: idx}}),
  },
  initials: [1,2,5]  
}


const ExampleComponent2 = ()=> {
  return (
    <RNDateTimeSelector 
              dataSet={dataSet}
              onValueChange={(value)=>{
                console.log(' On value Change : --->  ', value)
              }}
              containerStyle={{
                alignSelf: 'center',
                borderWidth: 0, 
                borderColor: 'transparent', 
                borderRadius: 0, 
                height: wp(61.5)
              }}
    />
  )
}

export default ExampleComponent2;

```

### Output :
<table>
  <tr>
    <td><img src="https://res.cloudinary.com/sushilmandi/image/upload/Capture_vruv33.jpg" alt="react-native-date-time-scroll-picker Android" height="150px" style="margin-left:10px" />
    </td>    
  </tr>      
</table>


## Example 3

```jsx
import React from 'react';
import {Text} from 'react-native';
import RNDateTimeSelector from "react-native-date-time-scroll-picker";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const setTimerWidthHeight = wp(75);
const selectedItemTextSize = 38;


const dataSet = {
  data: {
    firstColumn: [...Array(6).keys()].map((item, idx)=> {return {value: item, index: idx}}),
    secondColumn: [...Array(60).keys()].map((item, idx)=> {return {value: item, index: idx}}),
    thirdColumn: [...Array(60).keys()].map((item, idx)=> {return {value: item, index: idx}}),
  },
  initials: [1,2,5]  
}


const ExampleComponent3 = ()=> {

  const seperatorComponentRenderer = ()=>{
    return <Text style={{fontSize: selectedItemTextSize, lineHeight: setTimerWidthHeight*0.15}}>/</Text>
  }
  
  return (
      <RNDateTimeSelector 
              dataSet={dataSet}
              onValueChange={(value)=>{
                console.log('data on users end :   ... ', value);
              }}
              containerStyle={{
                alignSelf: 'center',
                borderWidth: 0, 
                borderColor: 'transparent', 
                borderRadius: 0, 
                height: wp(62.5)
              }}
              seperatorComponent={seperatorComponentRenderer}
              seperatorContainerStyle={{
                width: wp(4)
              }}
      />
  )
}

export default ExampleComponent3;

```

### Output :
<table>
  <tr>
    <td><img src="https://res.cloudinary.com/sushilmandi/image/upload/Capture121_upgkul.jpg" alt="react-native-date-time-scroll-picker Android" height="150px" style="margin-left:10px" />
    </td>    
  </tr>      
</table>





## Example 4

```jsx
import React from 'react';
import {Text} from 'react-native';
import RNDateTimeSelector from "react-native-date-time-scroll-picker";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const borderWidth = 25;
const setTimerWidthHeight = wp(75);
const selectedItemTextSize = 25;
const wrapperHeight = setTimerWidthHeight-(borderWidth*2);


const addZeroToDigits = (digit)=>{
  if(digit){
    let zeroAdded = `0${digit}`;
    return zeroAdded.substring(zeroAdded.length - 2);
  }else{
    return `00`;
  }
  
}

const dataSet = {
  data: {
    firstColumn: [...Array(13).keys()].map((item, idx)=> {return {value: addZeroToDigits(item), index: idx}}),
    secondColumn: [...Array(60).keys()].map((item, idx)=> {return {value: addZeroToDigits(item), index: idx}}),
    thirdColumn: [
      {value: 'AM', index: 0},
      {value: 'PM', index: 1}
    ],
  },
  initials: [8,25,0]  
}


const ExampleComponent3 = ()=> {

  const seperatorComponentRendererOne = ()=>{
    return <Text style={{fontSize: selectedItemTextSize, lineHeight: setTimerWidthHeight*0.15}}>:</Text>
  }
  const seperatorComponentRendererTwo = ()=>{
    return <Text style={{fontSize: selectedItemTextSize, lineHeight: setTimerWidthHeight*0.15}}></Text>
  }
  
  return (
      <RNDateTimeSelector 
              dataSet={dataSet}
              onValueChange={(value)=>{
                console.log('data on users end :   ... ', value);
              }}
              containerStyle={{
                alignSelf: 'center',
                borderWidth: 0, 
                borderColor: 'transparent', 
                borderRadius: 0, 
                height: wp(61.5)
              }}
              firstSeperatorComponent={seperatorComponentRendererOne}
              secondSeperatorComponent={seperatorComponentRendererTwo}
              seperatorContainerStyle={{
                // width: wp(4)
              }}
              scrollPickerOptions={{
                itemHeight: 40,
                wrapperHeight: wrapperHeight,
                wrapperColor: "rgba(0,0,0,0)",
                highlightColor: "rgba(0,0,0,0.9)"
              }}
              textStyle={{
                fontSize: selectedItemTextSize,
                fontFamily: null
              }}
              textColor={{
                primary: 'rgba(0,0,0,1.0)',
                secondary: 'rgba(0,0,0,0.5)',
                other: 'rgba(0,0,0,0.15)',
              }}
      />
  )
}

export default ExampleComponent3;

```

### Output :
<table>
  <tr>
    <td><img src="https://res.cloudinary.com/sushilmandi/image/upload/Capture_ai3rvu.jpg" alt="react-native-date-time-scroll-picker Android" height="150px" style="margin-left:10px" />
    </td>    
  </tr>      
</table>



## License

React Native Date Time Scroll Picker is [MIT licensed](./LICENSE).

