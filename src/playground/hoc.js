
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const WithAdminWarnning = (WrappedComponent) => {
    return (props) => ( 
        <div>
            { props.isAdmin && <p>This is a private.please dont share.</p>}
            <WrappedComponent {...props}/>
        </div>
    )
};
const RequiredAuthenticated = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please Login to view the info</p>
            )}
        </div>
    );
};

const AdminInfo = WithAdminWarnning(Info);
const AuthInfo = RequiredAuthenticated(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are some details"/> , document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are some details"/> , document.getElementById('app'));