import Layout from '../../components/layout'
import Container from '../../components/container'

import styles from '../../../../static/styles/page/index.module.scss'
// import theme from './joint.module.scss'

export default function JointPage() {
    return (
        <Layout title="Совместное прослушивание">
            <div className={styles.page}>
                <Container titleName={'Совместное прослушивание'}>Скоро</Container>
            </div>
        </Layout>
    )
}
