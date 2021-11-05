import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react';
import { useStyles } from './ComentsStyle';

const Coments: React.FC<{ message: any }> = (props) => {
    const classes=useStyles()
    const [newMessage, setNewMessage] = useState('')
    const [isEmpty, setIsEmpty] = useState(true)
    const [isToughc, setIsToughc] = useState(false)
    const showError: boolean = isEmpty && isToughc
    let isEmptyCopy: boolean = isEmpty
    let touch: boolean = isToughc
    let messageCopy: string = newMessage

    function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setNewMessage(event.currentTarget.value)
        touch = true
        setIsToughc(touch)
        isEmptyCopy = false
        setIsEmpty(isEmptyCopy)

    }

    function blurHandler() {
        setIsToughc(true)
        if (newMessage.trim().length > 0) {
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

    return <div className={classes.wrapper}>
        <TextField
            multiline rows='4'
            onBlur={blurHandler}
            onChange={changeHandler}
            margin='dense'
            variant='outlined'
            placeholder='Your message'
            value={messageCopy}
        />
        {showError && <p className={classes.errorMsg}>field is empty</p>}
        <Button
            className='addComentBtn'
            onClick={clickHandler}
            variant='contained'
            size='small'>
            Add coment
        </Button>
    </div>
}
export default Coments