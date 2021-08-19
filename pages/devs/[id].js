import styles from "../../styles/Devs.module.css";

const Details = ({dev}) => {
  return (
      <div className={`${styles.cardContainer} ${styles.hFull}`} >
      <div className={styles.card}>
        <p className={styles.pText}>{dev.name}</p>
        <span className={styles.text}>{dev.email}</span>
      </div>
    </div>
  );
};

export default Details;

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((dev) => {
    return {
      params: {
        id: dev.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return {
    props: {
      dev: data,
    },
  };
};
