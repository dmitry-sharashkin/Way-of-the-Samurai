import React from "react"
import s from './Profile.module.css';
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";


class ProfileContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })

    }

    render() {
        return (
            <main className={s.main}>
                <Profile {...this.props} profile={this.props.profile}/>
            </main>
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default connect(mapStateToProps,{setUserProfile,})(ProfileContainer)