import type { language } from '..'

export const tr: language = {
  name: 'tr',
  desc: 'Türkçe',
  locales: {
    settings: {
      title: 'Ayarlar',
      save: 'Kaydet',
      general: {
        title: 'Genel',
        requestWithBackend: 'Backend İle İstek',
        locale: 'Sistem Dilini Değiştir',
      },
      openai: {
        title: 'OpenAI',
        key: '',
      },
      replicate: {},
    },
    conversations: {
      title: 'Sohbetler',
      add: 'Yeni',
      recent: 'Son Sohbetler',
      noRecent: 'Son Sohbetler Bulunamadı',
      untitled: 'Başlıksız',
      promopt: {
        system: 'Sistem Bilgisi',
        desc: 'Yardımcı bir asistansınız, mümkün olduğunca kısaca cevap verin...',
      },
      emoji: 'Bir emoji arayın ~',
      confirm: {
        title: 'Bu sohbetin tüm mesajlarını sil',
        desc: 'Bu eylem geri alınamaz.',
        message: 'Bu kaydı sil',
        btn: 'onayla',
        cancel: 'iptal',
        submit: 'gönder',
      },
      share: {
        title: 'Sohbeti Paylaş',
        link: {
          title: 'Bağlantı ile paylaş',
          copy: 'Bağlantıyı Kopyala',
          create: 'Bağlantı Oluştur',
        },
        save: 'Kaydet',
        copy: 'Kaynağı Kopyala',
        messages: {
          title: 'Mesaj Seç',
          selected: 'Seçilen Mesajlar',
          selectAll: 'Hepsini Seç',
        },
        tabs: {
          context: 'Kaynağı Paylaş',
          image: 'Resmi Paylaş',
        },
        image: {
          btn: 'Resim Oluştur',
          open: 'Yeni Sekmede Aç',
          loading: 'Oluşturuluyor...',
          copy: 'Resmi Kopyala',
        },
      },
    },
    docs: 'Dökümantasyon',
    github: 'Github',
    scroll: 'En Alta Kaydır',
    empty: 'Veri Yok',
    send: {
      placeholder: 'Bir Şeyler Yazın...',
      button: 'Gönder',
    },
    copyed: 'Kopyalandı',
  },
};
