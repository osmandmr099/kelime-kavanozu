# Kelime Kavanozu 🏺✨

Bu proje, **TNC Group / Software Persona** bünyesinde gerçekleştirdiğim staj programı kapsamında, **Web Programlama** eğitimi süresince edindiğim bilgileri uygulamak ve pekiştirmek amacıyla geliştirilmiştir.

## 🎯 Projenin Amacı
İngilizce kelime öğrenme sürecini daha interaktif ve eğlenceli hale getirmek için tasarlanmıştır. Bu uygulama ile yeni kelimeler ekleyebilir, anlamlarını gizleyerek kendinizi test edebilir ve öğrendiğiniz kelimeleri takip edebilirsiniz.

## 🧐 Kod Yapısına Bakış (Gözlemler)

- **Modüler Yapı:** Proje, yönergeye uygun olarak `Components`, `Pages` ve `Interfaces` şeklinde klasörlenmiştir. Bu sayede kodlar daha düzenli ve okunabilir durmaktadır.
- **Veri Yönetimi:** Varsayılan kelimeler `Interfaces/Sabitler.js` dosyasından gelmektedir. Veri akışı (state yönetimi) ana sayfa üzerinden sağlanmaktadır.
- **Tasarım:** Görsel tarafta modern bir görünüm için **Bootstrap 5** kütüphanesi ve **"Glassmorphism" (Buzlu Cam)** efekti sağlayan özel CSS dokunuşları kullanılmıştır.
- **Sıralama Mantığı:** Kod, kullanıcı deneyimini artırmak için öğrenilmeyen kelimeleri her zaman üstte, öğrenilenleri ise konfeti emojisiyle birlikte listenin en altında gösterecek şekilde kurgulanmıştır.

## 🚀 Kullanılan Teknolojiler
- **Kütüphane:** React JS (Vite)
- **Tasarım:** Bootstrap 5 & Bootstrap Icons
- **Stil:** Pure CSS (Custom Glassmorphism)

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
