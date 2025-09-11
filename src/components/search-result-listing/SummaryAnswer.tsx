import React from 'react'

interface SummaryAnswerProps {
  title?: string
  content?: React.ReactNode
  'data-node-id'?: string
}

const SummaryAnswer: React.FC<SummaryAnswerProps> = ({
  title = 'Összegzett válasz',
  content,
  'data-node-id': nodeId
}) => {
  const defaultContent = (
    <>
      <p>
        (5)  közérdekű adat: az állami vagy helyi önkormányzati feladatot, valamint jogszabályban meghatározott egyéb közfeladatot ellátó szerv vagy azt átvevő szerv, szervezet vagy személy (a továbbiakban együtt: közfeladatot ellátó szerv) kezelésében lévő és tevékenységére vonatkozó vagy közfeladatának ellátásával összefüggésben keletkezett, a személyes adat fogalma alá nem eső, bármilyen módon vagy formában rögzített információ vagy ismeret, függetlenül kezelésének módjától, önálló vagy gyűjteményes jellegétől, így különösen a hatáskörre, illetékességre, szervezeti felépítésre, szakmai tevékenységre, annak eredményességére is kiterjedő értékelésére, a birtokolt adatfajtákra és a működést szabályozó jogszabályokra, valamint a gazdálkodásra, a megkötött szerződésekre vonatkozó adat;
      </p>
    </>
  )

  return (
    <section className="srl-summary-answer" data-node-id={nodeId} aria-labelledby="srl-summary-title">
      <h3 id="srl-summary-title" className="srl-summary-title">{title}</h3>
      <div className="srl-summary-content">
        {content || defaultContent}
      </div>
      <div className="srl-summary-cta-wrapper">
        <button className="srl-summary-cta" type="button">
          <span>Kérem a bővebb választ</span>
        </button>
      </div>
    </section>
  )
}

export default SummaryAnswer
