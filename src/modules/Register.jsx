import { Link } from 'react-router-dom';
import FormContainer from '../components/form/FormContainer';
// import developer from '/developer.svg';
// import organization from '/organization.svg';
// import Skate from '/Run_Skate.png';
import developer from '../../public/developer.svg';
import organization from '../../public/organization.svg';
import Skate from '../../public/Run_Skate.png';

function Register() {
  return (
    <FormContainer image={Skate}>
      <div className="flex flex-col w-full relative h-full py-3 items-center transition-transform gap-5 justify-center">
        <Link
          className="flex flex-col text-xl transition items-center
                         justify-center hover:bg-accent/5 hover:font-semibold rounded-lg"
          to="/register/developer"
        >
          <img
            alt="developer"
            src={developer}
            className="h-52 lg:h-auto w-full"
          />
          <h1 className=" blue-gradient ">Developer</h1>
        </Link>
        <div className="border-b border-slate-300 w-full"> </div>
        <Link
          className="flex flex-col text-xl transition items-center
                    justify-center hover:bg-accent/5 hover:font-semibold rounded-lg"
          to="/register/company"
        >
          <img
            alt="organization"
            src={organization}
            className="h-52 lg:h-auto w-full"
          />
          <h1 className=" blue-gradient ">Organization</h1>
        </Link>
      </div>
    </FormContainer>
  );
}

export default Register;
