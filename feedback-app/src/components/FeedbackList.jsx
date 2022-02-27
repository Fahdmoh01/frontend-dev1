import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback, handleDelete }) {
    if (!feedback || feedback.length === 0) {
        return <div>No FeedBack yet</div>
    }

    return (
        <div className="feedback-list">
            {feedback.map((item) => {
                return (
                    <FeedbackItem
                        key={item.id}
                        item={item}
                        handleDelete={handleDelete}
                    />
                )
            })}
        </div>
    )
}

//it's not necessary to shape Array but doing it anyway
FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ),
}

export default FeedbackList
