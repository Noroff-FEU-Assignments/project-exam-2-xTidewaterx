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

console.log(awaitEnter) }




      
    


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
   
      onEnter();
    
      onEsc();
    }
  }, [onEnter, onEsc, isInputActive]); 

  const handleInputChange = useCallback(
    (event) => {
      // sanitize the input a little
      setInputValue(DOMPurify.sanitize(event.target.value));
      setCheckInputValue(DOMPurify.sanitize(event.target.value))
 //console.log(checkInputValue)

    },
    [setInputValue, setCheckInputValue]
  );




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


