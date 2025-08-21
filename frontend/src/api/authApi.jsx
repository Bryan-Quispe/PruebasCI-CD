export async function loginUser(credentials) {
  const response = await fetch('https://grupo6-lexdoc-pruebas-1hgg.onrender.com/api/accounts/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Error en el inicio de sesión');
  }

  return await response.json();
}
