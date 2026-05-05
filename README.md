# Kelime Kavanozu 🏺✨

Bu proje, **TNC Group / Software Persona** bünyesinde gerçekleştirdiğim staj programı kapsamında, **Web Programlama** eğitimi süresince edindiğim bilgileri uygulamak ve pekiştirmek amacıyla geliştirilmiştir.

## 🎯 Projenin Amacı
İngilizce kelime öğrenme sürecini daha interaktif ve eğlenceli hale getirmek için tasarlanmıştır. Bu uygulama ile yeni kelimeler ekleyebilir, anlamlarını gizleyerek kendinizi test edebilir ve öğrendiğiniz kelimeleri takip edebilirsiniz.

## 📦 Kurulum
Projeyi yerel ortamınızda çalıştırmak için aşağıdaki komutları kullanabilirsiniz:

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

## 📁 Proje Yapısı (Dosya Yolları)
Proje, yönergeye uygun olarak modüler bir yapıda kurgulanmıştır:

```text
src/
├── Components/
│   ├── WordCard.jsx      # Kelime kartı bileşeni (Güncelleme ve Silme)
│   └── WordForm.jsx      # Kelime ekleme formu bileşeni (Ekleme)
├── Interfaces/
│   └── Sabitler.js       # Varsayılan kelime verilerinin tutulduğu yer
├── Pages/
│   └── AnaSayfa.jsx      # Tüm bileşenlerin birleştiği ana ekran
├── App.jsx               # Uygulamanın giriş noktası
├── index.css             # Özel cam efekti (Glassmorphism) ve genel stiller
└── main.jsx              # React DOM render dosyası
```

## 🧐 Kod Yapısına Bakış (Gözlemler)
- **Modüler Yapı:** Proje; `Components`, `Pages` ve `Interfaces` klasörlerine bölünerek kod okunabilirliği artırılmıştır.
- **Veri Yönetimi:** Başlangıç verileri merkezi bir sabit dosyasından (`Interfaces/Sabitler.js`) çekilmekte, state yönetimi ise `AnaSayfa.jsx` üzerinden sağlanmaktadır.
- **Tasarım:** Görsel tarafta modern bir görünüm için **Bootstrap 5** kütüphanesi kullanılmıştır.
- **Sıralama Mantığı:** Kullanıcı deneyimi için yeni eklenen kelimeler en başa, öğrenilen kelimeler ise listenin en sonuna otomatik olarak taşınmaktadır.

## 🚀 Kullanılan Teknolojiler
- **Kütüphane:** React JS
- **Tasarım:** Bootstrap 5
- **Stil:** CSS

## 🛠️ Özellikler (CRUD)
1. **Ekle:** Form üzerinden yeni kelime ve anlamı kavanoza eklenebilir.
2. **Listele:** Eklenen kelimeler kartlar halinde listelenir.
3. **Güncelle:** - Kelime ve anlamlar kalem ikonuyla düzenlenebilir.
   - Göz ikonuyla anlamlar gizlenip/gösterilebilir.
   - "Öğrendim" butonuyla kelime durumu güncellenerek listenin sonuna itilir.
4. **Sil:** Çöp kutusu ikonu ile kelimeler listeden kaldırılabilir.
5. **Sayaç:** Sağ üst köşedeki sayaç ile kaç kelimenin öğrenildiği anlık takip edilir.

---
*Bu çalışma, staj sürecindeki gelişimimi yansıtan bir Frontend uygulama örneğidir.*
