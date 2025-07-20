'use client'
import { useState } from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'

export default function OdemelerPage() {
  const [activeTab, setActiveTab] = useState('odemeler')

  return (
    <div className="flex h-screen bg-gray-100 w-full">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Sağ İçerik Alanı */}
      <div className="flex-1 flex flex-col min-w-0 w-full">
        {/* Header */}
        <Header />

        {/* Ana İçerik */}
        <main className="flex-1 p-4 w-full">
          <div className="w-full space-y-6 min-w-0">
            <div className="bg-white rounded-lg shadow p-4 w-full">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Ödeme Yönetimi</h3>
              <p className="text-sm text-gray-600">Bu özellik henüz geliştiriliyor...</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 