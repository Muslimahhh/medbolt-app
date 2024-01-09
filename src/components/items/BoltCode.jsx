import propTypes from 'prop-types'

function BoltCode({code}) {
  return (
    <div className="code-container">
        <span>Bolt code</span>
        <div>
            <div className="code">{code}</div>
        </div>
    </div>
  )
}

BoltCode.propTypes = {
    code: propTypes.string
}

export default BoltCode