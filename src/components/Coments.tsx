import Button from '@mui/material/Button'
import { TextField } from '@material-ui/core'
import AddCommentTwoToneIcon from '@mui/icons-material/AddCommentTwoTone';
import './Coments.css'
import React, { useEffect, useState } from 'react';


const Coments: React.FC<{ message: any }> = (props) => {
    const [newMessage, setNewMessage] = useState('')
    const [isEmpty, setIsEmpty] = useState(true)
    const [isToughc, setIsToughc] = useState(false)

    let messege: boolean = isEmpty

    function changeHandler(event: any) {
        setNewMessage(event.target.value)
        if (newMessage.trim.length > 0) {
            messege = false
            setIsEmpty(messege)
        }
    }

    function blurHandler() {
        setIsToughc(true)
        if (newMessage.trim.length > 0) {
            messege = false
            setIsEmpty(messege)
        }
    }

    function clickHandler() {
        setIsToughc(true)
        if (newMessage) {
            props.message(newMessage)
            setIsEmpty(false)
            // setNewMessage('')  Не відображає зміну для користувача, хоча поле вже пусте
        }

    }

    useEffect(() => {//Проблема с тем что окно ошибки всегда появляется при первом клике

    }, [newMessage, isEmpty, isToughc])

    const showError: boolean = isEmpty && isToughc

    return <div className='wrapper'>
        <TextField multiline rows='4' onBlur={blurHandler} onChange={changeHandler} margin='dense' variant='outlined' placeholder='Your message' />
        {showError && <p className='errorMsg'>field is empty</p>}
        <Button className='addComentBtn' onClick={clickHandler} variant='contained' size='small' endIcon={<AddCommentTwoToneIcon />}>Add coment</Button>
    </div>
}
export default Coments