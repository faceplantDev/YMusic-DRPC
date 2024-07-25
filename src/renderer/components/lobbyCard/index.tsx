import React from 'react'
import styles from './card.module.scss'
import { MdPauseCircleFilled, MdPlayCircleFilled } from 'react-icons/md'

interface Props {
    isChecked: boolean
    onCheckboxChange: (themeName: string, isChecked: boolean) => void
    children?: any
}

let test = true

const LobbyCard: React.FC<Props> = ({
    isChecked,
    onCheckboxChange,
    children,
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardContainer}>
                <div className={styles.containerDetail}>
                    <img
                        className={styles.icon}
                        src={
                            test
                                ? 'https://cdn.discordapp.com/attachments/482180995752394752/1266122257403744266/image.png?ex=66a3ffbd&is=66a2ae3d&hm=df6bbd31ee24e78ba4afcef115bc54ade947bf690c50a34d780323dac8c88e38&'
                                : 'https://cdn.discordapp.com/attachments/482180995752394752/1266122228941066331/image.png?ex=66a3ffb6&is=66a2ae36&hm=6c9d30dd2959b2ad9dc3664b5a09826b064b8a875c4eec3ee3c2e6d509f89f18&'
                        }
                        width="50"
                        height="50"
                        alt="Theme image"
                    />
                    <div className={styles.themeDetals}>
                        <span className={styles.nameRoom}>Maks1mio Room</span>
                        <span className={test ? styles.trackMetadataPlay : styles.trackMetadataStop}>
                            {
                                test
                                    ? <MdPlayCircleFilled />
                                    : <MdPauseCircleFilled />
                            } author - test name yooo</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LobbyCard
