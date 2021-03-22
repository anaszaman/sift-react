# sift-react

> React JS Wrapper for Sift JS Snippet

[![NPM](https://img.shields.io/npm/v/sift-react.svg)](https://www.npmjs.com/package/sift-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save sift-react
```

## Usage

```jsx
import React, { Component } from 'react'

import Sift from 'sift-react'

class Example extends Component {
  render() {
    return (
      <Sift 
        userId="288" 
        sessionId="9309874396287483" 
        beaconKey="er29xd9rvz4g5abg"
      />
    )
  }
}
```

## License

MIT © [anaszaman](https://github.com/anaszaman)
