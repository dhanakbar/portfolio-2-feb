import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util'
import React from 'react'

Object.assign(global, { TextEncoder, TextDecoder })

global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion')
  const React = require('react')
  
  const createMockComponent = (element: string) => {
    return React.forwardRef(({ children, ...props }: any, ref: any) => 
      React.createElement(element, { ref, ...props }, children)
    )
  }

  return {
    ...actual,
    motion: {
      div: createMockComponent('div'),
      section: createMockComponent('section'),
      h1: createMockComponent('h1'),
      h2: createMockComponent('h2'),
      h3: createMockComponent('h3'),
      p: createMockComponent('p'),
      span: createMockComponent('span'),
      a: createMockComponent('a'),
      li: createMockComponent('li'),
      button: createMockComponent('button'),
      ul: createMockComponent('ul'),
      nav: createMockComponent('nav'),
    },
    AnimatePresence: ({ children }: any) => React.createElement(React.Fragment, null, children),
    useScroll: () => ({ scrollY: { get: () => 0, onChange: jest.fn() }, scrollX: { get: () => 0, onChange: jest.fn() } }),
    useTransform: () => 'rgba(0,0,0,0)',
  }
})
