import React from 'react'

interface AnswerItem {
  id: string
  title: string
  body?: React.ReactNode
  sources?: Array<{ label: string; href: string }>
}

interface AnswersProps {
  items?: AnswerItem[]
  'data-node-id'?: string
}

const Answers: React.FC<AnswersProps> = ({
  items = [
    { 
      id: 'a1', 
      title: '2011. évi CXII. törvény az információs önrendelkezési jogról és az információszabadságról', 
      body: (
        <>
          <div className="srl-answer-meta">2025. 01. 01. - Nem ismert</div>
          <p>
            (5)  közérdekű adat: az állami vagy helyi önkormányzati feladatot, valamint jogszabályban meghatározott egyéb közfeladatot ellátó szerv vagy azt átvevő szerv, szervezet vagy személy (a továbbiakban együtt: közfeladatot ellátó szerv) kezelésében lévő és tevékenységére vonatkozó vagy közfeladatának ellátásával összefüggésben keletkezett, a személyes adat fogalma alá nem eső, bármilyen módon vagy formában rögzített információ vagy ismeret, függetlenül kezelésének módjától, önálló vagy gyűjteményes jellegétől, így különösen a hatáskörre, illetékességre, szervezeti felépítésre, szakmai tevékenységre, annak eredményességére is kiterjedő értékelésére, a birtokolt adatfajtákra és a működést szabályozó jogszabályokra, valamint a gazdálkodásra, a megkötött szerződésekre vonatkozó adat;
          </p>
          <div className="srl-answer-actions">
            <button className="srl-answer-action-btn srl-answer-bookmark" type="button" aria-label="Könyvjelző">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 2v12l5-3 5 3V2H3z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </button>
            <button className="srl-answer-action-btn srl-answer-expand" type="button">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
              <span>Kevesebb mutatása</span>
            </button>
          </div>
        </>
      )
    },
    { 
      id: 'a2', 
      title: '2011. évi CXII. törvény az információs önrendelkezési jogról és az információszabadságról', 
      body: (
        <>
          <div className="srl-answer-meta">2025. 01. 01. - Nem ismert</div>
          <p>
            5. *  közérdekű adat: az állami vagy helyi önkormányzati feladatot, valamint jogszabályban meghatározott egyéb közfeladatot ellátó szerv vagy azt átvevő szerv, szervezet vagy személy (a továbbiakban együtt: közfeladatot ellátó szerv) kezelésében lévő és tevékenységére vonatkozó vagy közfeladatának ellátásával összefüggésben keletkezett...
          </p>
          <div className="srl-answer-actions">
            <button className="srl-answer-action-btn srl-answer-bookmark" type="button" aria-label="Könyvjelző">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 2v12l5-3 5 3V2H3z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </button>
            <button className="srl-answer-action-btn srl-answer-expand" type="button">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10l4-4 4 4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
              <span>Több mutatása</span>
            </button>
          </div>
        </>
      )
    },
    { 
      id: 'a3', 
      title: '2011. évi CXII. törvény az információs önrendelkezési jogról és az információszabadságról', 
      body: (
        <>
          <div className="srl-answer-meta">2025. 01. 01. - Nem ismert</div>
          <p>
            5. *  közérdekű adat: az állami vagy helyi önkormányzati feladatot, valamint jogszabályban meghatározott egyéb közfeladatot ellátó szerv vagy azt átvevő szerv, szervezet vagy személy (a továbbiakban együtt: közfeladatot ellátó szerv) kezelésében lévő és tevékenységére vonatkozó vagy közfeladatának ellátásával összefüggésben keletkezett, a személyes adat fogalma alá nem eső, bármilyen módon vagy formában rögzített információ vagy ismeret, függetlenül kezelésének módjától, önálló vagy gyűjteményes jellegétől...
          </p>
          <div className="srl-answer-actions">
            <button className="srl-answer-action-btn srl-answer-bookmark" type="button" aria-label="Könyvjelző">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 2v12l5-3 5 3V2H3z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </button>
            <button className="srl-answer-action-btn srl-answer-expand" type="button">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10l4-4 4 4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
              <span>Több mutatása</span>
            </button>
          </div>
        </>
      )
    },
  ],
  'data-node-id': nodeId,
}) => {
  return (
    <section className="srl-answers" data-node-id={nodeId}>
      <div className="srl-answers-list">
        {items.map((item, index) => (
          <article key={item.id} className={`srl-answer ${index === 0 ? 'srl-answer-expanded' : ''}`}>
            <header className="srl-answer-header">
              <div className="srl-answer-title-wrapper">
                <h4 className="srl-answer-title">{item.title}</h4>
                <button className="srl-answer-external-link" type="button" aria-label="Külső hivatkozás">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </button>
              </div>
            </header>
            <div className="srl-answer-body">{item.body}</div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Answers
