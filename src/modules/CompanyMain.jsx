import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CompanyDetails from '../components/CompanyDetails';

function CompanyMain() {
  const [organization, setOrganization] = useState([]);
  const { uid } = useParams();
  useEffect(() => {
    const fetchorganization = async () => {
      const response = await fetch(
        `https://projekto-backend.onrender.com/organizations/${uid}`,
        { mode: 'cors' },
      );
      const fetchedOrganization = await response.json();
      setOrganization(fetchedOrganization.data);
    //   console.log('fetch organization------------', fetchedOrganization.data);
    };
    fetchorganization();
  }, []);

  return (
    <div>
      <CompanyDetails
        edit="hidden"
        org_data={organization}
      />
    </div>
  );
}

export default CompanyMain;
