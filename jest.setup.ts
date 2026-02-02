import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util'
import React, { ReactNode, ComponentPropsWithRef } from 'react'

Object.assign(global, { TextEncoder, TextDecoder })

global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion')
  
  const createMockComponent = (element: string) => {
    const Component = React.forwardRef(({ children, ...props }: { children?: ReactNode } & Record<string, unknown>, ref: React.Ref<unknown>) => {
      // Filter out framer-motion props to prevent React warnings
      const filteredProps = { ...props }
      const motionProps = [
        'initial', 'animate', 'exit', 'variants', 'transition', 
        'whileHover', 'whileTap', 'whileInView', 'whileFocus', 'whileDrag',
        'viewport', 'layout', 'layoutId', 'onViewportEnter', 'onViewportLeave'
      ]
      motionProps.forEach(prop => delete filteredProps[prop])
      
      return React.createElement(element, { ref, ...filteredProps }, children)
    })
    Component.displayName = `Mock${element.charAt(0).toUpperCase() + element.slice(1)}`
    return Component
  }

  const AnimatePresenceMock = ({ children }: { children?: ReactNode }) => React.createElement(React.Fragment, null, children)
  AnimatePresenceMock.displayName = 'AnimatePresence'

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
    AnimatePresence: AnimatePresenceMock,
    useScroll: () => ({ scrollY: { get: () => 0, onChange: jest.fn() }, scrollX: { get: () => 0, onChange: jest.fn() } }),
    useTransform: () => 'rgba(0,0,0,0)',
  }
})

