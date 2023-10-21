import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo_black.png';
function FormTitle({ title }) {
  const navigate = useNavigate();
  return (
    <div className="-mt-32 flex flex-col items-center">
      <button onClick={() => navigate('/example')} className="flex">
        <img src={Logo} className="flex w-60" alt="logo" />
      </button>
      <p className="mb-16 mt-28 flex justify-center text-4xl font-bold text-black">
        {title}
      </p>
    </div>
  );
}

export default FormTitle;
