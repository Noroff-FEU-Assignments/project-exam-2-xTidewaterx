import React, {useCallback, useEffect, useRef, useState} from 'react'
import useKeypress from 'react-use-keypress';
import useOnClickOutside from 'use-onclickoutside'
//import useKeypress from '../hooks/useKeypress';
//import useOnClickOutside from '../hooks/useOnClickOutside';
import DOMPurify from 'dompurify'

import FetchFunction from './FetchFunction';


function InlineEdit(props) {
  const [isInputActive, setIsInputActive] = useState(false);
  const [inputValue, setInputValue] = useState(props.text);
  const [itemAPI, setItemAPI] = useState(props.item)
  const [checkInputValue, setCheckInputValue] = useState(null)
const [sillyState, setSillyState] = useState(null)
  //console.log(itemAPI)
  const wrapperRef = useRef(null);
  const textRef = useRef(null);
  const inputRef = useRef(null);



  //all we need is to first have text be item.api

  const enter = useKeypress('Enter');
  const esc = useKeypress('Escape');

  // check to see if the user clicked outside of this component
  useOnClickOutside(wrapperRef, () => {
    if (isInputActive) {
      props.onSetText(inputValue);
      setIsInputActive(false);
    }
  });
 
 




const awaitEnter = useKeypress('Enter')



  function AwaitBooleanInput () {

    useKeypress('Enter', () => {


    
            console.log('Enter, Enter, Enter')
        })
        


}


if(isInputActive == true) {
  //all we need is to listen fro true enter value when input is active
  //then act wehn both booleans are true together
console.log(awaitEnter) }




      
    
    
//we have a direct function that listens for keypresses by isntinct, okay without if, usekeypress is th if



//enter all command have it respondd with fucntion event and all intertwined global links 

//actual check with keypress instinct


//console.log("hhh")
//our if condition is too wage, it goes in loops

//setSillyState(null)// why so many re renders 
//problem all states change simultanously

 
//method and when enter we return this value


//fractions of multiplier, comeback is when values can combine for new whole value integer, we find comfort in the  resets


//we create integer values, we have fractional 
//frqactions become 
//reverse numbers and have 
//any number can be a fraction



//im a wollffff 68 + 59 == 127



//we go 89 + 56 === 90 + 50 + 55 == 144
//189 - 46
//149
//143 divided by four 

 //4 x 35 == 140   12 and 20 14






  const onEnter = useCallback(() => {
    if (enter) {

 
      props.onSetText(inputValue);
      setIsInputActive(false);
    }
  }, [enter, inputValue, props.onSetText]);





  const onEsc = useCallback(() => {
    if (esc) {
      setInputValue(props.text);
      setIsInputActive(false);
    }
  }, [esc, props.text]);

  // focus the cursor in the input field on edit start
  useEffect(() => {
    if (isInputActive) {
      inputRef.current.focus();
    }
  }, [isInputActive]);

  useEffect(() => {
    if (isInputActive) {
      // if Enter is pressed, save the text and close the editor
      onEnter();
      // if Escape is pressed, revert the text and close the editor
      onEsc();
    }
  }, [onEnter, onEsc, isInputActive]); // watch the Enter and Escape key presses

  const handleInputChange = useCallback(
    (event) => {
      // sanitize the input a little
      setInputValue(DOMPurify.sanitize(event.target.value));
      setCheckInputValue(DOMPurify.sanitize(event.target.value))
 //console.log(checkInputValue)

    },
    [setInputValue, setCheckInputValue]
  );


//sufficient

//we now have code that spans all regions, global values, we 
//we have an event listener that finds enter and we can then have that only be listened for wehn this exct element is listening, whcih combines wiht when any element is wanted
//global values with the precise strike

  const createIfEnter = (e ) => {


    console.log(e.key)
const currentKey = e.key;
console.log(currentKey)

if(currentKey== "Enter") {
//we have global states, on an ychange, updated
  console.log(currentKey)
  setCheckInputValue(DOMPurify.sanitize(checkInputValue))
  setIsInputActive(false)
}


  }

  //glboal wolf states, independant, we have st

  const handleSpanClick = useCallback(() => setIsInputActive(true), [setIsInputActive]);
const ternaryEditValue = checkInputValue ? checkInputValue  : props.item;
//console.log(ternaryEditValue) //this goes back and forth, we have the global values, on each
  return (
  
  
  <div className = {props.id} id= {props.id}>
  <div className={props.id + "edit"}>
  <span className="inline-text" id={props.id} ref={wrapperRef}>
      <span
        ref={textRef}
        onClick={handleSpanClick}
        className={`inline-text_copy inline-text_copy--${!isInputActive ? 'active' : 'hidden'}`}
      >
      <div className={props.className}>{ternaryEditValue}</div> 
      </span>
      <input
        ref={inputRef}
        // set the width to the input length multiplied by the x height
        // it's not quite right but gets it close
       // style={{ minWidth: Math.ceil(inputValue.length) + 'ch' }} //problem here wehn length and max got crossed
      
      //we removed this:;::  style={{ minWidth: Math.ceil(inputValue.length) + 'ch' }} //problem here wehn length and max got crossed
      //crashes with default values and becomes invaluable
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={createIfEnter}
        className={`inline-text_input inline-text_input--${isInputActive ? 'active' : 'hidden'}`}
      />
    </span>
</div>
 

    </div>
  );
}

export default InlineEdit;


//right now, begin with profile, have johan specific, this is from oru updated state onclick, we update psot with this starte in hosue function

///we have new tasrgets, onkeywodn we can register the exact new value of keydown in that active state of input isolated, 
//now wolfs have global reign 
//we must adapt, values are rgistered we now have full control,  drift
//we now have separation end edit value defines the return becasuse the endpoitn is our mothership sourceeee