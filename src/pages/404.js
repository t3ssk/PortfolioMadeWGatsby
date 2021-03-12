import React from "react"
import { Layout } from "../Components/Layout";
import * as styles from './styles/404.module.scss'


const NotFoundPage = () => (<Layout>
  <main>
  <div className={styles.NotFound}>
  <h1>404</h1>
  <h2>Něco se pokazilo. Nebo jsi možná schválně na stránce, která neexistuje?</h2></div>
  </main>
</Layout>

)

export default NotFoundPage
