import PropTypes from 'prop-types';

function Button({ children, type = 'button', textColor = 'text-white', bgColor = 'bg-blue-500', className = '', ...props }) {
    return (
        <button type={type} className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
    textColor: PropTypes.string,
    bgColor: PropTypes.string,
    className: PropTypes.string,
};

export default Button;
