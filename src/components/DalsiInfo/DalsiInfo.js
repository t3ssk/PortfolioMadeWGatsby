import React from 'react'
import * as styles from './DalsiInfo.module.scss'
import {Heading} from '../UI/Heading/Heading'

export const DalsiInfo = () => {
    return (
      <div id="info" className={styles.More}>
        <Heading>03 Další info</Heading>
        <p>
          Jsem dost kreativní člověk. Často jsem upatlaná od barev (poslední
          dobou od tiskařské černi, kvůli linorytu) nebo zamotaná v nitích,
          protože ráda šiju. Taky ráda fotím a pak fotky upravuju. U toho dokážu
          trávit i hodiny. Hrozně ráda cestuju na netradiční místa. Nadchla mě
          postsocialistická šeď Bělehradu, exotičnost Sarajeva, nespoutanost
          Albánie, ale i klid a ticho Archipelaga v Göteborgu a designová
          čistota Kodaně.
        </p>
      </div>
    )
}
