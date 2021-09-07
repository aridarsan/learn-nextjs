import Layout from '../../components/Layout';
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';


interface User{
  id: number,
  name: string,
  email: string,
  company.name: string,
  phone: string
}

interface userDetailProps{
  user : User
}

export default function User(props: userDetailProps) {
  const router = useRouter()
  const {user} = props
  return (
    <Layout pageTitle='User Detail'>
      <h1>User Detail Page</h1>
      <h3>Name : {user.name}</h3>
      <p>Email : {user.email}</p>
      <p>Company : {user.company.name}</p>
      <p>Phone : {user.phone}</p>
      <br/>
      <button className={styles.btn} onClick={()=> router.push('/user')}>
        Kembali
      </button>
    </Layout>
  );
}

export async function getStaticPaths(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUser = await res.json();
  const paths = dataUser.map((user: User) => ({
    params: {
      id: `${user.id}`
    }
  }));

  return{
    paths,
    fallback: true,
  };
}

interface GetStaticProps{
  params: {
    id: string
  }
}

export async function getStaticProps(context: GetStaticProps){
  const {id} = context.params
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  return {
    props : {
      user,
    }
  }
}
