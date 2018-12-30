import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import _ from 'lodash';
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
        this.getPostsDetails(response.data.data);
      });
  }

  getPostsDetails = (posts) => {
    const promises = posts.map((post) => {
      const mediaId = post.link.split('/')[4];
      return axios.get(`http://localhost:3000/api/instagramPostDetails/${mediaId}`).then(res => res.data);
    });

    Promise.all(promises).then((response) => {
      this.setState({ profileData: this.state.profileData.map((e, index) => Object.assign({}, { ...response[index], ...e })) });
    });
  }

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
