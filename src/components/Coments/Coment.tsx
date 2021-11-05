import { Avatar } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { useStyles } from "./ComentsStyle";

interface Props {
  items: string[];
}
const Comment: React.FC<Props> = ({ items }) => {
  const classes = useStyles();
  return (
    <div className="wrapperComent">
      <div className="comentMessage">
        {items.map((item, id) => (
          <div className={classes.comentItem} key={item}>
            <div className={classes.userAvatar}>
              <Avatar src="" alt="userAvatar" className={classes.avatar} />

              <p className={classes.nickname}>User nickname</p>
            </div>
            <TextField
              multiline
              margin="dense"
              disabled
              variant="outlined"
              defaultValue={item}></TextField>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Comment;
