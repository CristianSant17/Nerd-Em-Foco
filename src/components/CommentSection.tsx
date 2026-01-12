'use client'

import { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface Comment {
  id: string
  author: string
  avatar: string
  content: string
  date: Date
  likes: number
  isLiked?: boolean
}

interface CommentSectionProps {
  newsId: string
  comments?: Comment[]
}

export default function CommentSection({ newsId, comments = [] }: CommentSectionProps) {
  const [newComment, setNewComment] = useState('')
  const [allComments, setAllComments] = useState<Comment[]>(comments)

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const comment: Comment = {
      id: Math.random().toString(),
      author: 'Você',
      avatar: '👤',
      content: newComment,
      date: new Date(),
      likes: 0,
    }

    setAllComments([comment, ...allComments])
    setNewComment('')
  }

  const toggleLike = (id: string) => {
    setAllComments(
      allComments.map((c) =>
        c.id === id
          ? { ...c, likes: c.isLiked ? c.likes - 1 : c.likes + 1, isLiked: !c.isLiked }
          : c
      )
    )
  }

  return (
    <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-primary/20">
      <h3 className="text-2xl font-bold text-accent mb-6">💬 Comentários ({allComments.length})</h3>

      {/* Formulário de novo comentário */}
      <form onSubmit={handleSubmitComment} className="mb-6 space-y-3">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Compartilhe sua opinião..."
          className="w-full px-4 py-3 bg-slate-700 text-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          rows={3}
        />
        <button
          type="submit"
          className="bg-primary hover:bg-secondary text-light font-bold px-6 py-2 rounded-lg transition"
        >
          Comentar
        </button>
      </form>

      {/* Lista de comentários */}
      <div className="space-y-4">
        {allComments.length === 0 ? (
          <p className="text-light/60 text-center py-8">Seja o primeiro a comentar! 🎯</p>
        ) : (
          allComments.map((comment) => (
            <div
              key={comment.id}
              className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700/80 transition"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{comment.avatar}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-light">{comment.author}</h4>
                    <span className="text-xs text-light/50">
                      {formatDistanceToNow(comment.date, {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </span>
                  </div>
                  <p className="text-light/80 mb-3">{comment.content}</p>
                  <button
                    onClick={() => toggleLike(comment.id)}
                    className={`text-sm transition ${
                      comment.isLiked
                        ? 'text-secondary font-bold'
                        : 'text-light/60 hover:text-secondary'
                    }`}
                  >
                    ❤️ {comment.likes}
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  )
}
