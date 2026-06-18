'use client';

import { useState } from 'react';
import styles from './senior.module.css';

// Mock data para UI inicial (depois será substituído pelo Supabase)
const mockActivities = [
  {
    id: '1',
    title: 'Caminhada matinal no parque',
    description: 'Gostaria de companhia para uma caminhada leve no parque central.',
    date: '15/07/2026',
    time: '08:00',
    duration: '1 hora',
    status: 'open',
    interested: [
      { id: 's1', name: 'Lucas S.', course: 'Educação Física' }
    ]
  },
  {
    id: '2',
    title: 'Bate-papo sobre história',
    description: 'Adoro contar histórias da minha juventude e tomar um café.',
    date: '18/07/2026',
    time: '15:30',
    duration: '2 horas',
    status: 'open',
    interested: [
      { id: 's2', name: 'Mariana C.', course: 'História' },
      { id: 's3', name: 'João P.', course: 'Letras' }
    ]
  }
];

export default function SeniorDashboard() {
  const [activities, setActivities] = useState(mockActivities);
  const [formData, setFormData] = useState({ title: '', description: '', date: '', time: '', duration: '1' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui conectaremos com o Supabase futuramente
    const newActivity = {
      id: Math.random().toString(),
      ...formData,
      status: 'open',
      duration: `${formData.duration} ${parseInt(formData.duration) > 1 ? 'horas' : 'hora'}`,
      interested: []
    };
    setActivities([newActivity, ...activities]);
    setFormData({ title: '', description: '', date: '', time: '', duration: '1' });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Meu Painel de Atividades</h1>
          <p style={{ color: '#6b7280', fontSize: '1.125rem', marginTop: '0.5rem' }}>Ofereça uma oportunidade de conexão e veja quem tem interesse.</p>
        </div>
        <div className={styles.userProfile}>
          <div className={styles.avatar}>A</div>
          <div>
            <div style={{ fontWeight: '600', fontSize: '1.125rem' }}>Sr. Antônio</div>
            <div style={{ color: '#6b7280', fontSize: '0.875rem' }}>Membro Ativo</div>
          </div>
        </div>
      </header>

      <main className={styles.mainGrid}>
        {/* Formulário de Criação */}
        <section>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Criar Nova Atividade</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="title">O que você gostaria de fazer?</label>
                <input 
                  type="text" 
                  id="title" 
                  name="title" 
                  className={styles.input} 
                  placeholder="Ex: Caminhada, Tomar um café..." 
                  value={formData.title}
                  onChange={handleInputChange}
                  required 
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="description">Detalhes</label>
                <textarea 
                  id="description" 
                  name="description" 
                  className={styles.textarea} 
                  rows={3} 
                  placeholder="Conte um pouco mais sobre o encontro..."
                  value={formData.description}
                  onChange={handleInputChange}
                  required 
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <div className={styles.formGroup} style={{ flex: 1 }}>
                  <label className={styles.label} htmlFor="date">Data</label>
                  <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    className={styles.input} 
                    value={formData.date}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className={styles.formGroup} style={{ flex: 1 }}>
                  <label className={styles.label} htmlFor="time">Horário</label>
                  <input 
                    type="time" 
                    id="time" 
                    name="time" 
                    className={styles.input} 
                    value={formData.time}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="duration">Duração Estimada</label>
                <select id="duration" name="duration" className={styles.select} value={formData.duration} onChange={handleInputChange}>
                  <option value="1">1 hora</option>
                  <option value="2">2 horas</option>
                  <option value="3">3 horas</option>
                  <option value="4">Mais de 3 horas</option>
                </select>
              </div>

              <button type="submit" className={styles.button}>Publicar Atividade</button>
            </form>
          </div>
        </section>

        {/* Lista de Atividades */}
        <section>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Suas Atividades e Interessados</h2>
            <div className={styles.activityList}>
              {activities.length === 0 ? (
                <p style={{ color: '#6b7280' }}>Você ainda não tem atividades cadastradas.</p>
              ) : (
                activities.map((act) => (
                  <div key={act.id} className={styles.activityItem}>
                    <div className={styles.activityHeader}>
                      <h3 className={styles.activityTitle}>{act.title}</h3>
                      <span className={styles.badge}>Aberto</span>
                    </div>
                    <p style={{ margin: '0.5rem 0', color: '#4b5563' }}>{act.description}</p>
                    <div className={styles.activityMeta}>
                      <span>📅 {act.date}</span>
                      <span>⏰ {act.time}</span>
                      <span>⏳ {act.duration}</span>
                    </div>

                    <div className={styles.interestedStudents}>
                      <h4 className={styles.studentTitle}>Estudantes Interessados ({act.interested.length})</h4>
                      {act.interested.length > 0 ? (
                        <ul className={styles.studentList}>
                          {act.interested.map(student => (
                            <li key={student.id} className={styles.studentItem}>
                              <div>
                                <strong>{student.name}</strong> • <span style={{ color: '#6b7280' }}>{student.course}</span>
                              </div>
                              <button className={styles.acceptButton}>Aceitar Companhia</button>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>Nenhum estudante demonstrou interesse ainda.</p>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
