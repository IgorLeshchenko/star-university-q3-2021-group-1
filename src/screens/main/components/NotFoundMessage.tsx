import { Box, Card, Typography } from "@material-ui/core";
import { BiMessageSquareError } from "react-icons/bi";

const NotFoundMessage: React.FC<{ searcTerm: string }> = props => {
  return (
    <Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          p: 3,
          m: 8,
        }}>
        <Typography variant="h4">
          <BiMessageSquareError fontSize="100" />
        </Typography>
        <Typography variant="h5">
          There aren’t any search results for "{props.searcTerm}", does it even exist?
        </Typography>
        <Typography>
          Looks like there aren’t any results for “{props.searcTerm}”. Try double-checking your
          spelling or searching for a related post.
        </Typography>
      </Box>
    </Card>
  );
};

export default NotFoundMessage;
