'use client'

import { useState } from 'react'
import Header from '@/components/Header'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Mensagem enviada! Obrigado por entrar em contato.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-accent mb-6">Entre em Contato</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '📧', title: 'Email', value: 'contato@nerdmemfoco.com' },
              { icon: '💬', title: 'Redes Sociais', value: '@NerdEmFoco' },
              { icon: '🏢', title: 'Endereço', value: 'São Paulo, Brasil' },
            ].map((contact) => (
              <div
                key={contact.title}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-primary/20 text-center"
              >
                <p className="text-4xl mb-3">{contact.icon}</p>
                <h3 className="font-bold text-light mb-2">{contact.title}</h3>
                <p className="text-light/70">{contact.value}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-primary/20">
            <h2 className="text-2xl font-bold text-accent mb-6">Envie uma Mensagem</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-light font-semibold mb-2">Nome</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 bg-slate-700 text-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-light font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 bg-slate-700 text-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-light font-semibold mb-2">Assunto</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Qual é o assunto?"
                className="w-full px-4 py-3 bg-slate-700 text-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label className="block text-light font-semibold mb-2">Mensagem</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Digite sua mensagem..."
                rows={6}
                className="w-full px-4 py-3 bg-slate-700 text-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary text-light font-bold py-3 rounded-lg hover:shadow-lg transition"
            >
              Enviar Mensagem 📨
            </button>
          </form>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-accent mb-6">❓ Perguntas Frequentes</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Como faço para publicar uma notícia?',
                  a: 'Você precisa criar uma conta e ter privilégios de editor. Entre em contato conosco!',
                },
                {
                  q: 'Posso usar imagens do site?',
                  a: 'Sim, desde que cite a fonte e o autor da notícia.',
                },
                {
                  q: 'Qual é a política de comentários?',
                  a: 'Comentários devem ser respeitosos e relevantes. Spam e ofensas serão removidos.',
                },
              ].map((item, idx) => (
                <details
                  key={idx}
                  className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-primary/20 cursor-pointer overflow-hidden"
                >
                  <summary className="p-6 font-semibold text-light hover:bg-primary/10 transition flex items-center gap-3">
                    <span className="group-open:rotate-90 transition-transform">➤</span>
                    {item.q}
                  </summary>
                  <div className="px-6 pb-6 text-light/80 border-t border-primary/20">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-primary to-secondary mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-light font-semibold">
            © 2024 Nerd Em Foco. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  )
}
