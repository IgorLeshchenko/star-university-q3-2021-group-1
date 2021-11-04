import { Avatar } from "@mui/material"
import './Coment.css'
import { TextField } from '@material-ui/core'
import { deepOrange } from "@mui/material/colors"

const Coment: React.FC<{ items: string[] }> = (props) => {
    return <div className='wrapperComent'>
        <div className='comentMessage'>
            {props.items.map((item, i) => (
            <div className='comentItem' key={item.id} >
                <div className='userAvatar'>
                    <Avatar src='' alt='User avatar' sx={{ width: 20, height: 20, bgcolor: deepOrange[500] }} />
                    <p className='nickname'>User nickname</p>
                </div>
                <TextField multiline margin='dense' disabled variant='outlined' defaultValue={item} ></TextField>
                </div>
            ))}

        </div>
    </div>
}
export default Coment


