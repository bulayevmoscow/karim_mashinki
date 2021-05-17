import styles from './debugPanel.module.sass'

const DebugPanel = ({ show, json, transfer, switchConnect, statusConnect }) => {
  const { showDebug, setShowDebug } = show

  const showComponent = (
    <div
      className={styles.containerDebug}
      data-status={(statusConnect || !transfer) ? '1' : '0'}
      data-show={showDebug}
    >
      <div>
        <div
          className={styles.openimagecontainer}
          onClick={setShowDebug.bind('null', false)}
          data-show={showDebug}
        />
        <div>Transfer {(transfer) ? 'is online' : 'offline'}</div>
        <div>Server is {(statusConnect) ? 'online' : 'offline'}</div>
        <div><pre>
        {JSON.stringify(json, null, '\t')}
      </pre>
        </div>
        <button onClick={switchConnect.bind(null, !transfer)}>
          {(transfer) ? 'Выключить соединение' : 'Включить соединение'}
        </button>
      </div>
    </div>
  )

  const hiddenComponent = (
    <div className={styles.containerDebug}
         data-status={(statusConnect || !transfer) ? '1' : '0'}
         data-show={showDebug}
         >
      <div
        className={styles.openimagecontainer}
        onClick={setShowDebug.bind('null', true)}
      />
    </div>
  )

  return showDebug ? showComponent : hiddenComponent
}

export default DebugPanel
