import Header from '@/components/Header'
import Image from 'next/image'
import CommentSection from '@/components/CommentSection'

export default function NewsDetail({ params }: { params: { id: string } }) {
  const newsContent = `
    Esta é uma notícia incrível sobre o mundo nerd! O conteúdo completo da notícia seria exibido aqui 
    com toda a informação detalhada, análise, imagens e vídeos relacionados ao tema.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

    Parágrafo adicional com mais informações sobre o assunto da notícia...
  `

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="text-light/60 mb-6">
          <a href="/" className="hover:text-accent transition">
            Home
          </a>
          {' > '}
          <a href="/news" className="hover:text-accent transition">
            Notícias
          </a>
          {' > '}
          <span>Artigo</span>
        </div>

        {/* Article Header */}
        <article className="space-y-6">
          <div className="space-y-3">
            <div className="inline-block bg-secondary px-3 py-1 rounded text-xs font-bold text-dark">
              Tecnologia
            </div>
            <h1 className="text-4xl font-bold text-accent">
              Notícia Espetacular Sobre o Mundo Nerd
            </h1>
            <p className="text-lg text-light/80">
              Uma análise profunda sobre os acontecimentos mais importantes do universo nerd
            </p>
          </div>

          {/* Article Meta */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg p-4 border border-primary/20 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">👤</span>
              <div>
                <p className="font-bold text-light">João Silva</p>
                <p className="text-sm text-light/60">15 de janeiro de 2024</p>
              </div>
            </div>
            <div className="flex gap-4 text-light/80">
              <span>👁️ 1.250 visualizações</span>
              <span>⏱️ 5 min de leitura</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full h-96 bg-gradient-to-r from-primary to-secondary rounded-lg overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1677442d019cecf8978c40f3313808d3cdc2c531d?w=1000&h=400&fit=crop"
              alt="Featured"
              fill
              className="object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none">
            <div className="text-light/80 leading-relaxed space-y-4">
              <p>{newsContent}</p>

              {/* Highlight Quote */}
              <blockquote className="border-l-4 border-accent pl-6 py-4 italic text-accent/80">
                &ldquo;Este é um destaque importante que deve ser lembrado. A comunidade nerd está crescendo 
                cada vez mais e moldando a cultura pop atual.&rdquo;
              </blockquote>

              <p>{newsContent}</p>

              {/* Related Links */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-primary/20 my-8">
                <h3 className="font-bold text-accent mb-4">📚 Leia Também:</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-secondary hover:text-accent transition">
                      → Notícia relacionada 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-secondary hover:text-accent transition">
                      → Notícia relacionada 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-secondary hover:text-accent transition">
                      → Notícia relacionada 3
                    </a>
                  </li>
                </ul>
              </div>

              <p>{newsContent}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-6 border-t border-primary/20">
            <span className="text-light/60">Tags:</span>
            {['Nerd', 'Tecnologia', 'Gaming', 'Notícias'].map((tag) => (
              <button
                key={tag}
                className="bg-primary/20 hover:bg-primary text-accent px-3 py-1 rounded-full text-sm transition"
              >
                #{tag}
              </button>
            ))}
          </div>

          {/* Social Share */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-secondary/20">
            <p className="font-bold text-light mb-4">🔗 Compartilhe:</p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-secondary hover:bg-secondary/80 text-dark font-bold px-6 py-2 rounded transition">
                📱 Facebook
              </button>
              <button className="bg-accent hover:bg-accent/80 text-dark font-bold px-6 py-2 rounded transition">
                🐦 Twitter
              </button>
              <button className="bg-primary hover:bg-primary/80 text-light font-bold px-6 py-2 rounded transition">
                💬 WhatsApp
              </button>
            </div>
          </div>
        </article>

        {/* Comments Section */}
        <div className="mt-12">
          <CommentSection newsId={params.id} />
        </div>

        {/* Related News */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-accent mb-8">📰 Notícias Relacionadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden hover:shadow-2xl transition border border-primary/20"
              >
                <div className="w-full h-40 bg-gradient-to-r from-primary to-secondary" />
                <div className="p-4">
                  <h3 className="font-bold text-light mb-2 hover:text-accent transition cursor-pointer">
                    Outra notícia incrível {i}
                  </h3>
                  <p className="text-sm text-light/60 mb-3">
                    Descrição curta da notícia relacionada...
                  </p>
                  <button className="text-accent hover:text-secondary transition text-sm font-bold">
                    Ler mais →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary to-secondary mt-16 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-light font-semibold mb-2">
            © 2024 Nerd Em Foco. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  )
}
