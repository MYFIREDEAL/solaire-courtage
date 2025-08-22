import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy auth, no validation for now
    router.push('/dashboard');
  };

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
      <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',width:300}}>
        <h1>Espace Client</h1>
        <label>Email</label>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <label>Mot de passe</label>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button type="submit" style={{marginTop:12}}>Se connecter</button>
      </form>
    </div>
  );
}
