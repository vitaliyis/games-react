import React, {useState, useEffect} from 'react'

const ModalGameOver = (props) => {
  const {winner, updateGameOver, setStartGame} = props
  const [classNameModal, setClassNameModal] = useState("modal fade d-block")

  const closeModal = () => {
    setTimeout(() => {
      updateGameOver(false)
      setStartGame(false)
    }, 1000)
    setClassNameModal("modal fade d-block")
  }

  useEffect(() => {
    setClassNameModal("modal fade d-block show")
  }, [])

  return (
    <div className={classNameModal} id="modalGameOver" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Игра окончена!</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body text-center">
            <h2>{winner}</h2>
          </div>
          <div className="modal-footer justify-content-center">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={closeModal}
            >Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalGameOver