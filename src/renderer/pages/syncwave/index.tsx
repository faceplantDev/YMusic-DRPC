import Layout from '../../components/layout'
import Container from '../../components/container'

import styles from '../../../../static/styles/page/index.module.scss'
import theme from './syncwave.module.scss'
import LobbyCard from '../../components/lobbyCard'

export default function ThemePage() {
    return (
        <Layout title="Test SyncWave">
            <div className={styles.page}>
                <div className={styles.container}>
                    <div className={styles.main_container}>
                        <Container
                            titleName={'Test SyncWave'}
                            imageName={'architecture'}
                            onClick={() =>
                                window.desktopEvents.send(null)
                            }
                            buttonName={'Create lobby'}
                        >
                            <div className={theme.grid}>
                                <LobbyCard
                                    key={theme.name} isChecked={false} onCheckboxChange={function (themeName: string, isChecked: boolean): void {
                                        throw new Error('Function not implemented.')
                                    } }/>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
