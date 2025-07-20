'use client'
import { useState } from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import UserList from '../components/users/UserList'

export default function KullaniciPage() {
  const [activeTab, setActiveTab] = useState('users')
  // Kullanıcı verileri
  const users = [
    {
      id: 1,
      name: 'Ahmet Kaya',
      customerNo: '#000001',
      email: 'ahmet@email.com',
      phone: '+90 555 123 4567',
      status: 'Aktif',
      city: 'İstanbul',
      address: 'Kadıköy, İstanbul',
      joinDate: '15.03.2024',
      lastLogin: '2 saat önce'
    },
    {
      id: 2,
      name: 'Fatma Yılmaz',
      customerNo: '#000002',
      email: 'fatma@email.com',
      phone: '+90 555 987 6543',
      status: 'Aktif',
      city: 'Ankara',
      address: 'Çankaya, Ankara',
      joinDate: '10.02.2024',
      lastLogin: '1 gün önce'
    },
    {
      id: 3,
      name: 'Mehmet Demir',
      customerNo: '#000003',
      email: 'mehmet@email.com',
      phone: '+90 555 456 7890',
      status: 'Beklemede',
      city: 'İzmir',
      address: 'Konak, İzmir',
      joinDate: '05.01.2024',
      lastLogin: '3 gün önce'
    },
    {
      id: 4,
      name: 'Ayşe Şahin',
      customerNo: '#000004',
      email: 'ayse@email.com',
      phone: '+90 555 321 6547',
      status: 'Pasif',
      city: 'Bursa',
      address: 'Nilüfer, Bursa',
      joinDate: '20.12.2023',
      lastLogin: '1 hafta önce'
    },
    {
      id: 5,
      name: 'Can Korkmaz',
      customerNo: '#000005',
      email: 'can@email.com',
      phone: '+90 555 789 1234',
      status: 'Aktif',
      city: 'Antalya',
      address: 'Muratpaşa, Antalya',
      joinDate: '08.04.2024',
      lastLogin: '5 saat önce'
    }
  ]

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
          <UserList users={users} onUserClick={() => {}} />
        </main>
      </div>
    </div>
  )
} 