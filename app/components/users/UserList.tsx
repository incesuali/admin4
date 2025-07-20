'use client'
import { Edit, Trash2 } from 'lucide-react'
import Link from 'next/link'

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

interface UserListProps {
  users: User[]
  onUserClick?: (user: User) => void
}

export default function UserList({ users, onUserClick }: UserListProps) {
  return (
    <div className="w-full space-y-4 min-w-0">
      {/* Filtreleme ve Arama */}
      <div className="bg-white rounded-lg shadow p-4 w-full">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Arama */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Arama</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Kullanıcı adı, email veya telefon ara..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Filtreleme */}
          <div className="flex gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Durum</label>
              <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Tümü</option>
                <option>Aktif</option>
                <option>Pasif</option>
                <option>Beklemede</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Yaş</label>
              <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Tümü</option>
                <option>18-25</option>
                <option>26-35</option>
                <option>36-45</option>
                <option>46+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ülke</label>
              <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Tümü</option>
                <option>Türkiye</option>
                <option>Almanya</option>
                <option>Hollanda</option>
                <option>Belçika</option>
                <option>İsviçre</option>
                <option>Danimarka</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Memleket</label>
              <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Tümü</option>
                <option>İstanbul</option>
                <option>Ankara</option>
                <option>İzmir</option>
                <option>Bursa</option>
                <option>Antalya</option>
                <option>Adana</option>
                <option>Konya</option>
                <option>Gaziantep</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sıralama</label>
              <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>En Yeni</option>
                <option>En Eski</option>
                <option>İsim A-Z</option>
                <option>İsim Z-A</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Kullanıcı Listesi */}
      <div className="bg-white rounded-lg shadow w-full">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-medium text-gray-900">Kullanıcı Listesi</h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {users.map((user) => (
            <div key={user.id} className="px-4 py-2 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-[10px]">
                  <Link 
                    href={`/kullanici/${user.id}`}
                    className="font-medium text-gray-900 text-[12px] w-24 cursor-pointer hover:text-blue-600 hover:underline"
                  >
                    {user.name}
                  </Link>
                  <span className="text-blue-600 font-medium w-16">{user.customerNo}</span>
                  <span className="text-gray-500 w-32">{user.email}</span>
                  <span className="text-gray-500 w-28">{user.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-[10px] rounded-full ${
                    user.status === 'Aktif' 
                      ? 'bg-green-100 text-green-800' 
                      : user.status === 'Beklemede'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {user.status}
                  </span>
                  <Link 
                    href={`/kullanici/${user.id}`}
                    className="p-1 text-gray-400 hover:text-gray-600"
                  >
                    <Edit className="h-3 w-3" />
                  </Link>
                  <button className="p-1 text-gray-400 hover:text-red-600">
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sayfalama */}
        <div className="px-4 py-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Toplam {users.length} kullanıcı gösteriliyor
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700">Önceki</button>
              <span className="px-3 py-1 text-sm bg-blue-500 text-white rounded">1</span>
              <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700">Sonraki</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 