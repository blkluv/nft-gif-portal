export type Myepicproject = {
  "version": "0.1.0",
  "name": "myepicproject",
  "instructions": [
    {
      "name": "startStuffOff",
      "accounts": [
        {
          "name": "baseAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "addGif",
      "accounts": [
        {
          "name": "baseAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "gifLink",
          "type": "string"
        }
      ]
    },
    {
      "name": "updateItem",
      "accounts": [
        {
          "name": "baseAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u64"
        },
        {
          "name": "vote",
          "type": {
            "defined": "Vote"
          }
        }
      ]
    },
    {
      "name": "upVote",
      "accounts": [
        {
          "name": "baseAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u64"
        }
      ]
    },
    {
      "name": "downVote",
      "accounts": [
        {
          "name": "baseAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "baseAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalGifs",
            "type": "u64"
          },
          {
            "name": "gifList",
            "type": {
              "vec": {
                "defined": "ItemStruct"
              }
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ItemStruct",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "gifLink",
            "type": "string"
          },
          {
            "name": "userAddress",
            "type": "publicKey"
          },
          {
            "name": "votes",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "Vote",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Down"
          },
          {
            "name": "Up"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "GifIndexOutOfBounds",
      "msg": "No GIF at this index"
    }
  ]
};

export const IDL: Myepicproject = {
  "version": "0.1.0",
  "name": "myepicproject",
  "instructions": [
    {
      "name": "startStuffOff",
      "accounts": [
        {
          "name": "baseAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "addGif",
      "accounts": [
        {
          "name": "baseAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "gifLink",
          "type": "string"
        }
      ]
    },
    {
      "name": "updateItem",
      "accounts": [
        {
          "name": "baseAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u64"
        },
        {
          "name": "vote",
          "type": {
            "defined": "Vote"
          }
        }
      ]
    },
    {
      "name": "upVote",
      "accounts": [
        {
          "name": "baseAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u64"
        }
      ]
    },
    {
      "name": "downVote",
      "accounts": [
        {
          "name": "baseAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "baseAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalGifs",
            "type": "u64"
          },
          {
            "name": "gifList",
            "type": {
              "vec": {
                "defined": "ItemStruct"
              }
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ItemStruct",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "gifLink",
            "type": "string"
          },
          {
            "name": "userAddress",
            "type": "publicKey"
          },
          {
            "name": "votes",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "Vote",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Down"
          },
          {
            "name": "Up"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "GifIndexOutOfBounds",
      "msg": "No GIF at this index"
    }
  ]
};
