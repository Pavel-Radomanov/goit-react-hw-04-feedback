// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const buttonStyle = {
  marginRight: '15px',
  border: 0,
  lineHeight: 2.5,
  padding: '20px',
  fontSize: '1rem',
  textAlign: 'center',
  color: '#fff',
  textShadow: '1px 1px 1px #000',
  borderRadius: '10px',
  backgroundColor: 'rgba(220, 0, 0, 1)',
  backgroundImage:
    'linear-gradient(to top left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0))',
  boxShadow: 'inset 2px 2px 3px rgba(255, 255,0, 0.2)',
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          style={buttonStyle}
          key={nanoid()}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
// FeedbackOptions.propTypes = {
//   onLeaveFeedback: PropTypes.func.isRequired,
//   // what is type   options
//   options: PropTypes.arrayOf(
//     PropTypes.shape({
//       option: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };
export default FeedbackOptions;
