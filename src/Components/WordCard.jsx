import { useState } from 'react';

function WordCard(props) {
  let [duzenleModu, setDuzenleModu] = useState(false);
  let [girilenK, setGirilenK] = useState(props.w.word);
  let [girilenA, setGirilenA] = useState(props.w.meaning);

  const kaydetBas = () => {
    props.duzenle(props.w.id, girilenK, girilenA);
    setDuzenleModu(false);
  };

  let stilObjesi = {};
  let yaziStili = {};
  let butonStili = {};
  
  if (props.w.isLearned === true) {
    stilObjesi = { backgroundColor: 'rgba(0, 255, 0, 0.1)', borderColor: '#00ff00' };
    yaziStili = { color: '#00ff00' };
    butonStili = { backgroundColor: '#00ff00', color: '#000000', fontWeight: 'bold', border: 'none' };
  }

  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="glass-card h-100 position-relative" style={stilObjesi}>
        
        <div className="position-absolute top-0 end-0 m-2 d-flex">
          <button onClick={() => setDuzenleModu(!duzenleModu)} className="btn btn-sm btn-outline-warning border-0 me-1" title="Düzenle">
            <i className="bi bi-pencil-fill fs-6"></i>
          </button>
          <button onClick={() => props.silmeIslemi(props.w.id)} className="btn btn-sm btn-outline-danger border-0" title="Sil">
            <i className="bi bi-trash3-fill fs-6"></i>
          </button>
        </div>

        {duzenleModu === true ? (
          <div className="mt-4 pe-4">
            <input 
              type="text" 
              className="form-control form-control-sm mb-2 glass-input" 
              value={girilenK} 
              onChange={(o) => setGirilenK(o.target.value)} 
            />
            <input 
              type="text" 
              className="form-control form-control-sm mb-2 glass-input" 
              value={girilenA} 
              onChange={(o) => setGirilenA(o.target.value)} 
            />
            <button onClick={kaydetBas} className="btn btn-sm btn-primary w-100 fw-bold">Kaydet</button>
          </div>
        ) : (
          <>
            <h3 className="fw-bold mt-2" style={yaziStili}>
              {props.w.word} {props.w.isLearned === true && '🎉'}
            </h3>

            <div className="d-flex align-items-center mt-3">
              <h5 className="mb-0 me-2 text-warning">
                {props.w.isHidden === true ? '••••••••' : props.w.meaning}
              </h5>
              <button onClick={() => props.gizleGoster(props.w.id)} className="btn btn-sm text-white border-0 p-0 ms-2">
                <i className={`bi ${props.w.isHidden === true ? 'bi-eye-slash-fill' : 'bi-eye-fill'} fs-5`}></i>
              </button>
            </div>

            <div className="mt-4 text-end">
              <button 
                onClick={() => props.ogrenildiDegistir(props.w.id)} 
                className={`btn btn-sm ${props.w.isLearned === true ? '' : 'btn-outline-light'}`}
                style={butonStili}
              >
                {props.w.isLearned === true ? <><i className="bi bi-check-circle-fill"></i> Öğrenildi</> : 'Öğrendim!'}
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default WordCard;