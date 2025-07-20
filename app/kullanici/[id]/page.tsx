'use client'
import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Sidebar from '../../components/layout/Sidebar'
import Header from '../../components/layout/Header'
import { User, Calendar, Clock, Edit, Save, CreditCard, X, Mail, Phone, MapPin } from 'lucide-react'

interface User {
  id: number
  name: string
  customerNo: string
  email: string
  phone: string
  status: string
  city: string
  address: string
  joinDate: string
  lastLogin: string
}

export default function KullaniciDetayPage() {
  const params = useParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('users')
  const [user, setUser] = useState<User | null>(null)

  // Kullanıcı verileri (gerçek uygulamada API'den gelecek)
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

  useEffect(() => {
    const userId = parseInt(params.id as string)
    const foundUser = users.find(u => u.id === userId)
    if (foundUser) {
      setUser(foundUser)
    } else {
      router.push('/kullanici')
    }
  }, [params.id, router])

  if (!user) {
    return (
      <div className="flex h-screen bg-gray-100 w-full">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 flex flex-col min-w-0 w-full">
          <Header />
          <main className="flex-1 p-4 w-full">
            <div className="bg-white rounded-lg shadow p-4">
              <p>Kullanıcı bulunamadı...</p>
            </div>
          </main>
        </div>
      </div>
    )
  }

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
          <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl mx-auto">
            {/* Modal Content */}
            <div className="p-6">
              <div className="space-y-6">
                {/* Hesap Bilgileri - Başta */}
                <div>
                  <h3 className="text-xs font-medium text-gray-900 mb-2">Hesap Bilgileri</h3>
                  <div className="flex">
                    <div className="p-2 bg-gray-50 rounded-l-md border-r border-gray-200">
                      <p className="text-sm font-medium text-gray-900">Numara</p>
                      <p className="text-xs text-gray-500">{user.customerNo}</p>
                    </div>
                    <div className="p-2 bg-gray-50 border-r border-gray-200">
                      <p className="text-sm font-medium text-gray-900">Durum</p>
                      <p className="text-xs text-gray-500">{user.status}</p>
                    </div>
                    <div className="p-2 bg-gray-50 border-r border-gray-200">
                      <p className="text-sm font-medium text-gray-900">Kayıt Tarihi</p>
                      <p className="text-xs text-gray-500">{user.joinDate}</p>
                    </div>
                    <div className="p-2 bg-gray-50 rounded-r-md">
                      <p className="text-sm font-medium text-gray-900">Son Giriş</p>
                      <p className="text-xs text-gray-500">{user.lastLogin}</p>
                    </div>
                  </div>
                </div>

                {/* Kullanıcı Bilgileri */}
                <div>
                  <h3 className="text-xs font-medium text-gray-900 mb-2">Kullanıcı Bilgileri</h3>
                  <div className="grid grid-cols-6 gap-2 mb-3">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Ad"
                        defaultValue={user.name?.split(' ')[0] || ''}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <input 
                        type="text" 
                        placeholder="Soyad"
                        defaultValue={user.name?.split(' ')[1] || ''}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <input 
                        type="text" 
                        placeholder="TC Kimlik No"
                        defaultValue=""
                        maxLength={11}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <select 
                        defaultValue=""
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="">Cinsiyet</option>
                        <option value="male">Erkek</option>
                        <option value="female">Kadın</option>
                      </select>
                    </div>
                    <div>
                      <input 
                        type="date" 
                        defaultValue=""
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="E-posta"
                        defaultValue={user.email}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-28">
                      <select 
                        defaultValue="+90"
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="+90">🇹🇷 TR (+90)</option>
                        <option value="+49">🇩🇪 DE (+49)</option>
                        <option value="+44">🇬🇧 UK (+44)</option>
                        <option value="+33">🇫🇷 FR (+33)</option>
                      </select>
                    </div>
                    <div className="w-36">
                      <input 
                        type="tel" 
                        placeholder="Telefon"
                        defaultValue={user.phone}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div className="flex-1">
                      <input 
                        type="text" 
                        placeholder="Adres"
                        defaultValue={user.address}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* İşlemler */}
                <div>
                  <h3 className="text-xs font-medium text-gray-900 mb-2">İşlemler</h3>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
              <button 
                onClick={() => router.push('/kullanici')}
                className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
              >
                <X className="h-4 w-4" />
                <span>Kapat</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                <Save className="h-4 w-4" />
                <span>Değişiklikleri Kaydet</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 