import React, { useState, useEffect } from "react";
import axios from "axios";

// const BASE_URL = "YOUR_API_BASE_URL"; // Replace with your API base URL

function AxiosComp ()  {
    const [responseData, setResponseData] = useState([]);
    //   const [data, setData] = useState([]);
    // const [ispin, setIspin] = useState(false);
    // const [error, setError] = useState(false);

    const getServe = async () => {
        const postData = {
            predict_data: [
                "s3://smdemolambdastack-drrecordsbucketa56aac61-cyiqum08u0lq/069a6d76-7f94-4e61-a1a6-a3ae1a9bf52a.cfg",
            ],
            type: 1,
        };

        // Define the URL for your POST request
        const postUrl = "http://43.204.109.204:8080/serve";
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
                "Content-Type, Authorization, X-Amz-Date, X-Api-Key, X-Amz-Security-Token",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Max-Age": "*",
            "Access-Control-Expose-Headers": "*",
        };
        // Send the POST request using Axios
        axios
            .post(postUrl, JSON.stringify(postData), headers)
            .then((response) => {
                console.log("DDD data", response);
                // Handle the response data here
                setResponseData(response.data);
                // setData(response.data);
            })
            .catch((error) => {
                // Handle any errors that occurred during the request
                console.error("Error:", error);
            });
    };

    //   const getApiData = async () => {
    //     // Your getApiData function code here
    //     // ...
    //   };

    useEffect(() => {
        getServe();
        // getApiData();
    }, []);

    return (
        <div>
            {/* Display the API data */}
            {responseData.map((item, index) => {
               return <div key={index}>{item.fields.relayName}</div>;
            }, [])}
            {/* Display the error message if the API fails */}
        </div>
    );
};

export default AxiosComp;
