import React from 'react';
import {Redirect} from "react-router-dom";

const WithAuthRedirect = (Component: any) => {

    class RedirectComponents extends React.Component<any, any> {
        render() {
            if(!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

    return RedirectComponents
};

export default WithAuthRedirect;