import Button from '@mui/material/Button'
import { TextField } from '@material-ui/core'
import AddCommentTwoToneIcon from '@mui/icons-material/AddCommentTwoTone';
import './Coments.css'
import React, { useEffect, useState } from 'react';

const Coments: React.FC<{ message: any }> = (props) => {
    const [newMessage, setNewMessage] = useState('')
    const [isEmpty, setIsEmpty] = useState(true)
    const [isToughc, setIsToughc] = useState(false)
    const showError: boolean = isEmpty && isToughc
    let isEmptyCopy: boolean = isEmpty
    let touch: boolean = isToughc
    let messageCopy: string = newMessage

    function changeHandler(event: any) {
        setNewMessage(event.target.value)
        touch = true
        setIsToughc(touch)
        isEmptyCopy = false
        setIsEmpty(isEmptyCopy)

    }

    function blurHandler() {
        setIsToughc(true)
        if (newMessage.trim.length > 0) {
            isEmptyCopy = false
            setIsEmpty(isEmptyCopy)
        }
    }

    function clickHandler() {
        setIsToughc(true)
        if (newMessage) {
            props.message(newMessage)
            isEmptyCopy = false
            setIsEmpty(isEmptyCopy)
            messageCopy = ''
            setNewMessage(messageCopy)
        }

    }

    useEffect(() => {

    }, [touch, isEmptyCopy, messageCopy])

    return <div className='wrapper'>
        <TextField
            multiline rows='4'
            onBlur={blurHandler}
            onChange={changeHandler}
            margin='dense'
            variant='outlined'
            placeholder='Your message'
            value={messageCopy}
        />
        {showError && <p className='errorMsg'>field is empty</p>}
        <Button
            className='addComentBtn'
            onClick={clickHandler}
            variant='contained'
            size='small'
            endIcon={<AddCommentTwoToneIcon />}>
            Add coment
        </Button>
    </div>
}
export default Coments