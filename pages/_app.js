import '../styles/globals.css';
import Layout from '../components/structure/Layout'

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
