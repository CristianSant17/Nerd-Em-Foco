import Header from '@/components/Header'
import NewsCard from '@/components/NewsCard'
import Sidebar from '@/components/Sidebar'

const mockNews = [
  {
    id: '1',
    title: 'Novo Spider-Man em 4D é anunciado',
    excerpt: 'Marvel Studios anuncia o próximo filme de Spider-Man com tecnologia revolucionária em 4D.',
    category: 'Cinema',
    date: '15 de jan',
    author: 'Carlos Santos',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&h=300&fit=crop',
    views: 1250,
  },
  {
    id: '2',
    title: 'Dragon Ball Daima promete fim épico',
    excerpt: 'Novo arco de Dragon Ball Daima traz o retorno de personagens clássicos.',
    category: 'Anime',
    date: '14 de jan',
    author: 'Ana Silva',
    image: 'https://images.unsplash.com/photo-1606198438038-8cfc5cd3ded6?w=500&h=300&fit=crop',
    views: 2100,
  },
  {
    id: '3',
    title: 'PlayStation 6 vazamento: especificações',
    excerpt: 'Rumors sobre as especificações técnicas do PS6 começam a circular na internet.',
    category: 'Games',
    date: '13 de jan',
    author: 'Pedro Costa',
    image: 'https://images.unsplash.com/photo-1538481143081-9ba353f23ffe?w=500&h=300&fit=crop',
    views: 3400,
  },
  {
    id: '4',
    title: 'OpenAI apresenta GPT-5 com IA revolucionária',
    excerpt: 'Nova versão do modelo GPT-5 promete avanços significativos em processamento de linguagem.',
    category: 'Tecnologia',
    date: '12 de jan',
    author: 'Lucas Oliveira',
    image: 'https://images.unsplash.com/photo-1677442d019cecf8978c40f3313808d3cdc2c531d?w=500&h=300&fit=crop',
    views: 4200,
  },
  {
    id: '5',
    title: 'Avatar 4: Caminho da Água recebe trailer',
    excerpt: 'James Cameron divulga novo trailer do próximo filme Avatar com cenas inéditas.',
    category: 'Cinema',
    date: '11 de jan',
    author: 'Marina Torres',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&h=300&fit=crop',
    views: 2800,
  },
  {
    id: '6',
    title: 'One Piece Episódio 1000 foi épico',
    excerpt: 'Fãs celebram episódio 1000 de One Piece com retorno de personagens marcantes.',
    category: 'Anime',
    date: '10 de jan',
    author: 'Felipe Mendes',
    image: 'https://images.unsplash.com/photo-1606198438038-8cfc5cd3ded6?w=500&h=300&fit=crop',
    views: 1900,
  },
]

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-secondary to-accent py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-4">
              🎮 Bem-vindo ao Nerd Em Foco 🎮
            </h1>
            <p className="text-xl text-dark/80 mb-8">
              As notícias mais quentes do universo nerd em um só lugar
            </p>
            <input
              type="text"
              placeholder="🔍 Buscar notícias..."
              className="w-full max-w-md px-6 py-3 rounded-lg text-dark font-medium focus:outline-none focus:ring-2 focus:ring-dark"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Grid */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-accent mb-8">📰 Últimas Notícias</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockNews.map((news) => (
                <NewsCard key={news.id} {...news} />
              ))}
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
          <p className="text-light font-semibold mb-2">
            © 2024 Nerd Em Foco. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-6 text-light/80">
            <a href="#" className="hover:text-accent transition">
              Sobre
            </a>
            <a href="#" className="hover:text-accent transition">
              Contato
            </a>
            <a href="#" className="hover:text-accent transition">
              Privacidade
            </a>
            <a href="#" className="hover:text-accent transition">
              Redes Sociais
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
