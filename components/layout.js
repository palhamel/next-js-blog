import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Vingummiguiden'
export const siteTitle = 'Magisk bra info om vingummin'

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>
}
