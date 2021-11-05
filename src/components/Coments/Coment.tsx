import { Avatar } from "@mui/material"
import { TextField } from '@material-ui/core'
import { deepOrange } from "@mui/material/colors"
import { useStyles } from './ComentsStyle';

interface Props {
  items: string[]
}
const Comment: React.FC<Props> = ({ items }) => {
     const classes=useStyles()
    return <div className='wrapperComent'>
        <div className='comentMessage'>
            {items.map((item, id) => (
            <div className='comentItem' key={item} >
                <div className='userAvatar'>
                    <Avatar src='' alt={classes.userAvatar} sx={{ width: 20, height: 20, bgcolor: deepOrange[500] }} />
                    <p className={classes.nickname}>User nickname</p>
                </div>
                <TextField multiline margin='dense' disabled variant='outlined' defaultValue={item} ></TextField>
                </div>
            ))}

        </div>
    </div>
}
export default Comment


