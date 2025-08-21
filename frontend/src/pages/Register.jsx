import RegisterForms from '../components/RegisterForms';
import axios from 'axios';

export default function Register() {
  const handleRegister = async (formData) => {
    try {
      const response = await axios.post(
        'https://grupo6-lexdoc-pruebas-1hgg.onrender.com/api/accounts/create',
        formData
      );

      alert('Usuario registrado correctamente');
      console.log(response.data);
    } catch (error) {
      console.error('Error en el registro:', error.response?.data || error);
      alert('Error al registrar usuario');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <RegisterForms onRegister={handleRegister} />
    </div>
  );
}
