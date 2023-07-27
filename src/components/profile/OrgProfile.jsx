import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CompanyDetails from "../CompanyDetails";
// import CompanyDetails from "../components/CompanyDetails";

function OrgProfile() {
  const [organization, setOrganization] = useState([]);
  const { uid } = useParams();
  useEffect(() => {
    // const urlParams = new URLSearchParams(window.location.search);
    // const myParam = urlParams.get('id');
    console.log("param is ---------", uid);

    const fetchorganization = async () => {
      const response = await fetch(
        `https://projekto-backend.onrender.com/organizations/${uid}`,
        { mode: "cors" },
      );
      const fetchedOrganization = await response.json();
      setOrganization(fetchedOrganization.data);
      // console.log('fetch organization------------', fetchedOrganization.data);
      // console.log('fetch organization------------', organization);
    };
    fetchorganization();
  }, []);

  return (
    <div>
      <CompanyDetails org_data={organization} />
    </div>
  );
}

export default OrgProfile;
