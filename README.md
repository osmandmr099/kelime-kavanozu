# Kelime Kavanozu 🏺✨

Bu proje, **TNC Group / Software Persona** bünyesinde gerçekleştirdiğim staj programı kapsamında, **Web Programlama** eğitimi süresince edindiğim bilgileri uygulamak ve pekiştirmek amacıyla geliştirilmiştir.

## 🎯 Projenin Amacı
İngilizce kelime öğrenme sürecini daha interaktif ve eğlenceli hale getirmek için tasarlanmıştır. Bu uygulama ile yeni kelimeler ekleyebilir, anlamlarını gizleyerek kendinizi test edebilir ve öğrendiğiniz kelimeleri takip edebilirsiniz.

## 📦 Kurulum

Projeyi kendi bilgisayarınızda çalıştırmak için şu adımları izleyin:

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

## 📁 Proje Yapısı (Dosya Yolları)

Proje, mantıksal parçalara bölünmüş modüler bir yapıda inşa edilmiştir:

src/
├── Components/
│   ├── WordCard.jsx      # Kelimelerin sergilendiği ve düzenlendiği kart bileşeni
│   └── WordForm.jsx      # Yeni kelime ekleme formu
├── Interfaces/
│   └── Sabitler.js       # Uygulama açılışındaki varsayılan kelime listesi
├── Pages/
│   └── AnaSayfa.jsx      # Tüm parçaların birleştiği ana ekran
├── App.jsx               # Uygulamanın ana giriş dosyası
├── index.css             # Tasarım ve Buzlu Cam (Glassmorphism) stilleri
└── main.jsx              # React'in başlatıldığı kök dosya


## 🧐 Kod Yapısına Bakış (Gözlemler)

- **Modüler Yapı:** Proje, `Components`, `Pages` ve `Interfaces` şeklinde klasörlenmiştir. Bu sayede kodlar daha düzenli ve okunabilir durmaktadır.
- **Veri Yönetimi:** Varsayılan kelimeler `Interfaces/Sabitler.js` dosyasından gelmektedir. Veri akışı ana sayfa üzerinden sağlanmaktadır.
- **Tasarım:** Görsel tarafta modern bir görünüm için **Bootstrap 5** kütüphanesi ve **"Glassmorphism" (Buzlu Cam)** efekti sağlayan özel CSS dokunuşları kullanılmıştır.
- **Sıralama Mantığı:** Kod, kullanıcı deneyimini artırmak için öğrenilmeyen kelimeleri her zaman üstte, öğrenilenleri ise listenin en altında gösterecek şekilde kurgulanmıştır.

## 🚀 Kullanılan Teknolojiler
- **Kütüphane:** React JS
- **Tasarım:** Bootstrap 5
- **Stil:** Pure CSS

## 🛠️ Özellikler (CRUD)
1. **Ekle:** Form aracılığıyla kelime ve anlamı girilebilir.
2. **Listele:** Eklenen tüm kelimeler kartlar şeklinde görüntülenir.
3. **Güncelle:** - Kelime ve anlamlar düzenlenebilir.
   - Göz ikonu ile anlamlar gizlenebilir/gösterilebilir.
   - "Öğrendim" butonu ile kelime durumu güncellenebilir.
4. **Sil:** Artık ihtiyaç duyulmayan kelimeler kavanozdan kaldırılabilir.
5. **Sayaç:** Sağ üst köşedeki sayaç ile kaç kelime öğrenildiği anlık takip edilebilir.

---
*Bu çalışma, staj sürecindeki gelişimimi yansıtan bir Frontend uygulama örneğidir.*
