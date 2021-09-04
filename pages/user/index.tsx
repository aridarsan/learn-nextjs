import router from 'next/router';
import Layout from '../../components/Layout';
import styles from '../../styles/Home.module.css';

export default function User(props) {
  const { dataUser } = props;
  return (
    <>
    <Layout pageTitle="User Page">
      <h1 className={styles.title}>User Page</h1>
      <div className={styles.cardcon}>
        {dataUser.map((user) => (
          <div className={styles.card} key={user.id}  onClick={()=> router.push(`/user/${user.id}`)}>
            <h3 className={styles.title_h3}>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUser = await res.json();
  return {
    props: {
      dataUser,
    },
  };
}
