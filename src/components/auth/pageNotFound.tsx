import React from 'react';
import { Result } from 'antd';
import { useLocation } from "react-router-dom"
const PageNotFound = () => {
    const Location = useLocation();
    return (
        <>
            <div className="page-not-found">
                <Result
                    status="500"
                    subTitle={<b>Sorry! Page {Location.pathname.split('/')[1]} you are looking does not exist.</b>}
                />
            </div>
        </>
    );
};
export default PageNotFound;
