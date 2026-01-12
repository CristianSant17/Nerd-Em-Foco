import Header from '@/components/Header'

export default function About() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-accent mb-6">Sobre Nerd Em Foco</h1>

          <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-primary/20">
            <h2 className="text-2xl font-bold text-light mb-4">🎯 Nossa Missão</h2>
            <p className="text-light/80 leading-relaxed">
              Nerd Em Foco é um portal de notícias dedicado a trazer as últimas informações, 
              análises e curiosidades sobre o universo nerd. Desde games, cinema, séries, anime, 
              tecnologia e HQs - tudo que faz a comunidade nerd vibrar está aqui.
            </p>
          </section>

          <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-secondary/20">
            <h2 className="text-2xl font-bold text-light mb-4">👥 Quem Somos</h2>
            <p className="text-light/80 leading-relaxed mb-4">
              Somos um time apaixonado por tecnologia, games, cinema e toda a cultura pop. 
              Nosso objetivo é criar um espaço inclusivo onde nerds de todas as idades possam 
              se informar, debater e compartilhar suas paixões.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {[
                { icon: '👨‍💻', title: 'Editores', desc: 'Profissionais de redação' },
                { icon: '🎨', title: 'Designers', desc: 'Criativos visuais' },
                { icon: '📱', title: 'Devs', desc: 'Engenheiros de software' },
              ].map((team) => (
                <div
                  key={team.title}
                  className="bg-slate-700/50 rounded-lg p-4 text-center"
                >
                  <p className="text-3xl mb-2">{team.icon}</p>
                  <h3 className="font-bold text-light">{team.title}</h3>
                  <p className="text-xs text-light/60">{team.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-accent/20">
            <h2 className="text-2xl font-bold text-light mb-4">📊 Estatísticas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { number: '500K', label: 'Visitantes/mês' },
                { number: '1.2K', label: 'Notícias postadas' },
                { number: '50K', label: 'Seguidores' },
                { number: '24/7', label: 'Cobertura' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-secondary mb-1">{stat.number}</p>
                  <p className="text-sm text-light/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-primary/20">
            <h2 className="text-2xl font-bold text-light mb-4">🌟 Categorias</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                '🎮 Games',
                '🎬 Cinema',
                '📺 Séries',
                '✨ Anime',
                '💻 Tecnologia',
                '📚 HQs',
              ].map((cat) => (
                <button
                  key={cat}
                  className="bg-slate-700 hover:bg-primary text-light p-4 rounded-lg transition font-semibold"
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8">
            <h2 className="text-2xl font-bold text-dark mb-4">Quer Trabalhar Conosco?</h2>
            <p className="text-dark/80 mb-6">
              Se você é apaixonado por nerd culture e quer contribuir para nossa plataforma, 
              entre em contato!
            </p>
            <button className="bg-dark text-accent font-bold px-8 py-3 rounded-lg hover:bg-light transition">
              Enviar Currículo
            </button>
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
