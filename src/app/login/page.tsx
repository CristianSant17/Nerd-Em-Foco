'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui seria feita a autenticação
    alert(`${isLogin ? 'Login' : 'Registro'} realizado com sucesso!`)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 to-dark flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-primary/20 shadow-2xl">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-accent mb-2">🔑 Bem-vindo!</h1>
              <p className="text-light/60">
                {isLogin ? 'Entre em sua conta' : 'Crie uma nova conta'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-light font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 bg-slate-700 text-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-light font-semibold mb-2">Senha</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-slate-700 text-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-light font-semibold mb-2">Confirmar Senha</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-slate-700 text-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-light/80">
                    <input type="checkbox" className="w-4 h-4" />
                    Lembrar-me
                  </label>
                  <a href="#" className="text-accent hover:text-secondary transition text-sm">
                    Esqueci a senha
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-light font-bold py-3 rounded-lg hover:shadow-lg transition"
              >
                {isLogin ? 'Entrar' : 'Criar Conta'}
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-primary/20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gradient-to-br from-slate-800 to-slate-900 text-light/60">
                  OU
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <button className="w-full bg-slate-700 hover:bg-slate-600 text-light font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2">
                <span>🔵</span> Login com Google
              </button>
              <button className="w-full bg-slate-700 hover:bg-slate-600 text-light font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2">
                <span>🐈</span> Login com GitHub
              </button>
            </div>

            <div className="text-center mt-6">
              <p className="text-light/60">
                {isLogin ? 'Não tem conta? ' : 'Já tem conta? '}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-accent hover:text-secondary transition font-semibold"
                >
                  {isLogin ? 'Criar agora' : 'Entre aqui'}
                </button>
              </p>
            </div>

            <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
              <p className="text-xs text-light/70">
                ⚠️ Esta é uma demonstração. Os dados não serão salvos em um banco de dados real.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
