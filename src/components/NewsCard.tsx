import Link from 'next/link'

interface NewsCardProps {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  image?: string
  views: number
}

export default function NewsCard({
  id,
  title,
  excerpt,
  category,
  date,
  author,
  image,
  views,
}: NewsCardProps) {
  return (
    <article className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-primary/20">
      {image && (
        <div className="w-full h-48 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
          <Image
            src={image!}
            alt={title}
            fill
            className="object-cover hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-0 right-0 bg-secondary px-3 py-1 text-xs font-bold text-dark m-2 rounded">
            {category}
          </div>
        </div>
      )}

      <div className="p-6 space-y-4">
        <h2 className="text-xl font-bold text-light hover:text-accent transition line-clamp-2">
          {title}
        </h2>

        <p className="text-light/70 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-center justify-between text-sm text-light/60">
          <div className="flex gap-4">
            <span>👁️ {views}</span>
            <span>✍️ {author}</span>
          </div>
          <span>{date}</span>
        </div>

        <Link
          href={`/news/${id}`}
          className="inline-block bg-primary hover:bg-secondary text-light px-4 py-2 rounded font-semibold transition mt-4 w-full text-center"
        >
          Ler Completo →
        </Link>
      </div>
    </article>
  )
}
