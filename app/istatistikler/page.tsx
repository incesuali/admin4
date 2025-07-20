'use client'
import { useState, useEffect } from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'

interface StatisticsData {
  totalUsers: number
  last24Hours: number
  totalReservations: number
  totalRevenue: number
  activePassengers: number
  completedFlights: number
  averageTicketPrice: number
  customerSatisfaction: number
}

export default function IstatistiklerPage() {
  const [activeTab, setActiveTab] = useState('istatistikler')
  const [statsData, setStatsData] = useState<StatisticsData>({
    totalUsers: 34,
    last24Hours: 6,
    totalReservations: 1234,
    totalRevenue: 45678,
    activePassengers: 892,
    completedFlights: 567,
    averageTicketPrice: 234,
    customerSatisfaction: 4.8
  })

  // Ana site ile eş zamanlı veri çekme
  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Ana site API'sinden veri çekme
        const response = await fetch('/api/statistics')
        if (response.ok) {
          const data = await response.json()
          setStatsData(data)
        }
      } catch (error) {
        console.log('İstatistik verisi çekilemedi, demo veriler kullanılıyor')
      }
    }

    // Client-side only
    if (typeof window !== 'undefined') {
      // İlk yükleme
      fetchStats()

      // Her 30 saniyede bir güncelle
      const interval = setInterval(fetchStats, 30000)

      return () => clearInterval(interval)
    }
  }, [])

  return (
    <div className="flex h-screen bg-gray-100 w-full">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Sağ İçerik Alanı */}
      <div className="flex-1 flex flex-col min-w-0 w-full">
        {/* Header */}
        <Header />

        {/* Ana İçerik */}
        <main className="flex-1 p-6 w-full">
          <div className="w-full space-y-6 min-w-0">
            {/* İstatistik Kutuları - 2x3 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Kutu 1 - Toplam Kullanıcı */}
              <div className="bg-yellow-100 border-2 border-purple-300 rounded-lg p-6">
                <div className="text-left">
                  <div className="text-lg font-semibold text-gray-900 mb-2">Toplam Kullanıcı :{statsData.totalUsers}</div>
                  <div className="text-sm text-gray-700">Son 24 Saat : {statsData.last24Hours}</div>
                </div>
              </div>

              {/* Kutu 2 - Toplam Rezervasyon */}
              <div className="bg-yellow-100 border-2 border-purple-300 rounded-lg p-6">
                <div className="text-left">
                  <div className="text-lg font-semibold text-gray-900 mb-2">Toplam Rezervasyon :{statsData.totalReservations}</div>
                  <div className="text-sm text-gray-700">Bu Ay : +12.5%</div>
                </div>
              </div>

              {/* Kutu 3 - Toplam Gelir */}
              <div className="bg-yellow-100 border-2 border-purple-300 rounded-lg p-6">
                <div className="text-left">
                  <div className="text-lg font-semibold text-gray-900 mb-2">Toplam Gelir :€{statsData.totalRevenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                  <div className="text-sm text-gray-700">Bu Ay : +8.3%</div>
                </div>
              </div>

              {/* Kutu 4 - Tamamlanan Uçuşlar */}
              <div className="bg-yellow-100 border-2 border-purple-300 rounded-lg p-6">
                <div className="text-left">
                  <div className="text-lg font-semibold text-gray-900 mb-2">Tamamlanan Uçuşlar :{statsData.completedFlights}</div>
                  <div className="text-sm text-gray-700">Bu Ay : +6.7%</div>
                </div>
              </div>

              {/* Kutu 5 - Ortalama Bilet Fiyatı */}
              <div className="bg-yellow-100 border-2 border-purple-300 rounded-lg p-6">
                <div className="text-left">
                  <div className="text-lg font-semibold text-gray-900 mb-2">Ortalama Bilet :€{statsData.averageTicketPrice}</div>
                  <div className="text-sm text-gray-700">Bu Ay : -2.1%</div>
                </div>
              </div>

              {/* Kutu 6 - Müşteri Memnuniyeti */}
              <div className="bg-yellow-100 border-2 border-purple-300 rounded-lg p-6">
                <div className="text-left">
                  <div className="text-lg font-semibold text-gray-900 mb-2">Memnuniyet :{statsData.customerSatisfaction}/5</div>
                  <div className="text-sm text-gray-700">Bu Ay : +0.2</div>
                </div>
              </div>
            </div>

            {/* Grafik Alanı - Toplam Yolcu üstünde */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Toplam Yolcu Grafiği</h3>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{statsData.activePassengers}</div>
                  <div className="text-sm text-gray-600">Aktif Yolcu Sayısı</div>
                  <div className="mt-4 text-xs text-gray-500">Grafik bileşeni buraya eklenecek</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 