import React, { useEffect, useState, useContext, useRef } from 'react'
import { withRouter, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css'
// import '@fortawesome/fontawesome-free/css/all.min.css';
import moment from 'moment'

import ReactTwitterFollowButton from 'react-twitter-follow-button';

import Tweet from '../Tweet/Tweet'
import axios from 'axios'

var user = JSON.parse(localStorage.getItem('token'));

function UserProfile(props) {
    // const { state, actions } = useContext(StoreContext)
    const [activeTab, setActiveTab] = useState('Tweets')
    const [editName, setName] = useState('')
    const [editBio, setBio] = useState('')
    const [editLocation, setLocation] = useState('')
    const [modalOpen, setModalOpen] = useState(false)
    const [banner, setBanner] = useState('')
    const [avatar, setAvatar] = useState('')
    const [saved, setSaved] = useState(false)
    const [memOpen, setMemOpen] = useState(false)
    const [tab, setTab] = useState('Followers')
    const [loadingAvatar, setLoadingAvatar] = useState(false)
    const [loadingBanner, setLoadingBanner] = useState(false)
    const [styleBody, setStyleBody] = useState(false)
    // const { account, user, session } = state
    const userParam = props.match.params.username


    useEffect(() => {
        // window.scrollTo(0, 0)
        // actions.getUser(props.match.params.username)
        // //preventing edit modal from apprearing after clicking a user on memOpen
        // setMemOpen(false)
        // setModalOpen(false)
    }, [props.match.params.username])


    const editProfile = () => {
        let values = {
            name: editName,
            description: editBio,
            location: editLocation,
            profileImg: avatar,
            banner: banner
        }
        // actions.updateUser(values)
        // setSaved(true)
        // toggleModal()
    }

    const handleModalClick = (e) => {
        e.stopPropagation()
    }

    const followUser = (e, id) => {
        // if (!session) { actions.alert('Please Sign In'); return }
        // e.stopPropagation()
        // actions.followUser(id)
    }

    const uploadImage = (file, type) => {
        // let bodyFormData = new FormData()
        // bodyFormData.append('image', file)
        // axios.post(`${API_URL}/tweet/upload`, bodyFormData, { headers: { Authorization: `Bearer ${localStorage.getItem('Twittertoken')}` } })
        //     .then(res => {
        //         type === 'banner' ? setBanner(res.data.imageUrl) : setAvatar(res.data.imageUrl)
        //         type === 'banner' ? setLoadingBanner(false) : setLoadingAvatar(false)
        //     })
        //     .catch(err => actions.alert('error uploading image'))
    }

    const changeBanner = () => {
        setLoadingBanner(true)
        let file = document.getElementById('banner').files[0];
        uploadImage(file, 'banner')
    }

    const changeAvatar = () => {
        setLoadingAvatar(true)
        let file = document.getElementById('avatar').files[0];
        uploadImage(file, 'avatar')
    }

    const goToUser = (id) => {
        setModalOpen(false)
        props.history.push(`/profile/${id}`)
    }

    return (
        <div className="profile-page">
            <div className="page-header header-filter" >
                <img src={user.banner} alt="Circle Image" className="cover-photo" />
            </div>
            <div className="main main-raised">

                <div className="profile-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 ml-auto mr-auto">

                                <div class="twPc-divUser">
                                    <ul class="twPc-Arrange">
                                        <div class="twPc-divStats">
                                            <div class="twPc-divName">
                                                <a href="https://twitter.com">{user.name}</a>
                                            </div>
                                        </div>
                                        <li class="twPc-ArrangeSizeFit">
                                            <a href="https://twitter.com/" title="885 Following">
                                                <span class="twPc-StatValue">885
                                                        <span class="twPc-StatLabel twPc-block">following</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li class="twPc-ArrangeSizeFit">
                                            <a href="https://twitter.com/mertskaplan/followers" title="1.810 Followers">
                                                <span class="twPc-StatValue">1.810
                                                        <span class="twPc-StatLabel twPc-block">followers</span>
                                                </span>
                                            </a>
                                        </li>

                                    </ul>
                                    <div class="twPc-button spacing={1}">
                                        {/* <!-- Twitter Button > */}
                                        <a href="https://twitter.com/mertskaplan" class="twitter-follow-button" data-show-count="false" data-size="large" data-show-screen-name="false" data-dnt="true"><ReactTwitterFollowButton /></a>
                                    </div>
                                </div>
                                <div className="profile">
                                    <div className="avatar">
                                        <img src={user.profileImg} alt="Circle Image" className="img-raised img-fluid" />
                                        <div className="description-user">
                                            <p>{user.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="left-col user-info">
                <div class="profile-avatar">
                    <div class="inner"></div>
                </div>
                {/* <h1>Willabelle Ong</h1>
                <h2>Enthusiast</h2> */}
                <div class="meta">
                    <ul className="tweets-li">
                        <li><a href="https://twitter.com" title="9.840 Tweet">
                            <span class="twPc-StatLabel twPc-block">Tweets</span>
                        </a></li>
                        <li><a href="https://twitter.com" title="9.840 Tweet">
                            <span class="twPc-StatLabel twPc-block">Tweets & replies</span>
                        </a></li>
                        <li><a href="https://twitter.com" title="9.840 Tweet">
                            <span class="twPc-StatLabel twPc-block">Media</span>
                        </a></li>
                        <li><a href="https://twitter.com" title="9.840 Tweet">
                            <span class="twPc-StatLabel twPc-block">Likes</span>
                        </a></li>
                    </ul>
                </div>
            </section>
            <div className="tweets-bar" style={{
                position: 'absolute', left: '64%', top: '550%',
                transform: 'translate(-50%, -50%)'
            }}
            >
                {/* <Mainbar> */}
                {/* <Tweetbar> */}
                <Tweet></Tweet>
                {/* <Tweet></Tweet>
                <Tweet></Tweet> */}
                {/* </Tweetbar> */}
                {/* </Mainbar> */}
            </div>
        </div>
    )
}

export default UserProfile;