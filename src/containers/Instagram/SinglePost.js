import React from 'react';
import '../../styles/singlePost.scss';

class SinglePost extends React.Component {
  fullPost = () => {
    const { images, likes, comments, id, videos, user, caption, tags } = this.props.profile;
    console.log(videos || images);
    const media = videos ? (
      <video controls>
        <source src={videos.standard_resolution.url} />
        <track default kind="captions" srcLang="en" />
      </video>)
      : (<img src={images.standard_resolution.url} alt="test" />);

    return (
      <article className="details__pop-up">
        <div onClick={() => this.props.closePostDetails()} className="pop-up__background" />
        <div className="pop-up__content">
          {media}
          <div className="pop-up__header">
            <img src={user.profile_picture} alt="profile" />
            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/libik9/">{user.username}</a> •
            <span>
              <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/libik9/"> Follow</a>
            </span>
          </div>
          <div className="pop-up__body">
            {user.username} {caption.text.replace(/#\w+/g, '')} {tags.map(e => <a href={`https://www.instagram.com/explore/tags/${e}/`}>#{e} </a>)}
          </div>
        </div>
      </article>);
  }

  render() {
    const { images, likes, comments, id } = this.props.profile;
    return (
      <div className="posts__post">
        <div className="post__likes-and-comments">
          <span>likes: {likes.count}</span>
          <span>comments: {comments.count}</span>
        </div>
        <div onClick={() => this.props.openPostDetails(id)}>
          <img className="post__image" src={images.low_resolution.url} alt="test" />
        </div>
        { id === this.props.openedPostId ? this.fullPost() : null}
      </div>
    );
  }
}

export default SinglePost;
