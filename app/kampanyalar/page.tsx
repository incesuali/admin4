'use client'
import { useState } from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import CampaignsTab from '../components/campaigns/CampaignsTab'

export default function KampanyalarPage() {
  const [activeTab, setActiveTab] = useState('kampanyalar')

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
          <CampaignsTab />
        </main>
      </div>
    </div>
  )
} 