//Global states are set and manipulated in App.js
import { v4 as uuidv4} from 'uuid'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedBackData from './data/FeedBackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

const App = () => {
    const [feedback, setFeedback] = useState(FeedBackData)

	const addFeedback =(newFeedback) =>{
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])//state is immutable so you can't just push onto it. always remember.
	}

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <>
            <Header />
            <div className='container'>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                />
            </div>
        </>
    )
}
export default App
