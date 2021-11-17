import ClipLoader from "react-spinners/ClipLoader";

const Spinner: React.FC<{ loading: boolean | undefined }> = props => {
  const styles = {
    position: "fixed" as const,
    top: "50%" as const,
    left: "50%" as const,
    transform: "translate(-50%, -50%)" as const,
  };
  return (
    <div style={styles}>
      <ClipLoader color={"#4A90E2"} loading={props.loading} size={150} />
    </div>
  );
};

export default Spinner;
