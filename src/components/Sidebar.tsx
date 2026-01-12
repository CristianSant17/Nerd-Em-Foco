'use client'

export default function Sidebar() {
  const categories = [
    { name: 'Games', icon: '🎮', count: 45 },
    { name: 'Séries', icon: '📺', count: 32 },
    { name: 'Cinema', icon: '🎬', count: 28 },
    { name: 'Tecnologia', icon: '💻', count: 56 },
    { name: 'Anime', icon: '✨', count: 67 },
    { name: 'HQs', icon: '📚', count: 19 },
  ]

  const trending = [
    'Spider-Man: Beyond the Spider-Verse',
    'Dragon Ball Daima Episódio Final',
    'GPT-5 Anúncio',
    'PS6 Vazamento',
    'Novo trailer de Avatar 4',
  ]

  return (
    <aside className="space-y-6">
      {/* Categorias */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-primary/20">
        <h3 className="text-xl font-bold text-accent mb-4">Categorias</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className="w-full text-left px-4 py-2 rounded hover:bg-primary/20 hover:text-accent transition flex items-center justify-between group"
            >
              <span className="flex items-center gap-2">
                <span className="text-xl">{cat.icon}</span>
                <span className="font-medium text-light group-hover:text-accent">
                  {cat.name}
                </span>
              </span>
              <span className="text-xs text-light/50 bg-primary/30 px-2 py-1 rounded">
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Trending */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-secondary/20">
        <h3 className="text-xl font-bold text-secondary mb-4">🔥 Tendência</h3>
        <div className="space-y-3">
          {trending.map((topic, idx) => (
            <button
              key={idx}
              className="w-full text-left hover:text-secondary transition group"
            >
              <p className="text-sm text-light/80 group-hover:text-secondary font-medium line-clamp-2">
                <span className="text-secondary font-bold mr-2">#{idx + 1}</span>
                {topic}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-br from-accent to-secondary rounded-lg p-6">
        <h3 className="text-xl font-bold text-dark mb-2">📧 Newsletter</h3>
        <p className="text-sm text-dark/80 mb-4">
          Receba as melhores notícias nerd em seu email
        </p>
        <input
          type="email"
          placeholder="seu@email.com"
          className="w-full px-4 py-2 rounded text-dark font-medium mb-3 focus:outline-none focus:ring-2 focus:ring-dark"
        />
        <button className="w-full bg-dark text-accent font-bold py-2 rounded hover:bg-light transition">
          Inscrever
        </button>
      </div>
    </aside>
  )
}
