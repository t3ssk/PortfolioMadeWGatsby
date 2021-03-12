import React from 'react'
import { Layout } from '../Components/Layout'
import * as styles from './styles/kontakt.module.scss'


const kontakt = () => {
    return (
      <Layout>
        <main className={styles.Contact}>
          <h1>Pošlete mi zprávu</h1>
          <div className={styles.Contact__form}>
            <form action="https://formspree.io/f/xleoqweb" method="POST">
              <label htmlFor="name">Jméno:</label>
              <input type="text" id="name" placeholder="např. Jana Nováková" />
              <label htmlFor="email">Mail:</label>
              <input
                type="email"
                id="email"
                placeholder="např. j.novakova@mail.cz"
              />
              <label htmlFor="message">Vzkaz:</label>
              <textarea id="message" rows="4" cols="50">
                Prostor pro váš vzkaz.{" "}
              </textarea>
              <button type="submit">ODESLAT</button>
            </form>
          </div>
        </main>
      </Layout>
    )
}

export default kontakt
