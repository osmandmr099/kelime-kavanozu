import { useState } from 'react';

function WordForm(props) {
  let [k, setK] = useState('');
  let [a, setA] = useState('');

  const butonaTiklandi = (olay) => {
    olay.preventDefault();
    if (k === '' || a === '') {
      return;
    }
    props.kelimeEkle(k, a);
    setK('');
    setA('');
  };

  return (
    <div className="glass-card mb-5">
      <form onSubmit={butonaTiklandi} className="row g-3 align-items-center">
        <div className="col-md-5">
          <input type="text" className="form-control form-control-lg glass-input" placeholder="Yeni Kelime (Örn: Apple)" value={k} onChange={(olay) => setK(olay.target.value)} />
        </div>
        <div className="col-md-5">
          <input type="text" className="form-control form-control-lg glass-input" placeholder="Anlamı (Örn: Elma)" value={a} onChange={(olay) => setA(olay.target.value)} />
        </div>
        <div className="col-md-2 d-grid">
          <button type="submit" className="btn btn-light btn-lg fw-bold text-primary">Ekle ✨</button>
        </div>
      </form>
    </div>
  );
}

export default WordForm;