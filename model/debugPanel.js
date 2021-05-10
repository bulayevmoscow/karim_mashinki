import styles from './debugPanel.module.sass'

const DebugPanel = ({ show, json, transfer, switchConnect, statusConnect }) => {
  const { showDebug, setShowDebug } = show

  const showComponent = (
    <div onClick={setShowDebug.bind('null', false) }
         className={styles.containerDebug}
         data-status={(statusConnect || !transfer) ? '1' : '0'}>
      <div>
        <div className={styles.openimagecontainer}/>

        <div>Transfer {(transfer) ? 'is online' : 'offline'}</div>
        <div>Server is {(statusConnect) ? 'online' : 'offline'}</div>
        <div><pre>
        {JSON.stringify(json, null, '\t')}
      </pre>
        </div>
        <button onClick={switchConnect.bind(null, !transfer)}>Выключить соединение</button>
        debug panel
      </div>
    </div>
  )

  const hiddenComponent = (
    <div className={styles.containerDebug} data-status={(statusConnect || !transfer) ? '1' : '0'}>
      showComponent
    </div>
  )

  return showDebug ? showComponent : hiddenComponent
}

export default DebugPanel
