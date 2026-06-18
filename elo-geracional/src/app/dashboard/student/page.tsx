'use client';

import { useState } from 'react';
import styles from './student.module.css';

// Mock de atividades disponíveis
const availableActivities = [
  {
    id: '1',
    seniorName: 'Dona Maria, 72 anos',
    seniorInitial: 'M',
    title: 'Aula de celular e um café',
    description: 'Preciso de ajuda para aprender a usar as chamadas de vídeo do WhatsApp para falar com meus netos. Faço um bolo ótimo em troca!',
    date: '16/07/2026',
    time: '14:00',
    duration: '2 horas'
  },
  {
    id: '2',
    seniorName: 'Sr. Antônio, 68 anos',
    seniorInitial: 'A',
    title: 'Caminhada matinal no parque',
    description: 'Gostaria de companhia para uma caminhada leve no parque central. Tenho muitas histórias para contar sobre a cidade.',
    date: '15/07/2026',
    time: '08:00',
    duration: '1 hora'
  },
  {
    id: '3',
    seniorName: 'Dona Lúcia, 75 anos',
    seniorInitial: 'L',
    title: 'Ida ao supermercado',
    description: 'Procuro alguém que possa me acompanhar na ida ao supermercado. Preciso de uma ajuda leve com as sacolas no trajeto de volta.',
    date: '20/07/2026',
    time: '09:30',
    duration: '2 horas'
  }
];

export default function StudentDashboard() {
  const [appliedActivities, setAppliedActivities] = useState<string[]>([]);

  const handleApply = (id: string) => {
    if (!appliedActivities.includes(id)) {
      setAppliedActivities([...appliedActivities, id]);
      alert('Interesse enviado! O idoso será notificado.');
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Oportunidades de Conexão</h1>
          <p style={{ color: '#6b7280', fontSize: '1.125rem', marginTop: '0.5rem' }}>
            Transforme o dia de alguém e cuide da sua própria saúde mental.
          </p>
        </div>
        <div className={styles.userProfile}>
          <div className={styles.avatar}>E</div>
          <div>
            <div style={{ fontWeight: '600', fontSize: '1.125rem' }}>Estudante</div>
            <div style={{ color: '#6b7280', fontSize: '0.875rem' }}>Voluntário Ativo</div>
          </div>
        </div>
      </header>

      <main>
        <h2 className={styles.feedTitle}>Atividades Disponíveis na sua Região</h2>
        <div className={styles.activitiesGrid}>
          {availableActivities.map((act) => {
            const isApplied = appliedActivities.includes(act.id);
            return (
              <div key={act.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.seniorAvatar}>{act.seniorInitial}</div>
                  <div className={styles.seniorInfo}>
                    <h3>{act.seniorName}</h3>
                  </div>
                </div>
                
                <h4 className={styles.activityTitle}>{act.title}</h4>
                <p className={styles.activityDescription}>{act.description}</p>
                
                <div className={styles.metaData}>
                  <span>📅 {act.date}</span>
                  <span>⏰ {act.time}</span>
                  <span>⏳ {act.duration}</span>
                </div>

                <button 
                  onClick={() => handleApply(act.id)} 
                  className={`${styles.applyButton} ${isApplied ? styles.applied : ''}`}
                  disabled={isApplied}
                >
                  {isApplied ? '✓ Interesse Enviado' : 'Oferecer Companhia'}
                </button>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
