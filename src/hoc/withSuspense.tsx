import React from 'react';

const WithSuspense = (Component: any) => {

    return (props: any) => {
        return <React.Suspense fallback={<div>Loading...</div>}>
            <Component {...props}/>
        </React.Suspense>
    }
};

export default WithSuspense;