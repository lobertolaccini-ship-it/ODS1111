'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';

export default function Login() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('senior'); // 'senior' ou 'student'
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Futuramente, aqui ficará a integração real com supabase.auth.signInWithPassword ou signUp
    try {
      if (isLogin) {
        // Simulando o login com sucesso para teste de interface
        alert('Login simulado com sucesso!');
        if (role === 'senior') {
          router.push('/dashboard/senior');
        } else {
          router.push('/dashboard/student');
        }
      } else {
        // Simulando o cadastro
        alert(`Conta criada com sucesso para ${fullName}!`);
        setIsLogin(true);
      }
    } catch (err: any) {
      setError(err.message || 'Ocorreu um erro ao processar sua solicitação.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <h1 className={styles.title}>{isLogin ? 'Bem-vindo de volta' : 'Crie sua conta'}</h1>
        <p className={styles.subtitle}>
          {isLogin 
            ? 'Acesse a plataforma Elo Geracional.' 
            : 'Junte-se à nossa comunidade e faça a diferença.'}
        </p>

        {error && <div className={styles.errorMessage}>{error}</div>}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="fullName">Nome Completo</label>
              <input 
                id="fullName" 
                type="text" 
                className={styles.input} 
                placeholder="Ex: João Silva" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required={!isLogin}
              />
            </div>
          )}

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">E-mail</label>
            <input 
              id="email" 
              type="email" 
              className={styles.input} 
              placeholder="seu@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="password">Senha</label>
            <input 
              id="password" 
              type="password" 
              className={styles.input} 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="role">Eu sou um(a):</label>
            <select 
              id="role" 
              className={styles.select}
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="senior">Idoso (Busco Companhia)</option>
              <option value="student">Estudante (Ofereço Companhia)</option>
            </select>
          </div>

          <button type="submit" className={styles.button}>
            {isLogin ? 'Entrar' : 'Cadastrar'}
          </button>
        </form>

        <p className={styles.toggleText}>
          {isLogin ? 'Ainda não tem uma conta? ' : 'Já possui uma conta? '}
          <button 
            type="button" 
            className={styles.toggleLink} 
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Cadastre-se aqui' : 'Faça login'}
          </button>
        </p>
      </div>
    </div>
  );
}
