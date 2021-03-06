import { BinaryWriter } from './BinaryWriter'
import { FILE_HEADER, VERSION, HEADER_OFFSET } from '../Meta'
import { encodeSpectralClass } from '../SpectralTools'
import { Buffer } from 'buffer/'

export class DATWriter extends BinaryWriter {
  async process (items: any[]): Promise<Buffer> {
    const header = FILE_HEADER
    const version = VERSION   // 2 bytes
    const itemsCount = items.length     // 4 bytes
    const headerOffset = header.length + 6
    const buffer = Buffer.alloc(headerOffset + itemsCount * 20)
    buffer.write(header, 0)
    buffer.writeUInt16LE(version, FILE_HEADER.length)
    buffer.writeUInt32LE(itemsCount, FILE_HEADER.length + 2)

    let offset = headerOffset

    for (let i = 0; i < itemsCount; ++i) {
      buffer.writeUInt32LE(items[i].meta.number, offset, true)
      buffer.writeFloatLE(items[i].properties.Distance, offset + 4, true)
      buffer.writeFloatLE(items[i].properties.RA, offset + 8, true)
      buffer.writeFloatLE(items[i].properties.Dec, offset + 12, true)
      buffer.writeInt16LE(items[i].properties.AbsMag, offset + 16, true)
      buffer.writeUInt16LE(encodeSpectralClass(items[i].properties.SpectralType), offset + 18, true)
      offset += 20
    }

    return Promise.resolve(buffer)
  }
}
