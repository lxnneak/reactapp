import styles from "./CustomBotton.module.css"

interface CustomBotton {
  customButtonName: string
}

export function CustomBotton(props: CustomBotton) {
  return (
    <div>
      <button className={styles.btn}>{props.customButtonName}</button>
    </div>
  )
}
