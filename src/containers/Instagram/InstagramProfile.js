import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideLoadingBar, showLoadingBar } from '../../browser/actions';
import '../../styles/instagramProfile.scss';
import SinglePost from './SinglePost';

class InstagramProfile extends React.Component {
    state = {
      profileData: null,
      openedPostId: null,
    }

  componentDidMount = () => {
    this.props.showLoadingBar();
    axios.get('http://localhost:3000/api/instagramProfile')
      .then((response) => {
        this.setState({ profileData: response.data.data });
        this.props.hideLoadingBar();
      });
  }
  // comments api
  // https://api.instagram.com/v1/media/1886888411587956789_2164039005/comments?access_token=2164039005.49def82.d77d63458ae648b880b162c7699fd9cd

  openPostDetails = postId => this.setState({ openedPostId: postId });
  closePostDetails = () => this.setState({ openedPostId: null });

  render() {
    const { profileData, openedPostId } = this.state;
    return (
      <div className="posts">
        {!profileData ? null : profileData.map(profile =>
          (<SinglePost
            openPostDetails={this.openPostDetails}
            closePostDetails={this.closePostDetails}
            openedPostId={openedPostId}
            key={profile.id}
            profile={profile}
          />))}
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    hideLoadingBar,
    showLoadingBar,
  }, dispatch);
}

export default connect(state => state, matchDispatchToProps)(InstagramProfile);
