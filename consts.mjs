export default {
  LATEST_MAJOR: 1,
  LATEST_MINOR: 3,

  SEC_MODE: 1,
  SEC_RECT: 2,
  SEC_RAND: 3,
  SEC_CURSOR: 4,
  SEC_IMAGETABLE: 5,
  SEC_COMPRESSION: 6,
  SEC_ENCRYPTION: 7,
  SEC_FILE: 8,
  SEC_PARTIALFILE: 9,
  SEC_PARTIALFILEPIECE: 10,
  SEC_ALPHA: 11,
  SEC_TEXT: 12,
  SEC_MODEMASK: 13,

  ALPHA_255: 0,
  ALPHA_220: 1,
  ALPHA_184: 2,
  ALPHA_148: 3,
  ALPHA_112: 4,
  ALPHA_76: 5,
  ALPHA_40: 6,
  ALPHA_0: 7,

  CURSOR_CMD_PUSH: 0,
  CURSOR_CMD_POP: 1,
  CURSOR_CMD_MOVE: 2,
  CURSOR_CMD_MOVEIMG: 3,

  COMP_NONE: 0,
  COMP_GZIP: 1,
  COMP_BROTLI: 2,
  
  CRYPT_NONE: 0,
  CRYPT_AES256: 1,
  CRYPT_CAMELLIA256: 2,
  CRYPT_ARIA256: 3,
  
  TEXT_HONOR_NONE: 0b0000,
  TEXT_HONOR_COMPRESSION: 0b1000,
  TEXT_HONOR_ENCRYPTION: 0b0100,

  MODE_NONE: 0,
  MODE_3BPP: 1,
  MODE_6BPP: 2,
  MODE_9BPP: 3,
  MODE_12BPP: 4,
  MODE_15BPP: 5,
  MODE_24BPP: 6,
  MODE_32BPP: 7,

  MODE_ANONE: 0,
  MODE_A3BPP: 1<<3,
  MODE_A6BPP: 2<<3,
  MODE_A9BPP: 3<<3,
  MODE_A12BPP: 4<<3,
  MODE_A15BPP: 5<<3,
  MODE_A24BPP: 6<<3,
  MODE_A32BPP: 7<<3,

  MODEMASK_R: 0b100,
  MODEMASK_G: 0b010,
  MODEMASK_B: 0b001,
  MODEMASK_RG: 0b110,
  MODEMASK_RB: 0b101,
  MODEMASK_GB: 0b011,
  MODEMASK_RGB: 0b111,

  HEADMODE: 0b001001,
  HEADMODEMASK: 0b111,
  
  IMGTYPE_PNG: 0,
  IMGTYPE_WEBP: 1,
  IMGTYPE_WEBPANIM: 2
};
