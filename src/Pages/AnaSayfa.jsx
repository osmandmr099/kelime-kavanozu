import { useState } from 'react';
import WordForm from '../Components/WordForm';
import WordCard from '../Components/WordCard';
import ilkKelimeler from '../Interfaces/Sabitler';

function AnaSayfa() {
  let [liste, setListe] = useState(ilkKelimeler);

  let sayi = 0;
  for (let i = 0; i < liste.length; i++) {
    if (liste[i].isLearned === true) {
      sayi = sayi + 1;
    }
  }

  const kelimeEkleFonksiyonu = (yeniK, yeniA) => {
    let yeniObje = { id: Date.now(), word: yeniK, meaning: yeniA, isLearned: false, isHidden: true };
    let yeniDizi = [];
    yeniDizi.push(yeniObje);
    for (let j = 0; j < liste.length; j++) {
      yeniDizi.push(liste[j]);
    }
    setListe(yeniDizi);
  };

  const silme = (idNumarasi) => {
    let yenisi = [];
    for (let a = 0; a < liste.length; a++) {
      if (liste[a].id !== idNumarasi) {
        yenisi.push(liste[a]);
      }
    }
    setListe(yenisi);
  };

  const ogrenildiYap = (idsi) => {
    let gecici = [];
    for (let x = 0; x < liste.length; x++) {
      if (liste[x].id === idsi) {
        gecici.push({ id: liste[x].id, word: liste[x].word, meaning: liste[x].meaning, isLearned: !liste[x].isLearned, isHidden: liste[x].isHidden });
      } else {
        gecici.push(liste[x]);
      }
    }
    setListe(gecici);
  };

  const duzenlemeFunc = (id, yeniK, yeniM) => {
    let kopyaListe = [];
    for (let c = 0; c < liste.length; c++) {
      if (liste[c].id === id) {
        kopyaListe.push({ id: liste[c].id, word: yeniK, meaning: yeniM, isLearned: liste[c].isLearned, isHidden: liste[c].isHidden });
      } else {
        kopyaListe.push(liste[c]);
      }
    }
    setListe(kopyaListe);
  };

  const gizlemeFunc = (idsi) => {
    let gDizi = [];
    for (let p = 0; p < liste.length; p++) {
      if (liste[p].id === idsi) {
        gDizi.push({ id: liste[p].id, word: liste[p].word, meaning: liste[p].meaning, isLearned: liste[p].isLearned, isHidden: !liste[p].isHidden });
      } else {
        gDizi.push(liste[p]);
      }
    }
    setListe(gDizi);
  };

  let gosterilecekDizi = [];
  for (let z = 0; z < liste.length; z++) {
    gosterilecekDizi.push(liste[z]);
  }
  
  gosterilecekDizi.sort((birinci, ikinci) => {
    if (birinci.isLearned === true && ikinci.isLearned === false) {
      return 1;
    } else if (birinci.isLearned === false && ikinci.isLearned === true) {
      return -1;
    } else {
      return 0;
    }
  });

  return (
    <div className="container py-5 position-relative">
      
      <div className="position-absolute top-0 end-0 mt-4 me-3 glass-card p-2 px-3 text-center d-none d-sm-block">
        <div className="fs-4">🧠</div>
        <div className="fw-bold fs-2" style={{ color: 'lightgreen' }}>{sayi}</div>
        <div style={{fontSize: '1.5rem'}} className="text-light">Öğrenildi</div>
      </div>

      <h1 className="text-center text-white mb-2 fw-bold">Kelime Kavanozu🏺</h1>
      <p className="text-center text-light mb-5 fs-5">Yeni Kelimeler Ekle ve Öğren</p>

      <WordForm kelimeEkle={kelimeEkleFonksiyonu} />

      <div className="row">
        {gosterilecekDizi.length === 0 ? (
          <p className="text-center text-light fs-4 mt-4">Kavanoz şu an boş. Yeni Kelime Ekle ve Öğrenmeye Başla! ✨</p>
        ) : (
          gosterilecekDizi.map(eleman => (
            <WordCard 
              key={eleman.id} 
              w={eleman} 
              silmeIslemi={silme} 
              ogrenildiDegistir={ogrenildiYap} 
              gizleGoster={gizlemeFunc}
              duzenle={duzenlemeFunc} 
            />
          ))
        )}
      </div>
    </div>
  );
}

export default AnaSayfa;