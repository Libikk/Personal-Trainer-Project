import React from 'react';
import '../../styles/singlePost.scss';
import HeartIcon from '../../icons/heart.svg';
import CommentIcon from '../../icons/comment.svg';
import CameraIcon from '../../icons/camera.svg';
import PlayIcon from '../../icons/play.svg';
import utils from '../../utils';

const instagramUrl = 'https://www.instagram.com/';

class SinglePost extends React.Component {
  state = {
    isPlaying: true,
  }

  goToProfile = (profile = 'libik9') => window.open(`${instagramUrl + profile}/`, '_blank');

  videoControl = () => {
    // uncomment if play button woudn't work
    // const { video } = this;
    // if (video.paused) return video.play();
    // return video.pause();
  }

  fullPost = () => {
    const { images, likes, videos, user, caption, tags, location, comment, uploadDate } = this.props.profile;
    const media = (
      <article className="pop-up__media-wrapper">{
      videos ? (
        <figure >
          {this.state.isPlaying ? <PlayIcon className="media-wrapper__play-icon" onClick={() => this.videoControl()} /> : null}
          <video
            onPlay={() => this.setState({ isPlaying: false })}
            onPause={() => this.setState({ isPlaying: true })}
            ref={(i) => { this.video = i; }}
            onClick={() => this.videoControl()}
            controls
          >
            <source src={videos.low_resolution.url} />
            <track default kind="captions" srcLang="en" />
          </video>
        </figure >)
      : (<img src={images.standard_resolution.url} alt="test" />)
    }
      </article >
    );
    const popupHead = version => (
      <header className={`pop-up__header ${version}`}>
        <img src={user.profile_picture} alt="profile" />
        <div className="header__wrapper">
          <div>
            <span onClick={() => this.goToProfile()}>{user.username}</span> •
            <span className="header__follow" onClick={() => this.goToProfile()}> Follow</span>
          </div>
          {location ? <span className="header__location">{location.name}</span> : null}
        </div>
      </header>
    );

    const uploadTime = <time dateTime={utils.getTextUploadTime(uploadDate)} className="details__upload-date">{utils.getTextUploadTime(uploadDate)}</time>;
    const bodyDetails = version => (
      <div className={`body__details ${version}`}>
        <section className="details__icons">
          <HeartIcon />
          <CommentIcon />
        </section>
        <section>Liked by {likes.count}</section>
        {uploadTime}
      </div>);

    return (
      <article className="details__pop-up">
        <div onClick={() => this.props.closePostDetails()} className="pop-up__background" />
        <div className="pop-up__content">
          {popupHead('header__small-devices')}
          {media}
          <aside className="pop-up__side-bar">
            {popupHead('header__large-devices')}
            <article className="pop-up__body">
              {bodyDetails('body-details__small-devices')}
              <div className="body__comments">
                <ul>
                  <li>
                    <span onClick={() => this.goToProfile()} className="single-comment__user">{user.username} </span>
                    {caption.text.replace(/#\w+/g, '')} {tags.map(e => <a key={e} href={`${instagramUrl}explore/tags/${e}/`}>#{e} </a>)}
                  </li>
                  {comment ? comment.map((singleComment, index) => {
                    const postAuthor = singleComment.author.alternateName.replace('@', '');
                    return (
                      <li key={singleComment.text + index.toString()} >
                        <span onClick={() => this.goToProfile(postAuthor)} className="single-comment__user">{postAuthor}</span> {singleComment.text}
                      </li>);
                  }) : null}
                </ul>
              </div>
              {bodyDetails('body-details__large-devices')}
            </article>
          </aside>
        </div>
      </article>);
  }

  render() {
    const { images, likes, comments, id, videos } = this.props.profile;
    return (
      <div className="posts__post">
        <div className="post__likes-and-comments">
          <span><HeartIcon className="icon__heart-fill" />{likes.count}</span>
          <span><CommentIcon className="icon__comment-fill" />{comments.count}</span>
        </div>
        <div onClick={() => this.props.openPostDetails(id)}>
          <img className="post__image" src={images.low_resolution.url} alt="test" />
        </div>
        { id === this.props.openedPostId ? this.fullPost() : null}
        {videos ? <CameraIcon className="icon__camera" /> : null}
      </div>
    );
  }
}

export default SinglePost;
