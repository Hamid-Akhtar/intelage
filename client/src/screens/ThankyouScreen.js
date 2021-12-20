import React from "react";
import { useSelector } from "react-redux";

const ThankyouScreen = () => {
  const formData = useSelector((state) => state.formState);
  const { loading, data } = formData;

  return (
    <div className="welcomeScreen">
      <div className="container">
        <h1 className="text-bold">Thank you page</h1>

        {loading ? (
          <h1>Loading ..</h1>
        ) : (
          <div className="formItems card">
            <div className="row">
              <div className="w-full">
                <span>
                  <span className="text-bold">First Name: </span>
                  {data.firstName}
                </span>
              </div>
              <div className="w-full">
                <span>
                  <span className="text-bold">Last Name: </span>
                  {data.lastName}
                </span>
              </div>
            </div>
            <p>
              <span className="text-bold">Email: </span>
              {data.email}
            </p>
            <p>
              <span className="text-bold">Address: </span>
              {data.address1}
            </p>
            <p>
              <span className="text-bold">City: </span>
              {data.city}
            </p>

            <p>
              <span className="text-bold">State: </span>
              {data.state}
            </p>

            <p>
              <span className="text-bold">Zip: </span>
              {data.zip}
            </p>

            <p>
              <span className="text-bold">Phone Number: </span>
              {data.phone}
            </p>

            <p>
              <span className="text-bold">Job Title: </span>
              {data.jobTitle}
            </p>

            <p>
              <span className="text-bold">Experience: </span>
              {data.experience}
            </p>

            <span className="text-bold">Skills: </span>
            {data.skills.map((item) => (
              <span>{`${item}, `}</span>
            ))}
            <p>
              <span className="text-bold">Reason: </span>
              {data.reason}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThankyouScreen;
