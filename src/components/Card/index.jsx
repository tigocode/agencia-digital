import styles from './Card.module.css';

export default function Card(props) {
  return (
    <div className={props.ehTemaEscuro ? `${styles.container} ${styles.dark}` : `${styles.container} ${styles.light}`}>
      <div>
        <span>{props.data}</span>
        <h3>{props.titulo}</h3>
        <small>{props.empresa}</small>
      </div>
      <p>{props.paragrafo}</p>
    </div>
  );
}
