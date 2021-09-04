import Layout from '../../components/Layout';
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function User() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout pageTitle='User Detail'>
      <h3>User Page{id}</h3>
    </Layout>
  );
}

// export async function getServerSideProps(context) {
//   const router = useRouter();
//   const { id } = router.query;
//   console.log(context);
//   const resUser = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${id}`
//   );
//   const userDetail = await resUser.json();

//   return {
//     props: {
//       userDetail,
//     },
//   };
// }
