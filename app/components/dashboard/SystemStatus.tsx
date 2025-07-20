'use client'
import { Activity, AlertTriangle, CheckCircle, XCircle, Settings, BarChart3 } from 'lucide-react'

export default function SystemStatus() {
  return (
    <div className="w-full space-y-4 min-w-0">
      {/* Hata Uyarıları */}
      <div className="bg-white rounded-lg shadow p-4 w-full">
        <div className="flex items-center space-x-2 mb-3">
          <AlertTriangle className="h-5 w-5 text-red-500" />
          <h3 className="text-sm font-medium text-gray-900">Sistem Hataları</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Kritik Hata */}
          <div className="flex items-center space-x-3 p-3 bg-red-50 border border-red-200 rounded-md">
            <XCircle className="h-4 w-4 text-red-500" />
            <div className="flex-1">
              <div className="text-sm font-medium text-red-800">Kritik Hata: Veritabanı Bağlantısı</div>
              <div className="text-xs text-red-600 mt-1">Prisma client bağlantısı başarısız</div>
              <div className="text-xs text-gray-500 mt-1">2 saat önce</div>
            </div>
            <button className="text-xs text-red-600 hover:text-red-800">Çöz</button>
          </div>

          {/* Uyarı */}
          <div className="flex items-center space-x-3 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
            <div className="flex-1">
              <div className="text-sm font-medium text-yellow-800">Uyarı: Yüksek CPU Kullanımı</div>
              <div className="text-xs text-yellow-600 mt-1">CPU kullanımı %80'in üzerinde</div>
              <div className="text-xs text-gray-500 mt-1">15 dakika önce</div>
            </div>
            <button className="text-xs text-yellow-600 hover:text-yellow-800">İncele</button>
          </div>

          {/* Bilgi */}
          <div className="flex items-center space-x-3 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <CheckCircle className="h-4 w-4 text-blue-500" />
            <div className="flex-1">
              <div className="text-sm font-medium text-blue-800">Bilgi: Sistem Güncellemesi</div>
              <div className="text-xs text-blue-600 mt-1">Yeni güncelleme mevcut</div>
              <div className="text-xs text-gray-500 mt-1">1 saat önce</div>
            </div>
            <button className="text-xs text-blue-600 hover:text-blue-800">Güncelle</button>
          </div>
        </div>
      </div>

      {/* Sistem Durumu */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center space-x-3">
            <Activity className="h-5 w-5 text-green-500" />
            <div>
              <h3 className="text-sm font-medium text-gray-900">CPU Kullanımı</h3>
              <p className="text-lg font-semibold text-green-600">23%</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center space-x-3">
            <Activity className="h-5 w-5 text-blue-500" />
            <div>
              <h3 className="text-sm font-medium text-gray-900">RAM Kullanımı</h3>
              <p className="text-lg font-semibold text-blue-600">1.2GB / 8GB</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center space-x-3">
            <Activity className="h-5 w-5 text-purple-500" />
            <div>
              <h3 className="text-sm font-medium text-gray-900">Disk Kullanımı</h3>
              <p className="text-lg font-semibold text-purple-600">45%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sistem Bilgileri */}
      <div className="bg-white rounded-lg shadow p-4 w-full">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Sistem Bilgileri</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Sunucu Durumu:</span>
            <span className="ml-2 text-green-600 font-medium">Aktif</span>
          </div>
          <div>
            <span className="text-gray-500">Son Güncelleme:</span>
            <span className="ml-2 text-gray-900">2 saat önce</span>
          </div>
          <div>
            <span className="text-gray-500">Uptime:</span>
            <span className="ml-2 text-gray-900">15 gün 6 saat</span>
          </div>
          <div>
            <span className="text-gray-500">Versiyon:</span>
            <span className="ml-2 text-gray-900">v1.2.3</span>
          </div>
        </div>
      </div>

      {/* Hızlı İşlemler */}
      <div className="bg-white rounded-lg shadow p-4 w-full">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Hızlı İşlemler</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button className="flex items-center space-x-2 px-3 py-2 text-sm bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100">
            <Activity className="h-4 w-4" />
            <span>Cache Temizle</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 text-sm bg-green-50 text-green-700 rounded-md hover:bg-green-100">
            <Settings className="h-4 w-4" />
            <span>Bakım Modu</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 text-sm bg-purple-50 text-purple-700 rounded-md hover:bg-purple-100">
            <BarChart3 className="h-4 w-4" />
            <span>Log Görüntüle</span>
          </button>
        </div>
      </div>
    </div>
  )
} 