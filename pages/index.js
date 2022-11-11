
import Card from '../src/components/Card/Card'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Card
      categoria="Perfume"
      titulo="Gabrielle Essence Eau De Parfum"
      text="A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL."
      preco="$149.99"
      desconto="$169.99"
      />
      <Card
      categoria="Loção"
      titulo="Gabrielle Essence Eau De Parfum"
      text="A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL."
      preco="$269.99"
      desconto="$269.99"
      />
    </div>
  )
}
