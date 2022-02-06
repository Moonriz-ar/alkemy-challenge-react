import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

const LoadingButton = () => {
  return (
    <Button variant="primary" className="mb-3" disabled>
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      <span> Loading...</span>
    </Button>
  );
};

export default LoadingButton;
