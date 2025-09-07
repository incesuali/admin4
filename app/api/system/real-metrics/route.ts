import { NextResponse } from 'next/server'
import { createLog } from '@/app/lib/logger'

export async function GET() {
  try {
    // Vercel ve production ortamında mock data döndür
    // systeminformation paketi Vercel'de çalışmaz
    const mockMetrics = {
      cpu: {
        currentLoad: 25.5,
        cores: 4,
        temperature: 45
      },
      memory: {
        total: 8589934592, // 8GB
        used: 4294967296,  // 4GB
        free: 4294967296, // 4GB
        percentage: 50
      },
      disk: {
        total: 500000000000, // 500GB
        used: 250000000000,  // 250GB
        free: 250000000000,  // 250GB
        percentage: 50
      },
      network: {
        bytesReceived: 1000000,
        bytesSent: 500000,
        packetsReceived: 1000,
        packetsSent: 500
      },
      uptime: 86400, // 1 gün
      timestamp: new Date().toISOString()
    }

    // Log kaydet
    try {
      await createLog({
        level: 'INFO',
        message: 'Sistem metrikleri alındı',
        source: 'monitoring',
        metadata: JSON.stringify(mockMetrics)
      })
    } catch (logError) {
      console.error('Log kaydetme hatası:', logError)
    }

    return NextResponse.json({
      success: true,
      data: mockMetrics,
      message: 'Sistem metrikleri başarıyla alındı'
    })

  } catch (error) {
    console.error('Metrik alma hatası:', error)
    
    // Hata logunu kaydet
    try {
      await createLog({
        level: 'ERROR',
        message: `Metrik alma hatası: ${error}`,
        source: 'monitoring'
      })
    } catch (logError) {
      console.error('Hata logu kaydetme hatası:', logError)
    }
    
    return NextResponse.json({
      success: false,
      error: 'Sistem metrikleri alınamadı',
      details: error instanceof Error ? error.message : 'Bilinmeyen hata'
    }, { status: 500 })
  }
}