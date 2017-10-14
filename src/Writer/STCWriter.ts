import TextWriter from './TextWriter'

class STCWriter extends TextWriter {
  writeHeader (value: any): string {
    const mode = value.mode !== null ? value.mode : ''
    const type = value.type !== null ? value.type : ''
    const HIP = value.number !== null ? value.number : ''
    const name = value.name !== null ? this.writeString(value.name) : ''
    return [mode, type, HIP, name].join(' ')
  }
}

export default STCWriter