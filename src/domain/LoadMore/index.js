import PropTypes from "prop-types";
import Button from "../../components/Button";

const LoadMore = (props) => {
  const { handleClick } = props;

  return (
    <Button
      display="Load More"
      type="button"
      onClick={handleClick}
      extraAttrs={{ "aria-label": "Load more repos", className: "load-more" }}
    />
  );
};

LoadMore.propTypes = {
  handleClick: PropTypes.func,
};

export default LoadMore;
