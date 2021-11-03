import { Avatar } from "@mui/material"
import './Coment.css'
import { TextField } from '@material-ui/core'
import { deepOrange } from "@mui/material/colors"


const Coment: React.FC<{ items: string[] }> = (props) => {
    return <div className='wrapperComent'>
        <div className='comentMessage'>
            {props.items.map((item, i) => (<div className='comentItem'>
                <div className='userAvatar'>
                    <Avatar src='' alt='User avatar' sx={{ width: 20, height: 20, bgcolor: deepOrange[500] }} />
                    <p className='nickname'>User nickname</p>
                </div>
                <TextField multiline key={item[i]} margin='dense' disabled variant='outlined' defaultValue={props.items[i]} ></TextField></div>
            ))}

        </div>
    </div>
}
export default Coment


