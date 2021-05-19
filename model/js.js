import { Component } from 'react'

class JoystickModelSVG extends Component {
  constructor (props) {
    super()
    this.state = props.status
  }

  render () {
    const ternariesActiveButton = (value) => {return (!value) ? 'green' : 'blue'}
    const ternariesActiveConnect = ternariesActiveButton

    return (
      <div>
      {/*<div onKeyDown={this.stateHandler.bind(this, 'rb0', !state.rb0)} tabIndex={0}>*/}
        <pre>{JSON.stringify(this.state)}</pre>
        <svg version="1.1" x="0px" y="0px" width="575.395px" height="575.395px"
             viewBox="0 0 575.395 575.395">
          {/*Статус подключения от большого до круга*/}
          <path
            d="M394.48,132.54c0-48.275-46.629-87.547-103.949-87.547c-57.319,0-103.948,39.272-103.948,87.547    c0,6.756,5.483,12.24,12.24,12.24c6.756,0,12.24-5.483,12.24-12.24c0-34.774,35.649-63.067,79.468-63.067    c43.82,0,79.469,28.293,79.469,63.067c0,6.756,5.484,12.24,12.24,12.24S394.48,139.296,394.48,132.54z"/>
          <path path={ternariesActiveConnect(this.state.connect)}
            d="M328.188,138.311c0,6.756,5.484,12.24,12.24,12.24c6.758,0,12.24-5.483,12.24-12.24c0-29.345-27.877-53.213-62.137-53.213    c-34.259,0-62.136,23.868-62.136,53.213c0,6.756,5.483,12.24,12.24,12.24c6.757,0,12.24-5.483,12.24-12.24    c0-15.845,16.897-28.733,37.656-28.733C311.291,109.578,328.188,122.466,328.188,138.311z"/>
          <circle cx="290.531" cy="146.371" r="18.752" fill='red'/>

          {/*Треугольник, кружочек, крестик, квадратик*/}
          <circle cx="466.5" cy="231.598" r="17.081" fill={ternariesActiveButton(this.state.buttonTriangle)}/>
          <circle cx="506.592" cy="271.69" r="17.081" fill={ternariesActiveButton(this.state.buttonCircle)}/>
          <circle cx="466.5" cy="311.776" r="17.081" fill={ternariesActiveButton(this.state.buttonCross)}/>
          <circle cx="426.408" cy="271.69" r="17.081" fill={ternariesActiveButton(this.state.buttonSquare)}/>
          {/*Share*/}
          <path
            d="M405.318,229.731c2.809,0,5.098-2.289,5.098-5.098v-13.703c0-2.809-2.289-5.098-5.098-5.098s-5.098,2.289-5.098,5.098    v13.703C400.221,227.443,402.51,229.731,405.318,229.731z"/>
          <path
            d="M287.178,312.706c-17.424,0-31.598,14.175-31.598,31.598c0,17.424,14.174,31.598,31.598,31.598    c17.423,0,31.597-14.174,31.597-31.598C318.775,326.881,304.602,312.706,287.178,312.706z M279.075,356.177    c-0.012,0.214-0.453,0.545-0.734,0.594c-4.982,0.832-9.835,0.3-14.541-1.523c-0.404-0.159-0.784-0.398-1.139-0.649    c-1.793-1.267-1.787-2.949,0.043-4.125c0.795-0.508,1.646-0.979,2.528-1.303c4.522-1.671,9.069-3.287,13.849-5.007    c0,1.677,0.031,3.226-0.037,4.768c-0.006,0.208-0.496,0.472-0.808,0.588c-2.503,0.918-5.024,1.793-7.528,2.717    c-0.582,0.215-1.107,0.575-1.658,0.863c0.012,0.141,0.024,0.281,0.03,0.422c0.551,0.19,1.114,0.575,1.652,0.539    c1.548-0.11,3.109-0.288,4.621-0.624c1.224-0.275,2.393-0.82,3.77-1.316C279.106,353.576,279.143,354.88,279.075,356.177z     M289.26,329.684c-0.172,0.416-0.129,0.93-0.129,1.407c-0.006,9.694,0,19.389,0,29.082c0,0.459,0,0.925,0,1.555    c-2.846-0.899-5.484-1.731-8.116-2.595c-0.208-0.067-0.392-0.397-0.459-0.637c-0.08-0.306-0.031-0.654-0.031-0.985    c0.012-11.45,0.025-22.9,0.037-34.352c0-0.397,0-0.795,0-1.346c0.783,0.152,1.462,0.238,2.111,0.428    c3.715,1.09,7.43,2.173,11.127,3.329c0.967,0.301,1.877,0.814,2.771,1.311c2.92,1.621,4.602,4.094,5.018,7.417    c0.289,2.301,0.393,4.584-0.348,6.836c-1.262,3.807-4.762,4.878-8.451,3.121c-0.289-0.135-0.473-0.765-0.479-1.169    c-0.031-3.88,0.012-7.754-0.043-11.634c-0.012-0.765-0.227-1.609-0.605-2.265c-0.232-0.392-0.998-0.71-1.469-0.643    C289.828,328.582,289.449,329.23,289.26,329.684z M311.498,348.931c1.99,1.322,2.082,2.919,0.08,4.217    c-1.242,0.802-2.65,1.39-4.045,1.903c-5.35,1.971-10.723,3.874-16.09,5.796c-0.232,0.085-0.482,0.128-0.898,0.244    c0-1.585-0.043-3.011,0.035-4.425c0.02-0.293,0.473-0.685,0.809-0.808c3.873-1.42,7.771-2.79,11.658-4.18    c0.514-0.184,1.047-0.343,1.523-0.605c0.289-0.159,0.479-0.49,0.711-0.747c-0.27-0.208-0.508-0.526-0.814-0.6    c-1.719-0.435-3.414-0.221-5.066,0.354c-2.521,0.875-5.031,1.775-7.547,2.662c-0.373,0.129-0.746,0.239-1.303,0.423    c0-1.708-0.025-3.262,0.029-4.811c0.006-0.208,0.387-0.508,0.648-0.588c6.586-2.074,13.098-2.007,19.5,0.741    C310.996,348.612,311.254,348.766,311.498,348.931z"/>
          <path
            d="M190.892,326.654c-15.024,0-27.252,12.228-27.252,27.258c0,15.025,12.228,27.253,27.252,27.253    c15.031,0,27.258-12.228,27.258-27.253C218.15,338.882,205.923,326.654,190.892,326.654z"/>
          <path
            d="M378.482,326.654c-15.031,0-27.258,12.228-27.258,27.258c0,15.025,12.227,27.253,27.258,27.253    c15.025,0,27.252-12.228,27.252-27.253C405.734,338.882,393.508,326.654,378.482,326.654z"/>
          <path
            d="M507.834,193.63c-1.297-1.995-3.824-3.678-7.178-5.08v-5.202c0,0-29.75-20.067-69.211-3.751c0,0-1.256,1.064-1.738,6.591    c-2.484,0.551-4.639,1.182-6.396,1.891c-7.668,3.103-12.564,2.283-12.564,2.283h-26.773c0.973,2.075,1.561,4.364,1.561,6.806    v82.62c0,8.886-7.229,16.114-16.115,16.114h-164.48c-8.886,0-16.114-7.229-16.114-16.114v-82.62c0-2.442,0.587-4.73,1.561-6.806    h-25.747c0,0-4.896,0.814-12.564-2.283c-1.756-0.709-3.911-1.34-6.389-1.891c-0.49-5.526-1.744-6.591-1.744-6.591    c-39.462-16.316-69.211,3.751-69.211,3.751v5.202c-3.348,1.402-5.875,3.079-7.179,5.08c0,0-24.805,37.203-31.983,62.656    S-6.208,424.685,0.976,479.507c7.179,54.829,90.074,68.532,111.61,25.453c21.537-43.078,35.9-95.294,35.9-95.294    s8.482-6.2,10.44-6.2c0,0,36.555,30.35,76.041-2.613h105.454c39.486,32.963,76.041,2.613,76.041,2.613    c1.959,0,10.447,6.2,10.447,6.2s14.357,52.216,35.9,95.294c21.541,43.079,104.432,29.37,111.609-25.453    c7.18-54.829-27.412-197.768-34.59-223.221C532.639,230.833,507.834,193.63,507.834,193.63z M157.82,210.931    c0-6.187,5.03-11.218,11.218-11.218s11.218,5.031,11.218,11.218v13.703c0,6.187-5.03,11.218-11.218,11.218    s-11.218-5.031-11.218-11.218V210.931z M87.984,233.557c0.673-9.357,13.292-9.364,18.678-9.37    c5.428,0.006,18.054,0.012,18.721,9.37c0.318,4.418-1.194,19.333-3.25,23.452c-1.781,3.556-10.483,9.939-13.452,12.044    c-0.159,0.134-0.336,0.263-0.526,0.367c-0.459,0.245-0.961,0.373-1.463,0.373c-0.085,0-0.159-0.006-0.238-0.012    c-0.484-0.037-0.955-0.184-1.383-0.447c-0.135-0.085-0.269-0.171-0.386-0.281c-2.968-2.112-11.652-8.477-13.433-12.038    C89.196,252.902,87.678,237.981,87.984,233.557z M66.546,292.395c-9.357-0.674-9.364-13.293-9.37-18.679    c0.006-5.435,0.012-18.054,9.37-18.721c0.459-0.031,1.004-0.049,1.622-0.049c5.214,0,18.011,1.396,21.824,3.299    c3.562,1.775,9.945,10.483,12.05,13.452c0.135,0.159,0.263,0.337,0.367,0.526c0.281,0.533,0.404,1.126,0.361,1.702    c-0.037,0.483-0.184,0.955-0.447,1.383c-0.085,0.135-0.171,0.27-0.281,0.386c-2.111,2.968-8.482,11.653-12.044,13.433    c-3.819,1.909-16.634,3.305-21.848,3.305C67.543,292.443,67.005,292.425,66.546,292.395z M125.384,313.839    c-0.661,9.352-13.287,9.357-18.678,9.363h-0.019c-5.416-0.006-18.023-0.012-18.703-9.363c-0.312-4.431,1.206-19.346,3.256-23.452    c1.781-3.567,10.483-9.945,13.445-12.056c0.178-0.153,0.379-0.288,0.606-0.392c0.128-0.067,0.263-0.129,0.398-0.166    c0.814-0.275,1.689-0.22,2.454,0.19c0.227,0.122,0.435,0.269,0.624,0.44c3.06,2.173,11.604,8.458,13.36,11.983    C124.184,294.506,125.696,309.42,125.384,313.839z M146.834,292.395c-0.459,0.03-0.998,0.049-1.603,0.049    c-5.221,0-18.036-1.401-21.854-3.305c-3.562-1.781-9.933-10.472-12.044-13.44c-0.098-0.116-0.184-0.239-0.269-0.373    c-0.38-0.612-0.526-1.322-0.441-2.007c0.043-0.374,0.153-0.734,0.343-1.077c0.11-0.208,0.239-0.392,0.386-0.569    c2.129-2.993,8.482-11.646,12.026-13.421c3.812-1.91,16.616-3.299,21.83-3.299c0.618,0,1.157,0.018,1.628,0.049    c9.352,0.661,9.358,13.287,9.364,18.678C156.192,279.102,156.186,291.721,146.834,292.395z M190.892,387.285    c-18.403,0-33.373-14.97-33.373-33.373c0-18.408,14.97-33.378,33.373-33.378c18.409,0,33.378,14.97,33.378,33.378    C224.271,372.315,209.301,387.285,190.892,387.285z M287.178,378.968c-19.113,0-34.658-15.545-34.658-34.657    c0-19.113,15.545-34.658,34.658-34.658s34.658,15.545,34.658,34.658C321.836,363.423,306.291,378.968,287.178,378.968z     M466.5,208.397c12.791,0,23.201,10.41,23.201,23.201c0,12.791-10.41,23.201-23.201,23.201s-23.201-10.41-23.201-23.201    C443.299,218.808,453.709,208.397,466.5,208.397z M394.1,210.931c0-6.187,5.031-11.218,11.219-11.218s11.219,5.031,11.219,11.218    v13.703c0,6.187-5.031,11.218-11.219,11.218s-11.219-5.031-11.219-11.218V210.931z M378.482,387.285    c-18.408,0-33.379-14.97-33.379-33.373c0-18.408,14.971-33.378,33.379-33.378c18.402,0,33.373,14.97,33.373,33.378    C411.855,372.315,396.885,387.285,378.482,387.285z M426.408,294.892c-12.791,0-23.201-10.411-23.201-23.201    c0-12.791,10.41-23.201,23.201-23.201s23.201,10.41,23.201,23.201C449.609,284.481,439.205,294.892,426.408,294.892z     M466.5,334.978c-12.791,0-23.201-10.41-23.201-23.201s10.41-23.201,23.201-23.201s23.201,10.41,23.201,23.201    S479.291,334.978,466.5,334.978z M506.592,294.892c-12.791,0-23.201-10.411-23.201-23.201c0-12.791,10.41-23.201,23.201-23.201    s23.201,10.41,23.201,23.201C529.793,284.481,519.383,294.892,506.592,294.892z"/>

          <path
            d="M169.038,229.731c2.809,0,5.098-2.289,5.098-5.098v-13.703c0-2.809-2.289-5.098-5.098-5.098s-5.098,2.289-5.098,5.098    v13.703C163.939,227.443,166.229,229.731,169.038,229.731z"/>
          <path
            d="M106.687,284.444c-4.572,3.36-9.29,7.313-9.97,8.678c-1.23,2.454-2.943,15.723-2.625,20.276    c0.171,2.436,4.407,3.678,12.571,3.684l0.043,3.061v-3.061c8.17-0.006,12.393-1.242,12.57-3.684    c0.331-4.548-1.389-17.81-2.62-20.276C116.032,291.88,111.656,288.098,106.687,284.444z"/>
          <path
            d="M87.256,263.728c-2.179-1.095-13.421-2.656-19.088-2.656c-0.446,0-0.851,0.012-1.181,0.037    c-2.442,0.171-3.684,4.4-3.69,12.57c0.006,8.207,1.242,12.436,3.69,12.613c0.331,0.024,0.716,0.037,1.157,0.037    c5.673,0,16.928-1.566,19.113-2.662c1.365-0.679,5.318-5.397,8.678-9.969C92.28,268.722,88.499,264.346,87.256,263.728z"/>
          <path
            d="M106.687,262.945c4.969-3.647,9.345-7.43,9.969-8.672c1.23-2.46,2.944-15.729,2.62-20.276    c-0.171-2.442-4.4-3.684-12.57-3.69c-8.207,0.006-12.436,1.243-12.614,3.69c-0.324,4.547,1.396,17.821,2.625,20.276    C97.391,255.625,102.115,259.585,106.687,262.945z"/>
          <path
            d="M146.394,261.109c-0.343-0.024-0.741-0.037-1.188-0.037c-5.673,0-16.916,1.561-19.094,2.656    c-1.242,0.625-5.024,4.994-8.672,9.97c3.36,4.572,7.313,9.296,8.672,9.969c2.356,1.175,15.533,2.962,20.282,2.625    c2.436-0.171,3.678-4.406,3.684-12.57C150.072,265.509,148.835,261.28,146.394,261.109z"/>
          <path
            d="M194.943,197.173v82.62c0,5.508,4.48,9.994,9.994,9.994h164.48c5.508,0,9.994-4.48,9.994-9.994v-82.62    c0-2.632-1.039-5.019-2.717-6.806H197.661C195.984,192.155,194.943,194.536,194.943,197.173z"/>
        </svg>

      </div>
    )
  }

}

export default JoystickModelSVG
