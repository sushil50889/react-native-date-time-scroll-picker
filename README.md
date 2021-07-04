# React Native Date Time Scroll Picker [![npm](https://img.shields.io/npm/v/react-native-date-time-scroll-picker.svg)](https://www.npmjs.com/package/react-native-date-time-scroll-picker) [![npm](https://img.shields.io/npm/dm/react-native-date-time-scroll-picker.svg)](https://www.npmjs.com/package/react-native-date-time-scroll-picker)

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
      
</table>

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
