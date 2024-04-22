// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, isLiked, initialClassName, date} = commentDetails
  const initial = name ? name[0].ToUppercase : ''
  const LikeTextClassName = isLiked ? 'button active' : 'button'
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
  const postedTime = formatDistanceToNow(date)

  const onClickLike = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }
  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }
  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
      </div>
      <div className="user-time-container">
        <p className="userName">{name}</p>
        <p className="time">{postedTime}</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="button-container">
        <img src={likeImageUrl} alt="like" className="like-image" />
        <button
          className={LikeTextClassName}
          type="button"
          onClick={onClickLike}
        >
          Like
        </button>
      </div>
      <img
        className="delete"
        src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
        alt="delete"
      />
      <hr className="comment-line" />
    </li>
  )
}
export default CommentItem
