import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import LoginReduxForm from './components/Login/Login';
import {connect} from 'react-redux';
import Loading from './common/Loading';
import {initializing} from './store/appReducer';
import {ThemeContext} from './store/appReducer'
import {compose} from 'redux';

const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));
const Users = React.lazy(() => import('./components/Users/Users'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializing();
    }

    render() {
        if (!this.props.initialized) return <Loading/>
        return (
            <div className='App'>
                <ThemeContext.Provider value={{
                    backgroundHeaderNavbar: this.props.backgroundHeaderNavbar,
                    backgroundContent: this.props.backgroundContent,
                    backgroundButton: this.props.backgroundButton
                }}>
                    <Header/>
                    <Navbar/>
                    <div className='content' style={{
                        backgroundColor: this.props.backgroundContent
                    }}>
                        <Route exact path='/' render={() => <Profile/>}/>
                        <Route exact path='/profile' render={() => <Profile/>}/>
                        <Route path='/profile/:userId' render={() => <Profile/>}/>
                        <React.Suspense fallback={'Loading...'}>
                            <div>
                                <Route path='/dialogs' render={() => <Dialogs/>}/>
                                <Route path='/users' render={() => <Users/>}/>
                            </div>
                        </React.Suspense>
                        <Route path='/login' render={() => <LoginReduxForm/>}/>
                    </div>
                </ThemeContext.Provider>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        backgroundContent: state.app.backgroundContent,
        backgroundButton: state.app.backgroundButton,
        backgroundHeaderNavbar: state.app.backgroundHeaderNavbar
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initializing})
)(App)