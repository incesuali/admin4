'use client'
import { Globe, Plus, Edit, Trash2, Monitor, Smartphone, Globe as GlobeIcon } from 'lucide-react'

export default function CampaignsTab() {
  return (
    <div className="w-full space-y-6 min-w-0">
      {/* Reklam Yönetimi */}
      <div className="bg-white rounded-lg shadow p-4 w-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-blue-500" />
            <h3 className="text-lg font-medium text-gray-900">Reklam Yönetimi</h3>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
            <Plus className="h-4 w-4" />
            <span>+ Reklam Ekle</span>
          </button>
        </div>

        {/* Reklam Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Ana Sayfa Reklamı */}
          <div className="relative p-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white">
            <div className="absolute top-2 left-2 text-xs">Tıklanma: 0</div>
            <div className="absolute top-2 right-2 flex space-x-1">
              <button className="p-1 hover:bg-white/20 rounded">
                <Edit className="h-3 w-3" />
              </button>
              <button className="p-1 hover:bg-white/20 rounded">
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
            <div className="mt-6">
              <div className="text-sm font-medium">Ana Sayfa Reklamı</div>
              <div className="text-xs mt-1 opacity-90">Hedef: Desktop + Mobile</div>
              <div className="text-xs mt-1 opacity-90">Boyut: 1200×300px</div>
              <div className="mt-2">
                <span className="px-2 py-1 text-xs bg-green-500 text-white rounded-full">Aktif</span>
              </div>
            </div>
          </div>

          {/* Mobil Reklam */}
          <div className="relative p-4 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white">
            <div className="absolute top-2 left-2 text-xs">Tıklanma: 0</div>
            <div className="absolute top-2 right-2 flex space-x-1">
              <button className="p-1 hover:bg-white/20 rounded">
                <Edit className="h-3 w-3" />
              </button>
              <button className="p-1 hover:bg-white/20 rounded">
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
            <div className="mt-6">
              <div className="text-sm font-medium">Mobil Reklam</div>
              <div className="text-xs mt-1 opacity-90">Hedef: Mobile Only</div>
              <div className="text-xs mt-1 opacity-90">Boyut: 320×100px</div>
              <div className="mt-2">
                <span className="px-2 py-1 text-xs bg-green-500 text-white rounded-full">Aktif</span>
              </div>
            </div>
          </div>

          {/* Sidebar Reklamı */}
          <div className="relative p-4 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <div className="absolute top-2 left-2 text-xs">Tıklanma: 0</div>
            <div className="absolute top-2 right-2 flex space-x-1">
              <button className="p-1 hover:bg-white/20 rounded">
                <Edit className="h-3 w-3" />
              </button>
              <button className="p-1 hover:bg-white/20 rounded">
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
            <div className="mt-6">
              <div className="text-sm font-medium">Sidebar Reklamı</div>
              <div className="text-xs mt-1 opacity-90">Hedef: Desktop Only</div>
              <div className="text-xs mt-1 opacity-90">Boyut: 300×250px</div>
              <div className="mt-2">
                <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">Pasif</span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Özellikler */}
        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-sm font-medium text-gray-900 mb-3">Responsive Özellikler</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Monitor className="h-4 w-4" />
              <span>Desktop: 1200×300px</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Smartphone className="h-4 w-4" />
              <span>Mobile: 320×100px</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <GlobeIcon className="h-4 w-4" />
              <span>Otomatik boyutlandırma</span>
            </div>
          </div>
        </div>
      </div>

      {/* Kampanya Yönetimi */}
      <div className="bg-white rounded-lg shadow p-4 w-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Kampanya Yönetimi</h3>
          <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700">
            <Plus className="h-4 w-4" />
            <span>+ Yeni Kampanya</span>
          </button>
        </div>

        {/* Kampanya Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Yaz Sezonu */}
          <div className="relative p-4 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <div className="absolute top-2 left-2 text-xs">Tıklanma: 0</div>
            <div className="absolute top-2 right-2 flex space-x-1">
              <button className="p-1 hover:bg-white/20 rounded">
                <Edit className="h-3 w-3" />
              </button>
              <button className="p-1 hover:bg-white/20 rounded">
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
            <div className="mt-6">
              <div className="text-sm font-medium">Yaz Sezonu İndirimi</div>
            </div>
          </div>

          {/* Erken Rezervasyon */}
          <div className="relative p-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white">
            <div className="absolute top-2 left-2 text-xs">Tıklanma: 0</div>
            <div className="absolute top-2 right-2 flex space-x-1">
              <button className="p-1 hover:bg-white/20 rounded">
                <Edit className="h-3 w-3" />
              </button>
              <button className="p-1 hover:bg-white/20 rounded">
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
            <div className="mt-6">
              <div className="text-sm font-medium">Erken Rezervasyon</div>
            </div>
          </div>

          {/* Öğrenci İndirimi */}
          <div className="relative p-4 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white">
            <div className="absolute top-2 left-2 text-xs">Tıklanma: 0</div>
            <div className="absolute top-2 right-2 flex space-x-1">
              <button className="p-1 hover:bg-white/20 rounded">
                <Edit className="h-3 w-3" />
              </button>
              <button className="p-1 hover:bg-white/20 rounded">
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
            <div className="mt-6">
              <div className="text-sm font-medium">Öğrenci İndirimi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 