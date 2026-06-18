import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.hero}>
      <div className={styles.badge}>🌟 Alinhado à ODS 3 da ONU: Saúde e Bem-Estar</div>
      <h1 className={styles.title}>
        Conexão que transforma <span className={styles.highlight}>gerações</span>
      </h1>
      <p className={styles.description}>
        O Elo Geracional conecta universitários com idosos ativos para caminhadas, 
        conversas e atividades diárias. Uma troca mútua de experiências que melhora 
        a saúde mental e o bem-estar de todos.
      </p>
      <div className={styles.ctaContainer}>
        <Link href="/login" className={styles.primaryButton}>
          Sou Estudante
        </Link>
        <Link href="/login" className={styles.secondaryButton}>
          Quero Companhia
        </Link>
      </div>
    </main>
  );
}
