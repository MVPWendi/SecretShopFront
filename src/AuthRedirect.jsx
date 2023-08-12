import { useNavigate } from 'react-router-dom';

export default function AuthRedirect() {

    const navigate = useNavigate();
    navigate('/register');

}