import PropTypes from "prop-types";

const ProductType = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  image: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  slang: PropTypes.string,
});

export default ProductType;
