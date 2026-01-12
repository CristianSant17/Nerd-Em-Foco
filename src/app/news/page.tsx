import Header from '@/components/Header'
import NewsCard from '@/components/NewsCard'
import Sidebar from '@/components/Sidebar'

const allNews = [
  {
    id: '1',
    title: 'Novo Spider-Man em 4D é anunciado',
    excerpt: 'Marvel Studios anuncia o próximo filme de Spider-Man com tecnologia revolucionária.',
    category: 'Cinema',
    date: '15 de jan',
    author: 'Carlos Santos',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&h=300&fit=crop',
    views: 1250,
  },
  {
    id: '2',
    title: 'Dragon Ball Daima promete fim épico',
    excerpt: 'Novo arco traz o retorno de personagens clássicos.',
    category: 'Anime',
    date: '14 de jan',
    author: 'Ana Silva',
    image: 'https://images.unsplash.com/photo-1606198438038-8cfc5cd3ded6?w=500&h=300&fit=crop',
    views: 2100,
  },
  {
    id: '3',
    title: 'PlayStation 6 vazamento: especificações',
    excerpt: 'Rumors sobre as especificações técnicas do PS6.',
    category: 'Games',
    date: '13 de jan',
    author: 'Pedro Costa',
    image: 'https://images.unsplash.com/photo-1538481143081-9ba353f23ffe?w=500&h=300&fit=crop',
    views: 3400,
  },
  {
    id: '4',
    title: 'OpenAI apresenta GPT-5',
    excerpt: 'Nova versão promete avanços em IA.',
    category: 'Tecnologia',
    date: '12 de jan',
    author: 'Lucas Oliveira',
    image: 'https://images.unsplash.com/photo-1677442d019cecf8978c40f3313808d3cdc2c531d?w=500&h=300&fit=crop',
    views: 4200,
  },
  {
    id: '5',
    title: 'Avatar 4: Novo trailer liberado',
    excerpt: 'James Cameron divulga novo trailer com cenas inéditas.',
    category: 'Cinema',
    date: '11 de jan',
    author: 'Marina Torres',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&h=300&fit=crop',
    views: 2800,
  },
  {
    id: '6',
    title: 'One Piece Episódio 1000',
    excerpt: 'Fãs celebram episódio 1000 com retorno de personagens.',
    category: 'Anime',
    date: '10 de jan',
    author: 'Felipe Mendes',
    image: 'https://images.unsplash.com/photo-1606198438038-8cfc5cd3ded6?w=500&h=300&fit=crop',
    views: 1900,
  },
  {
    id: '7',
    title: 'Novo jogo de GOW5 em desenvolvimento',
    excerpt: 'Santa Monica Studio confirma novo God of War em desenvolvimento.',
    category: 'Games',
    date: '09 de jan',
    author: 'João Silva',
    image: 'https://images.unsplash.com/photo-1538481143081-9ba353f23ffe?w=500&h=300&fit=crop',
    views: 2500,
  },
  {
    id: '8',
    title: 'Meta Quest 4 com nova interface',
    excerpt: 'Novo headset de realidade virtual com interface redesenhada.',
    category: 'Tecnologia',
    date: '08 de jan',
    author: 'Rafael Costa',
    image: 'https://images.unsplash.com/photo-1677442d019cecf8978c40f3313808d3cdc2c531d?w=500&h=300&fit=crop',
    views: 1650,
  },
  {
    id: '9',
    title: 'HQ de X-Men nova temporada',
    excerpt: 'Editora publica nova série de X-Men com artistas renomados.',
    category: 'HQs',
    date: '07 de jan',
    author: 'Beatriz Lima',
    image: 'https://images.unsplash.com/photo-1568876694728-451bbf694b39?w=500&h=300&fit=crop',
    views: 980,
  },
  {
    id: '10',
    title: 'Série de Witcher tem novo ator',
    excerpt: 'Netflix anuncia novo ator para segunda temporada da série.',
    category: 'Séries',
    date: '06 de jan',
    author: 'Carla Mendes',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=300&fit=crop',
    views: 3200,
  },
  {
    id: '11',
    title: 'Pokémon Legends novo jogo',
    excerpt: 'Game Freak anuncia novo capítulo do universo Pokémon.',
    category: 'Games',
    date: '05 de jan',
    author: 'Bruno Santos',
    image: 'https://images.unsplash.com/photo-1538481143081-9ba353f23ffe?w=500&h=300&fit=crop',
    views: 3800,
  },
  {
    id: '12',
    title: 'Apple Vision Pro 2 especulações',
    excerpt: 'Analistas especulam sobre próxima geração de Vision Pro.',
    category: 'Tecnologia',
    date: '04 de jan',
    author: 'Amanda Costa',
    image: 'https://images.unsplash.com/photo-1677442d019cecf8978c40f3313808d3cdc2c531d?w=500&h=300&fit=crop',
    views: 1400,
  },
]

export default function NewsPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-secondary to-accent py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-dark">📰 Todas as Notícias</h1>
            <p className="text-lg text-dark/80">
              Fique por dentro de tudo que acontece no mundo nerd
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Grid */}
          <div className="lg:col-span-2">
            <div className="space-y-4 mb-8">
              <h2 className="text-2xl font-bold text-accent">Filtros</h2>
              <div className="space-y-3">
                <select className="w-full px-4 py-2 bg-slate-800 text-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Todas as categorias</option>
                  <option>Games</option>
                  <option>Cinema</option>
                  <option>Anime</option>
                  <option>Séries</option>
                  <option>Tecnologia</option>
                  <option>HQs</option>
                </select>
                <select className="w-full px-4 py-2 bg-slate-800 text-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Mais recentes</option>
                  <option>Mais visualizadas</option>
                  <option>Mais comentadas</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allNews.map((news) => (
                <NewsCard key={news.id} {...news} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center gap-2">
              <button className="px-4 py-2 bg-primary hover:bg-secondary text-light rounded transition">
                ← Anterior
              </button>
              <button className="px-4 py-2 bg-primary text-light rounded font-bold">
                1
              </button>
              <button className="px-4 py-2 bg-slate-800 text-light rounded hover:bg-primary transition">
                2
              </button>
              <button className="px-4 py-2 bg-slate-800 text-light rounded hover:bg-primary transition">
                3
              </button>
              <button className="px-4 py-2 bg-primary hover:bg-secondary text-light rounded transition">
                Próxima →
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <Sidebar />
          </div>
        </div>
      </main>

      {/* Footer */}
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
