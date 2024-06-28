import React, { useContext } from 'react'
import styles from './context_menu.module.scss'
import userContext from '../../api/context/user.context'
import { shell } from 'electron'
import SettingsInterface from '../../api/interfaces/settings.interface'

import ArrowContext from './../../../../static/assets/icons/arrowContext.svg'

const ContextMenu: React.FC = () => {
    const { settings, setSettings } = useContext(userContext)
    const patch = () => {
        window.electron.patcher.patch()
        setSettings((prevSettings: SettingsInterface) => ({
            ...prevSettings,
            patched: true,
        }))
    }
    const repatch = () => {
        window.electron.patcher.repatch()
    }
    const depatch = () => {
        window.electron.patcher.depatch()
        setSettings((prevSettings: SettingsInterface) => ({
            ...prevSettings,
            patched: false,
        }))
    }
    const githubLink = () => {
        window.open('https://github.com/PulseSync-Official/YMusic-DRPC')
    }

    return (
        <div className={styles.patchMenu}>
            <button className={styles.contextButton}>
                Директория приложения
            </button>
            <div className={styles.innerFunction}>
                Патч
                <ArrowContext />
                <div className={styles.showButtons}>
                    <button onClick={patch} disabled={settings.patched} className={styles.contextButton}>
                        Патч
                    </button>
                    <button onClick={repatch} disabled={!settings.patched} className={styles.contextButton}>
                        Репатч
                    </button>
                    <button onClick={depatch} disabled={!settings.patched} className={styles.contextButton}>
                        Депатч
                    </button>
                    <button onClick={githubLink} className={styles.contextButton}>
                        Скрипт патчера на GitHub
                    </button>
                </div>
            </div>
            <div className={styles.innerFunction}>
                Авто-трей
                <ArrowContext />
                <div className={styles.showButtons}>
                    <button className={styles.contextButton}>
                        Включить
                    </button>
                    <button className={styles.contextButton}>
                        Выключить
                    </button>
                </div>
            </div>
            <div className={styles.innerFunction}>
                Размер интерфейса
                <ArrowContext />
                <div className={styles.showButtons}>
                    <button className={styles.contextButton}>
                        Скоро
                    </button>
                </div>
            </div>
            <button className={styles.contextButton}>
                Выйти
            </button>
        </div>
    )
}

export default ContextMenu
