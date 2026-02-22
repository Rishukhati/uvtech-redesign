import PropTypes from 'prop-types';
import { MoveRight } from 'lucide-react'



function Button({ title, className, showIcon = false }) {
    return (
        <button className={className}>
            {title}
            {showIcon && <MoveRight strokeWidth={3} size={16} />}
        </button>
    )
}
export default Button