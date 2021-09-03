import Header from "../components/Header/index"
import styles from "../styles/Home.module.css"

export default function About(){
	return(
		<div>
			<Header/>
			<div className={styles.main}>
				<h1 className={styles.title}>About Page</h1>
			</div>
		</div>
	)
}